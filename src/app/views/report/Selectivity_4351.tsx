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
const translationsForReportSelectivity4351: string = "reports.selectivity_4351"
const translationsForReportSelectivity4351Columns: string = "reports.selectivity_4351.columns"

const Selectivity_4351 = () => {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);
  const { t } = useTranslation();

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true)
      const res = await axios.post('/reporting/SelectivityReport4351', {
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
      setLoading(false);
    }
  };

  return (
    <SimpleCard title={t(`${translationsForReportSelectivity4351}.title`)}>
      <ReportHeaderInputs
        report='Selectivity_4351'
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
          exportFilename={`Selectivity Report 4351 ${new Date().toISOString()}`}
          ref={tableRef}
          value={reportData}
          rows={ROWS_PER_PAGE}
          rowsPerPageOptions={[5, 10, 25, 50, 100]}
          paginator
          stripedRows
          showGridlines
        >
          <Column field={'SAD_YEAR'} header={t(`${translationsForReportSelectivity4351Columns}.SAD_YEAR`)} />
          <Column style={{ minWidth: "15rem" }} field={'SAD_OFFICE'} header={t(`${translationsForReportSelectivity4351Columns}.SAD_OFFICE`)} />
          <Column field={'SAD_REG_NO'} header={t(`${translationsForReportSelectivity4351Columns}.SAD_REG_NO`)} />
          <Column field={'SAD_REG_DATE'} header={t(`${translationsForReportSelectivity4351Columns}.SAD_REG_DATE`)} />
          <Column field={'Current_CHANNEL_Dsc'} header={t(`${translationsForReportSelectivity4351Columns}.Current_CHANNEL_Dsc`)} />
          <Column field={'Current_CHANNEL_COD'} header={t(`${translationsForReportSelectivity4351Columns}.Current_CHANNEL_COD`)} />
          <Column field={'Selected_CHANNEL'} header={t(`${translationsForReportSelectivity4351Columns}.Selected_CHANNEL`)} />
          <Column field={'STATUS'} header={t(`${translationsForReportSelectivity4351Columns}.STATUS`)} />
          <Column style={{ minWidth: "25rem" }} field={'CMP_NAM'} header={t(`${translationsForReportSelectivity4351Columns}.CMP_NAM`)} />
          <Column field={'IMPORTER'} header={t(`${translationsForReportSelectivity4351Columns}.IMPORTER`)} />
          <Column field={'ITEMS'} header={t(`${translationsForReportSelectivity4351Columns}.ITEMS`)} />
          <Column style={{ minWidth: "30rem" }} field={'First_Exa'} header={t(`${translationsForReportSelectivity4351Columns}.First_Exa`)} />
          <Column field={'First_Cexa'} header={t(`${translationsForReportSelectivity4351Columns}.First_Cexa`)} />
          <Column field={'SECTION'} header={t(`${translationsForReportSelectivity4351Columns}.SECTION`)} />
          <Column field={'WORKLOAD'} header={t(`${translationsForReportSelectivity4351Columns}.WORKLOAD`)} />
          <Column field={'Privious_Duty'} header={t(`${translationsForReportSelectivity4351Columns}.Privious_Duty`)} />
          <Column field={'Sad_Current_TAXES'} header={t(`${translationsForReportSelectivity4351Columns}.Sad_Current_TAXES`)} />
          <Column field={'Tax_Diff'} header={t(`${translationsForReportSelectivity4351Columns}.Tax_Diff`)} />
          <Column field={'SAD_CUSTOMS_VALUE'} header={t(`${translationsForReportSelectivity4351Columns}.SAD_CUSTOMS_VALUE`)} />
          <Column field={'fin_cod'} header={t(`${translationsForReportSelectivity4351Columns}.fin_cod`)} />
          <Column style={{ minWidth: "25rem" }} field={'fin_nam'} header={t(`${translationsForReportSelectivity4351Columns}.fin_nam`)} />
          <Column field={'rcpt_no'} header={t(`${translationsForReportSelectivity4351Columns}.rcpt_no`)} />
          <Column field={'rcpt_date'} header={t(`${translationsForReportSelectivity4351Columns}.rcpt_date`)} />
          <Column field={'dec_cod'} header={t(`${translationsForReportSelectivity4351Columns}.dec_cod`)} />
          <Column style={{ minWidth: "15rem" }} field={'dec_nam'} header={t(`${translationsForReportSelectivity4351Columns}.dec_nam`)} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
};

export default Selectivity_4351;
