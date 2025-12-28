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
const translationsForReportManifest4450: string = "reports.manifest_4450"
const translationsForReportManifest4450Columns: string = "reports.manifest_4450.columns"

function Manifest_4450() {
    const [reportData, setReportData] = useState([]);
    const [loading, setLoading] = useState(false)
    const tableRef: any = useRef(null);
  const { t } = useTranslation();

    const handleSubmit = async (data: SearchData) => {
        console.log(data);
        try {
            const res = await axios.post('/reporting/ManifestReport4450', {
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
        <SimpleCard title={t(`${translationsForReportManifest4450}.title`)}>
            <ReportHeaderInputs
                showStartDate
                showEndDate
                showRegDate
                showLocationCode
                onSearch={handleSubmit}
                tabelRef={tableRef}
            />
            {loading && (
                <LinearProgress />
            )}
            <Box width="100%" overflow="auto">
                <DataTable
                    exportFilename={`ManifestReport4450 ${new Date().toISOString()}`}
                    ref={tableRef}
                    value={reportData}
                    rows={ROWS_PER_PAGE}
                    rowsPerPageOptions={[5, 10, 25, 50, 100]}
                    paginator
                    stripedRows
                    showGridlines
                >
                    <Column field={'Man_No'} header={t(`${translationsForReportManifest4450Columns}.Man_No`)} />
                    <Column field={'man_reg_date'} header={t(`${translationsForReportManifest4450Columns}.man_reg_date`)} />
                    <Column field={'voy_no'} header={t(`${translationsForReportManifest4450Columns}.voy_no`)} />
                    <Column field={'dep_date'} header={t(`${translationsForReportManifest4450Columns}.dep_date`)} />
                    <Column field={'bill_no'} header={t(`${translationsForReportManifest4450Columns}.bill_no`)} />
                    <Column field={'line_no'} header={t(`${translationsForReportManifest4450Columns}.line_no`)} />
                    <Column field={'discharge_typ'} header={t(`${translationsForReportManifest4450Columns}.discharge_typ`)} />
                    <Column field={'pkg_rf'} header={t(`${translationsForReportManifest4450Columns}.pkg_rf`)} />
                    <Column field={'kilogram'} header={t(`${translationsForReportManifest4450Columns}.kilogram`)} />
                    <Column field={'carrier'} header={t(`${translationsForReportManifest4450Columns}.carrier`)} />
                    <Column field={'ref_docment'} header={t(`${translationsForReportManifest4450Columns}.ref_docment`)} />
                    <Column field={'loc_code'} header={t(`${translationsForReportManifest4450Columns}.loc_code`)} />
                    <Column field={'Remain_pkg'} header={t(`${translationsForReportManifest4450Columns}.Remain_pkg`)} />
                    <Column field={'remain_wgt'} header={t(`${translationsForReportManifest4450Columns}.remain_wgt`)} />
                    <Column field={'tot_bol'} header={t(`${translationsForReportManifest4450Columns}.tot_bol`)} />
                    <Column field={'SAD_RESERVED'} header={t(`${translationsForReportManifest4450Columns}.SAD_RESERVED`)} />




                </DataTable>
            </Box>
        </SimpleCard>
    );
}

export default Manifest_4450;