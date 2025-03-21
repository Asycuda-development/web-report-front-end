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

function ExemptionReport4752() {
    const [reportData, setReportData] = useState([]);
    const tableRef: any = useRef(null);

    useEffect(() => { }, []);

    const handleSubmit = async (data: SearchData) => {
        console.log(data);
        try {
            const res = await axios.post('/reporting/ExemptionReport4752', {
                ...data,
                type: data.customsProcedure,
                customsCode: data.CustomsCode
            });

            setReportData(res.data);
        } catch (error) { }
    };

    return (
        <Container>
            <SimpleCard title="ExemptionReport4752">
                <ReportHeaderInputs
                    showStartDate 
                    showEndDate
                    //ShowTinNumber
                    //showOperationDate
                    //showCustomsProcedure
                    showRegDate
                   // showAssesDate
                   // showPayDate
                   showCustomsList
                   showExemptionRepNo
                    //showBasedOnExemption
                   // showBasedOnExemptionValue

                   // ShowHsCode
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
    <Column field={'Autorization_No'} header={'Autorization_No'} />
	<Column field={'ref_no'} header={'ref_no'}/>      
	<Column field={'ref_date'} header={'ref_date'}/>
	<Column field={'type_cert'} header={'type_cert'}/>
	<Column field={'val_tot'} header={'val_tot'}/>
	<Column field={'rem_val'} header={'rem_val'}/>
	<Column field={'wgt_tot'} header={'wgt_tot'}/>
	<Column field={'rem_wgt'} header={'rem_wgt'}/>
	<Column field={'CNS_COD'} header={'CNS_COD'}/>
	<Column field={'reg_no_ctn'} header={'reg_no_ctn'}/>


                       

                    </DataTable>
                </Box>
            </SimpleCard>
        </Container>
    );
}

export default ExemptionReport4752;