import { Box, LinearProgress } from '@mui/material';
import axios from 'axios';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { useRef, useState } from 'react';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
import { SimpleCard } from '../../components';
import { ROWS_PER_PAGE } from '../../utils/constant';
import { useTranslation } from 'react-i18next';

const translationsForBasedOnError: string = "errors"
const translationsForBasedOn: string = "basedOn"
const translationsForReportDPS4559: string = "reports.dps_4559"
const translationsForReportDPS4559Columns: string = "reports.dps_4559.columns"

function DPS_4559() {
    const [reportData, setReportData] = useState([]);
    const [loading, setLoading] = useState(false)
    const tableRef: any = useRef(null);
    const { t } = useTranslation();

    const handleSubmit = async (data: SearchData) => {
        try {
            setLoading(true)
            const res = await axios.post('/reporting/DpsReport4559', {
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
        <SimpleCard title={t(`${translationsForReportDPS4559}.title`)}>
            <ReportHeaderInputs
                showStartDate
                showEndDate
                showRegDate
                showCustomsList
                onSearch={handleSubmit}
                tabelRef={tableRef}
            />
            {loading && (
                <LinearProgress />
            )}
            <Box width="100%" overflow="auto">
                <DataTable
                    exportFilename={`DPS_4559 ${new Date().toISOString()}`}
                    ref={tableRef}
                    value={reportData}
                    rows={ROWS_PER_PAGE}
                    rowsPerPageOptions={[5, 10, 25, 50, 100]}
                    paginator
                    stripedRows
                    showGridlines
                >
                    <Column field={'office'} header={t(`${translationsForReportDPS4559Columns}.office`)} />
                    <Column field={'typSad'} header={t(`${translationsForReportDPS4559Columns}.typSad`)} />
                    <Column field={'typProc'} header={t(`${translationsForReportDPS4559Columns}.typProc`)}
                    />
                    <Column field={'type'} header={t(`${translationsForReportDPS4559Columns}.type`)} />
                    <Column field={'status'} header={t(`${translationsForReportDPS4559Columns}.status`)} />
                    <Column field={'sadCnt'} header={t(`${translationsForReportDPS4559Columns}.sadCnt`)} />



                </DataTable>
            </Box>
        </SimpleCard>
    );
}

export default DPS_4559;