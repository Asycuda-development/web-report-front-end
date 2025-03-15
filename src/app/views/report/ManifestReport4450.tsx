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

function ManifestReport4450() {
    const [reportData, setReportData] = useState([]);
    const tableRef: any = useRef(null);

    useEffect(() => { }, []);

    const handleSubmit = async (data: SearchData) => {
        console.log(data);
        try {
            const res = await axios.post('/reporting/ManifestReport4450', {
                ...data,
                type: data.customsProcedure,
                customsCode: data.CustomsCode
            });

            setReportData(res.data);
        } catch (error) { }
    };

    return (
        <Container>
            <SimpleCard title="ManifestReport4450">
                <ReportHeaderInputs
                    showStartDate 
                    showEndDate
                    //ShowTinNumber
                    //showOperationDate
                    //showCustomsProcedure
                    showRegDate
                    showLocationCode
                   // showAssesDate
                   // showPayDate
                   //showCustomsList
                   //showExemptionRepNo
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
    <Column field={'Man_No'} header={'Man_No'}/>
	<Column field={'man_reg_date'} header={'man_reg_date'} />
	<Column field={'voy_no'} header={'voy_no'} />
	<Column field={'dep_date'} header={'dep_date'} />
	<Column field={'bill_no'} header={'bill_no'} />
	<Column field={'line_no'} header={'line_no'} />
	<Column field={'discharge_typ'} header={'discharge_typ'} />
	<Column field={'pkg_rf'} header={'pkg_rf'} />
    <Column field={'kilogram'} header={'  kilogram'} />
	<Column field={'carrier'} header={'carrier'} />
	<Column field={'ref_docment'} header={'ref_docment'} />
	<Column field={'loc_code'} header={'loc_code'} />
	<Column field={'Remain_pkg'} header={'Remain_pkg'} />
	<Column field={'remain_wgt'} header={'remain_wgt'} />
	<Column field={'tot_bol'} header={'tot_bol'} />
	<Column field={'SAD_RESERVED'} header={'SAD_RESERVED'} />


                       

                    </DataTable>
                </Box>
            </SimpleCard>
        </Container>
    );
}

export default ManifestReport4450;