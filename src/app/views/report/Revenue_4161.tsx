import { Box, LinearProgress, styled } from '@mui/material';
import axios from 'axios';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { useEffect, useRef, useState } from 'react';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
import { SimpleCard } from '../../components';
import { ROWS_PER_PAGE } from '../../utils/constant';
import { useTranslation } from 'react-i18next';

const translationsForBasedOnError: string = "errors"
const translationsForBasedOn: string = "basedOn"
const translationsForReportRevenue4161: string = "reports.revenue_4161"
const translationsForReportRevenue4161Columns: string = "reports.revenue_4161.columns"

const Revenue_4161 = () => {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);
  const { t } = useTranslation();

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true)
      const res = await axios.post('/reporting/RevenueReport4161', {
        startDate: data.startDate,
        endDate: data.endDate,
        customsCode: data.CustomsCode,
        type: data.customsProcedure,
        ...data
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
    <SimpleCard title={t(`${translationsForReportRevenue4161}.title`)}>
      <ReportHeaderInputs
        report='Revenue_4161'
        showStartDate
        showEndDate
        showCustomsList
        showRegDate
        showCustomsProcedure
        onSearch={handleSubmit}
        tabelRef={tableRef}
      />
      {loading && (
        <LinearProgress />
      )}
      <Box width="100%" overflow="auto">
        <DataTable
          exportFilename={`Revenue Report 4161 ${new Date().toISOString()}`}
          ref={tableRef}
          value={reportData}
          rows={ROWS_PER_PAGE}
          rowsPerPageOptions={[5, 10, 25, 50, 100]}
          paginator
          stripedRows
          showGridlines
        >
          <Column field={'office'} header={t(`${translationsForReportRevenue4161Columns}.office`)} />
          <Column field={'cmpNam'} header={t(`${translationsForReportRevenue4161Columns}.cmpNam`)} />
          <Column field={'cmpCod'} header={t(`${translationsForReportRevenue4161Columns}.cmpCod`)} />
          <Column field={'cmpNam1'} header={t(`${translationsForReportRevenue4161Columns}.cmpNam1`)} />
          <Column field={'cmpCod1'} header={t(`${translationsForReportRevenue4161Columns}.cmpCod1`)} />
          <Column field={'decCod'} header={t(`${translationsForReportRevenue4161Columns}.decCod`)} />
          <Column field={'decNam'} header={t(`${translationsForReportRevenue4161Columns}.decNam`)} />
          <Column field={'totalTax'} header={t(`${translationsForReportRevenue4161Columns}.totalTax`)} />
          <Column field={'rcpNo'} header={t(`${translationsForReportRevenue4161Columns}.rcpNo`)} />
          <Column field={'rcpDat'} header={t(`${translationsForReportRevenue4161Columns}.rcpDat`)} />
          <Column field={'modpay'} header={t(`${translationsForReportRevenue4161Columns}.modpay`)} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
};

export default Revenue_4161;
