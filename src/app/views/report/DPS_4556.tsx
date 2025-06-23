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
const translationsForReportDPS4556: string = "reports.dps_4556"
const translationsForReportDPS4556Columns: string = "reports.dps_4556.columns"

function DPS_4556() {
    const [reportData, setReportData] = useState([]);
    const [loading, setLoading] = useState(false)
    const tableRef: any = useRef(null);
    const { t } = useTranslation();

    const handleSubmit = async (data: SearchData) => {
        try {
            setLoading(true)
            const res = await axios.post('/reporting/DpsReport4556', {
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
        <SimpleCard title={t(`${translationsForReportDPS4556}.title`)}>
            <ReportHeaderInputs
                showStartDate
                showEndDate
                ShowTinNumber
                showCustomsProcedure
                showRegDate
                showAssesDate
                showPayDate
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
                    <Column filter filterField="ideTypSad" field={'ideTypSad'} header={t(`${translationsForReportDPS4556Columns}.ideTypSad`)} />
                    <Column style={{ minWidth: '10rem' }} field={'tptCuoNam'} header={t(`${translationsForReportDPS4556Columns}.tptCuoNam`)} />
                    <Column field={'ideCuoNam'} header={t(`${translationsForReportDPS4556Columns}.ideCuoNam`)} />
                    <Column field={'itemTotal'} header={t(`${translationsForReportDPS4556Columns}.itemTotal`)} />
                    <Column filter filterField='regNo' field={'regNo'} header={t(`${translationsForReportDPS4556Columns}.regNo`)} />
                    <Column field={'regDate'} header={t(`${translationsForReportDPS4556Columns}.regDate`)} />
                    <Column filter filterField='asmtNo' field={'asmtNo'} header={t(`${translationsForReportDPS4556Columns}.asmtNo`)} />
                    <Column field={'astDate'} header={t(`${translationsForReportDPS4556Columns}.astDate`)} />
                    <Column filter filterField='rcptNo' field={'rcptNo'} header={t(`${translationsForReportDPS4556Columns}.rcptNo`)} />
                    <Column field={'rcptDate'} header={t(`${translationsForReportDPS4556Columns}.rcptDate`)} />
                    <Column field={'status'} header={t(`${translationsForReportDPS4556Columns}.status`)} />
                    <Column filter filterField='brokerTin' field={'brokerTin'} header={t(`${translationsForReportDPS4556Columns}.brokerTin`)} />
                    <Column style={{ minWidth: '20rem' }} field={'decNam'} header={t(`${translationsForReportDPS4556Columns}.decNam`)} />
                    <Column filter filterField='companyTin' field={'companyTin'} header={t(`${translationsForReportDPS4556Columns}.companyTin`)} />
                    <Column style={{ minWidth: "20rem" }} field={'cmpNam'} header={t(`${translationsForReportDPS4556Columns}.cmpNam`)} />
                    <Column style={{ minWidth: '20rem' }} field={'finNam'} header={t(`${translationsForReportDPS4556Columns}.finNam`)} />
                    <Column field={'countryOrg'} header={t(`${translationsForReportDPS4556Columns}.countryOrg`)} />
                    <Column filter filterField="countryExport" field={'countryExport'} header={t(`${translationsForReportDPS4556Columns}.countryExport`)} />
                    <Column field={'lorryTotal'} header={t(`${translationsForReportDPS4556Columns}.lorryTotal`)} />
                    <Column field={'declarationValueCurrency'} header={t(`${translationsForReportDPS4556Columns}.declarationValueCurrency`)} />
                    <Column field={'declarationValueAfs'} header={t(`${translationsForReportDPS4556Columns}.declarationValueAfs`)} />
                    <Column field={'declarationTaxes'} header={t(`${translationsForReportDPS4556Columns}.declarationTaxes`)} />
                    <Column field={'ideCuoCod'} header={t(`${translationsForReportDPS4556Columns}.ideCuoCod`)} />
                    <Column style={{ minWidth: '10rem' }} field={'bankNam'} header={t(`${translationsForReportDPS4556Columns}.bankNam`)} />
                    <Column style={{ minWidth: '12rem' }} field={'countryDest'} header={t(`${translationsForReportDPS4556Columns}.countryDest`)} />
                   
                    
             


                </DataTable>
            </Box>
        </SimpleCard>
    );
}

export default DPS_4556;