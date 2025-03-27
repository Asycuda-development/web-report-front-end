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
          <Column style={{ minWidth: "12rem" }} field={'tptCuoNam'} header={'Transport Custom Name'} />
          <Column style={{ minWidth: "12rem" }} filter filterField="ideCuoNam" field={'ideCuoNam'} header={'Custom Name'} />
          <Column field={'ideCuoCod'} header={'Custom Code'} />
          <Column field={'itemTotal'} header={'Item Total'} />
          <Column filter filterField='registrationNo' field={'regNo'} header={'RegistrationNo'} />
          <Column field={'regDate'} header={'Registration Date'} />
          <Column filter filterField='asmtNo' field={'asmtNo'} header={'Assessment Number'} />
          <Column field={'astDate'} header={'Assessment Date'} />
          <Column field={'rcptNo'} header={'RCPT_NO'} />
          <Column field={'rcptDate'} header={'Receipt Date'} />
          <Column style={{ minWidth: "12rem" }} field={'bankNam'} header={'Bank Name'} />
          <Column filter filterField='brokerTIN' field={'brokerTIN'} header={'Broker TIN'} />
          <Column style={{ minWidth: "20rem" }} field={'decNam'} header={'Declarant Name'} />
          <Column field={'companyTin'} header={'Company TIN'} />
          <Column field={'cmpFisCod'} header={'CMP_FIS_COD'} />
          <Column style={{ minWidth: "20rem" }} field={'cmpNam'} header={'Company Name'} />
          <Column style={{ minWidth: "20rem" }} field={'finNam'} header={'Financial Name'} />
          <Column style={{ minWidth: "12rem" }} field={'countryDest'} header={'Country Destination Name'} />
          <Column style={{ minWidth: "12rem" }} field={'countryExport'} header={'Country Export Name'} />
          <Column style={{ minWidth: "12rem" }} field={'countryOrg'} header={'Country Origin Name'} />
          <Column field={'lorryTotal'} header={'Lorry Total'} />
          <Column field={'declarationValueCurrency'} header={'Declaration Value Currency'} />
          <Column field={'declarationValueAfs'} header={'Declaration Value Afs'} />
          <Column field={'declarationTaxes'} header={'DECLARATION_TAXES'} />
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

export default DPS_4555