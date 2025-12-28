import { Box, LinearProgress } from '@mui/material';
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
const translationsForReportValuation4654: string = "reports.valuation_4654"
const translationsForReportValuation4654Columns: string = "reports.valuation_4654.columns"


const Valuation_4654 = () => {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false);
  const tableRef: any = useRef(null);
  const { t } = useTranslation();

  useEffect(() => { }, []);

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true)
      const res = await axios.post('/reporting/ValuationReport4654', {
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
    } catch (error) { }
    finally {
      setLoading(false)
    }
  };

  return (
    <SimpleCard title={t(`${translationsForReportValuation4654}.title`)}>
      <ReportHeaderInputs
        report='Valuation_4654'
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
          exportFilename={`ValuationReport4654 ${new Date().toISOString()}`}
          ref={tableRef}
          value={reportData}
          rows={ROWS_PER_PAGE}
          rowsPerPageOptions={[5, 10, 25, 50, 100]}
          paginator
          stripedRows
          showGridlines
        >
          <Column style={{ minWidth: "12rem" }} field={'office'} header={t(`${translationsForReportValuation4654Columns}.office`)} />
          <Column style={{ minWidth: "12rem" }} field={'Dec_type'} header={t(`${translationsForReportValuation4654Columns}.Dec_type`)} />
          <Column style={{ minWidth: "15rem" }} field={'Lan'} header={t(`${translationsForReportValuation4654Columns}.Lan`)} />
          <Column field={'Reg_No'} header={t(`${translationsForReportValuation4654Columns}.Reg_No`)} />
          <Column field={'Reg_Date'} header={t(`${translationsForReportValuation4654Columns}.Reg_Date`)} />
          <Column field={'Company_TIN'} header={t(`${translationsForReportValuation4654Columns}.Company_TIN`)} />
          <Column style={{ minWidth: "20rem" }} field={'cmp_nam'} header={t(`${translationsForReportValuation4654Columns}.cmp_nam`)} />
          <Column field={'Broker_TIN'} header={t(`${translationsForReportValuation4654Columns}.Broker_TIN`)} />
          <Column style={{ minWidth: "15rem" }} field={'dec_nam'} header={t(`${translationsForReportValuation4654Columns}.dec_nam`)} />
          <Column field={'HS_CODE'} header={t(`${translationsForReportValuation4654Columns}.HS_CODE`)} />
          <Column style={{ minWidth: "15rem" }} field={'mark1'} header={t(`${translationsForReportValuation4654Columns}.mark1`)} />
          <Column style={{ minWidth: "30rem" }} field={'Tariff_dec'} header={t(`${translationsForReportValuation4654Columns}.Tariff_dec`)} />
          <Column field={'TSC_CODE'} header={t(`${translationsForReportValuation4654Columns}.TSC_CODE`)} />
          <Column style={{ minWidth: "30rem" }} field={'TSC_DSC'} header={t(`${translationsForReportValuation4654Columns}.TSC_DSC`)} />
          <Column field={'Pack_Total'} header={t(`${translationsForReportValuation4654Columns}.Pack_Total`)} />
          <Column style={{ minWidth: "15rem" }} field={'Pack_Name'} header={t(`${translationsForReportValuation4654Columns}.Pack_Name`)} />
          <Column style={{ minWidth: "25rem" }} field={'Country_name'} header={t(`${translationsForReportValuation4654Columns}.Country_name`)} />
          <Column style={{ minWidth: "10rem" }} field={'Item_No'} header={t(`${translationsForReportValuation4654Columns}.Item_No`)} />
          <Column field={'Item_Gross_Weight'} header={t(`${translationsForReportValuation4654Columns}.Item_Gross_Weight`)} />
          <Column field={'Item_Net_Weight'} header={t(`${translationsForReportValuation4654Columns}.Item_Net_Weight`)} />
          <Column field={'Item_Value'} header={t(`${translationsForReportValuation4654Columns}.Item_Value`)} />
          <Column field={'Item_tax'} header={t(`${translationsForReportValuation4654Columns}.Item_tax`)} />
          <Column field={'TSC_Status'} header={t(`${translationsForReportValuation4654Columns}.TSC_Status`)} />

        </DataTable>
      </Box>
    </SimpleCard>
  );
};

export default Valuation_4654;
