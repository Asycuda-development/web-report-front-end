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
const translationsForReportExemption4750: string = "reports.exemption_4750"
const translationsForReportExemption4750Columns: string = "reports.exemption_4750.columns"

function Exemption_4750() {
    const [reportData, setReportData] = useState([]);
    const [loading, setLoading] = useState(false)
    const tableRef: any = useRef(null);
  const { t } = useTranslation();

    const handleSubmit = async (data: SearchData) => {
        try {
            setLoading(true)
            const res = await axios.post('/reporting/ExemptionReport4750', {
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
        <SimpleCard title={t(`${translationsForReportExemption4750}.title`)}>
            <ReportHeaderInputs
                showStartDate
                showEndDate
                showRegDate
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
                    <Column field={'Autorization_No       '} header={t(`${translationsForReportExemption4750Columns}.Autorization_No       `)} />
                    <Column field={'cert_reg_dat'} header={t(`${translationsForReportExemption4750Columns}.cert_reg_dat`)} />
                    <Column field={'issue_off'} header={t(`${translationsForReportExemption4750Columns}.issue_off`)} />
                    <Column field={'issue_off_nam'} header={t(`${translationsForReportExemption4750Columns}.issue_off_nam`)} />
                    <Column field={'issue_year'} header={t(`${translationsForReportExemption4750Columns}.issue_year`)} />
                    <Column field={'valid_from'} header={t(`${translationsForReportExemption4750Columns}.valid_from`)} />
                    <Column field={'valid_to'} header={t(`${translationsForReportExemption4750Columns}.valid_to`)} />
                    <Column field={'ref_no'} header={t(`${translationsForReportExemption4750Columns}.ref_no`)} />
                    <Column field={'ref_date'} header={t(`${translationsForReportExemption4750Columns}.ref_date`)} />
                    <Column field={'subc'} header={t(`${translationsForReportExemption4750Columns}.subc`)} />
                    <Column field={'subc_nam'} header={t(`${translationsForReportExemption4750Columns}.subc_nam`)} />
                    <Column field={'cmp_cod'} header={t(`${translationsForReportExemption4750Columns}.cmp_cod`)} />
                    <Column field={'cmp_desc'} header={t(`${translationsForReportExemption4750Columns}.cmp_desc`)} />
                    <Column field={'contractor_cod'} header={t(`${translationsForReportExemption4750Columns}.contractor_cod`)} />
                    <Column field={'contractor_nam'} header={t(`${translationsForReportExemption4750Columns}.contractor_nam`)} />
                    <Column field={'type_cert'} header={t(`${translationsForReportExemption4750Columns}.type_cert`)} />
                    <Column field={'nfc_cod'} header={t(`${translationsForReportExemption4750Columns}.nfc_cod`)} />
                    <Column field={'issu_auto'} header={t(`${translationsForReportExemption4750Columns}.issu_auto`)} />
                    <Column field={'Border_office'} header={t(`${translationsForReportExemption4750Columns}.Border_office`)} />
                    <Column field={'clr_office'} header={t(`${translationsForReportExemption4750Columns}.clr_office`)} />
                    <Column field={'proc_cod'} header={t(`${translationsForReportExemption4750Columns}.proc_cod`)} />
                    <Column field={'acc_cod'} header={t(`${translationsForReportExemption4750Columns}.acc_cod`)} />
                    <Column field={'val_tot'} header={t(`${translationsForReportExemption4750Columns}.val_tot`)} />
                    <Column field={'wgt_tot'} header={t(`${translationsForReportExemption4750Columns}.wgt_tot`)} />
                    <Column field={'rem_val'} header={t(`${translationsForReportExemption4750Columns}.rem_val`)} />
                    <Column field={'rem_wgt'} header={t(`${translationsForReportExemption4750Columns}.rem_wgt`)} />
                    <Column field={'hscode'} header={t(`${translationsForReportExemption4750Columns}.hscode`)} />
                    <Column field={'HS_DESC'} header={t(`${translationsForReportExemption4750Columns}.HS_DESC`)} />
                    <Column field={'itm_val_usd'} header={t(`${translationsForReportExemption4750Columns}.itm_val_usd`)} />
                    <Column field={'itm_val_afs'} header={t(`${translationsForReportExemption4750Columns}.itm_val_afs`)} />
                    <Column field={'net_wgt'} header={t(`${translationsForReportExemption4750Columns}.net_wgt`)} />
                    <Column field={'gross_wgt'} header={t(`${translationsForReportExemption4750Columns}.gross_wgt`)} />
                    <Column field={'itm_um1_nam'} header={t(`${translationsForReportExemption4750Columns}.itm_um1_nam`)} />
                    <Column field={'written_off_wgt'} header={t(`${translationsForReportExemption4750Columns}.written_off_wgt`)} />
                    <Column field={'sad_number'} header={t(`${translationsForReportExemption4750Columns}.sad_number`)} />
                    <Column field={'sad_yer'} header={t(`${translationsForReportExemption4750Columns}.sad_yer`)} />
                    <Column field={'sad_reg_dat'} header={t(`${translationsForReportExemption4750Columns}.sad_reg_dat`)} />
                    <Column field={'sad_off_cod'} header={t(`${translationsForReportExemption4750Columns}.sad_off_cod`)} />
                    <Column field={'sad_off_nam'} header={t(`${translationsForReportExemption4750Columns}.sad_off_nam`)} />
                    <Column field={'sad_net_wgt'} header={t(`${translationsForReportExemption4750Columns}.sad_net_wgt`)} />
                    <Column field={'ctnr_number'} header={t(`${translationsForReportExemption4750Columns}.ctnr_number`)} />
                    <Column field={'ctnr_typ'} header={t(`${translationsForReportExemption4750Columns}.ctnr_typ`)} />
                </DataTable>
            </Box>
        </SimpleCard>
    );
}

export default Exemption_4750;