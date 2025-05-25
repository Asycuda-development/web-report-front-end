import { Box, LinearProgress, styled } from '@mui/material';
import axios from 'axios';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { useEffect, useRef, useState } from 'react';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
import { SimpleCard } from '../../components';
import { ROWS_PER_PAGE } from '../../utils/constant';
import { Toast } from 'primereact/toast';

function DPS_4566() {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);
  const toastRef: any = useRef(null);

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
    <SimpleCard title="4566-DPS">
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
          <Column field={'SAD_YEAR'} header={'SAD_YEAR'} />
          <Column style={{ minWidth: "12rem" }} field={'SAD_OFFICE'} header={'SAD_OFFICE'} />
          <Column style={{ minWidth: "12rem" }} field={'SAD_REG_NO'} header={'SAD_REG_NO'} />
          <Column field={'SAD_REG_DATE'} header={'SAD_REG_DATE'} />
          <Column style={{ minWidth: "10rem" }} field={'STATUS'} header={'STATUS'} />
          <Column style={{ minWidth: "12rem" }} field={'sad_flw'} header={'SAD_FLW'} />
          <Column field={'Selected_CHANNEL_Dsc'} header={'Selected_CHANNEL_Dsc'} />
          <Column field={'Selected_CHANNEL_COD'} header={'Selected_CHANNEL_COD'} />
          <Column field={'Current_CHANNEL'} header={'Current_CHANNEL'} />
          <Column field={'Company_TIN'} header={'Company_TIN'} />
          <Column style={{ minWidth: "20rem" }} field={'cmp_nam'} header={'Company_Name'} />
          <Column field={'dec_cod'} header={'Declarent_Code'} />
          <Column style={{ minWidth: "20rem" }} filter filterField='dec_nam' field={'dec_nam'} header={'Declarent_Name'} />
          <Column field={'Item_total'} header={'Item_total'} />
          <Column field={'itm_no'} header={'Item_No'} />
          <Column field={'hscode'} header={'HScode'} />
          <Column style={{ minWidth: "30rem" }} field={'dsc1'} header={'Description1'} />
          <Column style={{ minWidth: "25rem" }} field={'dsc3'} header={'Description3'} />
          <Column style={{ minWidth: "12rem" }} field={'CAT'} header={'Category'} />
          <Column style={{ minWidth: '12rem' }} field={'First_Exa'} header={'First_Examiner'} />
          <Column field={'Last_Exa'} header={'FLAST_Examiner'} />
          <Column field={'First_Cexa'} header={'First_Chief_Examiner'} />
          <Column field={'Last_Cexa'} header={'Last_Chief_Examiner'} />
          <Column field={'Privious_Tax'} header={'Privious_Tax'} />
          <Column field={'TOTAL_TAXES'} header={'TOTAL_TAXES'} />
          <Column field={'CUSTOMS_VALUE'} header={'CUSTOMS_VALUE'} />
          <Column style={{ minWidth: "20rem" }} field={'Lorry_Total'} header={'Lorry_Total'} />
          <Column field={'Item_Value_Afs'} header={'Item_Value_Afs'} />
          <Column field={'Item_tax_amt'} header={'Item_tax_amt'} />
          <Column field={'wgtgrs'} header={'Item Gross Weight'} />
          <Column field={'wgtnet'} header={'Item Net Weight'} />
          <Column field={'ITEMS'} header={'ITEMS'} />
          <Column field={'WORKLOAD'} header={'WORKLOAD'} />
          <Column style={{ minWidth: "12rem" }} field={'ADDITIONAL_TAXES'} header={'ADDITIONAL_TAXES'} />
          <Column field={'fin_cod'} header={'fin_cod'} />
          <Column style={{ minWidth: "30rem" }} field={'fin_nam'} header={'fin_nam'} />
          <Column filter filterField='rcpt_no' field={'rcpt_no'} header={'Recept_No'} />
          <Column field={'rcpt_date'} header={'Recept_Date'} />
          <Column style={{ minWidth: "12rem" }} field={'nat_proc'} header={'nat_proc'} />
          <Column field={'SAD_OFFICENAM'} header={'SAD_OFFICENAM'} />
        </DataTable>
      </Box>
      <Toast ref={toastRef} />
    </SimpleCard>
  );
};

export default DPS_4566