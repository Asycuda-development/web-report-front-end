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
const translationsForReportValuation4658: string = "reports.valuation_4658"
const translationsForReportValuation4658Columns: string = "reports.valuation_4658.columns"

const Valuation_4658 = () => {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);
  const { t } = useTranslation();

  useEffect(() => { }, []);

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true)
      const res = await axios.post('/reporting/ValuationReport4658', {
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
    <SimpleCard title={t(`${translationsForReportValuation4658}.title`)}>
      <ReportHeaderInputs
        showStartDate
        showEndDate
        showCustomsList
        showRegDate
        ShowRegisterNo
        showOpreationOptionValuation
        showOpreationOptionValuationValue
        onSearch={handleSubmit}
        tabelRef={tableRef}
      />
      {loading && (
        <LinearProgress />
      )}
      <Box width="100%" overflow="auto">
        <DataTable
          exportFilename={`ValuationReport4658 ${new Date().toISOString()}`}
          ref={tableRef}
          value={reportData}
          rows={ROWS_PER_PAGE}
          rowsPerPageOptions={[5, 10, 25, 50, 100]}
          paginator
          stripedRows
          showGridlines
        >

          <Column field={'CUO_COD'} header={t(`${translationsForReportValuation4658Columns}.CUO_COD`)} />
          <Column field={'CUO_NAM'} header={t(`${translationsForReportValuation4658Columns}.CUO_NAM`)} />
          <Column style={{ minWidth: "15rem" }} field={'REG_YER'} header={t(`${translationsForReportValuation4658Columns}.REG_YER`)} />
          <Column style={{ minWidth: "15rem" }} field={'REG_SER'} header={t(`${translationsForReportValuation4658Columns}.REG_SER`)} />
          <Column style={{ minWidth: "15rem" }} field={'REG_NBR'} header={t(`${translationsForReportValuation4658Columns}.REG_NBR`)} />
          <Column field={'reg_date'} header={t(`${translationsForReportValuation4658Columns}.reg_date`)} />
          <Column field={'REJREASON'} header={t(`${translationsForReportValuation4658Columns}.REJREASON`)} />
          <Column field={'ANALYSIS_REMARK'} header={t(`${translationsForReportValuation4658Columns}.ANALYSIS_REMARK`)} />
          <Column field={'GEN_INV'} header={t(`${translationsForReportValuation4658Columns}.GEN_INV`)} />
          <Column field={'GDS_DSC'} header={t(`${translationsForReportValuation4658Columns}.GDS_DSC`)} />
          <Column field={'HSC_COD'} header={t(`${translationsForReportValuation4658Columns}.HSC_COD`)} />
          <Column field={'CTY_ORG'} header={t(`${translationsForReportValuation4658Columns}.CTY_ORG`)} />
          <Column field={'AMOUNT'} header={t(`${translationsForReportValuation4658Columns}.AMOUNT`)} />
          <Column field={'CURRENCY_COD'} header={t(`${translationsForReportValuation4658Columns}.CURRENCY_COD`)} />
          <Column field={'UOM'} header={t(`${translationsForReportValuation4658Columns}.UOM`)} />
          <Column field={'UNT_COST'} header={t(`${translationsForReportValuation4658Columns}.UNT_COST`)} />
          <Column field={'CMP_NAM'} header={t(`${translationsForReportValuation4658Columns}.CMP_NAM`)} />
          <Column field={'TOT_QTY'} header={t(`${translationsForReportValuation4658Columns}.TOT_QTY`)} />
          <Column field={'OP_NAME'} header={t(`${translationsForReportValuation4658Columns}.OP_NAME`)} />
          <Column field={'OP_DATE_TIME'} header={t(`${translationsForReportValuation4658Columns}.OP_DATE_TIME`)} />
          <Column field={'USERname'} header={t(`${translationsForReportValuation4658Columns}.USERname`)} />
          <Column field={'fullname'} header={t(`${translationsForReportValuation4658Columns}.fullname`)} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
};

export default Valuation_4658;
