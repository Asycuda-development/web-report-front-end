import { Box, LinearProgress, styled } from '@mui/material';
import axios from 'axios';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { useEffect, useRef, useState } from 'react';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
import { SimpleCard } from '../../components';
import { ROWS_PER_PAGE } from '../../utils/constant';
import { useTranslation } from 'react-i18next';

const translationsForBasedOnError: string = "errors"
const translationsForBasedOn: string = "basedOn"
const translationsForReportDPS4585: string = "reports.dps_4585"
const translationsForReportDPS4585Columns: string = "reports.dps_4585.columns"

function DPS_4585() {
    const [reportData, setReportData] = useState([]);
    const [loading, setLoading] = useState(false)
    const tableRef: any = useRef(null);
    const { t } = useTranslation();

    const handleSubmit = async (data: SearchData) => {
        try {
            setLoading(true)
            const res = await axios.post('/reporting/DpsReport4585', {
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

    return (
        <SimpleCard title={t(`${translationsForReportDPS4585}.title`)}>
            <ReportHeaderInputs
                report='DPS_4585'
                showStartDate
                showEndDate
                showExitDate
                showRegDate
                showCustomsList
                showDestinationCustomsList
                showArrivalDate
                showFinalExitDate
                showTransitType
                onSearch={handleSubmit}
                tabelRef={tableRef}
            />
            {loading && (
                <LinearProgress />
            )}
            <Box width="100%" overflow="auto">
                <DataTable
                    exportFilename={`DPS_4585 ${new Date().toISOString()}`}
                    ref={tableRef}
                    value={reportData}
                    rows={ROWS_PER_PAGE}
                    rowsPerPageOptions={[5, 10, 25, 50, 100]}
                    paginator
                    stripedRows
                    showGridlines
                >
                    <Column field={'customsName'} header={t(`${translationsForReportDPS4585Columns}.customsName`)} />
                    <Column field={'icd'} header={t(`${translationsForReportDPS4585Columns}.icd`)} />
                    <Column field={'status'} header={t(`${translationsForReportDPS4585Columns}.status`)} />
                    <Column field={'emptys'} header={t(`${translationsForReportDPS4585Columns}.emptys`)} />
                    <Column field={'co'} header={t(`${translationsForReportDPS4585Columns}.co`)} />
                </DataTable>
            </Box>
        </SimpleCard>
    );
}

export default DPS_4585;