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
const translationsForReportDPS4576: string = "reports.dps_4576"
const translationsForReportDPS4576Columns: string = "reports.dps_4576.columns"

function DPS_4576() {
    const [reportData, setReportData] = useState([]);
    const [loading, setLoading] = useState(false)
    const tableRef: any = useRef(null);
  const { t } = useTranslation();

    const handleSubmit = async (data: SearchData) => {
        try {
            setLoading(true)
            const res = await axios.post('/reporting/DpsReport4576', {
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
        <SimpleCard title={t(`${translationsForReportDPS4576}.title`)}>
            <ReportHeaderInputs
                showStartDate
                showEndDate
                showCustomsProcedure
                showRegDate
                showCustomsList
                ShowRegisterNo
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
                    <Column style={{ minWidth: '10rem' }} field={'customsNam'} header={t(`${translationsForReportDPS4576Columns}.customsNam`)} />
                    <Column style={{ minWidth: '15rem' }} field={'exsec1'} header={t(`${translationsForReportDPS4576Columns}.exsec1`)} />
                    <Column style={{ minWidth: '15rem' }} field={'exsec2'} header={t(`${translationsForReportDPS4576Columns}.exsec2`)} />
                    <Column style={{ minWidth: '10rem' }} field={'lastCheifExCode'} header={t(`${translationsForReportDPS4576Columns}.lastCheifExCode`)} />
                    <Column field={'lastCheifExName'} header={t(`${translationsForReportDPS4576Columns}.lastCheifExName`)} />
                    <Column field={'lastExCodes'} header={t(`${translationsForReportDPS4576Columns}.lastExCodes`)} />
                    <Column style={{ minWidth: '20rem' }} field={'lastExName'} header={t(`${translationsForReportDPS4576Columns}.lastExName`)} />
                    <Column field={'RegNbr'} header={t(`${translationsForReportDPS4576Columns}.RegNbr`)} />
                    <Column field={'regDate'} header={t(`${translationsForReportDPS4576Columns}.regDate`)} />
                    <Column field={'brokerTin'} header={t(`${translationsForReportDPS4576Columns}.brokerTin`)} />
                    <Column style={{ minWidth: '15rem' }} field={'decNam'} header={t(`${translationsForReportDPS4576Columns}.decNam`)} />
                    <Column style={{ minWidth: '20rem' }} field={'companyTin'} header={t(`${translationsForReportDPS4576Columns}.companyTin`)} />
                    <Column style={{ minWidth: '20rem' }} field={'cmpNam'} header={t(`${translationsForReportDPS4576Columns}.cmpNam`)} />
                    <Column style={{ minWidth: '25rem' }} field={'fisCod'} header={t(`${translationsForReportDPS4576Columns}.fisCod`)} />
                    <Column style={{ minWidth: '20rem' }} field={'finNam'} header={t(`${translationsForReportDPS4576Columns}.finNam`)} />
                    <Column field={'countryOrg'} header={t(`${translationsForReportDPS4576Columns}.countryOrg`)} />
                    <Column style={{ minWidth: '15rem' }} field={'countryExport'} header={t(`${translationsForReportDPS4576Columns}.countryExport`)} />
                    <Column style={{ minWidth: '15rem' }} field={'countryDest'} header={t(`${translationsForReportDPS4576Columns}.countryDest`)} />
                    <Column style={{ minWidth: '12rem' }} field={'declarationValueAfs'} header={t(`${translationsForReportDPS4576Columns}.declarationValueAfs`)} />
                    <Column style={{ minWidth: "12rem" }} field={'declarationTaxes'} header={t(`${translationsForReportDPS4576Columns}.declarationTaxes`)} />
                    <Column style={{ minWidth: '14rem' }} field={'status'} header={t(`${translationsForReportDPS4576Columns}.status`)} />
                    <Column style={{ minWidth: '20rem' }} field={'cmpExpCod'} header={t(`${translationsForReportDPS4576Columns}.cmpExpCod`)} />
                    <Column style={{ minWidth: '20rem' }} field={'locGoods'} header={t(`${translationsForReportDPS4576Columns}.locGoods`)} />
                    <Column style={{ minWidth: '20rem' }} field={'txtFre'} header={t(`${translationsForReportDPS4576Columns}.txtFre`)} />
                </DataTable>
            </Box>
        </SimpleCard>
    );
}

export default DPS_4576;