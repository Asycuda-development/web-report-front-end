import { Box, LinearProgress, styled } from '@mui/material';
import axios from 'axios';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { useEffect, useRef, useState } from 'react';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
import { SimpleCard } from '../../components';
import { ROWS_PER_PAGE } from '../../utils/constant';

function DPS_4562() {
    const [reportData, setReportData] = useState([]);
    const [loading, setLoading] = useState(false)
    const tableRef: any = useRef(null);

    const handleSubmit = async (data: SearchData) => {
        try {
            setLoading(true)
            const res = await axios.post('/reporting/DpsReport4562', {
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
        <SimpleCard title="DPS_4562">
            <ReportHeaderInputs
                showStartDate
                showEndDate
                showUserName
                showOperationDate
                showCustomsList
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
                >
                    <Column field={'sadType'} header={'SAD_TYPE'} />
                    <Column field={'office'} header={'OFFICE'} />
                    <Column field={'officeCod'} header={'OFFICE_CODE'} />
                    <Column style={{ minWidth: '10rem' }} field={'regNo'} header={'SAD_REG_NO'} />
                    <Column field={'regDate'} header={'SAD_REG_DATE'} />
                    <Column field={'rcptDat'} header={'RCP_DAT'} />
                    <Column field={'rcptNo'} header={'RECFT_NO'} />
                    <Column field={'status'} header={'STATUS'} />
                    <Column field={'status1'} header={'STATUS_1'} />
                    <Column field={'userName'} header={'USER_NAME'} />
                    <Column style={{ minWidth: '20rem' }} field={'operationName'} header={'OPREATION_NAME'} />
                    <Column style={{ minWidth: '24rem' }} field={'operationDate'} header={'OPREATION_DATE'} />
                    <Column style={{ minWidth: '12rem' }} field={'cmpCod'} header={'COMPANY_CODE'} />
                    <Column style={{ minWidth: '20rem' }} field={'cmpName'} header={'COMPANY_NAME'} />
                    <Column style={{ minWidth: '20rem' }} field={'finNam'} header={'FIN_NAME'} />
                    <Column field={'decCod'} header={'DECLARENT_CODE'} />
                    <Column style={{ minWidth: '30rem' }} field={'decName'} header={'DECLARENT_NAME'} />

                </DataTable>
            </Box>
        </SimpleCard>
    );
}

export default DPS_4562;