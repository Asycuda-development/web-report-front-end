import { SimpleCard } from '../../components';
import { Box, styled } from '@mui/material';
import React, { useEffect, useState, useRef } from 'react';
import { ROWS_PER_PAGE } from '../../utils/constant';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
// I love you
const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' }
  }
}));

const OverallReport = () => {
  const [reportData, setReportData] = useState([]);
  const tableRef: any = useRef(null);

  useEffect(() => {}, []);

  const handleSubmit = async (data: SearchData) => {
    try {
      const res = await axios.post('/reporting/transit4250', {
        ...data,
        type: data.customsProcedure,
        customsCode: data.CustomsCode
      });

      setReportData(res.data);
    } catch (error) {}
  };

  return (
    <Container>
      <SimpleCard title="4250- Transit">
        <ReportHeaderInputs
          showStartDate
          showEndDate
          // ShowTinNumber
          // showCustomsProcedure
          showCustomsList
          onSearch={handleSubmit}
          tabelRef={tableRef}
        />
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
            <Column filter filterField="reg_no" field={'reg_no'} header={'Register Number'} />
            <Column field={'reg_dat'} header={'Register Date'} />
            <Column filter filterField="cns_code" field={'cns_code'} header={'Company TIN'} />
            <Column field={'cns_name'} header={'Company Name'} />
            <Column filter filterField="hscode" field={'hscode'} header={'Hs Code'} />
            <Column field={'gross_mass'} header={'Gross Mass'} />
            <Column field={'Net_Mass'} header={'Net Mass'} />
            <Column field={'Good_Description2'} header={'Desc 1'} />
            <Column field={'Good_Description3'} header={'Desc 2'} />
            <Column field={'Package_Code'} header={'Package Code'} />
            <Column field={'finName'} header={'finName'} />
            <Column field={'tot_pkg'} header={'Total Package'} />
            <Column field={'dec_ref'} header={'Dec Ref#'} />
            <Column field={'load_list'} header={'Load List'} />
            <Column filter filterField="status" field={'status'} header={'Status'} />
            <Column field={'arr_date'} header={'Arrival date'} />
            <Column field={'dept_off_nam'} header={'Departure Office'} />
            <Column field={'destn_nam'} header={'Destination Name'} />
            <Column field={'destn_cty'} header={'Destination City'} />
            <Column field={'transit_type'} header={'Transit Type'} />
            <Column field={'exp_code'} header={'Export Code'} />
            <Column field={'exp_nam'} header={'Export Name'} />
            <Column field={'cty_export'} header={'City Of Export'} />
            <Column field={'cty_export_name'} header={'Name of City of Export'} />
            <Column field={'cty_destn_cod'} header={'Destination City Code'} />
            <Column field={'cty_destn_name'} header={'Destination City Name'} />
            <Column field={'mod_of_transport'} header={'Mode of Transport'} />
            <Column field={'principal_cod'} header={'Principal Code'} />
            <Column field={'principal_nam'} header={'Prinicpal Name'} />
            <Column field={'represented_by'} header={'Represented By'} />
            <Column field={'declarant_code'} header={'Declarant TIN'} />
            <Column field={'declarant_name'} header={'Declarant Name'} />
            <Column field={'max_date_of_arrival_limit'} header={'max of Limit of transit'} />
            <Column field={'Max_date_allowed'} header={'Max date allowed'} />
            <Column field={'declaration_ref_yr'} header={'Dec Ref Year'} />
            <Column field={'Nationality_of_transport'} header={'Nationality of transport'} />
            <Column field={'TPT_MOT_DPA_NAMA'} header={'TPT MOT DPA NAMA'} />
            <Column field={'TPT_MOT_BRD_NAMA'} header={'TPT MOT BRD NAMA'} />
            <Column field={'lorry_to_border'} header={'Lorry to Border'} />
            <Column field={'cty_border'} header={'City of border'} />
            <Column field={'cty_dep'} header={'Depurture City'} />
            <Column field={'seal_affixed_no'} header={'Seal No'} />
            <Column field={'seal_identity'} header={'Seal Id'} />
            <Column field={'Garanty_cod'} header={'Garanty Code'} />
            <Column field={'Garanty_amnt'} header={'Garanty Amount'} />
            <Column field={'Itm_No'} header={'Item No'} />
            <Column field={'Pack_Nbr'} header={'Package Number'} />
            <Column field={'Package_Mark'} header={'Package Mark'} />
            <Column field={'Package_Name'} header={'Package Name'} />
            <Column field={'at1_cod'} header={'Att Code'} />
            <Column field={'at1_nbr'} header={'Att Number'} />
            <Column field={'at2_cod'} header={'Att Code'} />
            <Column field={'at2_nbr'} header={'Att Number'} />
            <Column field={'at3_cod'} header={'Att Code'} />
            <Column field={'at3_nbr'} header={'Att Number'} />
            <Column field={'at4_cod'} header={'Att Code'} />
            <Column field={'at4_nbr'} header={'Att Number'} />
            <Column field={'val_no'} header={'Val Number'} />
            <Column field={'ast_dat'} header={'Ast date'} />
            <Column field={'transit_officer'} header={'Transit officer'} />
            <Column field={'cont1'} header={'Container #'} />
            <Column field={'cont2'} header={'Container #'} />
            <Column field={'cont_flg'} header={'Container flag'} />
            <Column field={'del_cod'} header={'Dec Code'} />
            <Column field={'del_nam'} header={'Dec Name'} />
            <Column field={'gar_cod'} header={'gar code'} />
            <Column field={'gar_amt'} header={'gar Amount'} />
            <Column field={'trsctl'} header={'trsctl'} />
            <Column field={'dat'} header={'dat'} />
            <Column field={'plc'} header={'plc'} />

            {/* {reportData.length > 0 &&
              Object.keys(reportData[0]).map((keys, index) => (
                <Column key={index} field={keys} header={keys} />
              ))} */}
            {/* <Column field="id" header="Id"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="description" header="Description"></Column>
            <Column field="active" header="Active"></Column> */}
          </DataTable>
        </Box>
      </SimpleCard>
    </Container>
  );
};

export default OverallReport;
