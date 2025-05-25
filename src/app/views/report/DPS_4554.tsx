import { Box, LinearProgress } from '@mui/material';
import axios from 'axios';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { useEffect, useRef, useState } from 'react';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
import { SimpleCard } from '../../components';
import { ROWS_PER_PAGE } from '../../utils/constant';

function DPS_4554() {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);

  useEffect(() => { }, []);

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true);
      const res = await axios.post('/reporting/DpsReport4554', {
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

    <SimpleCard title="4554-DPS">
      <ReportHeaderInputs
        showStartDate
        showEndDate
        ShowTinNumber
        showTaxCode
        showCustomsProcedure
        showRegDate
        showAssesDate
        showPayDate
        showCustomsList
        ShowHsCode
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

          <Column field={'ideTypSad'} header={'SAD Type'} />
          <Column style={{ minWidth: "12rem" }} field={'tptCuoNam'} header={'Border office'} />
          <Column style={{ minWidth: "12rem" }} filter filterField="ideCuoNam" field={'ideCuoNam'} header={'CustomـOfice_Name'} />
          <Column field={'ideCuoCod'} header={'Custom_Code'} />
          <Column field={'itemTotal'} header={'Item_Total'} />
          <Column field={'itemNo'} header={'Item_No'} />
          <Column field={'totalPackage'} header={'Total_Package'} />
          <Column field={'codeOfPackage'} header={'Package_Code'} />
          <Column field={'typeOfPackage'} header={'Package_Type'} />
          <Column filter filterField='registrationNo' field={'regNo'} header={'Reg_No'} />
          <Column field={'regDate'} header={'Registration Date'} />
          <Column filter filterField='asmtNo' field={'asmtNo'} header={'Assemt_Number'} />
          <Column field={'astDate'} header={'Assessment_Date'} />
          <Column field={'rcptNo'} header={'RCPT_NO'} />
          <Column field={'rcptDate'} header={'Receipt_Date'} />
          <Column style={{ minWidth: "12rem" }} field={'bankNam'} header={'Bank_Name'} />
          <Column field={'hsCode'} header={'HS_Code'} />
          <Column field={'cpc'} header={'cpc'} />
          <Column style={{ minWidth: "20rem" }} field={'dsc'} header={'Goods_Description'} />
          <Column style={{ minWidth: "25rem" }} field={'gdsDs3'} header={'Goods_Additional_Description'} />
          <Column style={{ minWidth: "20rem" }} field={'pckMrk1'} header={'Package_Mark1'} />
          <Column field={'pckMrk2'} header={'Package_Mark2'} />
          <Column field={'taxAmt'} header={'TAX_AMT'} />
          <Column field={'customsProc'} header={'Customs_Procedure'} />
          <Column field={'itemGrossWeight'} header={'Item_Gross_Weight'} />
          <Column field={'itemNetWeight'} header={'Item_Net_Weight'} />
          <Column filter filterField='brokerTIN' field={'brokerTIN'} header={'Broker_TIN'} />
          <Column style={{ minWidth: "12rem" }} field={'decNam'} header={'Declarant_Name'} />
          <Column field={'companyTin'} header={'Company_TIN'} />
          <Column style={{ minWidth: "15rem" }} field={'cmpNam'} header={'Company_Name'} />
          <Column style={{ minWidth: "20rem" }} field={'finNam'} header={'Financial_Name'} />
          <Column style={{ minWidth: "12rem" }} field={'countryDest'} header={'Country_Destination_Name'} />
          <Column style={{ minWidth: "12rem" }} field={'countryExport'} header={'Country_Export_Name'} />
          <Column style={{ minWidth: "12rem" }} field={'countryOrg'} header={'Country_Origin_Name'} />
          <Column field={'lorryTotal'} header={'Lorry_Total'} />
          <Column field={'currrencyCode'} header={'Currency_Code'} />
          <Column field={'currecnyRate'} header={'Currency_Rate'} />
          <Column field={'declarationValueCurrency'} header={'Declaration_Value_Currency'} />
          <Column field={'declarationValueAfs'} header={'Declaration_Value_Afs'} />
          <Column field={'declarationTaxes'} header={'DECLARATION_TAXES'} />
          <Column field={'itemValueCurrency'} header={'Item_Value_Currency'} />
          <Column field={'itemValueAfs'} header={'Item_Value_Afs'} />
          <Column field={'taxRate'} header={'Tax_Rate'} />
          <Column field={'codeTaxAmount'} header={'CODE_TAX_AMOUNT'} />
          <Column field={'taxCode'} header={'TAX_CODE'} />
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
  );
};

export default DPS_4554