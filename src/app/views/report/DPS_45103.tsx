import { SimpleCard } from '../../components';
import { Box, styled, LinearProgress } from '@mui/material';
import React, { useEffect, useState, useRef } from 'react';
import { ROWS_PER_PAGE } from '../../utils/constant';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';

function DPS_45103() {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false);
  const tableRef: any = useRef(null);

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true);
      const res = await axios.post('/reporting/DpsReport45103', {
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
    label: 'I_no',
    name: 'I_no'

},{
    label: 'P_no',
    name: 'P_no'

},{
    label: 'M_no',
    name: 'M_no'

}]

  return (
    <SimpleCard title="DPS_45103">
      <ReportHeaderInputs
        showStartDate
        showEndDate
        ShowTinNumber
        showExemptionType
        showCustomsProcedure
        showTaxCode
        showBasedOn
        basedOnOptions={basedOnOptions}
        showRegDate
        showAssesDate
        showPayDate
        showHsCode
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
            <Column field={'IdeCuoCod'} header={' IdeCuoCod'}/> 
            <Column field={'DestCustoms'} header={' DestCustoms'}/> 
            <Column field={'TypeSad'} header={' TypeSad'}/> 
            <Column field={'PayDate'} header={' PayDate'}/> 
            <Column field={'ProcExt'} header={' ProcExt'}/> 
            <Column field={'CustomsProc'} header={' CustomsProc'}/> 
            <Column field={'Dsc2'} header={' Dsc2'}/> 
            <Column style={{minWidth:"25rem"}}field={'Dsc1'} header={' Dsc1'}/> 
            <Column field={'HsCode'} header={' HsCode'}/> 
            <Column style={{minWidth:"30rem"}}field={'mark1'} header={' mark1'}/> 
            <Column field={'mark2'} header={' mark2'}/> 
            <Column field={'ItemNetWeight'} header={' ItemNetWeight'}/> 
            <Column field={'CompanyTIN'} header={' CompanyTIN'}/> 
            <Column field={'CmpName'} header={' CmpName'}/> 
            <Column field={'ItemValueCurrency'} header={' ItemValueCurrency'}/> 
            <Column field={'ItemValueAfs'} header={' ItemValueAfs'}/> 
            <Column field={'ItemTaxes'} header={' ItemTaxes'}/> 
            <Column field={'TaxCode'} header={' TaxCode'}/> 
            <Column field={'TaxDecription'} header={' TaxDecription'}/> 
            <Column field={'TaxRate'} header={' TaxRate'}/> 
            <Column field={'CodeTaxAmount'} header={' CodeTaxAmount'}/> 
        </DataTable>
      </ Box>
    </SimpleCard>
  );
}

export default DPS_45103