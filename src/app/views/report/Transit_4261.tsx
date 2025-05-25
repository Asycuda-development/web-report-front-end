import { SimpleCard } from '../../components';
import { Box, styled, LinearProgress } from '@mui/material';
import React, { useEffect, useState, useRef } from 'react';
import { ROWS_PER_PAGE } from '../../utils/constant';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
// I love you
// const Container = styled('div')(({ theme }) => ({
//   margin: '30px',
//   [theme.breakpoints.down('sm')]: { margin: '16px' },
//   '& .breadcrumb': {
//     marginBottom: '30px',
//     [theme.breakpoints.down('sm')]: { marginBottom: '16px' }
//   }
// }));

// const LoadingMessage = styled('p')({
//   fontSize: '45px',
//   textAlign: 'center',
//   position: 'absolute',
//   top: '68%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)'
// });

// const EmptyDataMessage = styled('p')({
//   fontSize: '45px',
//   textAlign: 'center',
//   position: 'absolute',
//   top: '68%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)'
// });

const Transit_4261 = () => {
  const [reportData, setReportData] = useState([]);
  const tableRef: any = useRef(null);
  // const [isLoading, setIsLoading] = useState(false);
  // const [loadingMessage, setLoadingMessage] = useState('Report generating');
  // const [emptyDataMessage, setEmptyDataMessage] = useState('');
  // useEffect(() => {
  //   if (isLoading) {
  //     const interval = setInterval(() => {
  //       setLoadingMessage((prev) => {
  //         switch (prev) {
  //           case 'Report is generating':
  //             return 'Report is generating.';
  //           case 'Report is generating.':
  //             return 'Report is generating..';
  //           case 'Report is generating..':
  //             return 'Report is generating...';
  //           default:
  //             return 'Report is generating.';
  //         }
  //       });
  //     }, 500);
  //     return () => clearInterval(interval);
  //   }
  // }, [isLoading]);

  const handleSubmit = async (data: SearchData) => {
    try {
      //     setIsLoading(true);
      //     setLoadingMessage('Report fenerating');
      const res = await axios.post('/reporting/TransitReport4261', {
        type: data.customsProcedure,
        customsCode: data.CustomsCode,
        ...data
      });
      if (res.data.length === 0) {
        //     setEmptyDataMessage('No Content to load');
        setReportData([]);
      } else {
        setReportData(res.data);
        //     setEmptyDataMessage('');
      }
    } catch (error) {
      // } finally {
      //   setIsLoading(false);
      // }
    }
  };
  return (
    //   <Container>
    <SimpleCard title="4261- Transit">
      <ReportHeaderInputs
        showStartDate
        showEndDate
        showRegDate
        showfarwarCode
        showDestinationCustomsList
        showTransitType2
        //  showCompanyContractorCode
        onSearch={handleSubmit}
        tabelRef={tableRef}
      />
      {/* {isLoading && (
          <>
            <LinearProgress />
            <LoadingMessage>{loadingMessage}</LoadingMessage>
          </>
        )} */}
      <Box width="100%" overflow="auto">
        {/* {!isLoading && reportData.length === 0 && emptyDataMessage && (
            <EmptyDataMessage>{emptyDataMessage}</EmptyDataMessage>
          )}
          {!isLoading && reportData.length > 0 && ( */}
        <DataTable
          ref={tableRef}
          value={reportData}
          rows={ROWS_PER_PAGE}
          rowsPerPageOptions={[5, 10, 25, 50, 100]}
          paginator
          stripedRows
          showGridlines
        >
          <Column field={'transit_Type'} header={'Transit_type'} />
          <Column field={'declaration_Ref_Yr'} header={'Declaration_Ref_Year'} />
          <Column field={'dept_Off_Nam'} header={'Departure_Off_Name'} />
          <Column field={'destn_Nam'} header={'Destination_off_Name'} />
          <Column field={'status'} header={'Status'} />
          <Column field={'reg_No'} header={'Reg_No'} />
          <Column field={'reg_Dat'} header={'Reg_Dat'} />
          <Column field={'val_No;'} header={'Validation No;'} />
          <Column field={'arr_Date'} header={'Arrival Date'} />
          <Column field={'max_Date_Of_Arrival_Limit'} header={'Max_Date_Of_Arrival_Limit'} />
          <Column field={'transit_Officer'} header={'Transit_Officer'} />
          <Column field={'declarant_Code'} header={'Declarant_Code'} />
          <Column field={'declarant_Name'} header={'Declarant_Name'} />
          <Column field={'cns_Code'} header={'Consignee_Code'} />
          <Column field={'cns_Name'} header={'Consignee_Name'} />
          <Column field={'Max_Date_Allowed'} header={'Max_Date_Allowed'} />
          <Column field={'principal_Cod'} header={'Principal_Cod'} />
          <Column field={'principal_Nam'} header={'Principal_Nam'} />
          <Column field={'represented_By'} header={'Represented_By'} />
          <Column field={'exp_Code'} header={'Exp_Code'} />
          <Column field={'cty_Destn_Cod'} header={'Cty_Destn_Cod'} />
          <Column field={'mod_Of_Transport'} header={'Mod_Of_Transport'} />
          <Column field={'lorry_To_Border'} header={'lorry_To_Border'} />
          <Column field={'gross_Mass'} header={'Gross_Mass'} />
          <Column field={'Net_Mass'} header={'Net_Mass'} />
          <Column field={'tot_Pkg'} header={'Tot_Pkg                   '} />
          <Column field={'Package_Name'} header={'Package_Name'} />
          <Column field={'hscode'} header={'hscode'} />
          <Column field={'Good_Description2'} header={'Good_Description2'} />
          <Column field={'Good_Description3'} header={'Good_Description3'} />
          <Column field={'Package_Mark'} header={'Package_Mark'} />
          <Column field={'cont_Flg'} header={'Container Flag'} />
         <Column field={'cont1'} header={'Container 1'} />
         <Column field={'cont2'} header={'Container 2'} />
         <Column field={'cont1'} header={'Container 1'} />
         <Column field={'cont2'} header={'Container 2'} />
         <Column field={'seal_Affixed_No'} header={'Seal_Affixed_No'} />
         <Column field={'seal_Identity'} header={'Seal_Identity'} />
         <Column field={'aranty_Cod'} header={'Garanty_Code'} />
         <Column field={'Garanty_Amnt'} header={'Garanty_Amnt'} />
         <Column field={'at1_Cod'} header={'ATT_AT1_COd'} />
         <Column field={'at1_Nbr'} header={'ATT_AT1_nbr'} />
         <Column field={'at2_Cod'} header={'ATT_AT2_COd'} />
         <Column field={'at2_Nbr'} header={'ATT_AT2_nbr'} />
         <Column field={'at3_Cod'} header={'ATT_AT3_COd'} />
         <Column field={'at3_Nbr'} header={'ATT_AT3_nbr'} />
         <Column field={'at4_Cod'} header={'ATT_AT4_COd'} />
         <Column field={'at4_Nbr'} header={'ATT_AT4_nbr'} />
          <Column field={'Itm_No'} header={'Itm_No'} />
          <Column field={'dec_Ref'} header={'dec_Ref'} />
          <Column field={'load_List'} header={'load_List'} />
          <Column field={'destn_Cty'} header={'destn_Cty'} />
          <Column field={'exp_Nam'} header={'exp_Nam'} />
          <Column field={'cty_Export'} header={'cty_Export'} />
          <Column field={'cty_Export_Name'} header={'cty_Export_Name'} />
          <Column field={'cty_Destn_Name'} header={'cty_Destn_Name'} />
          <Column field={'Nationality_Of_Transport'} header={'Nationality_Of_Transport'} />
          <Column field={'cty_Border'} header={'cty_Border'} />
          <Column field={'cty_Dep'} header={'cty_Dep'} />
          <Column field={'Pack_Nbr'} header={'Pack_Nbr'} />
          <Column field={'Package_Code'} header={'Package_Code'} />
          <Column field={'del_Cod'} header={'del_Cod'} />
          <Column field={'del_Nam'} header={'del_Nam'} />
        </DataTable>
        {/* )} */}
      </Box>
    </SimpleCard>
    // </Container>
  );
};

export default Transit_4261;
