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
const translationsForReportDPS4560: string = "reports.dps_4560"
const translationsForReportDPS4560Columns: string = "reports.dps_4560.columns"

function DPS_4560() {
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
            const res = await axios.post('/reporting/DpsReport4560', {
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
        label: t(`${translationsForBasedOn}.sad_financial`),
        name: 'Sad_Financial'
    }]

    return (
        <SimpleCard title={t(`${translationsForReportDPS4560}.title`)}>
            <ReportHeaderInputs
                report='DPS_4560'
                showStartDate
                showEndDate
                showRegDate
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
                    exportFilename={`DPS_4560 ${new Date().toISOString()}`}
                    ref={tableRef}
                    value={reportData}
                    rows={ROWS_PER_PAGE}
                    rowsPerPageOptions={[5, 10, 25, 50, 100]}
                    paginator
                    stripedRows
                    showGridlines
                >
                    <Column field={'office'} header={t(`${translationsForReportDPS4560Columns}.office`)} />
                    <Column field={'status'} header={t(`${translationsForReportDPS4560Columns}.status`)} />
                    <Column field={'sadCnt'} header={t(`${translationsForReportDPS4560Columns}.sadCnt`)} />
                    <Column field={'type'} header={t(`${translationsForReportDPS4560Columns}.type`)} />
                </DataTable>
            </Box>
            <Toast ref={toastRef} />
        </SimpleCard>
    );
}

export default DPS_4560;