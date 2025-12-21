import { SimpleCard } from '../../components';
import { Box, LinearProgress } from '@mui/material';
import { useState, useRef } from 'react';
import { ROWS_PER_PAGE } from '../../utils/constant';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
import { useTranslation } from 'react-i18next';

const translationsForBasedOnError: string = "errors"
const translationsForBasedOn: string = "basedOn"
const translationsForReportTransit4283: string = "reports.transit_4283"
const translationsForReportTransit4283Columns: string = "reports.transit_4283.columns"

const Transit_4283 = () => {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);
  const { t } = useTranslation();

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true);
      const res = await axios.post('/reporting/TransitReport4283', {
        type: data.customsProcedure,
        customsCode: data.CustomsCode,
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
    <SimpleCard title={t(`${translationsForReportTransit4283}.title`)}>
      <ReportHeaderInputs
        showStartDate
        showEndDate
        showAssesDate
        showArrivalDate
        showDestinationCustomsList
        showDepartureCustomsList
        showTransitType
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
          <Column field={'transit_Type'} header={t(`${translationsForReportTransit4283Columns}.transit_Type`)} />
          <Column field={'dept_off_Name'} header={t(`${translationsForReportTransit4283Columns}.dept_off_Name`)} />
          <Column field={'destn_Name'} header={t(`${translationsForReportTransit4283Columns}.destn_Name`)} />
          <Column field={'status'} header={t(`${translationsForReportTransit4283Columns}.status`)} />
          <Column field={'op_Date'} header={t(`${translationsForReportTransit4283Columns}.op_Date`)} />
          <Column field={'reg_No'} header={t(`${translationsForReportTransit4283Columns}.reg_No`)} />
          <Column field={'reg_Date'} header={t(`${translationsForReportTransit4283Columns}.reg_Date`)} />
          <Column field={'val_No'} header={t(`${translationsForReportTransit4283Columns}.val_No`)} />
          <Column field={'val_Date'} header={t(`${translationsForReportTransit4283Columns}.val_Date`)} />
          <Column field={'arr_Date'} header={t(`${translationsForReportTransit4283Columns}.arr_Date`)} />
          <Column field={'declarant_Code'} header={t(`${translationsForReportTransit4283Columns}.declarant_Code`)} />
          <Column field={'declarant_Name'} header={t(`${translationsForReportTransit4283Columns}.declarant_Name`)} />
          <Column field={'cns_Code'} header={t(`${translationsForReportTransit4283Columns}.cns_Code`)} />
          <Column field={'cns_Name'} header={t(`${translationsForReportTransit4283Columns}.cns_Name`)} />
          <Column field={'principal_Code'} header={t(`${translationsForReportTransit4283Columns}.principal_Code`)} />
          <Column field={'principal_Name'} header={t(`${translationsForReportTransit4283Columns}.principal_Name`)} />
          <Column field={'cty_Export_Name'} header={t(`${translationsForReportTransit4283Columns}.cty_Export_Name`)} />
          <Column field={'cty_Destn_Name'} header={t(`${translationsForReportTransit4283Columns}.cty_Destn_Name`)} />
          <Column field={'gross_Mass'} header={t(`${translationsForReportTransit4283Columns}.gross_Mass`)} />
          <Column field={'Net_Mass'} header={t(`${translationsForReportTransit4283Columns}.Net_Mass`)} />
          <Column field={'hscode'} header={t(`${translationsForReportTransit4283Columns}.hscode`)} />
          <Column field={'Good_Description2'} header={t(`${translationsForReportTransit4283Columns}.Good_Description2`)} />
          <Column field={'Good_Description3'} header={t(`${translationsForReportTransit4283Columns}.Good_Description3`)} />
          <Column field={'Customs_Prc'} header={t(`${translationsForReportTransit4283Columns}.Customs_Prc`)} />
          <Column field={'Dep_Date'} header={t(`${translationsForReportTransit4283Columns}.Dep_Date`)} />
          <Column field={'exp_Code'} header={t(`${translationsForReportTransit4283Columns}.exp_Code`)} />
          <Column field={'exp_Nam'} header={t(`${translationsForReportTransit4283Columns}.exp_Nam`)} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
};

export default Transit_4283;
