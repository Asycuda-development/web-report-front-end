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
const translationsForReportDPS4561: string = "reports.dps_4561"
const translationsForReportDPS4561Columns: string = "reports.dps_4561.columns"

function DPS_4561() {
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
            const res = await axios.post('/reporting/DpsReport4561', {
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
        label: t(`${translationsForBasedOn}.declarant`),
        name: 'declarant'
    },
    {
        label: t(`${translationsForBasedOn}.company`),
        name: 'company'
    },
    {
        label: t(`${translationsForBasedOn}.all`),
        name: 'ALL'
    },
    {
        label: t(`${translationsForBasedOn}.sad_financial`),
        name: 'Sad_Financial'
    },
    {
        label: t(`${translationsForBasedOn}.cExaminer`),
        name: 'CExaminer'
    },
    {
        label: t(`${translationsForBasedOn}.examiner`),
        name: 'Examiner'
    },
    {
        label: t(`${translationsForBasedOn}.i_no`),
        name: 'I_no'
    },
    {
        label: t(`${translationsForBasedOn}.p_no`),
        name: 'P_no'
    },
    {
        label: t(`${translationsForBasedOn}.m_no`),
        name: 'M_no'
    }]

    return (
        <SimpleCard title={t(`${translationsForReportDPS4561}.title`)}>
            <ReportHeaderInputs
                report='DPS_4561'
                showStartDate
                showEndDate
                showOperationDate
                showCustomsProcedure
                showRegDate
                showCustomsList
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
                    exportFilename={`DPS_4561 ${new Date().toISOString()}`}
                    ref={tableRef}
                    value={reportData}
                    rows={ROWS_PER_PAGE}
                    rowsPerPageOptions={[5, 10, 25, 50, 100]}
                    paginator
                    stripedRows
                    showGridlines
                >
                    <Column field={'regNo'} header={'REG_NO'} />
                    <Column field={'regDate'} header={'REG_DATE'} />
                    <Column field={'assmtNo'} header={'ASSMT_NO'} />
                    <Column field={'rcptNo'} header={'RCPT_NO'} />
                    <Column field={'rcptDate'} header={'RCPT_DAT'} />
                    <Column style={{ minWidth: '25rem' }} field={'status1'} header={'STATUS1'} />
                    <Column field={'status'} header={'STATUS'} />
                    <Column filter filterField='operationName' field={'operationName'} header={'OPERATION_NAME'} />
                    <Column style={{ minWidth: '20rem' }} field={'operationDate'} header={'OPERATION_DATE'} />
                    <Column style={{ minWidth: '20rem' }} field={'userName'} header={'USER_NAME'} />
                    <Column style={{ minWidth: '10rem' }} field={'fullName'} header={'FULLNAME'} />
                    <Column field={'cmpCode'} header={'Company_CODE'} />
                    <Column style={{ minWidth: '15rem' }} field={'cmpName'} header={'Company_NAME'} />
                    <Column style={{ minWidth: '14rem' }} field={'finCod'} header={'FIN_COD'} />
                    <Column style={{ minWidth: '20rem' }} field={'finNam'} header={'FIN_NAM'} />
                    <Column style={{ minWidth: '20rem' }} field={'decCod'} header={'Declarant_Code'} />
                    <Column style={{ minWidth: '20rem' }} field={'decName'} header={'Declarant_Name'} />
                    <Column style={{ minWidth: "12rem" }} field={'firstColor'} header={'FIRST_COLOR'} />


                    <Column field={'sadType'} header={'SAD_TYPE'} />
                    <Column field={'officeCod'} header={'OFFICE_COD'} />
                    <Column style={{ minWidth: '10rem' }} field={'office'} header={'OFFICE'} />



                </DataTable>
            </Box>
            <Toast ref={toastRef} />
        </SimpleCard>
    );
}

export default DPS_4561;