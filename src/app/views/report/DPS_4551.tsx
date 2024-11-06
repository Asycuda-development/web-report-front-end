import { SimpleCard } from '../../components';
import { Box, styled } from '@mui/material';
import React, { useEffect, useState, useRef } from 'react';
import { ROWS_PER_PAGE } from '../../utils/constant';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';

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

  useEffect(() => {}, []);

  const handleSubmit = async (data: SearchData) => {
    console.log(data);
    try {
      const res = await axios.post('/reporting/DpsReport4551', {
        ...data,
        type: data.customsProcedure,
        customsCode: data.CustomsCode
      });

      setReportData(res.data);
    } catch (error) {}
  };

  return (
    <Container>
      <SimpleCard title="DPS_4551">
        <ReportHeaderInputs
          showStartDate
          showEndDate
          ShowTinNumber
          showExemptionType
          //   showCustomsProcedure
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
            <Column filter filterField="ideTypSad" field={'ideTypSad'} header={'IDE Type SAD'} />
            <Column field={'tptCuoNam'} header={'tptCuoNam'} />
            <Column filter filterField="ideCuoNam" field={'ideCuoNam'} header={'IDE Cuo Name'} />
            <Column field={'ideCuoCod'} header={'IDE Cuo Code'} />
            <Column field={'typeofTransport'} header={'Type Of Transport'} />
            <Column field={'itemTotal'} header={'Total Item'} />
            <Column field={'itemNo'} header={'Item No'} />
            <Column field={'totalPackage'} header={'Total Package'} />
            <Column field={'codeOfPackage'} header={'Code Of Package'} />
            <Column
              filter
              filterField="typeOfPackage"
              field={'typeOfPackage'}
              header={'Type Of Package'}
            />
            <Column field={'regNo'} header={'Registeration No'} />
            <Column filter filterField="regDate" field={'regDate'} header={'Registeration Date'} />
            <Column field={'rcptNo'} header={'Recept No'} />
            <Column field={'rcptDate'} header={'Recept Date'} />
            <Column field={'bankNam'} header={'Bank Name'} />
            <Column field={'licCod'} header={'lic Cod'} />
            <Column field={'txtFre'} header={'txtFre'} />
            <Column style={{ minWidth: '14rem' }} field={'hsCode'} header={'Hs Code'} />
            <Column style={{ minWidth: '14rem' }} field={'hs5'} header={'Hs5'} />
            <Column style={{ minWidth: '20rem' }} field={'cpc'} header={'CPC'} />
            <Column style={{ minWidth: '12rem' }} field={'dsc'} header={'Goods Category'} />
            <Column field={'gdsDs3'} header={'Goods Category3'} />
            <Column field={'pckMrk1First'} header={'pckMrk1 Firste'} />
            <Column field={'pckMrk2First'} header={'pckMrk2 First'} />
            <Column field={'customsProc'} header={'Customs Procedure'} />
            <Column
              filter
              filterField="itemGrossWeight"
              field={'itemGrossWeight'}
              header={'Item Gross Weight'}
            />
            <Column field={'itemNetWeight'} header={'Item Net Weight'} />
            <Column field={'brokerTin'} header={'Broker Tin'} />
            <Column field={'decNam'} header={'DEC Name'} />
            <Column
              filter
              filterField="companyTin"
              style={{ minWidth: '12rem' }}
              field={'companyTin'}
              header={'Company Tin'}
            />
            <Column filter filterField="cmpNam" field={'cmpNam'} header={'Company Name'} />
            <Column field={'finNam'} header={'fin Name'} />
            <Column field={'fisCod'} header={'fis Cod'} />
            <Column field={'countryDest'} header={'Destination Country'} />
            <Column field={'countryDestCod'} header={'Destination Country Code'} />
            <Column
              filter
              filterField="countryExport"
              field={'countryExport'}
              header={'Country Export'}
            />
            <Column field={'countryOrg'} header={'Country Org'} />
            <Column field={'lorryTotal'} header={'Lorry Total'} />
            <Column field={'currencyCode'} header={'Currency Code'} />
            <Column field={'currencyRate'} header={'Currency Rate'} />
            <Column field={'declarationValueAfs'} header={'Declaration Value Afs'} />
            <Column field={'declarationValueCurrency'} header={'Declaration Value Currency'} />
            <Column field={'declarationTaxes'} header={'Declaration Taxes'} />
            <Column field={'itemValueCurrency'} header={'Item Value Currency'} />
            <Column field={'itemValueAfs'} header={'Item Value Afs'} />
            <Column field={'itemCifValue'} header={'Item Cif Value'} />
            <Column field={'itemTaxes'} header={'Item Taxes'} />
            <Column field={'status'} header={'Status'} />
            <Column field={'locGoods'} header={'Loc Goods'} />
            <Column field={'licCodItem'} header={'Lic Cod Item'} />
            <Column style={{ minWidth: '12rem' }} field={'txtFreItem'} header={'Txt Fre Item'} />
            <Column field={'pckMrk1Second'} header={'pckMrk1 Second'} />
            <Column field={'pckMrk2Second'} header={'pckMrk2 Second'} />
            <Column field={'tarVmtFirst'} header={'Tar Vmt First'} />
            <Column field={'tarAtt'} header={'Tar ATT'} />
            <Column field={'tarVdt'} header={'Tar VDT'} />
            <Column
              filter
              filterField="tarVmtSecond"
              field={'tarVmtSecond'}
              header={'Tar VTM Second'}
            />
            <Column
              filter
              filterField="gCategoryOfGoods1"
              field={'gCategoryOfGoods1'}
              header={'G Category Of Goods1'}
            />
            <Column field={'gCategoryOfGoods2'} header={'G Category Of Goods2'} />
          </DataTable>
        </Box>
      </SimpleCard>
    </Container>
  );
}

export default DPS_4551;
