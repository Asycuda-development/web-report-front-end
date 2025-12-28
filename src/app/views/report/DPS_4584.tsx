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
const translationsForReportDPS4584: string = "reports.dps_4584"
const translationsForReportDPS4584Columns: string = "reports.dps_4584.columns"

function DPS_4584() {
    const [reportData, setReportData] = useState([]);
    const [loading, setLoading] = useState(false)
    const tableRef: any = useRef(null);
    const toastRef: any = useRef(null);
    const { t } = useTranslation();

    const handleSubmit = async (data: SearchData) => {
        try {
            if (data.basedOn && !data.basedOnValue) {
                toastRef.current.show({
                    severity: 'error',
                    summary: t(`${translationsForBasedOnError}.basedOnSummaryError`),
                    detail: t(`${translationsForBasedOnError}.basedOnDetailedError`)
                });
                return
            }
            setLoading(true)
            const res = await axios.post('/reporting/DpsReport4584', {
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
    const basedOnOptions = [{
        label: t(`${translationsForBasedOn}.i_no`),
        name: 'I-no'
    },
    {
        label: t(`${translationsForBasedOn}.reg_No_Yearly`),
        name: 'Reg_No_Yearly'
    },
    {
        label: t(`${translationsForBasedOn}.reg_No_Daily`),
        name: 'Reg_No_Daily'
    },
    {
        label: t(`${translationsForBasedOn}.t1D_NUMBER`),
        name: 'T1D_NUMBER'
    },
    {
        label: 'I_no',
        name: 'I_no'
    },
    {
        label: t(`${translationsForBasedOn}.cMP_COD`),
        name: 'CMP_COD'
    }]
    return (
        <SimpleCard title={t(`${translationsForReportDPS4584}.title`)}>
            <ReportHeaderInputs
                report='DPS_4584'
                showStartDate
                showEndDate
                showExitDate
                showRegDate
                showCustomsList
                showStatus1
                showDestinationCustomsList
                showArrivalDate
                showFinalExitDate
                showTransitType
                showBasedOn
                basedOnOptions={basedOnOptions}
                onSearch={handleSubmit}
                tabelRef={tableRef}
            />
            {loading && (
                <LinearProgress />
            )}
            <Box width="100%" overflow="auto">
                <DataTable
                    exportFilename={`DPS_4584 ${new Date().toISOString()}`}
                    ref={tableRef}
                    value={reportData}
                    rows={ROWS_PER_PAGE}
                    rowsPerPageOptions={[5, 10, 25, 50, 100]}
                    paginator
                    stripedRows
                    showGridlines
                >
                    <Column style={{ minWidth: "12rem" }} field={'cuoNam'} header={t(`${translationsForReportDPS4584Columns}.cuoNam`)} />
                    <Column field={'icd'} header={t(`${translationsForReportDPS4584Columns}.icd`)} />
                    <Column field={'companyCode'} header={t(`${translationsForReportDPS4584Columns}.companyCode`)} />
                    <Column style={{ minWidth: "40rem" }} field={'companyName'} header={t(`${translationsForReportDPS4584Columns}.companyName`)} />
                    <Column field={'barchalanCode'} header={t(`${translationsForReportDPS4584Columns}.barchalanCode`)} />
                    <Column style={{ minWidth: "25rem" }} field={'barchalanName'} header={t(`${translationsForReportDPS4584Columns}.barchalanName`)} />
                    <Column field={'ruckType'} header={t(`${translationsForReportDPS4584Columns}.ruckType`)} />
                    <Column field={'truckRegNumber'} header={t(`${translationsForReportDPS4584Columns}.truckRegNumber`)} />
                    <Column field={'truckRegNbrnew'} header={t(`${translationsForReportDPS4584Columns}.truckRegNbrnew`)} />
                    <Column field={'trailerRegNumber'} header={t(`${translationsForReportDPS4584Columns}.trailerRegNumber`)} />
                    <Column field={'trailerRegNbrnew'} header={t(`${translationsForReportDPS4584Columns}.trailerRegNbrnew`)} />
                    <Column style={{ minWidth: "20rem" }} field={'goodsDesc'} header={t(`${translationsForReportDPS4584Columns}.goodsDesc`)} />
                    <Column field={'entEmty'} header={t(`${translationsForReportDPS4584Columns}.entEmty`)} />
                    <Column field={'sadNumber'} header={t(`${translationsForReportDPS4584Columns}.sadNumber`)} />
                    <Column field={'t1dNumber'} header={t(`${translationsForReportDPS4584Columns}.t1dNumber`)} />
                    <Column field={'exemptionCommercial'} header={t(`${translationsForReportDPS4584Columns}.exemptionCommercial`)} />
                    <Column field={'weightEntered'} header={t(`${translationsForReportDPS4584Columns}.weightEntered`)} />
                    <Column field={'weightExited'} header={t(`${translationsForReportDPS4584Columns}.weightExited`)} />
                    <Column field={'weight'} header={t(`${translationsForReportDPS4584Columns}.weight`)} />
                    <Column field={'totalPackage'} header={t(`${translationsForReportDPS4584Columns}.totalPackage`)} />
                    <Column style={{ minWidth: "12rem" }} field={'status'} header={t(`${translationsForReportDPS4584Columns}.status`)} />
                    <Column field={'customsRegime'} header={t(`${translationsForReportDPS4584Columns}.customsRegime`)} />
                    <Column field={'regNbrYearly'} header={t(`${translationsForReportDPS4584Columns}.regNbrYearly`)} />
                    <Column field={'regNbrDaily'} header={t(`${translationsForReportDPS4584Columns}.regNbrDaily`)} />
                    <Column field={'mobileTeam'} header={t(`${translationsForReportDPS4584Columns}.mobileTeam`)} />
                    <Column field={'regDate'} header={t(`${translationsForReportDPS4584Columns}.regDate`)} />
                    <Column field={'exitDate'} header={t(`${translationsForReportDPS4584Columns}.exitDate`)} />
                    <Column field={'destArrDate'} header={t(`${translationsForReportDPS4584Columns}.destArrDate`)} />
                    <Column field={'destExtDate'} header={t(`${translationsForReportDPS4584Columns}.destExtDate`)} />
                    <Column field={'parkingLocation'} header={t(`${translationsForReportDPS4584Columns}.parkingLocation`)} />
                    <Column field={'destParkingLocation'} header={t(`${translationsForReportDPS4584Columns}.destParkingLocation`)} />
                    <Column field={'dstArrRem'} header={t(`${translationsForReportDPS4584Columns}.dstArrRem`)} />
                    <Column field={'dstExtRem'} header={t(`${translationsForReportDPS4584Columns}.dstExtRem`)} />
                    <Column style={{ minWidth: "15rem" }} field={'remarkEntry'} header={t(`${translationsForReportDPS4584Columns}.remarkEntry`)} />
                    <Column field={'remarkExit'} header={t(`${translationsForReportDPS4584Columns}.remarkExit`)} />
                    <Column field={'truckNationality'} header={t(`${translationsForReportDPS4584Columns}.truckNationality`)} />
                    <Column style={{ minWidth: "15rem" }} field={'prvDoc'} header={t(`${translationsForReportDPS4584Columns}.prvDoc`)} />
                </DataTable>
            </Box>
            <Toast ref={toastRef} />
        </SimpleCard>
    );
}

export default DPS_4584;