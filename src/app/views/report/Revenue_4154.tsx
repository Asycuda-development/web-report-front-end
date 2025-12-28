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
const translationsForReportRevenue4154: string = "reports.revenue_4154"
const translationsForReportRevenue4154Columns: string = "reports.revenue_4154.columns"

const Revenue_4154 = () => {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);
  const { t } = useTranslation();

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true)
      const res = await axios.post('/reporting/RevenueReport4154', {
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
    <SimpleCard title={t(`${translationsForReportRevenue4154}.title`)}>
      <ReportHeaderInputs
        report='Revenue_4154'
        showStartDate
        showEndDate
        showCustomsList
        showRegDate
        onSearch={handleSubmit}
        tabelRef={tableRef}
      />
      {loading && (
        <LinearProgress />
      )}
      <Box width="100%" overflow="auto">
        <DataTable
          exportFilename={`Revenue Report 4154 ${new Date().toISOString()}`}
          ref={tableRef}
          value={reportData}
          rows={ROWS_PER_PAGE}
          rowsPerPageOptions={[5, 10, 25, 50, 100]}
          paginator
          stripedRows
          showGridlines
        >
          <Column field={'office'} header={t(`${translationsForReportRevenue4154Columns}.office`)} />
          <Column field={'rcp_dat'} header={t(`${translationsForReportRevenue4154Columns}.rcp_dat`)} />
          <Column field={'tax_total_Export'} header={t(`${translationsForReportRevenue4154Columns}.tax_total_Export`)} />
          <Column field={'amt_011'} header={t(`${translationsForReportRevenue4154Columns}.amt_011`)} />
          <Column field={'amt_012'} header={t(`${translationsForReportRevenue4154Columns}.amt_012`)} />
          <Column field={'amt_013'} header={t(`${translationsForReportRevenue4154Columns}.amt_013`)} />
          <Column field={'amt_015'} header={t(`${translationsForReportRevenue4154Columns}.amt_015`)} />
          <Column field={'amt_017'} header={t(`${translationsForReportRevenue4154Columns}.amt_017`)} />
          <Column field={'amt_018'} header={t(`${translationsForReportRevenue4154Columns}.amt_018`)} />
          <Column field={'amt_041'} header={t(`${translationsForReportRevenue4154Columns}.amt_041`)} />
          <Column field={'amt_042'} header={t(`${translationsForReportRevenue4154Columns}.amt_042`)} />
          <Column field={'amt_043'} header={t(`${translationsForReportRevenue4154Columns}.amt_043`)} />
          <Column field={'amt_044'} header={t(`${translationsForReportRevenue4154Columns}.amt_044`)} />
          <Column field={'amt_045'} header={t(`${translationsForReportRevenue4154Columns}.amt_045`)} />
          <Column field={'amt_046'} header={t(`${translationsForReportRevenue4154Columns}.amt_046`)} />
          <Column field={'amt_047'} header={t(`${translationsForReportRevenue4154Columns}.amt_047`)} />
          <Column field={'amt_048'} header={t(`${translationsForReportRevenue4154Columns}.amt_048`)} />
          <Column field={'amt_049'} header={t(`${translationsForReportRevenue4154Columns}.amt_049`)} />
          <Column field={'amt_75'} header={t(`${translationsForReportRevenue4154Columns}.amt_75`)} />
          <Column field={'amt_88'} header={t(`${translationsForReportRevenue4154Columns}.amt_88`)} />
          <Column field={'amt_80'} header={t(`${translationsForReportRevenue4154Columns}.amt_80`)} />
          <Column field={'amt_019'} header={t(`${translationsForReportRevenue4154Columns}.amt_019`)} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
};

export default Revenue_4154;
