import { SimpleCard } from '../../components';
import { Box, styled, LinearProgress } from '@mui/material';
import React, { useEffect, useState, useRef } from 'react';
import { ROWS_PER_PAGE } from '../../utils/constant';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
import { Toast } from 'primereact/toast';

function DPS_4552() {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false);
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
      setLoading(true);
      const res = await axios.post('/reporting/DpsReport4552', {
        ...data,
        type: data.customsProcedure,
        customsCode: data.CustomsCode
      });
      if (res.data.length === 0) {
        setLoading(false)
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
  },{
    label: 'company',
    name: 'company'
},{
  label: 'Sad_Financial',
  name: 'Sad_Financial'
},{
  label: 'Examiner',
  name: 'Examiner'
},{
  label: 'I_no',
  name: 'I_no'
},{
  label: 'P_no',
  name: 'P_no'
},{
  label: 'M_no',
  name: 'M_no'
},{
  label: 'HsCode',
  name: 'HsCode'
}]

  return (
    <SimpleCard title="DPS_4552">
      <ReportHeaderInputs
        showStartDate
        showEndDate
        ShowTinNumber
        showExemptionType
        showCustomsProcedure
        showDestinationCustomsList
        showBasedOn
        basedOnOptions={basedOnOptions}
        showRegDate
        showAssesDate
        showPayDate
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
          emptyMessage={'No Data Available'}
        >
             
	            <Column field={'transportCustomsName'}header ={'Border office'}/>
	            <Column field={'customsName'}header ={'Customs Office'}/>
              <Column field={'sadType'}header ={'Sad_Type'} />
              <Column field={'regSer'}header= {'Reg_Ser'}/>
	            <Column field={'regNo'}header= {'Reg_No'}/>
	            <Column field={'regDate;'}header= {'Reg_Date;'}/>
	            <Column field={'asmtNo'}header ={'Asmt_No'}/>
	            <Column field={'astDate'}header ={'AsMt_Date'}/>
	            <Column field={'rcptNo'}header= {'RCPT_No'}/>
	            <Column field={'rcptDate'}header ={'RECPT_Date'}/>
              <Column field={'status'}header= {'status'}/>
              <Column style={{minWidth:"15rem"}}field={'brokerTin'}header= {'BROKER_TIN'}/>
              <Column style={{minWidth:"25rem"}}field={'decNam'}header= {'BROKER_NAME'}/>
              <Column style={{minWidth:"15rem"}}field={'companyTin'}header= {'Company_TIN'}/>
	            <Column style={{minWidth:"30rem"}}field={'cmpNam'}header= {'Company_NAME'}/>
              <Column field={'fisCod'}header= {'SAD_Financial_Code'}/>
              <Column style={{minWidth:"30rem"}}field={'finNam'}header={'SAD_Financial_Name'}/>
              <Column field={'itemTotal'}header= {'Item_Total'}/>
	            <Column field={'itemNo'}header= {'Item_No'}/>
	            <Column field={'hsCode'}header= {'HS Code Item1'}/>
              <Column style={{minWidth:"30rem"}}field={'dsc'}header={'HS Desc only Item No one'}/>
	            <Column style={{minWidth:"30rem"}}field={'desc1'}header= {'	HS Desc1 only Item No one'}/>
	            <Column style={{minWidth:"30rem"}}field={'MRK1'}header= {'Mark 1 only Item No one'}/>
	            <Column style={{minWidth:"30rem"}}field={'MRK2'}header= {'Mark 2 only Item No one'}/>
	            <Column field={'cpc'}header= {'Customs Proc'}/>
	            <Column field={'natProc'}header= {'Nat procedure'}/>
              <Column field={'countryOrg'}header ={'Country_Org'}/>
              <Column field={'countryexport'}header= {'Country_Export'}/>
              <Column field={'countryDest'}header= {'Country_Dest_Name'}/>
              <Column field={'lorryTotal'}header ={'Lorry_Total'}/>
              <Column field={'declarationValueCurrecy'}header= {'Declaration_Value_currency'}/>
	            <Column field={'declarationValueAfs'}header={'Declaration_Value_Afs'}/>
	            <Column field={'declarationTaxes'}header ={'Declaration_Taxes'}/>
              <Column field={'locGoods'}header= {'Location_Of_Goods'}/>
              <Column field={'typeoftransport'}header= {'Type of Transport'}/>
              <Column field={'brdCty'}header ={'Identity of Truck Crossing Border1 Box21'}/>
	            <Column field={'brdNam'}header ={'Identity of Truck Crossing Border2 Box21'}/>
              <Column field={'gcategoryOfGoods1'}header= {'gcategory 1'}/>
              <Column field={'gcategoryOfGoods2'}header ={'gcategory 2'}/>
              <Column field={'itemGrossWeight'}header= {'Item_Gross_Weight only Item No one'}/>
	            <Column field={'itemNetWeight'}header= {'Item_Net_Weight only Item No one'}/>
              <Column field={'containerFlag'}header= {'Container_flag'}/>
              <Column field={'licCod'}header ={'Lic Cod'}/>
              <Column field={'txtRsv'}header= {'txt_Reserved'}/>

	            <Column field={'customsCode'}header ={'customsCode'}/>
	            <Column style={{minWidth:"15rem"}}field={'bankNam'}header= {'bankNam'}/>
	            <Column field={'countryDestCod'}header= {'countryDestCod'}/>
	            <Column field={'freeTxt'}header= {'freeTxt'}/>
	            <Column field={'dpaCty'}header={'dpaCty'}/>
	            <Column field={'dpaNam'}header= {'dpaNam'}/>
	            
	            
	           
	           
	          
        </DataTable>
      </ Box>
      <Toast ref={toastRef} />
    </SimpleCard>
  );
}

export default DPS_4552