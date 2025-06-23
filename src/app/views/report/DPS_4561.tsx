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
                    summary: 'Based On Value',
                    detail: 'Based On Value is required when Based On is selected, please try again.'
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
        label: 'declarant',
        name: 'declarant'
    },
    {
        label: 'company',
        name: 'company'
    },
    {
        label: 'ALL',
        name: 'ALL'
    },
    {
        label: 'Sad_Financial',
        name: 'Sad_Financial'
    },
    {
        label: 'CExaminer',
        name: 'CExaminer'
    },
    {
        label: 'Examiner',
        name: 'Examiner'
    },
    {
        label: 'I_no',
        name: 'I_no'
    },
    {
        label: 'P_no',
        name: 'P_no'
    },
    {
        label: 'M_no',
        name: 'M_no'
    }]

    return (
        <SimpleCard title={t(`${translationsForReportDPS4561}.title`)}>
            <ReportHeaderInputs
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
                    ref={tableRef}
                    value={reportData}
                    rows={ROWS_PER_PAGE}
                    rowsPerPageOptions={[5, 10, 25, 50, 100]}
                    paginator
                    stripedRows
                    showGridlines
                >
                     <Column field={'regNo'} header={t(`${translationsForReportDPS4561Columns}.regNo`)} />
                    <Column field={'regDate'} header={t(`${translationsForReportDPS4561Columns}.regDate`)} />
                    <Column field={'assmtNo'} header={t(`${translationsForReportDPS4561Columns}.assmtNo`)} />
                    <Column field={'rcptNo'} header={t(`${translationsForReportDPS4561Columns}.rcptNo`)} />
                    <Column field={'rcptDate'} header={t(`${translationsForReportDPS4561Columns}.rcptDate`)} />
                    <Column style={{ minWidth: '25rem' }} field={'status1'} header={t(`${translationsForReportDPS4561Columns}.status1`)} />
                    <Column field={'status'} header={t(`${translationsForReportDPS4561Columns}.status`)} />
                    <Column filter filterField='operationName' field={'operationName'} header={t(`${translationsForReportDPS4561Columns}.operationName`)} />
                    <Column style={{ minWidth: '20rem' }} field={'operationDate'} header={t(`${translationsForReportDPS4561Columns}.operationDate`)} />
                    <Column style={{ minWidth: '20rem' }} field={'userName'} header={t(`${translationsForReportDPS4561Columns}.userName`)} />
                    <Column style={{ minWidth: '10rem' }} field={'fullName'} header={t(`${translationsForReportDPS4561Columns}.fullName`)} />
                    <Column field={'cmpCode'} header={t(`${translationsForReportDPS4561Columns}.cmpCode`)} />
                    <Column style={{ minWidth: '15rem' }} field={'cmpName'} header={t(`${translationsForReportDPS4561Columns}.cmpName`)} />
                    <Column style={{ minWidth: '14rem' }} field={'finCod'} header={t(`${translationsForReportDPS4561Columns}.finCod`)} />
                    <Column style={{ minWidth: '20rem' }} field={'finNam'} header={t(`${translationsForReportDPS4561Columns}.finNam`)} />
                    <Column style={{ minWidth: '20rem' }} field={'decCod'} header={t(`${translationsForReportDPS4561Columns}.decCod`)} />
                    <Column style={{ minWidth: '20rem' }} field={'decName'} header={t(`${translationsForReportDPS4561Columns}.decName`)} />
                    <Column style={{ minWidth: "12rem" }} field={'firstColor'} header={t(`${translationsForReportDPS4561Columns}.firstColor`)} />
                   
                   
                    <Column field={'sadType'} header={t(`${translationsForReportDPS4561Columns}.sadType`)} />
                    <Column field={'officeCod'} header={t(`${translationsForReportDPS4561Columns}.officeCod`)} />
                    <Column style={{ minWidth: '10rem' }} field={'office'} header={t(`${translationsForReportDPS4561Columns}.office`)} />
                    
                    
                    
                </DataTable>
            </Box>
            <Toast ref={toastRef} />
        </SimpleCard>
    );
}

export default DPS_4561;