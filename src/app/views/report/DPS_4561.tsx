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

function DPS_4561() {
    const [reportData, setReportData] = useState([]);
    const tableRef: any = useRef(null);

    useEffect(() => { }, []);

    const handleSubmit = async (data: SearchData) => {
        console.log(data);
        try {
            const res = await axios.post('/reporting/DpsReport4561', {
                ...data,
                type: data.customsProcedure,
                customsCode: data.CustomsCode
            });

            setReportData(res.data);
        } catch (error) { }
    };

    return (
        <Container>
            <SimpleCard title="DPS_4561">
                <ReportHeaderInputs
                     showStartDate 
                     showEndDate
                   // ShowTinNumber
                    showOperationDate
                    showCustomsProcedure
                    showRegDate
                   // showAssesDate
                   // showPayDate
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
                        <Column  style={{ minWidth: '10rem' }} field={'fullName'} header={'FULLNAME'} />
                        <Column  field={'sadType'} header={'SAD_TYPE'} />
                        <Column field={'officeCod'} header={'OFFICE_COD'} />
                        <Column style={{ minWidth: '10rem' }} field={'office'} header={'OFFICE'} />
                        <Column field={'regNo'} header={'REG_NO'} />
                        <Column field={'regDate'} header={'REG_DATE'} />
                        <Column field={'assmtNo'} header={'ASSMT_NO'} />
                        <Column field={'assmtNo'} header={'ASSMT_NO'} />
                        <Column  field={'rcptNo'} header={'RCPT_NO'} />
                        <Column field={'rcptDate'} header={'RCPT_DAT'} />
                        <Column  field={'status'} header={'STATUS'} />
                        <Column style={{ minWidth: '20rem' }} field={'userName'} header={'USER_NAME'} />
                        <Column filter filterField='operationName' field={'operationName'} header={'OPERATION_NAME'} />
                        <Column style={{ minWidth: '25rem' }} field={'status1'} header={'STATUS1'} />
                        <Column style={{ minWidth: '20rem' }} field={'operationDate'} header={'OPERATION_DATE'} />
                        <Column field={'cmpCode'} header={'CMP_CODE'} />
                        <Column style={{ minWidth: '15rem' }} field={'cmpName'} header={'CMP_NAME'} />
                        <Column style={{ minWidth: '20rem' }} field={'decCod'} header={'DEC_COD'} />
                        <Column style={{ minWidth: '20rem' }} field={'decName'} header={'DEC_NAME'} />
                        <Column style={{minWidth: "12rem"}} field={'firstColor'} header={'FIRST_COLOR'} />
                        <Column style={{ minWidth: '14rem' }} field={'finCod'} header={'FIN_COD'} />
                        <Column style={{ minWidth: '20rem' }}field={'finNam'} header={'FIN_NAM'} />
                    </DataTable>
                </Box>
            </SimpleCard>
        </Container>
    );
}

export default DPS_4561;