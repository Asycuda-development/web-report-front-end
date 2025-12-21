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
const translationsForReportDPS4562: string = "reports.dps_4562"
const translationsForReportDPS4562Columns: string = "reports.dps_4562.columns"

function DPS_4562() {
    const [reportData, setReportData] = useState([]);
    const [loading, setLoading] = useState(false)
    const tableRef: any = useRef(null);
  const { t } = useTranslation();

    const handleSubmit = async (data: SearchData) => {
        try {
            setLoading(true)
            const res = await axios.post('/reporting/DpsReport4562', {
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
        <SimpleCard title={t(`${translationsForReportDPS4562}.title`)}>
            <ReportHeaderInputs
                showStartDate
                showEndDate
                showUserName
                showOperationDate
                showCustomsList
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
                    <Column field={'sadType'} header={t(`${translationsForReportDPS4562Columns}.sadType`)} />
                    <Column field={'office'} header={t(`${translationsForReportDPS4562Columns}.office`)} />
                    <Column field={'officeCod'} header={t(`${translationsForReportDPS4562Columns}.officeCod`)} />
                    <Column style={{ minWidth: '10rem' }} field={'regNo'} header={t(`${translationsForReportDPS4562Columns}.regNo`)} />
                    <Column field={'regDate'} header={t(`${translationsForReportDPS4562Columns}.regDate`)} />
                    <Column field={'rcptDat'} header={t(`${translationsForReportDPS4562Columns}.rcptDat`)} />
                    <Column field={'rcptNo'} header={t(`${translationsForReportDPS4562Columns}.rcptNo`)} />
                    <Column field={'status'} header={t(`${translationsForReportDPS4562Columns}.status`)} />
                    <Column field={'status1'} header={t(`${translationsForReportDPS4562Columns}.status1`)} />
                    <Column field={'userName'} header={t(`${translationsForReportDPS4562Columns}.userName`)} />
                    <Column style={{ minWidth: '20rem' }} field={'operationName'} header={t(`${translationsForReportDPS4562Columns}.operationName`)} />
                    <Column style={{ minWidth: '24rem' }} field={'operationDate'} header={t(`${translationsForReportDPS4562Columns}.operationDate`)} />
                    <Column style={{ minWidth: '12rem' }} field={'cmpCod'} header={t(`${translationsForReportDPS4562Columns}.cmpCod`)} />
                    <Column style={{ minWidth: '20rem' }} field={'cmpName'} header={t(`${translationsForReportDPS4562Columns}.cmpName`)} />
                    <Column style={{ minWidth: '20rem' }} field={'finNam'} header={t(`${translationsForReportDPS4562Columns}.finNam`)} />
                    <Column field={'decCod'} header={t(`${translationsForReportDPS4562Columns}.decCod`)} />
                    <Column style={{ minWidth: '30rem' }} field={'decName'} header={t(`${translationsForReportDPS4562Columns}.decName`)} />

                </DataTable>
            </Box>
        </SimpleCard>
    );
}

export default DPS_4562;