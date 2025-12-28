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
const translationsForReportDataExchange5054: string = "reports.dataexchange_5054"
const translationsForReportDataExchange5054Columns: string = "reports.dataexchange_5054.columns"

function DataExchange_5054() {
    const [reportData, setReportData] = useState([]);
    const [loading, setLoading] = useState(false)
    const tableRef: any = useRef(null);
    const { t } = useTranslation();

    useEffect(() => { }, []);

    const handleSubmit = async (data: SearchData) => {
        try {
            setLoading(true)
            const res = await axios.post('/reporting/DataExchangeReport5054', {
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
        <SimpleCard title={t(`${translationsForReportDataExchange5054}.title`)}>
            <ReportHeaderInputs
                report='DataExchange_5054'
                showStartDate
                showEndDate
                showTirepdNum
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
                    <Column field={'DOC_ID'} header={t(`${translationsForReportDataExchange5054Columns}.DOC_ID`)} />
                    <Column field={'MSG_KND'} header={t(`${translationsForReportDataExchange5054Columns}.MSG_KND`)} />
                    <Column field={'Msg_Dsc'} header={t(`${translationsForReportDataExchange5054Columns}.Msg_Dsc`)} />
                    <Column field={'MessageDate'} header={t(`${translationsForReportDataExchange5054Columns}.MessageDate`)} />
                    <Column field={'MSG_STA'} header={t(`${translationsForReportDataExchange5054Columns}.MSG_STA`)} />
                    <Column field={'MSG_FLW'} header={t(`${translationsForReportDataExchange5054Columns}.MSG_FLW`)} />
                    <Column field={'RecieveDate'} header={t(`${translationsForReportDataExchange5054Columns}.RecieveDate`)} />
                </DataTable>
            </Box>
        </SimpleCard>
    );
}

export default DataExchange_5054;