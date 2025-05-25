import { Box, LinearProgress, styled } from '@mui/material';
import axios from 'axios';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { useEffect, useRef, useState } from 'react';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
import { SimpleCard } from '../../components';
import { ROWS_PER_PAGE } from '../../utils/constant';
import { Toast } from 'primereact/toast';

function DPS_4558() {
    const [reportData, setReportData] = useState([]);
    const [loading, setLoading] = useState(false)
    const tableRef: any = useRef(null);
    const toastRef: any = useRef(null);

    const handleSubmit = async (data: SearchData) => {
        try {
            if (data.basedOn && !data.basedOnValue) {
                toastRef.current.show({
                    severity: 'error',
                    summary: 'Based On Value',
                    detail: 'Based On Value is required when Based On is selected, please try again.'
                });
                return
            }
            setLoading(true)
            const res = await axios.post('/reporting/DpsReport4558', {
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
    const basedOnOptions = [{
        label: 'declarant',
        name: 'declarant'
    },
    {
        label: 'company',
        name: 'company'
    },
    {
        label: 'Sad_Financial',
        name: 'Sad_Financial'
    },
    {
        label: 'Examiner',
        name: 'Examiner'
    },
    {
        label: 'I_no',
        name: 'I_no'
    },
    {
        label: 'P_no',
        name: 'P_no'
    },
    {
        label: 'M_no',
        name: 'M_no'
    }]

    return (
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
                showBasedOn
                basedOnOptions={basedOnOptions}
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
                    <Column field={'sadYear'} header={'SAD_YEAR'} />
                    <Column field={'sadOffice'} header={'SAD_OFFICE'} />
                    <Column filter filterField="sadRegNo" field={'sadRegNo'} header={'SAD_REG_NO'} />
                    <Column style={{ minWidth: '10rem' }} field={'sadRegDate'} header={'SAD_REG_DATE'} />
                    <Column filter filterField='items' field={'ideAstNo'} header={'SAD_ASSMT_NO'} />
                    <Column filter filterField='ideAstDat' field={'ideAstDat'} header={'SAD_ASSMT_DATE'} />
                    <Column filter filterField='items' field={'ideRcpNo'} header={'SAD_RCPT_NO'} />
                    <Column field={'ideRcpDat'} header={'SAD_RCPT_DATE'} />
                    
                    <Column filter filterField='Status' field={'Status'} header={'STATUS'} />
                    <Column filter filterField='brokerTin' field={'brokerTin'} header={'BROKER_TIN'} />
                    <Column filter filterField='items' style={{ minWidth: '20rem' }} field={'decNam'} header={'BROKER_NAM'} />
                    <Column filter filterField='companyTin' field={'companyTin'} header={'COMPANY_TIN'} />
                    <Column style={{ minWidth: '24rem' }} field={'cmpNam'} header={'COMPANY_NAM'} />
                    <Column field={'finCod'} header={'FIN_COD'} />
                    <Column style={{ minWidth: '20rem' }} field={'finNam'} header={'FIN_NAM'} />
                    
                    <Column filter filterField='items' field={'items'} header={'ITEMS'} />
                    <Column style={{ minWidth: '40rem' }} field={'dsc'} header={'DSC'} />
                    <Column style={{ minWidth: "12rem" }} field={'customsValue'} header={'CUSTOMS_VALUE'} />
                    <Column style={{ minWidth: '14rem' }} field={'truck1'} header={'Idenetity of Truck at Dep'} />
                    <Column field={'truck2'} header={'Identity of Truck Crossing Border'} />
                    <Column filter filterField='totalTaxes' field={'totalTaxes'} header={'TOTAL_TAXES'} />
                    
                    
                    <Column filter filterField="cap" field={'cap'} header={'CAP'} />
                    <Column field={'declarationTaxes'} header={'DECLARATION_TAXES'} />
                </DataTable>
            </Box>
            <Toast ref={toastRef} />
        </SimpleCard>
    );
}

export default DPS_4558;