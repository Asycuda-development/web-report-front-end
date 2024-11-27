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

function DPS_4563() {
    const [reportData, setReportData] = useState([]);
    const tableRef: any = useRef(null);

    useEffect(() => { }, []);

    const handleSubmit = async (data: SearchData) => {
        console.log(data);
        try {
            const res = await axios.post('/reporting/DpsReport4563', {
                ...data,
                type: data.customsProcedure,
                customsCode: data.CustomsCode
            });

            setReportData(res.data);
        } catch (error) { }
    };

    return (
        <Container>
            <SimpleCard title="DPS_4563">
                <ReportHeaderInputs
                    showStartDate 
                    showEndDate
                    ShowTinNumber
                    showStatus
                    //showOperationDate
                    //showCustomsProcedure
                   // showRegDate
                   // showAssesDate
                   // showPayDate
                    //showCustomsList
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
                        <Column  field={'cmpCod'} header={'CMP_CODE'} />
                        <Column  field={'cmpNam'} header={'CMP_NAME'} />
                        <Column  field={'mpAdr'} header={'CMP_ADR'} />
                        <Column  field={'cmpAd2'} header={'CMP_ADR2'} />
                        <Column field={'cmpTel'} header={'CMP_TEL'} />
                        <Column field={'validF'} header={'VALID_FROM'} />
                        <Column field={'validTo'} header={'VALID_TO'} />
                        <Column field={'cmpSta'} header={'CMP_STATUS'} />
                       

                    </DataTable>
                </Box>
            </SimpleCard>
        </Container>
    );
}

export default DPS_4563;