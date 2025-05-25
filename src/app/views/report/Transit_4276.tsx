import { Box, LinearProgress, styled } from '@mui/material';
import axios from 'axios';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { useEffect, useRef, useState } from 'react';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
import { SimpleCard } from '../../components';
import { ROWS_PER_PAGE } from '../../utils/constant';

const Transit_4276 = () => {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true)
      const res = await axios.post('/reporting/TransitReport4276', {
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
    <SimpleCard title="Transit Report 4276">
      <ReportHeaderInputs
        showStartDate
        showEndDate
        showCustomsList
        showDestinationCustomsList
        showTransitType2
        showRegDate
        showForeignRegNo
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
          <Column field={'transit_type'} header={'Transit_type'} />
          <Column field={'declaration_ref_yr'} header={'Declaration_Ref_Year'} />
          <Column field={'dept_off_nam'} header={'Departure_Off_Name'} />
          <Column field={'destn_nam'} header={'Destination_off_Name'} />
          <Column style={{ minWidth: "20rem" }} field={'status'} header={'status'} />
          <Column field={'reg_no'} header={'Reg_No'} />
          <Column field={'reg_dat'} header={'Reg_Date'} />
          <Column field={'val_no'} header={'Validation No'} />
          <Column style={{ minWidth: "12rem" }} field={'arr_date'} header={'Arrival Date'} />
          <Column field={'max_date_of_arrival_limit'} header={'Max_Date_of_Arrival'} />
          <Column style={{ minWidth: "12rem" }} field={'transit_officer'} header={'Departure Officer'} />
          <Column field={'declarant_code'} header={'Declarant_Code'} />
          <Column style={{ minWidth: "12rem" }} field={'declarant_name'} header={'Declarant_Name'} />
          <Column field={'cns_code'} header={'Consignee_Code'} />
          <Column style={{ minWidth: "25rem" }} field={'cns_name'} header={'Consignee_Name'} />
          <Column field={'principal_cod'} header={'Principal_Cod'} />
          <Column style={{ minWidth: "25rem" }} field={'principal_nam'} header={'Principal_Nam'} />
          <Column style={{ minWidth: "20rem" }} field={'represented_by'} header={'Represented_By'} />
          <Column field={'cty_export'} header={'Cty_Export'} />
          <Column field={'cty_destn_cod'} header={'Cty_Destn_Cod'} />
          <Column style={{ minWidth: "15rem" }} field={'cty_export_name'} header={'Cty_Export_Name'} />
          <Column field={'mod_of_transport'} header={'Mod_Of_Transport'} />
          <Column field={'lorry_to_border'} header={'lorry_to_border'} />
          <Column style={{ minWidth: "20rem" }} field={'gross_mass'} header={'Gross_mass'} />
          <Column style={{ minWidth: "30rem" }} field={'Net_Mass'} header={'Net_Mass'} />
          <Column field={'totPkg'} header={'totPkg '} />
          <Column style={{ minWidth: "20rem" }} field={'Package_Name'} header={'Package_Name'} />
          <Column field={'hscode'} header={'Hscode'} />
          <Column field={'Good_Description2'} header={'Good_Description2'} />
          <Column style={{ minWidth: "12rem" }} field={'Good_Description3'} header={'Good_Description3'} />
          <Column field={'Package_Mark'} header={'Package_Mark'} />
          <Column field={'cont1'} header={'Container 1'} />
          <Column field={'cont2'} header={'Container 2'} />
          <Column field={'cont_flg'} header={'Container Flag'} />
          <Column field={'seal_affixed_no'} header={'Seal_affixed_no'} />
          <Column field={'seal_identity'} header={'Seal_identity'} />
          <Column field={'Garanty_cod'} header={'Garanty_cod'} />
          <Column field={'Garanty_amnt'} header={'Garanty_amnt'} />
          <Column style={{ minWidth: "20rem" }} field={'at1_cod'} header={'ATT_AT1_COd'} />
          <Column style={{ minWidth: "20rem" }} field={'at1_nbr'} header={'ATT_AT1_nbr'} />
          <Column field={'at2_cod'} header={'ATT_AT2_COd'} />
          <Column style={{ minWidth: "20rem" }} field={'at2_nbr'} header={'ATT_AT2_nbr'} />
          <Column field={'at3_cod'} header={'ATT_AT3_COd'} />
          <Column style={{ minWidth: "20rem" }} field={'at3_nbr'} header={'ATT_AT3_nbr'} />
          <Column field={'at4_cod'} header={'ATT_AT4_COd'} />
          <Column style={{ minWidth: "20rem" }} field={'at4_nbr'} header={'ATT_AT4_nbr'} />
          <Column style={{ minWidth: "15rem" }} field={'Itm_No'} header={'Itm_No'} />
          <Column field={'dec_ref'} header={'decRef'} />
          <Column field={'load_list'} header={'loadList'} />
          <Column field={'destn_cty'} header={'destnCty'} />
          <Column field={'exp_code'} header={'expCode'} />
          <Column field={'exp_nam'} header={'expNam'} />
          <Column field={'cty_destn_nam'} header={'ctyDestnNam'} />
          <Column field={'Max_date_allowed'} header={'maxDateAllowed'} />
          <Column field={'Nationality_of_transport'} header={'nationalityOfTransport'} />
          <Column field={'TPT_MOT_DPA_NAMA'} header={'TPT_MOT_DPA_NAMA'} />
          <Column field={'TPT_MOT_BRD_NAMA'} header={'TPT_MOT_BRD_NAMA'} />
          <Column field={'cty_border'} header={'cty_border'} />
          <Column field={'cty_dep'} header={'cty_dep'} />
          <Column field={'Pack_Nbr'} header={'Pack_Nbr'} />
          <Column style={{ minWidth: "20rem" }} field={'Package_Code'} header={'Package_Code'} />
          <Column field={'del_cod'} header={'del_cod'} />
          <Column style={{ minWidth: "20rem" }} field={'del_nam'} header={'del_nam'} />
          <Column field={'gar_cod'} header={'gar_cod'} />
          <Column field={'gar_amt'} header={'gar_amt'} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
};

export default Transit_4276;
