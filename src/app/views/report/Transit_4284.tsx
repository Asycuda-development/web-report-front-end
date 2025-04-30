import { Box, LinearProgress } from '@mui/material';
import axios from 'axios';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { useRef, useState } from 'react';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
import { SimpleCard } from '../../components';
import { ROWS_PER_PAGE } from '../../utils/constant';

const Transit_4284 = () => {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true);
      const res = await axios.post('/reporting/TransitReport4284', {
        type: data.customsProcedure,
        customsCode: data.CustomsCode,
        ...data
      });
      console.log(res);
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

  return (
    <SimpleCard title="Transit Report 4284">
      <ReportHeaderInputs
        showStartDate
        showEndDate
        showAssesDate
        showArrivalDate
        showDestinationCustomsList
        showDepartureCustomsList
        showTransitType
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
          <Column field={'op_dtime'} header={'SOpration Date and Time'} />
          <Column field={'status'} header={'status'} />
          <Column field={'reg_no'} header={'Reg_no'} />
          <Column field={'reg_dat'} header={'Reg_Date'} />
          <Column field={'val_no'} header={'Validation No'} />
          <Column field={'arr_date'} header={'	Arrival Date'} />
          <Column field={'max_date_of_arrival_limit'} header={'Max_Date_of_Arrival'} />
          <Column field={'Max_date_allowed'} header={'Max_date_allowed'} />
          <Column field={'transit_officer'} header={'Departure Officer'} />
          <Column field={'declarant_code'} header={'Declarant_Code'} />
          <Column field={'declarant_name'} header={'Declarant_Name'} />
          <Column field={'principal_cod'} header={'principal_cod'} />
          <Column field={'principal_nam'} header={'principal_nam'} />
          <Column field={'cns_code'} header={'Consignee_Code'} />
          <Column field={'cns_name'} header={'Consignee_Name'} />
          <Column field={'represented_by'} header={'Represented_by'} />
          <Column field={'cty_export_name'} header={'Cty_Export_Name'} />
          <Column field={'cty_destn_name'} header={'Cty_Destn_Name'} />
          <Column field={'mod_of_transport'} header={'Mod_Of_Transport'} />
          <Column field={'lorry_to_border;'} header={'lorry_to_border;'} />
          <Column field={'TPT_MOT_DPA_NAMA'} header={'TPT_MOT_DPA_NAMA'} />
          <Column field={'TPT_MOT_BRD_NAMA'} header={'TPT_MOT_BRD_NAMA'} />
          <Column field={'gross_mass'} header={'Gross_mass'} />
          <Column field={'Net_Mass'} header={'Net_Mass'} />
          <Column field={'tot_pkg'} header={'Tot_pkg'} />
          <Column field={'Package_Name'} header={'Package_Name'} />
          <Column field={'hscode'} header={'Hscode'} />
          <Column field={'Good_Description2'} header={'Good_Description2'} />
          <Column field={'Good_Description3'} header={'Good_Description3'} />
          <Column field={'Package_Mark'} header={'Package_Mark'} />
          <Column field={'cont1'} header={'Container 1'} />
          <Column field={'cont2'} header={'Container 2'} />
          <Column field={'cont_flg'} header={'Container Flag'} />
          <Column field={'seal_affixed_no'} header={'seal_affixed_no'} />
          <Column field={'seal_identity'} header={'seal_identity'} />
          <Column field={'Garanty_cod'} header={'Garanty_cod'} />
          <Column field={'Garanty_amnt'} header={'Garanty_amnt'} />
          <Column field={'at1_cod'} header={'ATT_AT1_COd'} />
          <Column field={'at1_nbr'} header={'ATT_AT1_nbr'} />
          <Column field={'at2_cod'} header={'ATT_AT2_COd'} />
          <Column field={'at2_nbr'} header={'ATT_AT2_nbr'} />
          <Column field={'at3_cod'} header={'ATT_AT3_COd'} />
          <Column field={'at3_nbr'} header={'ATT_AT3_nbr'} />
          <Column field={'at4_cod'} header={'ATT_AT4_COd'} />
          <Column field={'at4_nbr'} header={'ATT_AT4_nbr'} />
          <Column field={'trsctl'} header={'Transit control'} />
          <Column field={'dat'} header={'Date'} />
          <Column field={'plc'} header={'Place'} />
          <Column field={'dec_ref'} header={'dec_ref'} />
          <Column field={'load_list'} header={'load_list'} />
          <Column field={'destn_cty'} header={'destn_cty'} />
          <Column field={'exp_code'} header={'exp_code'} />
          <Column field={'exp_nam'} header={'exp_nam'} />
          <Column field={'cty_export'} header={'cty_export'} />
          <Column field={'cty_destn_cod'} header={'cty_destn_cod'} />
          <Column field={'Nationality_of_transport'} header={'Nationality_of_transport'} />
          <Column field={'cty_border'} header={'cty_border'} />
          <Column field={'cty_dep'} header={'cty_dep'} />
          <Column field={'Itm_No'} header={'Itm_No'} />
          <Column field={'Pack_Nbr'} header={'Pack_Nbr'} />
          <Column field={'Package_Code'} header={'Package_Code'} />
          <Column field={'ast_dat'} header={'ast_dat'} />
          <Column field={'del_cod'} header={'del_cod'} />
          <Column field={'del_nam'} header={'del_nam'} />
          <Column field={'gar_cod'} header={'gar_cod'} />
          <Column field={'gar_amt'} header={'gar_amt'} />
          <Column field={'rn'} header={'rn'} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
};

export default Transit_4284;
