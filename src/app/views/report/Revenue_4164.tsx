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
const translationsForReportRevenue4164: string = "reports.revenue_4164"
const translationsForReportRevenue4164Columns: string = "reports.revenue_4164.columns"

function Revenue_4164() {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false);
  const tableRef: any = useRef(null);
  const { t } = useTranslation();

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true);
      const res = await axios.post('/reporting/RevenueReport4164', {
        ...data,
        type: data.customsProcedure,
        customsCode: data.CustomsCode
      });
      if (res.data.length === 0) {
        setLoading(false)
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
    <SimpleCard title={t(`${translationsForReportRevenue4164}.title`)}>
      <ReportHeaderInputs
        report='Revenue_4164'
        showStartDate
        showEndDate
        showCustomsList
        onSearch={handleSubmit}
        tabelRef={tableRef}
      />
      {loading && (
        <LinearProgress />
      )}
      <Box width="100%" overflow="auto">
        <DataTable
          exportFilename={`Revenue Report 4164 ${new Date().toISOString()}`}
          ref={tableRef}
          value={reportData}
          rows={ROWS_PER_PAGE}
          rowsPerPageOptions={[5, 10, 25, 50, 100]}
          paginator
          stripedRows
          showGridlines
          emptyMessage={'No Data Available'}
        >
          <Column field={'Office'} header={t(`${translationsForReportRevenue4164Columns}.Office`)} />
          <Column field={'sad_flw'} header={t(`${translationsForReportRevenue4164Columns}.sad_flw`)} />
          <Column field={'taxAmount'} header={t(`${translationsForReportRevenue4164Columns}.taxAmount`)} />
        </DataTable>
      </ Box>
    </SimpleCard>
  );
}

export default Revenue_4164