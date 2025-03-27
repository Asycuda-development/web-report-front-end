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
              <Column field={'sadType'}header ={'sadType'} />
	            <Column field={'transportCustomsName'}header ={'transportCustomsName'}/>
	            <Column field={'customsName'}header ={'customsName'}/>
	            <Column field={'customsCode'}header ={'customsCode'}/>
	            <Column field={'typeoftransport'}header= {'typeoftransport'}/>
	            <Column field={'regSer'}header= {'regSer'}/>
	            <Column field={'regNo'}header= {'regNo'}/>
	            <Column field={'regDate;'}header= {'regDate;'}/>
	            <Column field={'asmtNo'}header ={'asmtNo'}/>
	            <Column field={'astDate'}header ={'astDate'}/>
	            <Column field={'rcptNo'}header= {'rcptNo'}/>
	            <Column field={'rcptDate'}header ={'rcptDate'}/>
	            <Column style={{minWidth:"15rem"}}field={'bankNam'}header= {'bankNam'}/>
	            <Column style={{minWidth:"15rem"}}field={'brokerTin'}header= {'brokerTin'}/>
	            <Column style={{minWidth:"25rem"}}field={'decNam'}header= {'decNam'}/>
	            <Column style={{minWidth:"15rem"}}field={'companyTin'}header= {'companyTin'}/>
	            <Column style={{minWidth:"30rem"}}field={'cmpNam'}header= {'cmpNam'}/>
	            <Column style={{minWidth:"30rem"}}field={'finNam'}header={'finNam'}/>
	            <Column field={'fisCod'}header= {'fisCod'}/>
	            <Column field={'itemTotal'}header= {'itemTotal'}/>
	            <Column field={'itemNo'}header= {'itemNo'}/>
	            <Column field={'hsCode'}header= {'hsCode'}/>
	            <Column style={{minWidth:"30rem"}}field={'dsc'}header={'dsc'}/>
	            <Column style={{minWidth:"30rem"}}field={'desc1'}header= {'desc1'}/>
	            <Column style={{minWidth:"30rem"}}field={'MRK1'}header= {'MRK1'}/>
	            <Column style={{minWidth:"30rem"}}field={'MRK2'}header= {'MRK2'}/>
	            <Column field={'cpc'}header= {'cpc'}/>
	            <Column field={'natProc'}header= {'natProc'}/>
	            <Column field={'countryDest'}header= {'countryDest'}/>
	            <Column field={'countryDestCod'}header= {'countryDestCod'}/>
	            <Column field={'countryexport'}header= {'countryexport'}/>
	            <Column field={'countryOrg'}header ={'countryOrg'}/>
	            <Column field={'lorryTotal'}header ={'lorryTotal'}/>
	            <Column field={'declarationValueCurrecy'}header= {'declarationValueCurrecy'}/>
	            <Column field={'declarationValueAfs'}header={'declarationValueAfs'}/>
	            <Column field={'declarationTaxes'}header ={'declarationTaxes'}/>
	            <Column field={'status'}header= {'status'}/>
	            <Column field={'locGoods'}header= {'locGoods'}/>
	            <Column field={'licCod'}header ={'licCod'}/>
	            <Column field={'freeTxt'}header= {'freeTxt'}/>
	            <Column field={'brdCty'}header ={'brdCty'}/>
	            <Column field={'brdNam'}header ={'brdNam'}/>
	            <Column field={'dpaCty'}header={'dpaCty'}/>
	            <Column field={'dpaNam'}header= {'dpaNam'}/>
	            <Column field={'gcategoryOfGoods1'}header= {'gcategoryOfGoods1'}/>
	            <Column field={'itemGrossWeight'}header= {'itemGrossWeight'}/>
	            <Column field={'itemNetWeight'}header= {'itemNetWeight'}/>
	            <Column field={'gcategoryOfGoods2'}header ={'gcategoryOfGoods2'}/>
	            <Column field={'txtRsv'}header= {'txtRsv'}/>
	            <Column field={'containerFlag'}header= {'containerFlag'}/>
        </DataTable>
      </ Box>
      <Toast ref={toastRef} />
    </SimpleCard>
  );
}

export default DPS_4552