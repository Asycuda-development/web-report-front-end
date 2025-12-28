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
const translationsForReportRevenue4169: string = "reports.revenue_4169"
const translationsForReportRevenue4169Columns: string = "reports.revenue_4169.columns"

function Revenue_4169() {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false);
  const tableRef: any = useRef(null);
  const { t } = useTranslation();

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true);
      const res = await axios.post('/reporting/RevenueReport4169', {
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
    <SimpleCard title={t(`${translationsForReportRevenue4169}.title`)}>
      <ReportHeaderInputs
        showStartDate
        showEndDate
        showPayDate
        showCustomsList
        onSearch={handleSubmit}
        tabelRef={tableRef}
      />
      {loading && (
        <LinearProgress />
      )}
      <Box width="100%" overflow="auto">
        <DataTable
          exportFilename={`Revenue Report 4169 ${new Date().toISOString()}`}
          ref={tableRef}
          value={reportData}
          rows={ROWS_PER_PAGE}
          rowsPerPageOptions={[5, 10, 25, 50, 100]}
          paginator
          stripedRows
          showGridlines
          emptyMessage={'No Data Available'}
        >
          <Column field={'Customs'} header={t(`${translationsForReportRevenue4169Columns}.Customs`)} />
          <Column field={'number_of_sad'} header={t(`${translationsForReportRevenue4169Columns}.number_of_sad`)} />
          <Column field={'amt_040'} header={t(`${translationsForReportRevenue4169Columns}.amt_040`)} />
          <Column field={'amt_041'} header={t(`${translationsForReportRevenue4169Columns}.amt_041`)} />
          <Column field={'amt_042'} header={t(`${translationsForReportRevenue4169Columns}.amt_042`)} />
          <Column field={'amt_043'} header={t(`${translationsForReportRevenue4169Columns}.amt_043`)} />
          <Column field={'amt_044'} header={t(`${translationsForReportRevenue4169Columns}.amt_044`)} />
          <Column field={'amt_045'} header={t(`${translationsForReportRevenue4169Columns}.amt_045`)} />
          <Column field={'amt_046'} header={t(`${translationsForReportRevenue4169Columns}.amt_046`)} />
          <Column field={'amt_047'} header={t(`${translationsForReportRevenue4169Columns}.amt_047`)} />
          <Column field={'amt_048'} header={t(`${translationsForReportRevenue4169Columns}.amt_048`)} />
          <Column field={'amt_049'} header={t(`${translationsForReportRevenue4169Columns}.amt_049`)} />
          <Column field={'Total_Taxes'} header={t(`${translationsForReportRevenue4169Columns}.Total_Taxes`)} />
          <Column field={'amt_011'} header={t(`${translationsForReportRevenue4169Columns}.amt_011`)} />
          <Column field={'amt_012'} header={t(`${translationsForReportRevenue4169Columns}.amt_012`)} />
          <Column field={'amt_013'} header={t(`${translationsForReportRevenue4169Columns}.amt_013`)} />
          <Column field={'amt_014'} header={t(`${translationsForReportRevenue4169Columns}.amt_014`)} />
          <Column field={'amt_015'} header={t(`${translationsForReportRevenue4169Columns}.amt_015`)} />
          <Column field={'amt_016'} header={t(`${translationsForReportRevenue4169Columns}.amt_016`)} />
          <Column field={'amt_017'} header={t(`${translationsForReportRevenue4169Columns}.amt_017`)} />
          <Column field={'amt_018'} header={t(`${translationsForReportRevenue4169Columns}.amt_018`)} />
          <Column field={'ICD'} header={t(`${translationsForReportRevenue4169Columns}.ICD`)} />
          <Column field={'HS_2'} header={t(`${translationsForReportRevenue4169Columns}.HS_2`)} />
          <Column field={'HS2_DESC'} header={t(`${translationsForReportRevenue4169Columns}.HS2_DESC`)} />
          <Column field={'ITEM_VALUE_USD'} header={t(`${translationsForReportRevenue4169Columns}.ITEM_VALUE_USD`)} />
          <Column field={'ITEM_VALUE_AFS'} header={t(`${translationsForReportRevenue4169Columns}.ITEM_VALUE_AFS`)} />
          <Column field={'ITEM_TAX_AMT'} header={t(`${translationsForReportRevenue4169Columns}.ITEM_TAX_AMT`)} />
          <Column field={'Total'} header={t(`${translationsForReportRevenue4169Columns}.Total`)} />
          <Column field={'Transit'} header={t(`${translationsForReportRevenue4169Columns}.Transit`)} />
          <Column field={'ARR'} header={t(`${translationsForReportRevenue4169Columns}.ARR`)} />
          <Column field={'Office'} header={t(`${translationsForReportRevenue4169Columns}.Office`)} />
        </DataTable>
      </ Box>
    </SimpleCard>
  );
}

export default Revenue_4169