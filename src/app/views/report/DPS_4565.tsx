import { Box, styled } from '@mui/material';
import axios from 'axios';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { useEffect, useRef, useState } from 'react';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
import { SimpleCard } from '../../components';
import { ROWS_PER_PAGE } from '../../utils/constant';
//checked

const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' }
  }
}));

function DPS_4565() {
  const [reportData, setReportData] = useState([]);
  const tableRef: any = useRef(null);

  useEffect(() => { }, []);

  const handleSubmit = async (data: SearchData) => {
    console.log(data)
    try {
      const res = await axios.post('/reporting/DpsReport4565', {
        ...data,
        type: data.customsProcedure,
        customsCode: data.CustomsCode
      });

      setReportData(res.data);
    } catch (error) { }
  };

  return (
    <Container>
      <SimpleCard title="4565-DPS">
        <ReportHeaderInputs
          showStartDate
          showEndDate
          //ShowTinNumber
         // showExemptionType
          showCustomsProcedure
          showRegDate
          showAssesDate
          showPayDate
         // showOperationDate
          showCustomsList
          ShowHsCode
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
            <Column field={'Sad_type'} header={'SAD Type'} />
            <Column style={{minWidth: "12rem"}} field={'tpt_custom_nam'} header={'Transport Custom Name'} />
            <Column style={{minWidth: "12rem"}} filter filterField="ide_custom_nam" field={'ide_custom_nam'} header={'Custom Name'} />
            <Column field={'custom_cod'} header={'Custom Code'} />
            <Column field={'Item_total'} header={'Item Total'} />
            <Column field={'Item_No'} header={'itemNo'} />
            <Column field={'Total_Package'} header={'Total Package'} />
            <Column field={'Code_of_package'} header={'Package Code'} />
            <Column field={'Type_of_Package'} header={'Package Type'} />
            <Column filter filterField='Reg_No' field={'Reg_No'} header={'RegistrationNo'} />
            <Column field={'Reg_Date'} header={'Registration Date'} />
            <Column filter filterField='ASMT_No' field={'ASMT_No'} header={'Assessment Number'} />
            <Column field={'AST_Date'} header={'Assessment Date'} />
            <Column field={'RCPT_No'} header={'RCPT_NO'} />
            <Column field={'RCPT_Date'} header={'Receipt Date'} />
            <Column style={{minWidth: "12rem"}} field={'bank_nam'} header={'Bank Name'} />
            <Column field={'hs_code'} header={'hsCode'} />
            <Column field={'cpc'} header={'cpc'} />
            <Column style={{ minWidth: "20rem" }} field={'dsc'} header={'Goods Description'} />
            <Column style={{ minWidth: "25rem" }} field={'gds_description'} header={'Goods Additional Description'} />
            <Column style={{ minWidth: "20rem" }} field={' Pakage_mark1'} header={'Package Mark1'} />
            <Column field={'Pakage_mark2'} header={'Package Mark2'} />
           
            <Column field={'Customs_Proc'} header={'Customs Procedure'} />
            <Column field={'Item_Gross_Weight'} header={'Item Gross Weight'} />
            <Column field={'Item_Net_Weight'} header={'Item Net Weight'} />
            <Column filter filterField='Broker_TIN' field={'Broker_TIN'} header={'Broker TIN'} />
            <Column style={{minWidth: "12rem"}} field={' dec_nam'} header={'Declarant Name'} />
            <Column field={'Company_TIN'} header={'Company TIN'} />
            <Column style={{minWidth: "20rem"}} field={'CMP_Nam'} header={'Company Name'} />
            <Column style={{ minWidth: "20rem" }} field={'fin_nam'} header={'Financial Name'} />
            <Column style={{minWidth: "12rem"}} field={' Country_Dest'} header={'Country Destination Name'} />
            <Column style={{minWidth: "12rem"}} field={'Country_Export'} header={'Country Export Name'} />
            <Column style={{minWidth: "12rem"}} field={'Country_Org'} header={'Country Origin Name'} />
            <Column field={'Lorry_Total'} header={'Lorry Total'} />
            <Column field={'Currrency_code'} header={'Currency Code'} />
            <Column field={'Currecny_Rate'} header={'Currency Rate'} />
            <Column field={'Declaration_Value_currency'} header={'Declaration Value Currency'} />
            <Column field={'Declaration_Value_Afs'} header={'Declaration Value Afs'} />
            <Column field={'Declaration_Taxes'} header={'DECLARATION_TAXES'} />
            <Column field={'Item_Value_currency'} header={'Item Value Currency'} />
            <Column field={'Item_Value_Afs'} header={'Item Value Afs'} />
            <Column field={'tax_amt'} header={'CODE_TAX_AMOUNT'} />
            <Column field={'status'} header={'SAD_STATUS'} />
       

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

export default DPS_4565