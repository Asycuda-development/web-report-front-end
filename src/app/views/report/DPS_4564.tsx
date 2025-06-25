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
const translationsForReportDPS4564: string = "reports.dps_4564"
const translationsForReportDPS4564Columns: string = "reports.dps_4564.columns"

function DPS_4564() {
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
                    summary: t(`${translationsForBasedOnError}.basedOnSummaryError`),
                    detail: t(`${translationsForBasedOnError}.basedOnDetailedError`)
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
        label: t(`${translationsForBasedOn}.declarant`),
        name: 'declarant'
    },
    {
        label: t(`${translationsForBasedOn}.company`),
        name: 'company'
    },
    {
        label: t(`${translationsForBasedOn}.all`),
        name: 'ALL'
    }]
    return (
        <SimpleCard title={t(`${translationsForReportDPS4564}.title`)}>
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
                    <Column field={'sadYear'} header={t(`${translationsForReportDPS4564Columns}.sadYear`)} />
                    <Column field={'sddOffice'} header={t(`${translationsForReportDPS4564Columns}.sddOffice`)} />
                    <Column field={'sadRegNo'} header={t(`${translationsForReportDPS4564Columns}.sadRegNo`)} />
                    <Column field={'sadRegDate'} header={t(`${translationsForReportDPS4564Columns}.sadRegDate`)} />
                    <Column field={'status'} header={t(`${translationsForReportDPS4564Columns}.status`)} />
                    <Column field={'sadflw'} header={t(`${translationsForReportDPS4564Columns}.sadflw`)} />
                    <Column field={'currentChannelDsc'} header={t(`${translationsForReportDPS4564Columns}.currentChannelDsc`)} />
                    <Column field={'ccurrentChannelCod'} header={t(`${translationsForReportDPS4564Columns}.ccurrentChannelCod`)} />
                    <Column field={'selectedChannel'} header={t(`${translationsForReportDPS4564Columns}.selectedChannel`)} />
                    <Column field={'companyTin'} header={t(`${translationsForReportDPS4564Columns}.companyTin`)} />
                    <Column field={'cmpNam'} header={t(`${translationsForReportDPS4564Columns}.cmpNam`)} />
                    <Column field={'items'} header={t(`${translationsForReportDPS4564Columns}.items`)} />
                    <Column field={'deccod'} header={t(`${translationsForReportDPS4564Columns}.deccod`)} />
                    <Column field={'decnam'} header={t(`${translationsForReportDPS4564Columns}.decnam`)} />
                    <Column field={'itmno'} header={t(`${translationsForReportDPS4564Columns}.itmno`)} />
                    <Column field={'hscode'} header={t(`${translationsForReportDPS4564Columns}.hscode`)} />
                    <Column field={'dsc1'} header={t(`${translationsForReportDPS4564Columns}.dsc1`)} />
                    <Column field={'dsc3'} header={t(`${translationsForReportDPS4564Columns}.dsc3`)} />
                    <Column style={{ minWidth: '12rem' }} field={'FirstExa'} header={t(`${translationsForReportDPS4564Columns}.FirstExa`)} />
                    <Column field={'LastExa'} header={t(`${translationsForReportDPS4564Columns}.LastExa`)} />
                    <Column style={{ minWidth: '12rem' }} field={'FirstCexa'} header={t(`${translationsForReportDPS4564Columns}.FirstCexa`)} />
                    <Column style={{ minWidth: '12rem' }} field={'LastCexa'} header={t(`${translationsForReportDPS4564Columns}.LastCexa`)} />
                    <Column field={'PriviousDuty'} header={t(`${translationsForReportDPS4564Columns}.PriviousDuty`)} />
                    <Column field={'CurrentTAXES'} header={t(`${translationsForReportDPS4564Columns}.CurrentTAXES`)} />
                    <Column field={'TaxDiff'} header={t(`${translationsForReportDPS4564Columns}.TaxDiff`)} />
                    <Column field={'CUSTOMSVALUE'} header={t(`${translationsForReportDPS4564Columns}.CUSTOMSVALUE`)} />
                    <Column field={'offenceCode'} header={t(`${translationsForReportDPS4564Columns}.offenceCode`)} />
                    <Column field={'offenceCodeDesc'} header={t(`${translationsForReportDPS4564Columns}.offenceCodeDesc`)} />
                    <Column field={'LorryTotal'} header={t(`${translationsForReportDPS4564Columns}.LorryTotal`)} />
                    <Column field={'regtime'} header={t(`${translationsForReportDPS4564Columns}.regtime`)} />
                    <Column field={'assmttime'} header={t(`${translationsForReportDPS4564Columns}.assmttime`)} />
                    <Column field={'ctyorg'} header={t(`${translationsForReportDPS4564Columns}.ctyorg`)} />
                    <Column field={'WORKLOAD'} header={t(`${translationsForReportDPS4564Columns}.WORKLOAD`)} />
                    <Column field={'PriviousDuty_1'} header={t(`${translationsForReportDPS4564Columns}.PriviousDuty_1`)} />
                    <Column field={'CurrentTAXES_1'} header={t(`${translationsForReportDPS4564Columns}.CurrentTAXES_1`)} />
                    <Column field={'fincod'} header={t(`${translationsForReportDPS4564Columns}.fincod`)} />
                    <Column field={'finnam'} header={t(`${translationsForReportDPS4564Columns}.finnam`)} />
                    <Column field={'rcptno'} header={t(`${translationsForReportDPS4564Columns}.rcptno`)} />
                    <Column field={'rcptdate'} header={t(`${translationsForReportDPS4564Columns}.rcptdate`)} />
                    <Column field={'natproc'} header={t(`${translationsForReportDPS4564Columns}.natproc`)} />
                </DataTable>
            </Box>
            <Toast ref={toastRef} />
        </SimpleCard>
    );
}

export default DPS_4564;