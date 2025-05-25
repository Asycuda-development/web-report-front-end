import { SimpleCard } from '../../components';
import { Box, LinearProgress, styled } from '@mui/material';
import React, { useEffect, useState, useRef } from 'react';
import { ROWS_PER_PAGE } from '../../utils/constant';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';

const Transit_4250 = () => {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);

  useEffect(() => { }, []);

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true)
      const res = await axios.post('/reporting/transit4250', {
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
    label: 'Box number 18 part 1',
    name: 'Box number 18 part 1'
  },{
    label: 'Box number 18 part 2',
    name: 'Box number 18 part 2'
},{
  label: 'Box number 21 part 1',
  name: 'Box number 21 part 1'
},{
  label: 'Box number 21 part 2',
  name: 'Box number 21 part 2',
}
]

  return (
    <SimpleCard title="Transit Report 4250">
      <ReportHeaderInputs
        showStartDate
        showEndDate
        showRegDate
        showAssesDate
        showArrivalDate
        showTransitType
        showBasedOn
        basedOnOptions={basedOnOptions}
        showDepartureCustomsList
        showCustomsList
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
          <Column field={'transit_type'} header={'Transit_Type'} />
          <Column field={'declaration_ref_yr'} header={'Dec_Ref_Year'} />
          <Column field={'dept_off_nam'} header={'Departure_Office_Name'} />
          <Column field={'destn_nam'} header={'Destination_Off_Name'} />
          <Column filter filterField="status" field={'status'} header={'Status'} />
          <Column filter filterField="reg_no" field={'reg_no'} header={'Register_Number'} />
          <Column field={'reg_dat'} header={'Register_Date'} />
          <Column field={'val_no'} header={'Val_Number'} />
          <Column filter filterField="cns_code" field={'cns_code'} header={'Company TIN'} />
          <Column field={'cns_name'} header={'Company Name'} />
          <Column field={'arr_date'} header={'Arrival_date'} />
          <Column filter filterField="hscode" field={'hscode'} header={'Hs Code'} />
          <Column field={'Max_date_allowed'} header={'Max_date_allowed'} />
          <Column field={'declarant_code'} header={'Declarant TIN'} />
          <Column field={'declarant_name'} header={'Declarant Name'} />
          <Column field={'principal_cod'} header={'Principal Code'} />
          <Column field={'principal_nam'} header={'Prinicpal Name'} />
          <Column field={'represented_by'} header={'Represented By'} />
          <Column field={'cty_export_name'} header={'Name of City of Export'} />
          <Column field={'cty_destn_cod'} header={'Destination City Code'} />
          <Column field={'mod_of_transport'} header={'Mode of Transport'} />
          <Column field={'lorry_to_border'} header={'Lorry to Border'} />
          <Column field={'TPT_MOT_DPA_NAMA'} header={'TPT MOT DPA NAMA'} />
          <Column field={'TPT_MOT_BRD_NAMA'} header={'TPT MOT BRD NAMA'} />
          <Column field={'gross_mass'} header={'Gross Mass'} />
          <Column field={'Net_Mass'} header={'Net Mass'} />
          <Column field={'tot_pkg'} header={'Total Package'} />
          <Column field={'Package_Name'} header={'Package Name'} />
          <Column field={'Good_Description2'} header={'Description3'} />
          <Column field={'Good_Description3'} header={'Description2'} />
          <Column field={'Package_Mark'} header={'Package Mark'} />
          <Column field={'Package_Code'} header={'Package Code'} />
          <Column field={'cont_flg'} header={'Container flag'} />
          <Column field={'cont1'} header={'Container #'} />
          <Column field={'cont2'} header={'Container #'} />
          <Column field={'seal_affixed_no'} header={'Seal_Affixed_No'} />
          <Column field={'seal_identity'} header={'	Seal_Identity'} />
          <Column field={'Garanty_cod'} header={'Garanty Code'} />
          <Column field={'Garanty_amnt'} header={'Garanty Amount'} />
          <Column field={'at1_cod'} header={'ATT_AT1_COd'} />
          <Column field={'at1_nbr'} header={'ATT_AT1_nbr'} />
          <Column field={'at2_cod'} header={'ATT_AT2_COd'} />
          <Column field={'at2_nbr'} header={'ATT_AT2_nbr'} />
          <Column field={'at3_cod'} header={'	ATT_AT3_COd'} />
          <Column field={'at3_nbr'} header={'ATT_AT3_nbr'} />
          <Column field={'at4_cod'} header={'ATT_AT4_COd'} />
          <Column field={'at4_nbr'} header={'ATT_AT4_nbr'} />
          <Column field={'dat'} header={'Date'} />
          <Column field={'plc'} header={'Place'} />
          <Column field={'finName'} header={'finName'} />
          <Column field={'dec_ref'} header={'Dec Ref#'} />
          <Column field={'load_list'} header={'Load List'} />
          <Column field={'destn_cty'} header={'Destination City'} />
          <Column field={'exp_code'} header={'Export Code'} />
          <Column field={'exp_nam'} header={'Export Name'} />
          <Column field={'cty_export'} header={'City Of Export'} />
          <Column field={'cty_destn_name'} header={'Destination City Name'} />
          <Column field={'max_date_of_arrival_limit'} header={'max of Limit of transit'} />
          <Column field={'Nationality_of_transport'} header={'Nationality of transport'} />
          <Column field={'cty_border'} header={'City of border'} />
          <Column field={'cty_dep'} header={'Depurture City'} />
          <Column field={'Itm_No'} header={'Item No'} />
          <Column field={'Pack_Nbr'} header={'Package Number'} />
          <Column field={'ast_dat'} header={'Ast date'} />
          <Column field={'transit_officer'} header={'Transit officer'} />
          <Column field={'del_cod'} header={'Dec Code'} />
          <Column field={'del_nam'} header={'Dec Name'} />
          <Column field={'gar_cod'} header={'gar code'} />
          <Column field={'gar_amt'} header={'gar Amount'} />
          <Column field={'trsctl'} header={'trsctl'} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
};

export default Transit_4250;
