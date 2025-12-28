import { SimpleCard } from '../../components';
import { Box, styled, LinearProgress } from '@mui/material';
import React, { useEffect, useState, useRef } from 'react';
import { ROWS_PER_PAGE } from '../../utils/constant';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
import { useTranslation } from 'react-i18next';

const translationsForBasedOnError: string = "errors"
const translationsForBasedOn: string = "basedOn"
const translationsForReportRevenue4170: string = "reports.revenue_4170"
const translationsForReportRevenue4170Columns: string = "reports.revenue_4170.columns"

function Revenue_4170() {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false);
  const tableRef: any = useRef(null);
  const { t } = useTranslation();

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true);
      const res = await axios.post('/reporting/RevenueReport4170', {
        ...data,
        type: data.customsProcedure,
        customsCode: data.CustomsCode
      });
      if (res.data.length === 0) {
        setReportData([]);
      } else {
        setReportData(res.data);
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  return (
    <SimpleCard title={t(`${translationsForReportRevenue4170}.title`)}>
      <ReportHeaderInputs
        showStartDate
        showEndDate
        showRegDate
        showCustomsList
        onSearch={handleSubmit}
        tabelRef={tableRef}
      />
      {loading && (
        <LinearProgress />
      )}
      <Box width="100%" overflow="auto">
        <DataTable
          exportFilename={`Revenue Report 4170 ${new Date().toISOString()}`}
          ref={tableRef}
          value={reportData}
          rows={ROWS_PER_PAGE}
          rowsPerPageOptions={[5, 10, 25, 50, 100]}
          paginator
          stripedRows
          showGridlines
          emptyMessage={'No Data Available'}
        >
          <Column field={'office'} header={t(`${translationsForReportRevenue4170Columns}.office`)} />
          <Column field={'reg_nbr'} header={t(`${translationsForReportRevenue4170Columns}.reg_nbr`)} />
          <Column field={'reg_date'} header={t(`${translationsForReportRevenue4170Columns}.reg_date`)} />
          <Column field={'dec_nam'} header={t(`${translationsForReportRevenue4170Columns}.dec_nam`)} />
          <Column field={'Company_TIN'} header={t(`${translationsForReportRevenue4170Columns}.Company_TIN`)} />
          <Column field={'cmp_nam'} header={t(`${translationsForReportRevenue4170Columns}.cmp_nam`)} />
          <Column field={'amt_041'} header={t(`${translationsForReportRevenue4170Columns}.amt_041`)} />
          <Column field={'amt_042'} header={t(`${translationsForReportRevenue4170Columns}.amt_042`)} />
          <Column field={'amt_047'} header={t(`${translationsForReportRevenue4170Columns}.amt_047`)} />
        </DataTable>
      </ Box>
    </SimpleCard>
  );
}

export default Revenue_4170