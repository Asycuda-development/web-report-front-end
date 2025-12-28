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
const translationsForReportSelectivity4352: string = "reports.selectivity_4352"
const translationsForReportSelectivity4352Columns: string = "reports.selectivity_4352.columns"

const Selectivity_4352 = () => {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);
  const { t } = useTranslation();

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true)
      const res = await axios.post('/reporting/SelectivityReport4352', {
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
    <SimpleCard title={t(`${translationsForReportSelectivity4352}.title`)}>
      <ReportHeaderInputs
        report='Selectivity_4352'
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
          exportFilename={`Selectivity Report 4352 ${new Date().toISOString()}`}
          ref={tableRef}
          value={reportData}
          rows={ROWS_PER_PAGE}
          rowsPerPageOptions={[5, 10, 25, 50, 100]}
          paginator
          stripedRows
          showGridlines
        >
          <Column field={'SAD_YEAR'} header={t(`${translationsForReportSelectivity4352Columns}.SAD_YEAR`)} />
          <Column style={{ minWidth: "10rem" }} field={'SAD_OFFICE'} header={t(`${translationsForReportSelectivity4352Columns}.SAD_OFFICE`)} />
          <Column field={'SAD_REG_NO'} header={t(`${translationsForReportSelectivity4352Columns}.SAD_REG_NO`)} />
          <Column field={'SAD_REG_DATE'} header={t(`${translationsForReportSelectivity4352Columns}.SAD_REG_DATE`)} />
          <Column field={'Selected_CHANNEL_Dsc'} header={t(`${translationsForReportSelectivity4352Columns}.Selected_CHANNEL_Dsc`)} />
          <Column field={'Selected_CHANNEL_COD'} header={t(`${translationsForReportSelectivity4352Columns}.Selected_CHANNEL_COD`)} />
          <Column field={'Selected_CHANNEL'} header={t(`${translationsForReportSelectivity4352Columns}.Selected_CHANNEL`)} />
          <Column field={'STATUS'} header={t(`${translationsForReportSelectivity4352Columns}.STATUS`)} />
          <Column style={{ minWidth: "25rem" }} field={'CMP_NAM'} header={t(`${translationsForReportSelectivity4352Columns}.CMP_NAM`)} />
          <Column field={'IMPORTER'} header={t(`${translationsForReportSelectivity4352Columns}.IMPORTER`)} />
          <Column field={'ITEMS'} header={t(`${translationsForReportSelectivity4352Columns}.ITEMS`)} />
          <Column style={{ minWidth: "30rem" }} field={'First_Exa'} header={t(`${translationsForReportSelectivity4352Columns}.First_Exa`)} />
          <Column field={'First_Cexa'} header={t(`${translationsForReportSelectivity4352Columns}.First_Cexa`)} />
          <Column field={'SECTION'} header={t(`${translationsForReportSelectivity4352Columns}.SECTION`)} />
          <Column field={'WORKLOAD'} header={t(`${translationsForReportSelectivity4352Columns}.WORKLOAD`)} />
          <Column field={'Privious_Duty'} header={t(`${translationsForReportSelectivity4352Columns}.Privious_Duty`)} />
          <Column field={'Current_TAXES'} header={t(`${translationsForReportSelectivity4352Columns}.Current_TAXES`)} />
          <Column field={'Tax_Diff'} header={t(`${translationsForReportSelectivity4352Columns}.Tax_Diff`)} />
          <Column field={'CUSTOMS_VALUE'} header={t(`${translationsForReportSelectivity4352Columns}.CUSTOMS_VALUE`)} />
          <Column field={'hscode'} header={t(`${translationsForReportSelectivity4352Columns}.hscode`)} />
          <Column style={{ minWidth: "30rem" }} field={'dsc1'} header={t(`${translationsForReportSelectivity4352Columns}.dsc1`)} />
          <Column style={{ minWidth: "30rem" }} field={'dsc3'} header={t(`${translationsForReportSelectivity4352Columns}.dsc3`)} />
          <Column field={'itm_no'} header={t(`${translationsForReportSelectivity4352Columns}.itm_no`)} />
          <Column field={'fin_cod'} header={t(`${translationsForReportSelectivity4352Columns}.fin_cod`)} />
          <Column style={{ minWidth: "25rem" }} field={'fin_nam'} header={t(`${translationsForReportSelectivity4352Columns}.fin_nam`)} />
          <Column field={'rcpt_no'} header={t(`${translationsForReportSelectivity4352Columns}.rcpt_no`)} />
          <Column field={'rcpt_date'} header={t(`${translationsForReportSelectivity4352Columns}.rcpt_date`)} />
          <Column field={'dec_cod'} header={t(`${translationsForReportSelectivity4352Columns}.dec_cod`)} />
          <Column style={{ minWidth: "20rem" }} field={'dec_nam'} header={t(`${translationsForReportSelectivity4352Columns}.dec_nam`)} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
};

export default Selectivity_4352;
