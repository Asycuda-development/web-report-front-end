import { Box, LinearProgress, styled } from '@mui/material';
import axios from 'axios';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { useEffect, useRef, useState } from 'react';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
import { SimpleCard } from '../../components';
import { ROWS_PER_PAGE } from '../../utils/constant';
import { Toast } from 'primereact/toast';

function DPS_4564() {
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
            const res = await axios.post('/reporting/DpsReport4564', {
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
        label: 'ALL',
        name: 'ALL'
    }]
    return (
        <SimpleCard title="DPS_4564">
            <ReportHeaderInputs
                showStartDate
                showEndDate
                showCustomsProcedure
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
                    <Column field={'sddOffice'} header={'SAD_OFFICE'} />
                    <Column field={'sadRegNo'} header={'SAD_REG_NO'} />
                    <Column field={'sadRegDate'} header={'SAD_REG_DATE'} />
                    <Column field={'status'} header={'STATUS'} />
                    <Column field={'sadflw'} header={'SAD_FLW'} />
                    <Column field={'currentChannelDsc'} header={'CURRENT_CHANNEL_DSC'} />
                    <Column field={'ccurrentChannelCod'} header={'CURRENT_CHANNEL_COD'} />
                    <Column field={'selectedChannel'} header={'SELECTED_CHANNEL'} />
                    <Column field={'companyTin'} header={'COMPANY_TIN'} />
                    <Column field={'cmpNam'} header={'CMP_NAM'} />
                    <Column field={'items'} header={'ITEMS'} />
                    <Column field={'deccod'} header={'DEC_COD'} />
                    <Column field={'decnam'} header={'DEC_NAM'} />
                    <Column field={'itmno'} header={'ITM_NO'} />
                    <Column field={'hscode'} header={'HSCODE'} />
                    <Column field={'dsc1'} header={'DSC1'} />
                    <Column field={'dsc3'} header={'DSC3'} />
                    <Column style={{ minWidth: '12rem' }} field={'FirstExa'} header={'FIRST_EXA'} />
                    <Column field={'LastExa'} header={'LAST_EXA'} />
                    <Column style={{ minWidth: '12rem' }} field={'FirstCexa'} header={'FIRST_CEXA'} />
                    <Column style={{ minWidth: '12rem' }} field={'LastCexa'} header={'LAST_CEXA'} />
                    <Column field={'PriviousDuty'} header={'PRIVIOUS_DUTY'} />
                    <Column field={'CurrentTAXES'} header={'CURRENT_TAXES'} />
                    <Column field={'TaxDiff'} header={'Tax Difference'} />
                    <Column field={'CUSTOMSVALUE'} header={'CUSTOMS_VALUE'} />
                    <Column field={'offenceCode'} header={'OFFENCE_CODE'} />
                    <Column field={'offenceCodeDesc'} header={'OFFENCE_CODE_DESC'} />
                    <Column field={'LorryTotal'} header={'LORRY_TOTAL'} />
                    <Column field={'regtime'} header={'I_No_Time'} />
                    <Column field={'assmttime'} header={'ASSMT_TIME'} />
                    <Column field={'ctyorg'} header={'Country of origin'} />
                    <Column field={'WORKLOAD'} header={'WORKLOAD'} />
                    <Column field={'PriviousDuty_1'} header={'PRIVIOUS_DUTY_1'} />
                    <Column field={'CurrentTAXES_1'} header={'CURRENT_TAXES_1'} />
                    <Column field={'fincod'} header={'FIN_COD'} />
                    <Column field={'finnam'} header={'FIN_NAM'} />
                    <Column field={'rcptno'} header={'RCPT_NO'} />
                    <Column field={'rcptdate'} header={'rcptdate'} />
                    <Column field={'natproc'} header={'NAT_PROC'} />
                </DataTable>
            </Box>
            <Toast ref={toastRef} />
        </SimpleCard>
    );
}

export default DPS_4564;