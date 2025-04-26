import { Box, styled } from '@mui/material';
import axios from 'axios';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { useEffect, useRef, useState } from 'react';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
import { SimpleCard } from '../../components';
import { ROWS_PER_PAGE } from '../../utils/constant';

function DPS_4555() {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);

  const handleSubmit = async (data: SearchData) => {
    console.log(data)
    try {
      setLoading(true)
      const res = await axios.post('/reporting/DpsReport4555', {
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

  return (
    <SimpleCard title="4555-DPS">
      <ReportHeaderInputs
        showStartDate
        showEndDate
        ShowTinNumber
        showCustomsProcedure
        showRegDate
        showAssesDate
        showPayDate
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
          <Column field={'ideTypSad'} header={'SAD Type'} />
          <Column style={{ minWidth: "12rem" }} field={'tptCuoNam'} header={'Border office'} />
          <Column style={{ minWidth: "12rem" }} filter filterField="ideCuoNam" field={'ideCuoNam'} header={'Customs Office'} />
          <Column field={'itemTotal'} header={'Item_Total'} />
          <Column filter filterField='registrationNo' field={'regNo'} header={'Reg_No'} />
          <Column field={'regDate'} header={'Reg_Date'} />
          //<Column filter filterField='asmtNo' field={'asmtNo'} header={'Assessment Number'} />
          <Column field={'astDate'} header={'Assmt_Date'} />
          <Column field={'rcptNo'} header={'RCPT_NO'} />
          <Column field={'rcptDate'} header={'RCPT_Date'} />
          <Column field={'status'} header={'SAD_STATUS'} />
          <Column filter filterField='brokerTIN' field={'brokerTIN'} header={'Broker_TIN'} />
          <Column style={{ minWidth: "20rem" }} field={'decNam'} header={'Broker_Name'} />
          <Column field={'companyTin'} header={'Company_TIN'} />
          <Column style={{ minWidth: "20rem" }} field={'cmpNam'} header={'Company_Name'} />
          <Column field={'cmpFisCod'} header={'SAD_Financial_Code'} />
          <Column style={{ minWidth: "20rem" }} field={'finNam'} header={'Financial_Name'} />
          <Column style={{ minWidth: "12rem" }} field={'countryOrg'} header={'Country_Origin_Name'} />
          <Column style={{ minWidth: "12rem" }} field={'countryExport'} header={'Country_Export_Name'} />
          <Column field={'lorryTotal'} header={'Lorry_Total'} />
          <Column field={'declarationValueCurrency'} header={'Declaration_Value in Foriegn Currency'} />
          <Column field={'declarationValueAfs'} header={'Declaration_Value_Afs'} />
          <Column field={'declarationTaxes'} header={'	Declaration_Taxes'} />
          <Column field={'ideCuoCod'} header={'Custom Code'} />
          <Column style={{ minWidth: "12rem" }} field={'bankNam'} header={'Bank Name'} />
          <Column style={{ minWidth: "12rem" }} field={'countryDest'} header={'Country_Destination_Name'} />
         
    
        
          
         


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
  );
};

export default DPS_4555