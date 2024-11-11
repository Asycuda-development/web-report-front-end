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

function DPS_4556() {
    const [reportData, setReportData] = useState([]);
    const tableRef: any = useRef(null);

    useEffect(() => { }, []);

    const handleSubmit = async (data: SearchData) => {
        console.log(data);
        try {
            const res = await axios.post('/reporting/DpsReport4556', {
                ...data,
                type: data.customsProcedure,
                customsCode: data.CustomsCode
            });

            setReportData(res.data);
        } catch (error) { }
    };

    return (
        <Container>
            <SimpleCard title="DPS_4556">
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
                        <Column field={'itemTotal'} header={'Item Total'} />
                        <Column filter filterField='regNo' field={'regNo'} header={'RegNo'} />
                        <Column field={'regDate'} header={'Registeration Date'} />
                        <Column filter filterField='asmtNo' field={'asmtNo'} header={'AssessNo'} />
                        <Column field={'astDate'} header={'Assessment Date'} />
                        <Column filter filterField='rcptNo' field={'rcptNo'} header={'ReceptNo'} />
                        <Column field={'rcptDate'} header={'Recept Date'} />
                        <Column style={{ minWidth: '10rem' }} field={'bankNam'} header={'Bank Name'} />
                        <Column field={'status'} header={'Status'} />
                        <Column filter filterField='brokerTin' field={'brokerTin'} header={'Broker Tin'} />
                        <Column style={{ minWidth: '10rem' }} field={'decNam'} header={'Declarant Name'} />
                        <Column filter filterField='companyTin' field={'companyTin'} header={'Company Tin'} />
                        <Column field={'cmpNam'} header={'Company Name'} />
                        <Column style={{ minWidth: '14rem' }} field={'finNam'} header={'Financial Name'} />
                        <Column field={'countryDest'} header={'Destination Country Name'} />
                        <Column filter filterField="countryExport" field={'countryExport'} header={'Country of Export Name'} />
                        <Column field={'countryOrg'} header={'Country of Origin'} />
                        <Column field={'lorryTotal'} header={'Lorry Total'} />
                        <Column field={'declarationValueCurrency'} header={'Declaration Value Currency'} />
                        <Column field={'declarationValueAfs'} header={'Declaration Value Afs'} />
                        <Column field={'declarationTaxes'} header={'Declaration Taxes'} />
                       
                    
                    </DataTable>
                </Box>
            </SimpleCard>
        </Container>
    );
}

export default DPS_4556;