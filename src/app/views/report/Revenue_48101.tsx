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
const translationsForReportRevenue48101: string = "reports.revenue_48101"
const translationsForReportRevenue48101Columns: string = "reports.revenue_48101.columns"

const Revenue_48101 = () => {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);
  const { t } = useTranslation();

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true)
      const res = await axios.post('/reporting/RevenueReport48101', {
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
    <SimpleCard title={t(`${translationsForReportRevenue48101}.title`)}>
      <ReportHeaderInputs
        showStartDate
        showEndDate
        showCustomsList
        showDepartureDate
        showRegDate
        onSearch={handleSubmit}
        tabelRef={tableRef}
      />
      {loading && (
        <LinearProgress />
      )}
      <Box width="100%" overflow="auto">
        <DataTable
          ref={tableRef}
          value={reportData}
          rows={ROWS_PER_PAGE}
          rowsPerPageOptions={[5, 10, 25, 50, 100]}
          paginator
          stripedRows
          showGridlines
        >
          <Column field={'cuonam'} header={t(`${translationsForReportRevenue48101Columns}.cuonam`)} />
          <Column field={'curcod'} header={t(`${translationsForReportRevenue48101Columns}.curcod`)} />
          <Column field={'curdsc'} header={t(`${translationsForReportRevenue48101Columns}.curdsc`)} />
          <Column field={'amtval'} header={t(`${translationsForReportRevenue48101Columns}.amtval`)} />
          <Column field={'arrnam'} header={t(`${translationsForReportRevenue48101Columns}.arrnam`)} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
};

export default Revenue_48101;
