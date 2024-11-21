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

function DPS_4558() {
    const [reportData, setReportData] = useState([]);
    const tableRef: any = useRef(null);

    useEffect(() => { }, []);

    const handleSubmit = async (data: SearchData) => {
        console.log(data);
        try {
            const res = await axios.post('/reporting/DpsReport4558', {
                ...data,
                type: data.customsProcedure,
                customsCode: data.CustomsCode
            });

            setReportData(res.data);
        } catch (error) { }
    };

    return (
        <Container>
            <SimpleCard title="DPS_4558">
                <ReportHeaderInputs
                    showStartDate 
                    showEndDate
                    ShowTinNumber
                    showCustomsProcedure
                    showExemptionType
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
                        <Column field={'sadYear'} header={'SAD_YEAR'} />
                        <Column field={'sadOffice'} header={'SAD_OFFICE'} />
                        <Column filter filterField="sadRegNo" field={'sadRegNo'} header={'SAD_REG_NO'} />
                        <Column style={{ minWidth: '10rem' }} field={'sadRegDate'} header={'SAD_REG_DATE'} />
                        <Column filter filterField='items'field={'ideRcpNo'} header={'IDE_RCP_NO'} />
                        <Column field={'ideRcpDat'} header={'IDE_RCP_DAT'} />
                        <Column filter filterField='items'field={'ideAstNo'} header={'IDE_AST_NO'} />
                        <Column filter filterField='ideAstDat' field={'ideAstDat'} header={'IDE_AST_DAT'} />
                        <Column filter filterField='Status'field={'Status'} header={'STATUS'} />
                        <Column filter filterField='brokerTin' field={'brokerTin'} header={'BROKER_TIN'} />
                        <Column filter filterField='items'style={{ minWidth: '20rem' }} field={'decNam'} header={'DEC_NAM'} />
                        <Column filter filterField='companyTin' field={'companyTin'} header={'COMPANY_TIN'} />
                        <Column style={{ minWidth: '25rem' }} field={'cmpNam'} header={'CMP_NAM'} />
                        <Column style={{ minWidth: '20rem' }} field={'finNam'} header={'FIN_NAM'} />
                        <Column field={'finCod'} header={'FIN_COD'} />
                        <Column filter filterField='items' field={'items'} header={'ITEMS'} />
                        <Column style={{ minWidth: '40rem' }} field={'dsc'} header={'DSC'} />
                        <Column filter filterField='totalTaxes' field={'totalTaxes'} header={'TOTAL_TAXES'} />
                        <Column style={{minWidth: "12rem"}} field={'customsValue'} header={'CUSTOMS_VALUE'} />
                        <Column style={{ minWidth: '14rem' }} field={'truck1'} header={'TRUCK1'} />
                        <Column field={'truck2'} header={'TRUCK2'} />
                        <Column filter filterField="cap" field={'cap'} header={'CAP'} />
                        <Column field={'declarationTaxes'} header={'DECLARATION_TAXES'} />
                    </DataTable>
                </Box>
            </SimpleCard>
        </Container>
    );
}

export default DPS_4558;