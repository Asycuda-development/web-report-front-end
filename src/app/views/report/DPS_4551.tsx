import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Box, styled } from '@mui/material';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
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
        console.log(data);
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
            <SimpleCard title="DPS_4551">
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
                        <Column filter filterField="ideTypSad" field={'ideTypSad'} header={'SAD Type'} />
                        <Column style={{ minWidth: '10rem' }} field={'tptCuoNam'} header={'Border Custom Name'} />
                        <Column field={'ideCuoNam'} header={'Custom Name'} />
                        <Column field={'ideCuoCod'} header={'Custom Code'} />
                        <Column field={'typeofTransport'} header={'Type Of Transport'} />
                        <Column field={'itemTotal'} header={'Item Total'} />
                        <Column field={'itemNo'} header={'ItemNo'} />
                        <Column field={'totalPackage'} header={'Total Package'} />
                        <Column field={'codeOfPackage'} header={'Package Code'} />
                        <Column filter filterField="typeOfPackage" field={'typeOfPackage'} header={'Package Type'} />
                        <Column filter filterField='regNo' field={'regNo'} header={'RegNo'} />
                        <Column field={'regDate'} header={'Registeration Date'} />
                        <Column filter filterField='asmtNo' field={'asmtNo'} header={'AssessNo'} />
                        <Column field={'astDate'} header={'Assessment Date'} />
                        <Column filter filterField='rcptNo' field={'rcptNo'} header={'ReceptNo'} />
                        <Column field={'rcptDate'} header={'Recept Date'} />
                        <Column style={{ minWidth: '10rem' }} field={'bankNam'} header={'Bank Name'} />
                        <Column field={'licCod'} header={'Licence reference number'} />
                        <Column style={{ minWidth: '14rem' }} field={'txtFre'} header={'Free Text'} />
                        <Column field={'hsCode'} header={'HS_Code'} />
                        <Column field={'hs5'} header={'Hs5'} />
                        <Column field={'cpc'} header={'CPC'} />
                        <Column style={{ minWidth: '14rem' }} field={'dsc'} header={'Goods Description'} />
                        <Column style={{ minWidth: '18rem' }} field={'gdsDs3'} header={'Goods Additional Description'} />
                        <Column style={{ minWidth: '12rem' }} field={'pckMrk1First'} header={'Package Mark1'} />
                        <Column style={{ minWidth: '12rem' }} field={'pckMrk2First'} header={'Package Mark2'} />
                        <Column field={'customsProc'} header={'Customs Procedure'} />
                        <Column field={'itemGrossWeight'} header={'Item Gross Weight'} />
                        <Column field={'itemNetWeight'} header={'Item Net Weight'} />
                        <Column filter filterField='brokerTin' field={'brokerTin'} header={'Broker Tin'} />
                        <Column style={{ minWidth: '10rem' }} field={'decNam'} header={'Declarant Name'} />
                        <Column filter filterField='companyTin' field={'companyTin'} header={'Company Tin'} />
                        <Column field={'cmpNam'} header={'Company Name'} />
                        <Column style={{ minWidth: '14rem' }} field={'finNam'} header={'Financial Name'} />
                        <Column field={'fisCod'} header={'Financial Code'} />
                        <Column field={'countryDest'} header={'Destination Country Name'} />
                        <Column field={'countryDestCod'} header={'Destination Country Code'} />
                        <Column filter filterField="countryExport" field={'countryExport'} header={'Country of Export Name'} />
                        <Column field={'countryOrg'} header={'Country of Origin'} />
                        <Column field={'lorryTotal'} header={'Lorry Total'} />
                        <Column field={'currencyCode'} header={'Currency Code'} />
                        <Column field={'currencyRate'} header={'Currency Rate'} />
                        <Column field={'declarationValueCurrency'} header={'Declaration Value Currency'} />
                        <Column field={'declarationValueAfs'} header={'Declaration Value Afs'} />
                        <Column field={'declarationTaxes'} header={'Declaration Taxes'} />
                        <Column field={'itemValueCurrency'} header={'Item Value Foreign Currency'} />
                        <Column field={'itemValueAfs'} header={'Item Value Afs'} />
                        <Column field={'itemCifValue'} header={'Item Cif Value'} />
                        <Column field={'itemTaxes'} header={'Item Taxes'} />
                        <Column field={'status'} header={'Status'} />
                        <Column field={'locGoods'} header={'Location of Goods'} />
                        <Column field={'licCodItem'} header={'Licence reference number'} />
                        <Column style={{ minWidth: '14rem' }} field={'txtFreItem'} header={'Free Text'} />
                        <Column style={{ minWidth: '12rem' }} field={'pckMrk1Second'} header={'Package Mark1'} />
                        <Column style={{ minWidth: '12rem' }} field={'pckMrk2Second'} header={'Package Mark2'} />
                        <Column field={'tarVmtFirst'} header={'Valuation Method'} />
                        <Column style={{ minWidth: '12rem' }} field={'tarAtt'} header={'Attached Documents Codes'} />
                        <Column style={{ minWidth: '10rem' }} field={'tarVdt'} header={'Value details'} />
                        <Column filter filterField="tarVmtSecond" field={'tarVmtSecond'} header={'Valuation Method Second'} />
                        <Column filter filterField="gCategoryOfGoods1" field={'gCategoryOfGoods1'} header={'Nature of transaction - code 1'} />
                        <Column field={'gCategoryOfGoods2'} header={'Nature of transaction - code 2'} />
                    </DataTable>
                </Box>
            </SimpleCard>
        </Container>
    );
}

export default DPS_4551;