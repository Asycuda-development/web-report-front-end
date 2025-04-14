import { Box, LinearProgress, styled } from '@mui/material';
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
          <Column style={{ minWidth: "12rem" }} field={'tptCuoNam'} header={'Transport Custom Name'} />
          <Column style={{ minWidth: "12rem" }} filter filterField="ideCuoNam" field={'ideCuoNam'} header={'Custom Name'} />
          <Column field={'ideCuoCod'} header={'Custom Code'} />
          <Column field={'itemTotal'} header={'Item Total'} />
          <Column field={'itemNo'} header={'itemNo'} />
          <Column field={'totalPackage'} header={'Total Package'} />
          <Column field={'codeOfPackage'} header={'Package Code'} />
          <Column field={'typeOfPackage'} header={'Package Type'} />
          <Column filter filterField='registrationNo' field={'regNo'} header={'RegistrationNo'} />
          <Column field={'regDate'} header={'Registration Date'} />
          <Column filter filterField='asmtNo' field={'asmtNo'} header={'Assessment Number'} />
          <Column field={'astDate'} header={'Assessment Date'} />
          <Column field={'rcptNo'} header={'RCPT_NO'} />
          <Column field={'rcptDate'} header={'Receipt Date'} />
          <Column style={{ minWidth: "12rem" }} field={'bankNam'} header={'Bank Name'} />
          <Column field={'hsCode'} header={'hsCode'} />
          <Column field={'cpc'} header={'cpc'} />
          <Column style={{ minWidth: "20rem" }} field={'dsc'} header={'Goods Description'} />
          <Column style={{ minWidth: "25rem" }} field={'gdsDs3'} header={'Goods Additional Description'} />
          <Column style={{ minWidth: "20rem" }} field={'pckMrk1'} header={'Package Mark1'} />
          <Column field={'pckMrk2'} header={'Package Mark2'} />
          <Column field={'taxAmt'} header={'TAX_AMT'} />
          <Column field={'customsProc'} header={'Customs Procedure'} />
          <Column field={'itemGrossWeight'} header={'Item Gross Weight'} />
          <Column field={'itemNetWeight'} header={'Item Net Weight'} />
          <Column filter filterField='brokerTIN' field={'brokerTIN'} header={'Broker TIN'} />
          <Column style={{ minWidth: "12rem" }} field={'decNam'} header={'Declarant Name'} />
          <Column field={'companyTin'} header={'Company TIN'} />
          <Column style={{ minWidth: "15rem" }} field={'cmpNam'} header={'Company Name'} />
          <Column style={{ minWidth: "20rem" }} field={'finNam'} header={'Financial Name'} />
          <Column style={{ minWidth: "12rem" }} field={'countryDest'} header={'Country Destination Name'} />
          <Column style={{ minWidth: "12rem" }} field={'countryExport'} header={'Country Export Name'} />
          <Column style={{ minWidth: "12rem" }} field={'countryOrg'} header={'Country Origin Name'} />
          <Column field={'lorryTotal'} header={'Lorry Total'} />
          <Column field={'currrencyCode'} header={'Currency Code'} />
          <Column field={'currecnyRate'} header={'Currency Rate'} />
          <Column field={'declarationValueCurrency'} header={'Declaration Value Currency'} />
          <Column field={'declarationValueAfs'} header={'Declaration Value Afs'} />
          <Column field={'declarationTaxes'} header={'DECLARATION_TAXES'} />
          <Column field={'itemValueCurrency'} header={'Item Value Currency'} />
          <Column field={'itemValueAfs'} header={'Item Value Afs'} />
          <Column field={'taxRate'} header={'Tax Rate'} />
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