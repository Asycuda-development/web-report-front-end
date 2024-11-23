import { SimpleCard } from '../../components';
import { Box, styled } from '@mui/material';
import React, { useEffect, useState, useRef } from 'react';
import { ROWS_PER_PAGE } from '../../utils/constant';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';

// checked

const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' }
  }
}));

function DPS_4550() {
  const [reportData, setReportData] = useState([]);
  const tableRef: any = useRef(null);

  useEffect(() => { }, []);

  const handleSubmit = async (data: SearchData) => {
    console.log(data)
    try {
      const res = await axios.post('/reporting/DpsReport4550', {
        ...data,
        type: data.customsProcedure,
        customsCode: data.CustomsCode
      });

      setReportData(res.data);
    } catch (error) { }
  };
  //
  return (
    <Container>
      <SimpleCard title="4550-DPS">
        <ReportHeaderInputs
          showStartDate
          showEndDate
          ShowTinNumber
          showExemptionType
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
            <Column field={'sadType'} header={'SAD Type'} />
            <Column field={'transportCustomsName'} header={'Transport Custom Name'} />
            <Column filter filterField="customsName" field={'customsName'} header={'Custom Name'} />
            <Column field={'customsCode'} header={'Custom Code'} />
            <Column field={'itemTotal'} header={'Item Total'} />
            <Column field={'itemNo'} header={'itemNo'} />
            <Column field={'totalPackage'} header={'Total Package'} />
            <Column field={'packageCode'} header={'Package Code'} />
            <Column field={'packageType'} header={'Package Type'} />
            <Column filter filterField='registrationNo' field={'registrationNo'} header={'RegistrationNo'} />
            <Column field={'registrationDate'} header={'Registration Date'} />
            <Column filter filterField='assessmentNumber' field={'assessmentNumber'} header={'Assessment Number'} />
            <Column field={'assessmentDate'} header={'Assessment Date'} />
            <Column field={'receiptDate'} header={'Receipt Date'} />
            <Column field={'bankName'} header={'Bank Name'} />
            <Column field={'hsCode'} header={'hsCode'} />
            <Column field={'cpc'} header={'cpc'} />
            <Column style={{ minWidth: "14rem" }} field={'goodsDescription'} header={'Goods Description'} />
            <Column style={{ minWidth: "20rem" }} field={'goodsAdditionalDesc'} header={'Goods Additional Description'} />
            <Column style={{ minWidth: "12rem" }} field={'packageMark1'} header={'Package Mark1'} />
            <Column field={'packageMark2'} header={'Package Mark2'} />
            <Column field={'customsProcedure'} header={'Customs Procedure'} />
            <Column field={'itemGrossWeight'} header={'Item Gross Weight'} />
            <Column field={'itemNetWeight'} header={'Item Net Weight'} />
            <Column filter filterField='brokerTIN' field={'brokerTIN'} header={'Broker TIN'} />
            <Column field={'declarantName'} header={'Declarant Name'} />
            <Column field={'companyTIN'} header={'Company TIN'} />
            <Column field={'companyName'} header={'Company Name'} />
            <Column style={{ minWidth: "12rem" }} field={'financialName'} header={'Financial Name'} />
            <Column filter filterField='financialCode' field={'financialCode'} header={'Financial Code'} />
            <Column field={'countryDestinationName'} header={'Country Destination Name'} />
            <Column field={'countryDestinationCode'} header={'Country Destination Code'} />
            <Column field={'countryExportName'} header={'Country Export Name'} />
            <Column filter filterField='countryExportCode' field={'countryExportCode'} header={'Country Export Code'} />
            <Column field={'countryOriginName'} header={'Country Origin Name'} />
            <Column field={'countryOriginCode'} header={'Country Origin Code'} />
            <Column field={'lorryTotal'} header={'Lorry Total'} />
            <Column field={'currencyCode'} header={'Currency Code'} />
            <Column field={'currencyRate'} header={'Currency Rate'} />
            <Column field={'declarationValueCurrency'} header={'Declaration Value Currency'} />
            <Column field={'declarationValueAfs'} header={'Declaration Value Afs'} />
            <Column field={'declarationTaxesAfs'} header={'Declaration Taxes Afs'} />
            <Column field={'itemValueCurrency'} header={'Item Value Currency'} />
            <Column field={'itemValueAfs'} header={'Item Value Afs'} />
            <Column field={'itemCIFValue'} header={'Item CIF Value'} />
            <Column field={'itemTaxesAfs'} header={'Item Taxes Afs'} />
            <Column field={'taxCodeAmountAfs'} header={'Tax Code Amount Afs'} />
            <Column field={'taxCode'} header={'Tax Code'} />
            <Column style={{ minWidth: "12rem" }} field={'taxDescription'} header={'Tax Description'} />
            <Column field={'taxRate'} header={'Tax Rate'} />
            <Column field={'electronicFeeAfs'} header={'Electronic Fee Afs'} />
            <Column field={'sadStatus'} header={'Sad Status'} />
            <Column field={'vehicleChassis'} header={'Vehicle Chassis'} />
            <Column field={'engineNo'} header={'EngineNo'} />
            <Column filter filterField='examiner' field={'examiner'} header={'Examiner'} />
            <Column filter filterField='receiptNoOriginal' field={'receiptNoOriginal'} header={'Receipt No Original'} />
            <Column field={'container'} header={'Container'} />
            <Column filter filterField='box18_1' field={'box18_1'} header={'Box18_1'} />
            <Column filter filterField='box18_2' field={'box18_2'} header={'Box18_2'} />
            <Column filter filterField='box21_1' field={'box21_1'} header={'Box21_1'} />
            <Column filter filterField='box21_2' field={'box21_2'} header={'Box21_2'} />
            <Column field={'sadFlow'} header={'Sad Flow'} />
            <Column field={'locationGoods'} header={'Location Goods'} />
            <Column field={'goodsCategory1'} header={'Goods Category 1'} />
            <Column field={'goodsCategory2'} header={'Goods Category 2'} />
            <Column field={'freeText'} header={'Free Text'} />
            <Column field={'ptyDate'} header={'Pty Date'} />
            <Column field={'decRep'} header={'Declerent Rep'} />

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

export default DPS_4550