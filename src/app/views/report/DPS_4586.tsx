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

function DPS_4586() {
    const [reportData, setReportData] = useState([]);
    const tableRef: any = useRef(null);

    useEffect(() => { }, []);

    const handleSubmit = async (data: SearchData) => {
        console.log(data);
        try {
            const res = await axios.post('/reporting/DpsReport4586', {
                ...data,
                type: data.customsProcedure,
                customsCode: data.CustomsCode
            });

            setReportData(res.data);
        } catch (error) { }
    };

    return (
        <Container>
            <SimpleCard title="DPS_4586">
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
                        <Column  field={'office'} header={'OFFICE'} />
                        <Column  field={'itemGrossWeight'} header={'ITEM_GROSS_WEIGHT'} />
                        <Column  field={'itemNetWeight'} header={'ITEM_NET_WEIGHT'} />
                        <Column  field={'itemValueCurrency'} header={'ITEM_VALUE_CURANCY'} />
                        <Column field={'itemValueAfs'} header={'ITEM_VALUE_AFS'} />
                        <Column field={'itemTaxes'} header={'ITEM_TEX'} />
                        <Column field={'taxCode'} header={'TEXT_CODE'} />
                        <Column field={'codeTaxAmount'} header={'CODE_TEX_AMOUNT'} />
                       

                    </DataTable>
                </Box>
            </SimpleCard>
        </Container>
    );
}

export default DPS_4586;