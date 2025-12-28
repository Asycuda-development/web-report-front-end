import { Box, LinearProgress } from '@mui/material';
import axios from 'axios';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { useRef, useState } from 'react';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
import { SimpleCard } from '../../components';
import { ROWS_PER_PAGE } from '../../utils/constant';
import { useTranslation } from 'react-i18next';

const translationsForBasedOnError: string = "errors"
const translationsForBasedOn: string = "basedOn"
const translationsForReportTransit4284: string = "reports.transit_4284"
const translationsForReportTransit4284Columns: string = "reports.transit_4284.columns"

const Transit_4284 = () => {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);
  const { t } = useTranslation();

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true);
      const res = await axios.post('/reporting/TransitReport4284', {
        type: data.customsProcedure,
        customsCode: data.CustomsCode,
        ...data
      });
      console.log(res);
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
    <SimpleCard title={t(`${translationsForReportTransit4284}.title`)}>
      <ReportHeaderInputs
        report='Transit_4284l'
        showStartDate
        showEndDate
        showAssesDate
        showArrivalDate
        showDestinationCustomsList
        showDepartureCustomsList
        showTransitType
        onSearch={handleSubmit}
        tabelRef={tableRef}
      />
      {loading && (
        <LinearProgress />
      )}
      <Box width="100%" overflow="auto">
        <DataTable
          exportFilename={`Transit Report 4284 ${new Date().toISOString()}`}
          ref={tableRef}
          value={reportData}
          rows={ROWS_PER_PAGE}
          rowsPerPageOptions={[5, 10, 25, 50, 100]}
          paginator
          stripedRows
          showGridlines
        >
          <Column field={'transit_type'} header={t(`${translationsForReportTransit4284Columns}.transit_type`)} />
          <Column field={'declaration_ref_yr'} header={t(`${translationsForReportTransit4284Columns}.declaration_ref_yr`)} />
          <Column field={'dept_off_nam'} header={t(`${translationsForReportTransit4284Columns}.dept_off_nam`)} />
          <Column field={'destn_nam'} header={t(`${translationsForReportTransit4284Columns}.destn_nam`)} />
          <Column field={'op_dtime'} header={t(`${translationsForReportTransit4284Columns}.op_dtime`)} />
          <Column field={'status'} header={t(`${translationsForReportTransit4284Columns}.status`)} />
          <Column field={'reg_no'} header={t(`${translationsForReportTransit4284Columns}.reg_no`)} />
          <Column field={'reg_dat'} header={t(`${translationsForReportTransit4284Columns}.reg_dat`)} />
          <Column field={'val_no'} header={t(`${translationsForReportTransit4284Columns}.val_no`)} />
          <Column field={'arr_date'} header={t(`${translationsForReportTransit4284Columns}.arr_date`)} />
          <Column field={'max_date_of_arrival_limit'} header={t(`${translationsForReportTransit4284Columns}.max_date_of_arrival_limit`)} />
          <Column field={'Max_date_allowed'} header={t(`${translationsForReportTransit4284Columns}.Max_date_allowed`)} />
          <Column field={'transit_officer'} header={t(`${translationsForReportTransit4284Columns}.transit_officer`)} />
          <Column field={'declarant_code'} header={t(`${translationsForReportTransit4284Columns}.declarant_code`)} />
          <Column field={'declarant_name'} header={t(`${translationsForReportTransit4284Columns}.declarant_name`)} />
          <Column field={'principal_cod'} header={t(`${translationsForReportTransit4284Columns}.principal_cod`)} />
          <Column field={'principal_nam'} header={t(`${translationsForReportTransit4284Columns}.principal_nam`)} />
          <Column field={'cns_code'} header={t(`${translationsForReportTransit4284Columns}.cns_code`)} />
          <Column field={'cns_name'} header={t(`${translationsForReportTransit4284Columns}.cns_name`)} />
          <Column field={'represented_by'} header={t(`${translationsForReportTransit4284Columns}.represented_by`)} />
          <Column field={'cty_export_name'} header={t(`${translationsForReportTransit4284Columns}.cty_export_name`)} />
          <Column field={'cty_destn_name'} header={t(`${translationsForReportTransit4284Columns}.cty_destn_name`)} />
          <Column field={'mod_of_transport'} header={t(`${translationsForReportTransit4284Columns}.mod_of_transport`)} />
          <Column field={'lorry_to_border;'} header={t(`${translationsForReportTransit4284Columns}.lorry_to_border;`)} />
          <Column field={'TPT_MOT_DPA_NAMA'} header={t(`${translationsForReportTransit4284Columns}.TPT_MOT_DPA_NAMA`)} />
          <Column field={'TPT_MOT_BRD_NAMA'} header={t(`${translationsForReportTransit4284Columns}.TPT_MOT_BRD_NAMA`)} />
          <Column field={'gross_mass'} header={t(`${translationsForReportTransit4284Columns}.gross_mass`)} />
          <Column field={'Net_Mass'} header={t(`${translationsForReportTransit4284Columns}.Net_Mass`)} />
          <Column field={'tot_pkg'} header={t(`${translationsForReportTransit4284Columns}.tot_pkg`)} />
          <Column field={'Package_Name'} header={t(`${translationsForReportTransit4284Columns}.Package_Name`)} />
          <Column field={'hscode'} header={t(`${translationsForReportTransit4284Columns}.hscode`)} />
          <Column field={'Good_Description2'} header={t(`${translationsForReportTransit4284Columns}.Good_Description2`)} />
          <Column field={'Good_Description3'} header={t(`${translationsForReportTransit4284Columns}.Good_Description3`)} />
          <Column field={'Package_Mark'} header={t(`${translationsForReportTransit4284Columns}.Package_Mark`)} />
          <Column field={'cont1'} header={t(`${translationsForReportTransit4284Columns}.cont1`)} />
          <Column field={'cont2'} header={t(`${translationsForReportTransit4284Columns}.cont2`)} />
          <Column field={'cont_flg'} header={t(`${translationsForReportTransit4284Columns}.cont_flg`)} />
          <Column field={'seal_affixed_no'} header={t(`${translationsForReportTransit4284Columns}.seal_affixed_no`)} />
          <Column field={'seal_identity'} header={t(`${translationsForReportTransit4284Columns}.seal_identity`)} />
          <Column field={'Garanty_cod'} header={t(`${translationsForReportTransit4284Columns}.Garanty_cod`)} />
          <Column field={'Garanty_amnt'} header={t(`${translationsForReportTransit4284Columns}.Garanty_amnt`)} />
          <Column field={'at1_cod'} header={t(`${translationsForReportTransit4284Columns}.at1_cod`)} />
          <Column field={'at1_nbr'} header={t(`${translationsForReportTransit4284Columns}.at1_nbr`)} />
          <Column field={'at2_cod'} header={t(`${translationsForReportTransit4284Columns}.at2_cod`)} />
          <Column field={'at2_nbr'} header={t(`${translationsForReportTransit4284Columns}.at2_nbr`)} />
          <Column field={'at3_cod'} header={t(`${translationsForReportTransit4284Columns}.at3_cod`)} />
          <Column field={'at3_nbr'} header={t(`${translationsForReportTransit4284Columns}.at3_nbr`)} />
          <Column field={'at4_cod'} header={t(`${translationsForReportTransit4284Columns}.at4_cod`)} />
          <Column field={'at4_nbr'} header={t(`${translationsForReportTransit4284Columns}.at4_nbr`)} />
          <Column field={'trsctl'} header={t(`${translationsForReportTransit4284Columns}.trsctl`)} />
          <Column field={'dat'} header={t(`${translationsForReportTransit4284Columns}.dat`)} />
          <Column field={'plc'} header={t(`${translationsForReportTransit4284Columns}.plc`)} />
          <Column field={'dec_ref'} header={t(`${translationsForReportTransit4284Columns}.dec_ref`)} />
          <Column field={'load_list'} header={t(`${translationsForReportTransit4284Columns}.load_list`)} />
          <Column field={'destn_cty'} header={t(`${translationsForReportTransit4284Columns}.destn_cty`)} />
          <Column field={'exp_code'} header={t(`${translationsForReportTransit4284Columns}.exp_code`)} />
          <Column field={'exp_nam'} header={t(`${translationsForReportTransit4284Columns}.exp_nam`)} />
          <Column field={'cty_export'} header={t(`${translationsForReportTransit4284Columns}.cty_export`)} />
          <Column field={'cty_destn_cod'} header={t(`${translationsForReportTransit4284Columns}.cty_destn_cod`)} />
          <Column field={'Nationality_of_transport'} header={t(`${translationsForReportTransit4284Columns}.Nationality_of_transport`)} />
          <Column field={'cty_border'} header={t(`${translationsForReportTransit4284Columns}.cty_border`)} />
          <Column field={'cty_dep'} header={t(`${translationsForReportTransit4284Columns}.cty_dep`)} />
          <Column field={'Itm_No'} header={t(`${translationsForReportTransit4284Columns}.Itm_No`)} />
          <Column field={'Pack_Nbr'} header={t(`${translationsForReportTransit4284Columns}.Pack_Nbr`)} />
          <Column field={'Package_Code'} header={t(`${translationsForReportTransit4284Columns}.Package_Code`)} />
          <Column field={'ast_dat'} header={t(`${translationsForReportTransit4284Columns}.ast_dat`)} />
          <Column field={'del_cod'} header={t(`${translationsForReportTransit4284Columns}.del_cod`)} />
          <Column field={'del_nam'} header={t(`${translationsForReportTransit4284Columns}.del_nam`)} />
          <Column field={'gar_cod'} header={t(`${translationsForReportTransit4284Columns}.gar_cod`)} />
          <Column field={'gar_amt'} header={t(`${translationsForReportTransit4284Columns}.gar_amt`)} />
          <Column field={'rn'} header={t(`${translationsForReportTransit4284Columns}.rn`)} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
};

export default Transit_4284;
