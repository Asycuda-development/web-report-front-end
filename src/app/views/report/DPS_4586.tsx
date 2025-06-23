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
const translationsForReportDPS4586: string = "reports.dps_4586"
const translationsForReportDPS4586Columns: string = "reports.dps_4586.columns"

function DPS_4586() {
    const [reportData, setReportData] = useState([]);
    const [loading, setLoading] = useState(false)
    const tableRef: any = useRef(null);
  const { t } = useTranslation();

    const handleSubmit = async (data: SearchData) => {
        try {
            setLoading(true)
            const res = await axios.post('/reporting/DpsReport4586', {
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
        <SimpleCard title={t(`${translationsForReportDPS4586}.title`)}>
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
                    ref={tableRef}
                    value={reportData}
                    rows={ROWS_PER_PAGE}
                    rowsPerPageOptions={[5, 10, 25, 50, 100]}
                    paginator
                    stripedRows
                    showGridlines
                >
                    <Column field={'office'} header={t(`${translationsForReportDPS4586Columns}.office`)} />
                    <Column field={'itemGrossWeight'} header={t(`${translationsForReportDPS4586Columns}.itemGrossWeight`)} />
                    <Column field={'itemNetWeight'} header={t(`${translationsForReportDPS4586Columns}.itemNetWeight`)} />
                    <Column field={'itemValueCurrency'} header={t(`${translationsForReportDPS4586Columns}.itemValueCurrency`)} />
                    <Column field={'itemValueAfs'} header={t(`${translationsForReportDPS4586Columns}.itemValueAfs`)} />
                    <Column field={'itemTaxes'} header={t(`${translationsForReportDPS4586Columns}.itemTaxes`)} />
                    <Column field={'taxCode'} header={t(`${translationsForReportDPS4586Columns}.taxCode`)} />
                    <Column field={'codeTaxAmount'} header={t(`${translationsForReportDPS4586Columns}.codeTaxAmount`)} />


                </DataTable>
            </Box>
        </SimpleCard>
    );
}

export default DPS_4586;