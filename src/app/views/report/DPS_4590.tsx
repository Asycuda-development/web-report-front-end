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
const translationsForReportDPS4590: string = "reports.dps_4590"
const translationsForReportDPS4590Columns: string = "reports.dps_4590.columns"

function DPS_4590() {
    const [reportData, setReportData] = useState([]);
    const [loading, setLoading] = useState(false)
    const tableRef: any = useRef(null);
  const { t } = useTranslation();

    const handleSubmit = async (data: SearchData) => {
        try {
            setLoading(true)
            const res = await axios.post('/reporting/DpsReport4590', {
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
        <SimpleCard title={t(`${translationsForReportDPS4590}.title`)}>
            <ReportHeaderInputs
                showStartDate
                showEndDate
                showCustomsProcedure
                showRegDate
                showCustomsList
                showExemptionType
                onSearch={handleSubmit}
                tabelRef={tableRef}
            />
            {loading && (
                <LinearProgress />
            )}
            <Box width="100%" overflow="auto">
                <DataTable
                    exportFilename={`DPS_4590 ${new Date().toISOString()}`}
                    ref={tableRef}
                    value={reportData}
                    rows={ROWS_PER_PAGE}
                    rowsPerPageOptions={[5, 10, 25, 50, 100]}
                    paginator
                    stripedRows
                    showGridlines
                >
                    <Column field={'icd'} header={t(`${translationsForReportDPS4590Columns}.icd`)} />
                    <Column field={'types'} header={t(`${translationsForReportDPS4590Columns}.types`)} />
                    <Column field={'orgCountry'} header={t(`${translationsForReportDPS4590Columns}.orgCountry`)} />
                    <Column field={'destCountry'} header={t(`${translationsForReportDPS4590Columns}.destCountry`)} />
                    <Column field={'hscode'} header={t(`${translationsForReportDPS4590Columns}.hscode`)} />
                    <Column field={'hsdsc'} header={t(`${translationsForReportDPS4590Columns}.hsdsc`)} />
                    <Column field={'valueUsd'} header={t(`${translationsForReportDPS4590Columns}.valueUsd`)} />
                    <Column field={'valueAfs'} header={t(`${translationsForReportDPS4590Columns}.valueAfs`)} />
                    <Column field={'taxAmt'} header={t(`${translationsForReportDPS4590Columns}.taxAmt`)} />
                </DataTable>
            </Box>
        </SimpleCard>
    );
}

export default DPS_4590;