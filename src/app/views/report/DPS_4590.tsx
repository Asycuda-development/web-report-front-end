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

function DPS_4590() {
    const [reportData, setReportData] = useState([]);
    const tableRef: any = useRef(null);

    useEffect(() => { }, []);

    const handleSubmit = async (data: SearchData) => {
        console.log(data);
        try {
            const res = await axios.post('/reporting/DpsReport4590', {
                ...data,
                type: data.customsProcedure,
                customsCode: data.CustomsCode
            });

            setReportData(res.data);
        } catch (error) { }
    };

    return (
        <Container>
            <SimpleCard title="DPS_4590">
                <ReportHeaderInputs
                    showStartDate 
                    showEndDate
                    //ShowTinNumber
                    //showOperationDate
                    showCustomsProcedure
                    showRegDate
                   // showAssesDate
                   // showPayDate
                    showCustomsList
                    showExemptionType
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
                        <Column  field={'icd'} header={'ICD_OFFICE'} />
                        <Column  field={'types'} header={'SAD_TYPE I/E'} />
                        <Column  field={'orgCountry'} header={'COUNTRY_ORG'} />
                        <Column  field={'destCountry'} header={'DEST_COUNTERY'} />
                        <Column field={'hscode'} header={'HS_CODE'} />
                        <Column field={'hsdsc'} header={'HS_COD_D'} />
                        <Column field={'valueUsd'} header={'VALUE_CURANCY'} />
                        <Column field={'valueAfs'} header={'VALUE_AF'} />
                        <Column field={'taxAmt'} header={'TEXT_AMOUNT'} />
                       

                    </DataTable>
                </Box>
            </SimpleCard>
        </Container>
    );
}

export default DPS_4590;