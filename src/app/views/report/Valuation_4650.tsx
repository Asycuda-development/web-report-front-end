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
const translationsForReportValuation4650: string = "reports.valuation_4650"
const translationsForReportValuation4650Columns: string = "reports.valuation_4650.columns"


const Valuation_4650 = () => {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false);
  const tableRef: any = useRef(null);
  const { t } = useTranslation();

  useEffect(() => { }, []);

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true)
      const res = await axios.post('/reporting/ValuationReport4650', {
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
    <SimpleCard title={t(`${translationsForReportValuation4650}.title`)}>
      <ReportHeaderInputs
        showStartDate
        showEndDate
        showCustomsList
        showRegDate
        ShowHsCode
        showAcceptR
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

          <Column field={'OFFICE'} header={t(`${translationsForReportValuation4650Columns}.OFFICE`)} />
          <Column field={'SAD_NO'} header={t(`${translationsForReportValuation4650Columns}.SAD_NO`)} />
          <Column style={{ minWidth: "15rem" }} field={'SAD_REG_DATE'} header={t(`${translationsForReportValuation4650Columns}.SAD_REG_DATE`)} />
          <Column style={{ minWidth: "15rem" }} field={'HSCODE'} header={t(`${translationsForReportValuation4650Columns}.HSCODE`)} />
          <Column style={{ minWidth: "15rem" }} field={'TSC_COD'} header={t(`${translationsForReportValuation4650Columns}.TSC_COD`)} />
          <Column style={{ minWidth: "20rem" }} field={'Comm_desc'} header={t(`${translationsForReportValuation4650Columns}.Comm_desc`)} />
          <Column style={{ minWidth: "12rem" }} field={'brand'} header={t(`${translationsForReportValuation4650Columns}.brand`)} />
          <Column field={'inv_usd'} header={t(`${translationsForReportValuation4650Columns}.inv_usd`)} />
          <Column field={'accepted_value'} header={t(`${translationsForReportValuation4650Columns}.accepted_value`)} />
          <Column field={'Value_Declared'} header={t(`${translationsForReportValuation4650Columns}.Value_Declared`)} />
          <Column field={'Difference'} header={t(`${translationsForReportValuation4650Columns}.Difference`)} />
          <Column field={'cmp_cod'} header={t(`${translationsForReportValuation4650Columns}.cmp_cod`)} />
          <Column style={{ minWidth: "12rem" }} field={'CMP_NAM'} header={t(`${translationsForReportValuation4650Columns}.CMP_NAM`)} />
          <Column field={'dec_cod'} header={t(`${translationsForReportValuation4650Columns}.dec_cod`)} />
          <Column style={{ minWidth: "20rem" }} field={'dec_nam'} header={t(`${translationsForReportValuation4650Columns}.dec_nam`)} />
          <Column field={'min_accept'} header={t(`${translationsForReportValuation4650Columns}.min_accept`)} />
          <Column field={'max_accept'} header={t(`${translationsForReportValuation4650Columns}.max_accept`)} />
          <Column field={'itm_no'} header={t(`${translationsForReportValuation4650Columns}.itm_no`)} />
          <Column field={'Item_Taxes'} header={t(`${translationsForReportValuation4650Columns}.Item_Taxes`)} />
          <Column field={'avg_amt'} header={t(`${translationsForReportValuation4650Columns}.avg_amt`)} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
};

export default Valuation_4650;
