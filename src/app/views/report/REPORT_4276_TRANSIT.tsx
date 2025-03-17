import { Box, styled } from '@mui/material';
import axios from 'axios';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { useEffect, useRef, useState } from 'react';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
import { SimpleCard } from '../../components';
import { ROWS_PER_PAGE } from '../../utils/constant';

const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' }
  }
}));

const TransitReport4276 = () => {
  const [reportData, setReportData] = useState([]);
  const tableRef: any = useRef(null);

  useEffect(() => {}, []);

  const handleSubmit = async (data: SearchData) => {
    try {
        console.log(data)
      const res = await axios.post('/reporting/TransitReport4276', {
        startDate: data.startDate,
        endDate: data.endDate,
        customsCode: data.CustomsCode,
        type: data.customsProcedure,
        ...data
      });

      setReportData(res.data);
    } catch (error) {}
  };

  return (
    <Container>
      <SimpleCard title="TransitReport4276">
        <ReportHeaderInputs
          showStartDate
          showEndDate
          showCustomsList
          showDestinationCustomsList
          showTransitType2
          // ShowTinNumber
          // showCustomsProcedure
          //showDepartureDate
          showRegDate
          //showArrivalDate
          //showValidationDate
          //showTransitType
          //showCustomsProcedure
          //ShowTinNumber
          showForeignRegNo
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
            <Column  field={'totPkg'} header={'totPkg '} />
            <Column field={'dec_ref'} header={'decRef'} />
            <Column field={'load_list'} header={'loadList'} />
            <Column field={'reg_no'} header={'REG_NO'} />
            <Column field={'reg_dat'} header={'regDat'} />
            <Column style={{minWidth:"20rem"}}field={'status'} header={'status'} />
            <Column style={{minWidth:"12rem"}}field={'arr_date'} header={'arr_date'} />
            <Column field={'dept_off_nam'} header={'dept_off_nam'} />
            <Column field={'destn_nam'} header={'destn_nam'} />
            <Column field={'destn_cty'} header={'destnCty'} />
            <Column field={'transit_type'} header={'transitType'} />
            <Column field={'exp_code'} header={'expCode'} />
            <Column field={'exp_nam'} header={'expNam'} />
            <Column field={'cns_code'} header={'cnsCode'} />
            <Column style={{minWidth:"25rem"}}field={'cns_name'} header={'cns_name'} />
            <Column field={'cty_export'} header={'ctyExport'} />
            <Column style={{minWidth:"15rem"}}field={'cty_export_name'} header={'ctyExportName'} />
            <Column field={'cty_destn_cod'} header={'ctyDestnCod'} />
            <Column field={'cty_destn_nam'} header={'ctyDestnNam'} />
            <Column field={'mod_of_transport'} header={'modOfTransport'} />
            <Column field={'principal_cod'} header={'principalCod'} />
            <Column style={{minWidth:"25rem"}}field={'principal_nam'} header={'principalNam'} />
            <Column style={{minWidth:"20rem"}}field={'represented_by'} header={'representedBy'} />
            <Column field={'declarant_code'} header={'declarantCode'} />
            <Column style={{minWidth:"12rem"}}field={'declarant_name'} header={'declarantName'} />
            <Column field={'max_date_of_arrival_limit'} header={'maxDateOfArrivalLimit'} />
            <Column field={'Max_date_allowed'} header={'maxDateAllowed'} />
            <Column field={'declaration_ref_yr'} header={'declarationRefYr'} />
            <Column field={'Nationality_of_transport'} header={'nationalityOfTransport'} />
            <Column field={'TPT_MOT_DPA_NAMA'} header={'TPT_MOT_DPA_NAMA'} />
            <Column field={'TPT_MOT_BRD_NAMA'} header={'TPT_MOT_BRD_NAMA'} />
            <Column field={'lorry_to_border'} header={'lorry_to_border'} />
            <Column field={'cty_border'} header={'cty_border'} />
            <Column field={'cty_dep'} header={'cty_dep'} />
            <Column field={'seal_affixed_no'} header={'seal_affixed_no'} />
            <Column field={'seal_identity'} header={'seal_identity'} />
            <Column field={'Garanty_cod'} header={'Garanty_cod'} />
            <Column field={'Garanty_amnt'} header={'Garanty_amnt'} />
            <Column style={{minWidth:"15rem"}}field={'Itm_No'} header={'Itm_No'} />
            <Column field={'Pack_Nbr'} header={'Pack_Nbr'} />
            <Column field={'Package_Mark'} header={'Package_Mark'} />
            <Column field={'hscode'} header={'hscode'} />
            <Column style={{minWidth:"20rem"}}field={'gross_mass'} header={'gross_mass'} />
            <Column style={{minWidth:"30rem"}}field={'Net_Mass'} header={'Net_Mass'} />
            <Column field={'Good_Description2'} header={'Good_Description2'} />
            <Column style={{minWidth:"12rem"}}field={'Good_Description3'} header={'Good_Description3'} />
            <Column style={{minWidth:"20rem"}}field={'Package_Code'} header={'Package_Code'} />
            <Column style={{minWidth:"20rem"}}field={'Package_Name'} header={'Package_Name'} />
            <Column style={{minWidth:"20rem"}}field={'at1_cod'} header={'at1_cod'} />
            <Column style={{minWidth:"20rem"}}field={'at1_nbr'} header={'at1_nbr'} />
            <Column field={'at2_cod'} header={'at2_cod'} />
            <Column style={{minWidth:"20rem"}}field={'at2_nbr'} header={'at2_nbr'} />
            <Column field={'at3_cod'} header={'at3_cod'} />
            <Column style={{minWidth:"20rem"}}field={'at3_nbr'} header={'at3_nbr'} />
            <Column field={'at4_cod'} header={'at4_cod'} />
            <Column style={{minWidth:"20rem"}}field={'at4_nbr'} header={'at4_nbr'} />
            <Column field={'val_no'} header={'val_no'} />
            <Column style={{minWidth:"12rem"}}field={'transit_officer'} header={'transit_officer'} />
            <Column field={'cont1'} header={'cont1'} />
            <Column field={'cont2'} header={'cont2'} />
            <Column field={'cont_flg'} header={'contFlg'} />
            <Column field={'del_cod'} header={'del_cod'} />
            <Column style={{minWidth:"20rem"}} field={'del_nam'} header={'del_nam'} />
            <Column field={'gar_cod'} header={'gar_cod'} />
            <Column  field={'gar_amt'} header={'gar_amt'} />
           
        
           
           
        
            {/* <Column field={'tad_tot'} header={'Customs Value'} /> */}
          </DataTable>
        </Box>
      </SimpleCard>
    </Container>
  );
};

export default TransitReport4276;
