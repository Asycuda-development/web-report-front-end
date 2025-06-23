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
const translationsForReportDPS4563: string = "reports.dps_4563"
const translationsForReportDPS4563Columns: string = "reports.dps_4563.columns"

function DPS_4563() {
    const [reportData, setReportData] = useState([]);
    const [loading, setLoading] = useState(false)
    const tableRef: any = useRef(null);
  const { t } = useTranslation();

    const handleSubmit = async (data: SearchData) => {
        try {
            setLoading(true)
            const res = await axios.post('/reporting/DpsReport4563', {
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
        <SimpleCard title={t(`${translationsForReportDPS4563}.title`)}>
            <ReportHeaderInputs
                showStartDate
                showEndDate
                ShowTinNumber
                showStatus
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
                    <Column field={'cmpCod'} header={t(`${translationsForReportDPS4563Columns}.cmpCod`)} />
                    <Column field={'cmpNam'} header={t(`${translationsForReportDPS4563Columns}.cmpNam`)} />
                    <Column field={'validF'} header={t(`${translationsForReportDPS4563Columns}.validF`)} />
                    <Column field={'validTo'} header={t(`${translationsForReportDPS4563Columns}.validTo`)} />
                    <Column field={'cmpSta'} header={t(`${translationsForReportDPS4563Columns}.cmpSta`)} />
                    <Column field={'mpAdr'} header={t(`${translationsForReportDPS4563Columns}.mpAdr`)} />
                    <Column field={'cmpAd2'} header={t(`${translationsForReportDPS4563Columns}.cmpAd2`)} />
                    <Column field={'cmpTel'} header={t(`${translationsForReportDPS4563Columns}.cmpTel`)} />


                </DataTable>
            </Box>
        </SimpleCard>
    );
}

export default DPS_4563;