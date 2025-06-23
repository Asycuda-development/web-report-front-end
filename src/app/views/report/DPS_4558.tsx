import { Box, LinearProgress, styled } from '@mui/material';
import axios from 'axios';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { useEffect, useRef, useState } from 'react';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
import { SimpleCard } from '../../components';
import { ROWS_PER_PAGE } from '../../utils/constant';
import { Toast } from 'primereact/toast';
import { useTranslation } from 'react-i18next';

const translationsForBasedOnError: string = "errors"
const translationsForBasedOn: string = "basedOn"
const translationsForReportDPS4558: string = "reports.dps_4558"
const translationsForReportDPS4558Columns: string = "reports.dps_4558.columns"

function DPS_4558() {
    const [reportData, setReportData] = useState([]);
    const [loading, setLoading] = useState(false)
    const tableRef: any = useRef(null);
    const toastRef: any = useRef(null);
    const { t } = useTranslation();

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
        <SimpleCard title={t(`${translationsForReportDPS4558}.title`)}>
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
                    <Column field={'sadYear'} header={t(`${translationsForReportDPS4558Columns}.sadYear`)} />
                    <Column field={'sadOffice'} header={t(`${translationsForReportDPS4558Columns}.sadOffice`)} />
                    <Column filter filterField="sadRegNo" field={'sadRegNo'} header={t(`${translationsForReportDPS4558Columns}.sadRegNo`)} />
                    <Column style={{ minWidth: '10rem' }} field={'sadRegDate'} header={t(`${translationsForReportDPS4558Columns}.sadRegDate`)} />
                    <Column filter filterField='items' field={'ideAstNo'} header={t(`${translationsForReportDPS4558Columns}.ideAstNo`)} />
                    <Column filter filterField='ideAstDat' field={'ideAstDat'} header={t(`${translationsForReportDPS4558Columns}.ideAstDat`)} />
                    <Column filter filterField='items' field={'ideRcpNo'} header={t(`${translationsForReportDPS4558Columns}.ideRcpNo`)} />
                    <Column field={'ideRcpDat'} header={t(`${translationsForReportDPS4558Columns}.ideRcpDat`)} />
                    
                    <Column filter filterField='Status' field={'Status'} header={t(`${translationsForReportDPS4558Columns}.Status`)} />
                    <Column filter filterField='brokerTin' field={'brokerTin'} header={t(`${translationsForReportDPS4558Columns}.brokerTin`)} />
                    <Column filter filterField='items' style={{ minWidth: '20rem' }} field={'decNam'} header={t(`${translationsForReportDPS4558Columns}.decNam`)} />
                    <Column filter filterField='companyTin' field={'companyTin'} header={t(`${translationsForReportDPS4558Columns}.companyTin`)} />
                    <Column style={{ minWidth: '24rem' }} field={'cmpNam'} header={t(`${translationsForReportDPS4558Columns}.cmpNam`)} />
                    <Column field={'finCod'} header={t(`${translationsForReportDPS4558Columns}.finCod`)} />
                    <Column style={{ minWidth: '20rem' }} field={'finNam'} header={t(`${translationsForReportDPS4558Columns}.finNam`)} />
                    
                    <Column filter filterField='items' field={'items'} header={t(`${translationsForReportDPS4558Columns}.items`)} />
                    <Column style={{ minWidth: '40rem' }} field={'dsc'} header={t(`${translationsForReportDPS4558Columns}.dsc`)} />
                    <Column style={{ minWidth: "12rem" }} field={'customsValue'} header={t(`${translationsForReportDPS4558Columns}.customsValue`)} />
                    <Column style={{ minWidth: '14rem' }} field={'truck1'} header={t(`${translationsForReportDPS4558Columns}.truck1`)} />
                    <Column field={'truck2'} header={t(`${translationsForReportDPS4558Columns}.truck2`)} />
                    <Column filter filterField='totalTaxes' field={'totalTaxes'} header={t(`${translationsForReportDPS4558Columns}.totalTaxes`)} />
                    
                    
                    <Column filter filterField="cap" field={'cap'} header={t(`${translationsForReportDPS4558Columns}.cap`)} />
                    <Column field={'declarationTaxes'} header={t(`${translationsForReportDPS4558Columns}.declarationTaxes`)} />
                </DataTable>
            </Box>
            <Toast ref={toastRef} />
        </SimpleCard>
    );
}

export default DPS_4558;