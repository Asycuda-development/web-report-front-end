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
const translationsForReportRevenue4163: string = "reports.revenue_4163"
const translationsForReportRevenue4163Columns: string = "reports.revenue_4163.columns"

const Revenue_4163 = () => {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);
  const { t } = useTranslation();

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true)
      const res = await axios.post('/reporting/RevenueReport4163', {
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
    <SimpleCard title={t(`${translationsForReportRevenue4163}.title`)}>
      <ReportHeaderInputs
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
          ref={tableRef}
          value={reportData}
          rows={ROWS_PER_PAGE}
          rowsPerPageOptions={[5, 10, 25, 50, 100]}
          paginator
          stripedRows
          showGridlines
        >
          <Column field={'ideCuo'} header={t(`${translationsForReportRevenue4163Columns}.ideCuo`)} />
          <Column field={'declarationValue'} header={t(`${translationsForReportRevenue4163Columns}.declarationValue`)} />
          <Column field={'declarationTaxes'} header={t(`${translationsForReportRevenue4163Columns}.declarationTaxes`)} />
          <Column field={'sadTotal'} header={t(`${translationsForReportRevenue4163Columns}.sadTotal`)} />
          <Column field={'lorryTotal'} header={t(`${translationsForReportRevenue4163Columns}.lorryTotal`)} />
          <Column field={'valuePerDeclaration'} header={t(`${translationsForReportRevenue4163Columns}.valuePerDeclaration`)} />
          <Column field={'dutyPerDeclaration'} header={t(`${translationsForReportRevenue4163Columns}.dutyPerDeclaration`)} />
          <Column field={'valuePerLorry'} header={t(`${translationsForReportRevenue4163Columns}.valuePerLorry`)} />
          <Column field={'dutyPerLorry'} header={t(`${translationsForReportRevenue4163Columns}.dutyPerLorry`)} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
};

export default Revenue_4163;
