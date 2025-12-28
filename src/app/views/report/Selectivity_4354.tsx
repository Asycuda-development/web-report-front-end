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
const translationsForReportSelectivity4354: string = "reports.selectivity_4354"
const translationsForReportSelectivity4354Columns: string = "reports.selectivity_4354.columns"

const Selectivity_4354 = () => {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);
  const { t } = useTranslation();

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true)
      const res = await axios.post('/reporting/SelectivityReport4354', {
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
    <SimpleCard title={t(`${translationsForReportSelectivity4354}.title`)}>
      <ReportHeaderInputs
        report='Selectivity_4354'
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
          exportFilename={`Selectivity Report 4354 ${new Date().toISOString()}`}
          ref={tableRef}
          value={reportData}
          rows={ROWS_PER_PAGE}
          rowsPerPageOptions={[5, 10, 25, 50, 100]}
          paginator
          stripedRows
          showGridlines
        >
          <Column field={'SAD_YEAR'} header={t(`${translationsForReportSelectivity4354Columns}.SAD_YEAR`)} />
          <Column field={'SAD_OFFICE'} header={t(`${translationsForReportSelectivity4354Columns}.SAD_OFFICE`)} />
          <Column field={'SAD_REG_NO'} header={t(`${translationsForReportSelectivity4354Columns}.SAD_REG_NO`)} />
          <Column field={'SAD_REG_DATE'} header={t(`${translationsForReportSelectivity4354Columns}.SAD_REG_DATE`)} />
          <Column field={'current_CHANNEL_Dsc'} header={t(`${translationsForReportSelectivity4354Columns}.current_CHANNEL_Dsc`)} />
          <Column field={'current_CHANNEL_COD'} header={t(`${translationsForReportSelectivity4354Columns}.current_CHANNEL_COD`)} />
          <Column field={'Selected_CHANNEL'} header={t(`${translationsForReportSelectivity4354Columns}.Selected_CHANNEL`)} />
          <Column field={'SEL_DATA'} header={t(`${translationsForReportSelectivity4354Columns}.SEL_DATA`)} />
          <Column field={'STATUS'} header={t(`${translationsForReportSelectivity4354Columns}.STATUS`)} />
          <Column style={{ minWidth: "20rem" }} field={'CMP_NAM'} header={t(`${translationsForReportSelectivity4354Columns}.CMP_NAM`)} />
          <Column field={'IMPORTER'} header={t(`${translationsForReportSelectivity4354Columns}.IMPORTER`)} />
          <Column field={'ITEMS'} header={t(`${translationsForReportSelectivity4354Columns}.ITEMS`)} />
          <Column field={'First_Exa'} header={t(`${translationsForReportSelectivity4354Columns}.First_Exa`)} />
          <Column field={'First_Cexa'} header={t(`${translationsForReportSelectivity4354Columns}.First_Cexa`)} />
          <Column field={'SECTION'} header={t(`${translationsForReportSelectivity4354Columns}.SECTION`)} />
          <Column field={'WORKLOAD'} header={t(`${translationsForReportSelectivity4354Columns}.WORKLOAD`)} />
          <Column field={'INFRINGEMENT_DETAILS'} header={t(`${translationsForReportSelectivity4354Columns}.INFRINGEMENT_DETAILS`)} />
          <Column field={'Privious_Duty'} header={t(`${translationsForReportSelectivity4354Columns}.Privious_Duty`)} />
          <Column field={'Current_TAXES'} header={t(`${translationsForReportSelectivity4354Columns}.Current_TAXES`)} />
          <Column field={'Tax_Diff'} header={t(`${translationsForReportSelectivity4354Columns}.Tax_Diff`)} />
          <Column field={'CUSTOMS_VALUE'} header={t(`${translationsForReportSelectivity4354Columns}.CUSTOMS_VALUE`)} />
          <Column field={'hscode'} header={t(`${translationsForReportSelectivity4354Columns}.hscode`)} />
          <Column style={{ minWidth: "20rem" }} field={'dsc1'} header={t(`${translationsForReportSelectivity4354Columns}.dsc1`)} />
          <Column style={{ minWidth: "20rem" }} field={'dsc3'} header={t(`${translationsForReportSelectivity4354Columns}.dsc3`)} />
          <Column field={'itm_no'} header={t(`${translationsForReportSelectivity4354Columns}.itm_no`)} />
          <Column field={'fin_cod'} header={t(`${translationsForReportSelectivity4354Columns}.fin_cod`)} />
          <Column style={{ minWidth: "30rem" }} field={'fin_nam'} header={t(`${translationsForReportSelectivity4354Columns}.fin_nam`)} />
          <Column field={'rcpt_no'} header={t(`${translationsForReportSelectivity4354Columns}.rcpt_no`)} />
          <Column field={'rcpt_date'} header={t(`${translationsForReportSelectivity4354Columns}.rcpt_date`)} />
          <Column field={'dec_cod'} header={t(`${translationsForReportSelectivity4354Columns}.dec_cod`)} />
          <Column style={{ minWidth: "15rem" }} field={'dec_nam'} header={t(`${translationsForReportSelectivity4354Columns}.dec_nam`)} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
};

export default Selectivity_4354;
