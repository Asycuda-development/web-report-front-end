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

function ExemptionReport4750() {
    const [reportData, setReportData] = useState([]);
    const tableRef: any = useRef(null);

    useEffect(() => { }, []);

    const handleSubmit = async (data: SearchData) => {
        console.log(data);
        try {
            const res = await axios.post('/reporting/ExemptionReport4750', {
                ...data,
                type: data.customsProcedure,
                customsCode: data.CustomsCode
            });

            setReportData(res.data);
        } catch (error) { }
    };

    return (
        <Container>
            <SimpleCard title="ExemptionReport4750">
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


                    // commented for error
                    // showBasedOnExemption
                    //  showBasedOnExemptionValue


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
                        <Column field={'Autorization_No       '} header={'Autorization_No       '} />
                        <Column field={'cert_reg_dat'} header={'cert_reg_dat'} />
                        <Column field={'issue_off'} header={'issue_off'} />
                        <Column field={'issue_off_nam'} header={'issue_off_nam'} />
                        <Column field={'issue_year'} header={'issue_year'} />
                        <Column field={'valid_from'} header={'valid_from'} />
                        <Column field={'valid_to'} header={'valid_to'} />
                        <Column field={'ref_no'} header={'ref_no'} />
                        <Column field={'ref_date'} header={'ref_date'} />
                        <Column field={'subc'} header={'subc'} />
                        <Column field={'subc_nam'} header={'subc_nam'} />
                        <Column field={'cmp_cod'} header={'cmp_cod'} />
                        <Column field={'cmp_desc'} header={'cmp_desc'} />
                        <Column field={'contractor_cod'} header={'contractor_cod'} />
                        <Column field={'contractor_nam'} header={'contractor_nam'} />
                        <Column field={'type_cert'} header={'type_cert'} />
                        <Column field={'nfc_cod'} header={'nfc_cod'} />
                        <Column field={'issu_auto'} header={'issu_auto'} />
                        <Column field={'Border_office'} header={'Border_office'} />
                        <Column field={'clr_office'} header={'clr_office'} />
                        <Column field={'proc_cod'} header={'proc_cod'} />
                        <Column field={'acc_cod'} header={'acc_cod'} />
                        <Column field={'val_tot'} header={'val_tot'} />
                        <Column field={'wgt_tot'} header={'wgt_tot'} />
                        <Column field={'rem_val'} header={'rem_val'} />
                        <Column field={'rem_wgt'} header={'rem_wgt'} />
                        <Column field={'hscode'} header={'hscode'} />
                        <Column field={'HS_DESC'} header={'HS_DESC'} />
                        <Column field={'itm_val_usd'} header={'itm_val_usd'} />
                        <Column field={'itm_val_afs'} header={'itm_val_afs'} />
                        <Column field={'net_wgt'} header={'net_wgt'} />
                        <Column field={'gross_wgt'} header={'gross_wgt'} />
                        <Column field={'itm_um1_nam'} header={'itm_um1_nam'} />
                        <Column field={'written_off_wgt'} header={'written_off_wgt'} />
                        <Column field={'sad_number'} header={'sad_number'} />
                        <Column field={'sad_yer'} header={'sad_yer'} />
                        <Column field={'sad_reg_dat'} header={'sad_reg_dat'} />
                        <Column field={'sad_off_cod'} header={'sad_off_cod'} />
                        <Column field={'sad_off_nam'} header={'sad_off_nam'} />
                        <Column field={'sad_net_wgt'} header={'sad_net_wgt'} />
                        <Column field={'ctnr_number'} header={'ctnr_number'} />
                        <Column field={'ctnr_typ'} header={'ctnr_typ'} />



                    </DataTable>
                </Box>
            </SimpleCard>
        </Container>
    );
}

export default ExemptionReport4750;