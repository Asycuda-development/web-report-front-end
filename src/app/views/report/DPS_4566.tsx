import { Box, LinearProgress, styled } from '@mui/material';
import axios from 'axios';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { useEffect, useRef, useState } from 'react';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
import { SimpleCard } from '../../components';
import { ROWS_PER_PAGE } from '../../utils/constant';
import { Toast } from 'primereact/toast';
import { useTranslation } from 'react-i18next';

const translationsForBasedOnError: string = "errors"
const translationsForBasedOn: string = "basedOn"
const translationsForReportDPS4566: string = "reports.dps_4566"
const translationsForReportDPS4566Columns: string = "reports.dps_4566.columns"

function DPS_4566() {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);
  const toastRef: any = useRef(null);
  const { t } = useTranslation();

  const handleSubmit = async (data: SearchData) => {
    try {
      if (data.basedOn && !data.basedOnValue) {
        toastRef.current.show({
          severity: 'error',
          summary: 'Based On Value',
          detail: 'Based On Value is required when Based On is selected, please try again.'
        });
        return
      }
      setLoading(true)
      const res = await axios.post('/reporting/DpsReport4566', {
        ...data,
        type: data.customsProcedure,
        customsCode: data.CustomsCode
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
  const basedOnOptions = [{
    label: 'declarant',
    name: 'declarant'
  },
  {
    label: 'company',
    name: 'company'
  }]
  return (
    <SimpleCard title={t(`${translationsForReportDPS4566}.title`)}>
      <ReportHeaderInputs
        showStartDate
        showEndDate
        showCustomsProcedure
        showRegDate
        showAssesDate
        showPayDate
        showCustomsList
        ShowHsCode
        showGoods
        showBasedOn
        basedOnOptions={basedOnOptions}
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
          <Column field={'SAD_YEAR'} header={t(`${translationsForReportDPS4566Columns}.SAD_YEAR`)} />
          <Column style={{ minWidth: "12rem" }} field={'SAD_OFFICE'} header={t(`${translationsForReportDPS4566Columns}.SAD_OFFICE`)} />
          <Column style={{ minWidth: "12rem" }} field={'SAD_REG_NO'} header={t(`${translationsForReportDPS4566Columns}.SAD_REG_NO`)} />
          <Column field={'SAD_REG_DATE'} header={t(`${translationsForReportDPS4566Columns}.SAD_REG_DATE`)} />
          <Column style={{ minWidth: "10rem" }} field={'STATUS'} header={t(`${translationsForReportDPS4566Columns}.STATUS`)} />
          <Column style={{ minWidth: "12rem" }} field={'sad_flw'} header={t(`${translationsForReportDPS4566Columns}.sad_flw`)} />
          <Column field={'Selected_CHANNEL_Dsc'} header={t(`${translationsForReportDPS4566Columns}.Selected_CHANNEL_Dsc`)} />
          <Column field={'Selected_CHANNEL_COD'} header={t(`${translationsForReportDPS4566Columns}.Selected_CHANNEL_COD`)} />
          <Column field={'Current_CHANNEL'} header={t(`${translationsForReportDPS4566Columns}.Current_CHANNEL`)} />
          <Column field={'Company_TIN'} header={t(`${translationsForReportDPS4566Columns}.Company_TIN`)} />
          <Column style={{ minWidth: "20rem" }} field={'cmp_nam'} header={t(`${translationsForReportDPS4566Columns}.cmp_nam`)} />
          <Column field={'dec_cod'} header={t(`${translationsForReportDPS4566Columns}.dec_cod`)} />
          <Column style={{ minWidth: "20rem" }} filter filterField='dec_nam' field={'dec_nam'} header={t(`${translationsForReportDPS4566Columns}.dec_nam`)} />
          <Column field={'Item_total'} header={t(`${translationsForReportDPS4566Columns}.Item_total`)} />
          <Column field={'itm_no'} header={t(`${translationsForReportDPS4566Columns}.itm_no`)} />
          <Column field={'hscode'} header={t(`${translationsForReportDPS4566Columns}.hscode`)} />
          <Column style={{ minWidth: "30rem" }} field={'dsc1'} header={t(`${translationsForReportDPS4566Columns}.dsc1`)} />
          <Column style={{ minWidth: "25rem" }} field={'dsc3'} header={t(`${translationsForReportDPS4566Columns}.dsc3`)} />
          <Column style={{ minWidth: "12rem" }} field={'CAT'} header={t(`${translationsForReportDPS4566Columns}.CAT`)} />
          <Column style={{ minWidth: '12rem' }} field={'First_Exa'} header={t(`${translationsForReportDPS4566Columns}.First_Exa`)} />
          <Column field={'Last_Exa'} header={t(`${translationsForReportDPS4566Columns}.Last_Exa`)} />
          <Column field={'First_Cexa'} header={t(`${translationsForReportDPS4566Columns}.First_Cexa`)} />
          <Column field={'Last_Cexa'} header={t(`${translationsForReportDPS4566Columns}.Last_Cexa`)} />
          <Column field={'Privious_Tax'} header={t(`${translationsForReportDPS4566Columns}.Privious_Tax`)} />
          <Column field={'TOTAL_TAXES'} header={t(`${translationsForReportDPS4566Columns}.TOTAL_TAXES`)} />
          <Column field={'CUSTOMS_VALUE'} header={t(`${translationsForReportDPS4566Columns}.CUSTOMS_VALUE`)} />
          <Column style={{ minWidth: "20rem" }} field={'Lorry_Total'} header={t(`${translationsForReportDPS4566Columns}.Lorry_Total`)} />
          <Column field={'Item_Value_Afs'} header={t(`${translationsForReportDPS4566Columns}.Item_Value_Afs`)} />
          <Column field={'Item_tax_amt'} header={t(`${translationsForReportDPS4566Columns}.Item_tax_amt`)} />
          <Column field={'wgtgrs'} header={t(`${translationsForReportDPS4566Columns}.wgtgrs`)} />
          <Column field={'wgtnet'} header={t(`${translationsForReportDPS4566Columns}.wgtnet`)} />
          <Column field={'ITEMS'} header={t(`${translationsForReportDPS4566Columns}.ITEMS`)} />
          <Column field={'WORKLOAD'} header={t(`${translationsForReportDPS4566Columns}.WORKLOAD`)} />
          <Column style={{ minWidth: "12rem" }} field={'ADDITIONAL_TAXES'} header={t(`${translationsForReportDPS4566Columns}.ADDITIONAL_TAXES`)} />
          <Column field={'fin_cod'} header={t(`${translationsForReportDPS4566Columns}.fin_cod`)} />
          <Column style={{ minWidth: "30rem" }} field={'fin_nam'} header={t(`${translationsForReportDPS4566Columns}.fin_nam`)} />
          <Column filter filterField='rcpt_no' field={'rcpt_no'} header={t(`${translationsForReportDPS4566Columns}.rcpt_no`)} />
          <Column field={'rcpt_date'} header={t(`${translationsForReportDPS4566Columns}.rcpt_date`)} />
          <Column style={{ minWidth: "12rem" }} field={'nat_proc'} header={t(`${translationsForReportDPS4566Columns}.nat_proc`)} />
          <Column field={'SAD_OFFICENAM'} header={t(`${translationsForReportDPS4566Columns}.SAD_OFFICENAM`)} />
        </DataTable>
      </Box>
      <Toast ref={toastRef} />
    </SimpleCard>
  );
};

export default DPS_4566