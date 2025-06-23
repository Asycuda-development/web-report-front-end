import { SimpleCard } from '../../components';
import { Box, styled, LinearProgress } from '@mui/material';
import { useEffect, useState, useRef } from 'react';
import { ROWS_PER_PAGE } from '../../utils/constant';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
import { useTranslation } from 'react-i18next';

const translationsForBasedOnError: string = "errors"
const translationsForBasedOn: string = "basedOn"
const translationsForReportExemption4755: string = "reports.exemption_4755"
const translationsForReportExemption4755Columns: string = "reports.exemption_4755.columns"

const Exemption_4755 = () => {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);
  const { t } = useTranslation();

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true);
      const res = await axios.post('/reporting/ExemptionReport4755', {
        startDate: data.startDate,
        endDate: data.endDate,
        customsCode: data.CustomsCode,
        ...data
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
    <SimpleCard title={t(`${translationsForReportExemption4755}.title`)}>
      <ReportHeaderInputs
        showStartDate
        showEndDate
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
          rowsPerPageOptions={[3, 10, 25, 50, 100]}
          paginator
          stripedRows
          showGridlines
        >
          <Column field={'Autorization_No'} header={t(`${translationsForReportExemption4755Columns}.Autorization_No`)} />
          <Column field={'cert_reg_dat'} header={t(`${translationsForReportExemption4755Columns}.cert_reg_dat`)} />
          <Column field={'issue_off'} header={t(`${translationsForReportExemption4755Columns}.issue_off`)} />
          <Column field={'issue_off_nam'} header={t(`${translationsForReportExemption4755Columns}.issue_off_nam`)} />
          <Column field={'issue_year'} header={t(`${translationsForReportExemption4755Columns}.issue_year`)} />
          <Column field={'valid_from'} header={t(`${translationsForReportExemption4755Columns}.valid_from`)} />
          <Column field={'valid_to'} header={t(`${translationsForReportExemption4755Columns}.valid_to`)} />
          <Column field={'ref_no'} header={t(`${translationsForReportExemption4755Columns}.ref_no`)} />
          <Column field={'ref_date'} header={t(`${translationsForReportExemption4755Columns}.ref_date`)} />
          <Column field={'subc'} header={t(`${translationsForReportExemption4755Columns}.subc`)} />
          <Column field={'subc_nam'} header={t(`${translationsForReportExemption4755Columns}.subc_nam`)} />
          <Column field={'cmp_cod'} header={t(`${translationsForReportExemption4755Columns}.cmp_cod`)} />
          <Column field={'cmp_desc'} header={t(`${translationsForReportExemption4755Columns}.cmp_desc`)} />
          <Column field={'contractor_cod'} header={t(`${translationsForReportExemption4755Columns}.contractor_cod`)} />
          <Column field={'contractor_nam'} header={t(`${translationsForReportExemption4755Columns}.contractor_nam`)} />
          <Column field={'type_cert;'} header={t(`${translationsForReportExemption4755Columns}.type_cert;`)} />
          <Column field={'nfc_cod'} header={t(`${translationsForReportExemption4755Columns}.nfc_cod`)} />
          <Column field={'issu_auto'} header={t(`${translationsForReportExemption4755Columns}.issu_auto`)} />
          <Column field={'Border_office'} header={t(`${translationsForReportExemption4755Columns}.Border_office`)} />
          <Column field={'clr_office'} header={t(`${translationsForReportExemption4755Columns}.clr_office`)} />
          <Column field={'proc_cod'} header={t(`${translationsForReportExemption4755Columns}.proc_cod`)} />
          <Column field={'acc_cod'} header={t(`${translationsForReportExemption4755Columns}.acc_cod`)} />
          <Column field={'val_tot'} header={t(`${translationsForReportExemption4755Columns}.val_tot`)} />
          <Column field={'wgt_tot'} header={t(`${translationsForReportExemption4755Columns}.wgt_tot`)} />
          <Column field={'rem_val'} header={t(`${translationsForReportExemption4755Columns}.rem_val`)} />
          <Column field={'rem_wgt'} header={t(`${translationsForReportExemption4755Columns}.rem_wgt`)} />
          <Column field={'hscode'} header={t(`${translationsForReportExemption4755Columns}.hscode`)} />
          <Column field={'HS_DESC'} header={t(`${translationsForReportExemption4755Columns}.HS_DESC`)} />
          <Column field={'itm_val_usd'} header={t(`${translationsForReportExemption4755Columns}.itm_val_usd`)} />
          <Column field={'itm_val_afs'} header={t(`${translationsForReportExemption4755Columns}.itm_val_afs`)} />
          <Column field={'net_wgt'} header={t(`${translationsForReportExemption4755Columns}.net_wgt`)} />
          <Column field={'gross_wgt'} header={t(`${translationsForReportExemption4755Columns}.gross_wgt`)} />
          <Column field={'itm_um1_nam'} header={t(`${translationsForReportExemption4755Columns}.itm_um1_nam`)} />
          <Column field={'written_off_wgt'} header={t(`${translationsForReportExemption4755Columns}.written_off_wgt`)} />
          <Column field={'sad_number'} header={t(`${translationsForReportExemption4755Columns}.sad_number`)} />
          <Column field={'sad_yer'} header={t(`${translationsForReportExemption4755Columns}.sad_yer`)} />
          <Column field={'sad_reg_dat'} header={t(`${translationsForReportExemption4755Columns}.sad_reg_dat`)} />
          <Column field={'sad_off_cod'} header={t(`${translationsForReportExemption4755Columns}.sad_off_cod`)} />
          <Column field={'sad_off_nam'} header={t(`${translationsForReportExemption4755Columns}.sad_off_nam`)} />
          <Column field={'sad_net_wgt'} header={t(`${translationsForReportExemption4755Columns}.sad_net_wgt`)} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
};

export default Exemption_4755;
