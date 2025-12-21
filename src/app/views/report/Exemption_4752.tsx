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
const translationsForReportExemption4752: string = "reports.exemption_4752"
const translationsForReportExemption4752Columns: string = "reports.exemption_4752.columns"

function Exemption_4752() {
    const [reportData, setReportData] = useState([]);
    const [loading, setLoading] = useState(false)
    const tableRef: any = useRef(null);
  const { t } = useTranslation();

    const handleSubmit = async (data: SearchData) => {
        try {
            setLoading(true)
            const res = await axios.post('/reporting/ExemptionReport4752', {
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
        <SimpleCard title={t(`${translationsForReportExemption4752}.title`)}>
            <ReportHeaderInputs
                showStartDate
                showEndDate
                showRegDate
                showCustomsList
                showExemptionRepNo
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
                    <Column field={'Autorization_No'} header={t(`${translationsForReportExemption4752Columns}.Autorization_No`)} />
                    <Column field={'ref_no'} header={t(`${translationsForReportExemption4752Columns}.ref_no`)} />
                    <Column field={'ref_date'} header={t(`${translationsForReportExemption4752Columns}.ref_date`)} />
                    <Column field={'type_cert'} header={t(`${translationsForReportExemption4752Columns}.type_cert`)} />
                    <Column field={'val_tot'} header={t(`${translationsForReportExemption4752Columns}.val_tot`)} />
                    <Column field={'rem_val'} header={t(`${translationsForReportExemption4752Columns}.rem_val`)} />
                    <Column field={'wgt_tot'} header={t(`${translationsForReportExemption4752Columns}.wgt_tot`)} />
                    <Column field={'rem_wgt'} header={t(`${translationsForReportExemption4752Columns}.rem_wgt`)} />
                    <Column field={'CNS_COD'} header={t(`${translationsForReportExemption4752Columns}.CNS_COD`)} />
                    <Column field={'reg_no_ctn'} header={t(`${translationsForReportExemption4752Columns}.reg_no_ctn`)} />




                </DataTable>
            </Box>
        </SimpleCard>
    );
}

export default Exemption_4752;