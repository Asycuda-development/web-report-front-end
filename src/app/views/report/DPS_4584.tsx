import { Box, LinearProgress, styled } from '@mui/material';
import axios from 'axios';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { useEffect, useRef, useState } from 'react';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
import { SimpleCard } from '../../components';
import { ROWS_PER_PAGE } from '../../utils/constant';
import { Toast } from 'primereact/toast';

function DPS_4584() {
    const [reportData, setReportData] = useState([]);
    const [loading, setLoading] = useState(false)
    const tableRef: any = useRef(null);
    const toastRef: any = useRef(null);

    const handleSubmit = async (data: SearchData) => {
        try {
            if (data.basedOn && !data.basedOnValue) {
                toastRef.current.show({
                    severity: 'error',
                    summary: 'Based On Value',
                    detail: 'Based On Value is required when Based On is selected, please try again.'
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
        label: 'I-no',
        name: 'I-no'
    },
    {
        label: 'Reg_No_Yearly',
        name: 'Reg_No_Yearly'
    },
    {
        label: 'Reg_No_Daily',
        name: 'Reg_No_Daily'
    },
    {
        label: 'T1D_NUMBER',
        name: 'T1D_NUMBER'
    },
    {
        label: 'I_no',
        name: 'I_no'
    },
    {
        label: 'CMP_COD',
        name: 'CMP_COD'
    }]
    return (
        <SimpleCard title="DPS_4584">
            <ReportHeaderInputs
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
                    ref={tableRef}
                    value={reportData}
                    rows={ROWS_PER_PAGE}
                    rowsPerPageOptions={[5, 10, 25, 50, 100]}
                    paginator
                    stripedRows
                    showGridlines
                >
                    <Column style={{ minWidth: "12rem" }} field={'cuoNam'} header={'CUO_NAM'} />
                    <Column field={'icd'} header={'ICD'} />
                    <Column field={'companyCode'} header={'COMPANY_CODE'} />
                    <Column style={{ minWidth: "40rem" }} field={'companyName'} header={'COMPANY_NAME'} />
                    <Column field={'barchalanCode'} header={'BARCHALAN_CODE'} />
                    <Column style={{ minWidth: "25rem" }} field={'barchalanName'} header={'BARCHALAN_NAME'} />
                    <Column field={'ruckType'} header={'TRACK_TYPE'} />
                    <Column field={'truckRegNumber'} header={'TRUCK_REGISTER_NO'} />
                    <Column field={'truckRegNbrnew'} header={'TRUCK_REGISTER_NO_NEW'} />
                    <Column field={'trailerRegNumber'} header={'TRILAR_REG_NO'} />
                    <Column field={'trailerRegNbrnew'} header={'TRILAR_REG_NO_NEW'} />
                    <Column style={{ minWidth: "20rem" }} field={'goodsDesc'} header={'GOODS_DESCRIPTION'} />
                    <Column field={'entEmty'} header={'ENT_EMTY'} />
                    <Column field={'sadNumber'} header={'SAD_NUMBER'} />
                    <Column field={'t1dNumber'} header={'T1D_NUMBER'} />
                    <Column field={'exemptionCommercial'} header={'EXEMPTION_COMMERCIAL'} />
                    <Column field={'weightEntered'} header={'WEIGHT_ENTERED'} />
                    <Column field={'weightExited'} header={'WEIGHT_EXITED'} />
                    <Column field={'weight'} header={'WEIGHT'} />
                    <Column field={'totalPackage'} header={'TOTAL_PACKAGE'} />
                    <Column style={{ minWidth: "12rem" }} field={'status'} header={'STATUS'} />
                    <Column field={'customsRegime'} header={'CUSTOMS_REGIME'} />
                    <Column field={'regNbrYearly'} header={'REG_NBR_YEARLY'} />
                    <Column field={'regNbrDaily'} header={'REG_NBR_DAILY'} />
                    <Column field={'mobileTeam'} header={'MOBILE_TEAM'} />
                    <Column field={'regDate'} header={'REG_DATE'} />
                    <Column field={'exitDate'} header={'EXIT_DATE'} />
                    <Column field={'destArrDate'} header={'DEST_ARR_DATE'} />
                    <Column field={'destExtDate'} header={'DEST_EXT_DATE'} />
                    <Column field={'parkingLocation'} header={'PARKING_LOCATION'} />
                    <Column field={'destParkingLocation'} header={'DEST_PARKING_LOCATION'} />
                    <Column field={'dstArrRem'} header={'DST_ARR_REM'} />
                    <Column field={'dstExtRem'} header={'DST_EXT_REM'} />
                    <Column style={{ minWidth: "15rem" }} field={'remarkEntry'} header={'REMARK_ENTRY'} />
                    <Column field={'remarkExit'} header={'REMARK_EXIT'} />
                    <Column field={'truckNationality'} header={'TRUCK_NATIONALITY'} />
                    <Column style={{ minWidth: "15rem" }} field={'prvDoc'} header={'PRV_DOC'} />
                </DataTable>
            </Box>
            <Toast ref={toastRef} />
        </SimpleCard>
    );
}

export default DPS_4584;