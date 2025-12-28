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
const translationsForReportValuation4656: string = "reports.valuation_4656"
const translationsForReportValuation4656Columns: string = "reports.valuation_4656.columns"

const Valuation_4656 = () => {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);
  const { t } = useTranslation();

  useEffect(() => { }, []);

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true)
      const res = await axios.post('/reporting/ValuationReport4656', {
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
    <SimpleCard title={t(`${translationsForReportValuation4656}.title`)}>
      <ReportHeaderInputs
        showStartDate
        showEndDate
        showRegDate
        onSearch={handleSubmit}
        tabelRef={tableRef}
      />
      {loading && (
        <LinearProgress />
      )}
      <Box width="100%" overflow="auto">
        <DataTable
          exportFilename={`ValuationReport4656 ${new Date().toISOString()}`}
          ref={tableRef}
          value={reportData}
          rows={ROWS_PER_PAGE}
          rowsPerPageOptions={[5, 10, 25, 50, 100]}
          paginator
          stripedRows
          showGridlines
        >

          <Column field={'ID'} header={t(`${translationsForReportValuation4656Columns}.ID`)} />
          <Column field={'rnk'} header={t(`${translationsForReportValuation4656Columns}.rnk`)} />
          <Column style={{ minWidth: "15rem" }} field={'Opration_name'} header={t(`${translationsForReportValuation4656Columns}.Opration_name`)} />
          <Column style={{ minWidth: "15rem" }} field={'History_DAT'} header={t(`${translationsForReportValuation4656Columns}.History_DAT`)} />
          <Column style={{ minWidth: "15rem" }} field={'track_date'} header={t(`${translationsForReportValuation4656Columns}.track_date`)} />
          <Column field={'TSC_Gen_DAT'} header={t(`${translationsForReportValuation4656Columns}.TSC_Gen_DAT`)} />
          <Column field={'HS_CODE'} header={t(`${translationsForReportValuation4656Columns}.HS_CODE`)} />
          <Column field={'TSC_CODE'} header={t(`${translationsForReportValuation4656Columns}.TSC_CODE`)} />
          <Column field={'Before_Max_price'} header={t(`${translationsForReportValuation4656Columns}.Before_Max_price`)} />
          <Column field={'Before_Min_price'} header={t(`${translationsForReportValuation4656Columns}.Before_Min_price`)} />
          <Column field={'Max_price'} header={t(`${translationsForReportValuation4656Columns}.Max_price`)} />
          <Column field={'Min_price'} header={t(`${translationsForReportValuation4656Columns}.Min_price`)} />
          <Column style={{ minWidth: "15rem" }} field={'Country_name'} header={t(`${translationsForReportValuation4656Columns}.Country_name`)} />
          <Column style={{ minWidth: "15rem" }} field={'Brand'} header={t(`${translationsForReportValuation4656Columns}.Brand`)} />
          <Column style={{ minWidth: "30rem" }} field={'DSC'} header={t(`${translationsForReportValuation4656Columns}.DSC`)} />
          <Column field={'DSC1'} header={t(`${translationsForReportValuation4656Columns}.DSC1`)} />
          <Column style={{ minWidth: "12rem" }} field={'gds_dsc'} header={t(`${translationsForReportValuation4656Columns}.gds_dsc`)} />
          <Column field={'Formula'} header={t(`${translationsForReportValuation4656Columns}.Formula`)} />
          <Column style={{ minWidth: "25rem" }} field={'Formula_dsc'} header={t(`${translationsForReportValuation4656Columns}.Formula_dsc`)} />
          <Column style={{ minWidth: "15rem" }} field={'linked_value'} header={t(`${translationsForReportValuation4656Columns}.linked_value`)} />
          <Column style={{ minWidth: "15rem" }} field={'USERNAME'} header={t(`${translationsForReportValuation4656Columns}.USERNAME`)} />
          <Column style={{ minWidth: "15rem" }} field={'FULLNAME'} header={t(`${translationsForReportValuation4656Columns}.FULLNAME`)} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
};

export default Valuation_4656;
