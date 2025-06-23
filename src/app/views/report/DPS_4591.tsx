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
const translationsForReportDPS4591: string = "reports.dps_4591"
const translationsForReportDPS4591Columns: string = "reports.dps_4591.columns"

function DPS_4591() {
    const [reportData, setReportData] = useState([]);
    const [loading, setLoading] = useState(false)
    const tableRef: any = useRef(null);
  const { t } = useTranslation();

    const handleSubmit = async (data: SearchData) => {
        try {
            setLoading(true)
            const res = await axios.post('/reporting/DpsReport4591', {
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
        <SimpleCard title={t(`${translationsForReportDPS4591}.title`)}>
            <ReportHeaderInputs
                showStartDate
                showEndDate
                showCustomsProcedure
                showRegDate
                showCustomsList
                showExemptionType
                ShowHsCode
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
                    <Column field={'type'} header={t(`${translationsForReportDPS4591Columns}.type`)} />
                    <Column field={'bcp'} header={t(`${translationsForReportDPS4591Columns}.bcp`)} />
                    <Column field={'icd'} header={t(`${translationsForReportDPS4591Columns}.icd`)} />
                    <Column field={'countryOrigen'} header={t(`${translationsForReportDPS4591Columns}.countryOrigen`)} />
                    <Column field={'countryExport'} header={t(`${translationsForReportDPS4591Columns}.countryExport`)} />
                    <Column field={'countryDestination'} header={t(`${translationsForReportDPS4591Columns}.countryDestination`)} />
                    <Column field={'hsCode'} header={t(`${translationsForReportDPS4591Columns}.hsCode`)} />
                    <Column field={'hsDsc'} header={t(`${translationsForReportDPS4591Columns}.hsDsc`)} />
                    <Column field={'netWeight'} header={t(`${translationsForReportDPS4591Columns}.netWeight`)} />
                    <Column field={'valueAfs'} header={t(`${translationsForReportDPS4591Columns}.valueAfs`)} />


                </DataTable>
            </Box>
        </SimpleCard>
    );
}

export default DPS_4591;