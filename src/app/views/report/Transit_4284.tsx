import { SimpleCard } from '../../components';
import { Box, styled, LinearProgress } from '@mui/material';
import React, { useEffect, useState, useRef } from 'react';
import { ROWS_PER_PAGE } from '../../utils/constant';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';

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
          <Column field={'tot_pkg'} header={'tot_pkg'} />
          <Column field={'dec_ref'} header={'dec_ref'} />
          <Column field={'load_list'} header={'load_list'} />
          <Column field={'reg_no'} header={'reg_no'} />
          <Column field={'reg_dat'} header={'reg_dat'} />
          <Column field={'op_dtime'} header={'op_dtime'} />
          <Column field={'status'} header={'status'} />
          <Column field={'arr_date'} header={'arr_date'} />
          <Column field={'dept_off_nam'} header={'dept_off_nam'} />
          <Column field={'destn_nam'} header={'destn_nam'} />
          <Column field={'destn_cty'} header={'destn_cty'} />
          <Column field={'transit_type'} header={'transit_type'} />
          <Column field={'exp_code'} header={'exp_code'} />
          <Column field={'exp_nam'} header={'exp_nam'} />
          <Column field={'cns_code'} header={'cns_code'} />
          <Column field={'cns_name'} header={'cns_name'} />
          <Column field={'cty_export'} header={'cty_export'} />
          <Column field={'cty_export_name'} header={'cty_export_name'} />
          <Column field={'cty_destn_cod'} header={'cty_destn_cod'} />
          <Column field={'cty_destn_name'} header={'cty_destn_name'} />
          <Column field={'mod_of_transport'} header={'mod_of_transport'} />
          <Column field={'principal_cod'} header={'principal_cod'} />
          <Column field={'principal_nam'} header={'principal_nam'} />
          <Column field={'represented_by'} header={'represented_by'} />
          <Column field={'declarant_code'} header={'declarant_code'} />
          <Column field={'declarant_name'} header={'declarant_name'} />
          <Column field={'max_date_of_arrival_limit'} header={'max_date_of_arrival_limit'} />
          <Column field={'Max_date_allowed'} header={'Max_date_allowed'} />
          <Column field={'declaration_ref_yr'} header={'declaration_ref_yr'} />
          <Column field={'Nationality_of_transport'} header={'Nationality_of_transport'} />
          <Column field={'TPT_MOT_DPA_NAMA'} header={'TPT_MOT_DPA_NAMA'} />
          <Column field={'TPT_MOT_BRD_NAMA'} header={'TPT_MOT_BRD_NAMA'} />
          <Column field={'lorry_to_border;'} header={'lorry_to_border;'} />
          <Column field={'cty_border'} header={'cty_border'} />
          <Column field={'cty_dep'} header={'cty_dep'} />
          <Column field={'seal_affixed_no'} header={'seal_affixed_no'} />
          <Column field={'seal_identity'} header={'seal_identity'} />
          <Column field={'Garanty_cod'} header={'Garanty_cod'} />
          <Column field={'Garanty_amnt'} header={'Garanty_amnt'} />
          <Column field={'Itm_No'} header={'Itm_No'} />
          <Column field={'Pack_Nbr'} header={'Pack_Nbr'} />
          <Column field={'Package_Mark'} header={'Package_Mark'} />
          <Column field={'hscode'} header={'hscode'} />
          <Column field={'gross_mass'} header={'gross_mass'} />
          <Column field={'Net_Mass'} header={'Net_Mass'} />
          <Column field={'Good_Description2'} header={'Good_Description2'} />
          <Column field={'Good_Description3'} header={'Good_Description3'} />
          <Column field={'Package_Code'} header={'Package_Code'} />
          <Column field={'Package_Name'} header={'Package_Name'} />
          <Column field={'at1_cod'} header={'at1_cod'} />
          <Column field={'at1_nbr'} header={'at1_nbr'} />
          <Column field={'at2_cod'} header={'at2_cod'} />
          <Column field={'at2_nbr'} header={'at2_nbr'} />
          <Column field={'at3_cod'} header={'at3_cod'} />
          <Column field={'at3_nbr'} header={'at3_nbr'} />
          <Column field={'at4_cod'} header={'at4_cod'} />
          <Column field={'at4_nbr'} header={'at4_nbr'} />
          <Column field={'val_no'} header={'val_no'} />
          <Column field={'ast_dat'} header={'ast_dat'} />
          <Column field={'transit_officer'} header={'transit_officer'} />
          <Column field={'cont1'} header={'cont1'} />
          <Column field={'cont2'} header={'cont2'} />
          <Column field={'cont_flg'} header={'cont_flg'} />
          <Column field={'del_cod'} header={'del_cod'} />
          <Column field={'del_nam'} header={'del_nam'} />
          <Column field={'gar_cod'} header={'gar_cod'} />
          <Column field={'gar_amt'} header={'gar_amt'} />
          <Column field={'trsctl'} header={'trsctl'} />
          <Column field={'dat'} header={'dat'} />
          <Column field={'plc'} header={'plc'} />
          <Column field={'rn'} header={'rn'} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
};

export default Transit_4284;
