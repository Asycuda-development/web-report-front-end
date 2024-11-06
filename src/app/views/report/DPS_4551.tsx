import { Box, styled } from '@mui/material';
import axios from 'axios';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { useEffect, useRef, useState } from 'react';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
import { SimpleCard } from '../../components';
import { ROWS_PER_PAGE } from '../../utils/constant';

const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' }
  }
}));

function DPS_4551() {
  const [reportData, setReportData] = useState([]);
  const tableRef: any = useRef(null);

  useEffect(() => { }, []);

  const handleSubmit = async (data: SearchData) => {
    console.log(data)
    try {
      const res = await axios.post('/reporting/DpsReport4551', {
        ...data,
        type: data.customsProcedure,
        customsCode: data.CustomsCode
      });

      setReportData(res.data);
    } catch (error) { }
  };

  return (
    <Container>
      <SimpleCard title="4551-DPS">
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
            <Column field={'ideTypSad'} header={'ID_TypeSad'} />
            <Column field={'tptCuoNam'} header={'borderCustom'} />
            <Column filter filterField="ideCuoNam" field={'ideCuoNam'} header={'Custom Name'} />
            <Column field={'typeofTransport'} header={'Type of transport'} />
            <Column field={'itemTotal'} header={'Item Total'} />
            <Column field={'itemNo'} header={'itemNo'} />
            <Column field={'totalPackage'} header={'Total Package'} />
            <Column field={'codeOfPackage'} header={'Package Code'} />
            <Column field={'typeOfPackage'} header={'Package Type'} />
            <Column filter filterField='regNo' field={'regNo'} header={'RegistrationNo'} />
            <Column field={'regDate'} header={'Registration Date'} />
            <Column filter filterField='asmtNo' field={'asmtNo'} header={'Assessment Number'} />
            <Column field={'astDate'} header={'Assessment Date'} />
            <Column field={'rcptDate'} header={'Receipt Date'} />
            <Column field={'bankNam'} header={'Bank Name'} />
            <Column field={'licCod'} header={'Lic_Code'} />
            <Column field={'txtFre'} header={'Text_Fer'} />
            {/*  <Column style={{ minWidth: "14rem" }} field={'goodsDescription'} header={'Goods Description'} />
            <Column style={{ minWidth: "20rem" }} field={'goodsAdditionalDesc'} header={'Goods Additional Description'} />
            <Column style={{ minWidth: "12rem" }} field={'packageMark1'} header={'Package Mark1'} />*/}
           
            <Column field={'hsCode'} header={'HS_CODE'} />
            <Column field={'customsProc'} header={'Customs Procedure'} />
            <Column field={'itemGrossWeight'} header={'Item Gross Weight'} />
            <Column field={'itemNetWeight'} header={'Item Net Weight'} />
            <Column filter filterField='brokerTin' field={'brokerTin'} header={'Broker TIN'} />
            {/* <Column field={'decName'} header={'Declarant Name'} />*/}
            
            <Column  filter filterField= 'companyTin' field={'companyTin'} header={'Company TIN'} />
            <Column field={'cmpNam'} header={'Company Name'} />
            <Column style={{ minWidth: "12rem" }} field={'finNam'} header={'Financial Name'} />
            <Column filter filterField='finCod' field={'fisCod'} header={'Financial Code'} />
            <Column field={'countryDest'} header={'Country Destination Name'} />
            <Column field={'countryDesCod'} header={'Country Destination Code'} />
            <Column field={'countryExport'} header={'Country Export Name'} />
            <Column filter filterField='countryExportCode' field={'countryExportCode'} header={'Country Export Code'} />
            <Column field={'countryOrg'} header={'Country Origin Name'} />
           {/* <Column field={'countryOriginCode'} header={'Country Origin Code'} />*/} 
            <Column field={'lorryTotal'} header={'Lorry Total'} />
            <Column field={'currencyCode'} header={'Currency Code'} />
            <Column field={'currencyRate'} header={'Currency Rate'} />
            <Column field={'declarationValueCurrency'} header={'Declaration Value Currency'} />
            <Column field={'declarationValueAfs'} header={'Declaration Value Afs'} />
            <Column field={'declarationTaxes'} header={'Declaration Taxes Afs'} />
            <Column field={'itemValueCurrency'} header={'Item Value Currency'} />
            <Column field={'itemValueAfs'} header={'Item Value Afs'} />
            <Column field={'itemCifValue'} header={'Item CIF Value'} />
            <Column field={'status'} header={'status'} />
            <Column field={'locGoods'} header={'Log Goods'} />
            <Column field={'licCodItem'} header={'Lic Code Item'} />
            <Column field={'txtFreItem'} header={'Text Fer Item'} />
            <Column field={'pckMrk1Second'} header={'package Mark Name'} />
            <Column field={'pckMrk2Second'} header={'package Mark Code'} />
            <Column field={'tarVmtFirst'} header={'Tar VmtFirst'} />
            <Column field={'tarAtt'} header={'TarAtt'} />
            <Column field={'tarAdt'} header={'TarAdt'} />
            <Column field={'tarVmtScond'} header={'TarVmt Second'} />
            <Column field={'gCategoryOfGoods1'} header={'Goods Category 1'} />
            <Column field={'goodsCategoryOfGoods2'} header={'Goods Category 2'} />

            {/*<Column field={'taxCodeAmountAfs'} header={'Tax Code Amount Afs'} />
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
           
            <Column field={'freeText'} header={'Free Text'} />
            <Column field={'ptyDate'} header={'Pty Date'} />
            <Column field={'decRep'} header={'Declerent Rep'} /> */}


            

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

export default DPS_4551