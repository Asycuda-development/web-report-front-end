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
const translationsForReportTransit4276: string = "reports.transit_4276"
const translationsForReportTransit4276Columns: string = "reports.transit_4276.columns"

const Transit_4276 = () => {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);
  const { t } = useTranslation();

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true)
      const res = await axios.post('/reporting/TransitReport4276', {
        startDate: data.startDate,
        endDate: data.endDate,
        customsCode: data.CustomsCode,
        type: data.customsProcedure,
        ...data
      });
      if (res.data.length === 0) {
        setReportData([]);
      } else {
        setReportData(res.data);
      }
    } catch (error) { }
    finally {
      setLoading(false);
    }
  };

  return (
    <SimpleCard title={t(`${translationsForReportTransit4276}.title`)}>
      <ReportHeaderInputs
        showStartDate
        showEndDate
        showCustomsList
        showDestinationCustomsList
        showTransitType2
        showRegDate
        showForeignRegNo
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
          <Column field={'transit_type'} header={t(`${translationsForReportTransit4276Columns}.transit_type`)} />
          <Column field={'declaration_ref_yr'} header={t(`${translationsForReportTransit4276Columns}.declaration_ref_yr`)} />
          <Column field={'dept_off_nam'} header={t(`${translationsForReportTransit4276Columns}.dept_off_nam`)} />
          <Column field={'destn_nam'} header={t(`${translationsForReportTransit4276Columns}.destn_nam`)} />
          <Column style={{ minWidth: "20rem" }} field={'status'} header={t(`${translationsForReportTransit4276Columns}.status`)} />
          <Column field={'reg_no'} header={t(`${translationsForReportTransit4276Columns}.reg_no`)} />
          <Column field={'reg_dat'} header={t(`${translationsForReportTransit4276Columns}.reg_dat`)} />
          <Column field={'val_no'} header={t(`${translationsForReportTransit4276Columns}.val_no`)} />
          <Column style={{ minWidth: "12rem" }} field={'arr_date'} header={t(`${translationsForReportTransit4276Columns}.arr_date`)} />
          <Column field={'max_date_of_arrival_limit'} header={t(`${translationsForReportTransit4276Columns}.max_date_of_arrival_limit`)} />
          <Column style={{ minWidth: "12rem" }} field={'transit_officer'} header={t(`${translationsForReportTransit4276Columns}.transit_officer`)} />
          <Column field={'declarant_code'} header={t(`${translationsForReportTransit4276Columns}.declarant_code`)} />
          <Column style={{ minWidth: "12rem" }} field={'declarant_name'} header={t(`${translationsForReportTransit4276Columns}.declarant_name`)} />
          <Column field={'cns_code'} header={t(`${translationsForReportTransit4276Columns}.cns_code`)} />
          <Column style={{ minWidth: "25rem" }} field={'cns_name'} header={t(`${translationsForReportTransit4276Columns}.cns_name`)} />
          <Column field={'principal_cod'} header={t(`${translationsForReportTransit4276Columns}.principal_cod`)} />
          <Column style={{ minWidth: "25rem" }} field={'principal_nam'} header={t(`${translationsForReportTransit4276Columns}.principal_nam`)} />
          <Column style={{ minWidth: "20rem" }} field={'represented_by'} header={t(`${translationsForReportTransit4276Columns}.represented_by`)} />
          <Column field={'cty_export'} header={t(`${translationsForReportTransit4276Columns}.cty_export`)} />
          <Column field={'cty_destn_cod'} header={t(`${translationsForReportTransit4276Columns}.cty_destn_cod`)} />
          <Column style={{ minWidth: "15rem" }} field={'cty_export_name'} header={t(`${translationsForReportTransit4276Columns}.cty_export_name`)} />
          <Column field={'mod_of_transport'} header={t(`${translationsForReportTransit4276Columns}.mod_of_transport`)} />
          <Column field={'lorry_to_border'} header={t(`${translationsForReportTransit4276Columns}.lorry_to_border`)} />
          <Column style={{ minWidth: "20rem" }} field={'gross_mass'} header={t(`${translationsForReportTransit4276Columns}.gross_mass`)} />
          <Column style={{ minWidth: "30rem" }} field={'Net_Mass'} header={t(`${translationsForReportTransit4276Columns}.Net_Mass`)} />
          <Column field={'totPkg'} header={t(`${translationsForReportTransit4276Columns}.totPkg`)} />
          <Column style={{ minWidth: "20rem" }} field={'Package_Name'} header={t(`${translationsForReportTransit4276Columns}.Package_Name`)} />
          <Column field={'hscode'} header={t(`${translationsForReportTransit4276Columns}.hscode`)} />
          <Column field={'Good_Description2'} header={t(`${translationsForReportTransit4276Columns}.Good_Description2`)} />
          <Column style={{ minWidth: "12rem" }} field={'Good_Description3'} header={t(`${translationsForReportTransit4276Columns}.Good_Description3`)} />
          <Column field={'Package_Mark'} header={t(`${translationsForReportTransit4276Columns}.Package_Mark`)} />
          <Column field={'cont1'} header={t(`${translationsForReportTransit4276Columns}.cont1`)} />
          <Column field={'cont2'} header={t(`${translationsForReportTransit4276Columns}.cont2`)} />
          <Column field={'cont_flg'} header={t(`${translationsForReportTransit4276Columns}.cont_flg`)} />
          <Column field={'seal_affixed_no'} header={t(`${translationsForReportTransit4276Columns}.seal_affixed_no`)} />
          <Column field={'seal_identity'} header={t(`${translationsForReportTransit4276Columns}.seal_identity`)} />
          <Column field={'Garanty_cod'} header={t(`${translationsForReportTransit4276Columns}.Garanty_cod`)} />
          <Column field={'Garanty_amnt'} header={t(`${translationsForReportTransit4276Columns}.Garanty_amnt`)} />
          <Column style={{ minWidth: "20rem" }} field={'at1_cod'} header={t(`${translationsForReportTransit4276Columns}.at1_cod`)} />
          <Column style={{ minWidth: "20rem" }} field={'at1_nbr'} header={t(`${translationsForReportTransit4276Columns}.at1_nbr`)} />
          <Column field={'at2_cod'} header={t(`${translationsForReportTransit4276Columns}.at2_cod`)} />
          <Column style={{ minWidth: "20rem" }} field={'at2_nbr'} header={t(`${translationsForReportTransit4276Columns}.at2_nbr`)} />
          <Column field={'at3_cod'} header={t(`${translationsForReportTransit4276Columns}.at3_cod`)} />
          <Column style={{ minWidth: "20rem" }} field={'at3_nbr'} header={t(`${translationsForReportTransit4276Columns}.at3_nbr`)} />
          <Column field={'at4_cod'} header={t(`${translationsForReportTransit4276Columns}.at4_cod`)} />
          <Column style={{ minWidth: "20rem" }} field={'at4_nbr'} header={t(`${translationsForReportTransit4276Columns}.at4_nbr`)} />
          <Column style={{ minWidth: "15rem" }} field={'Itm_No'} header={t(`${translationsForReportTransit4276Columns}.Itm_No`)} />
          <Column field={'dec_ref'} header={t(`${translationsForReportTransit4276Columns}.dec_ref`)} />
          <Column field={'load_list'} header={t(`${translationsForReportTransit4276Columns}.load_list`)} />
          <Column field={'destn_cty'} header={t(`${translationsForReportTransit4276Columns}.destn_cty`)} />
          <Column field={'exp_code'} header={t(`${translationsForReportTransit4276Columns}.exp_code`)} />
          <Column field={'exp_nam'} header={t(`${translationsForReportTransit4276Columns}.exp_nam`)} />
          <Column field={'cty_destn_nam'} header={t(`${translationsForReportTransit4276Columns}.cty_destn_nam`)} />
          <Column field={'Max_date_allowed'} header={t(`${translationsForReportTransit4276Columns}.Max_date_allowed`)} />
          <Column field={'Nationality_of_transport'} header={t(`${translationsForReportTransit4276Columns}.Nationality_of_transport`)} />
          <Column field={'TPT_MOT_DPA_NAMA'} header={t(`${translationsForReportTransit4276Columns}.TPT_MOT_DPA_NAMA`)} />
          <Column field={'TPT_MOT_BRD_NAMA'} header={t(`${translationsForReportTransit4276Columns}.TPT_MOT_BRD_NAMA`)} />
          <Column field={'cty_border'} header={t(`${translationsForReportTransit4276Columns}.cty_border`)} />
          <Column field={'cty_dep'} header={t(`${translationsForReportTransit4276Columns}.cty_dep`)} />
          <Column field={'Pack_Nbr'} header={t(`${translationsForReportTransit4276Columns}.Pack_Nbr`)} />
          <Column style={{ minWidth: "20rem" }} field={'Package_Code'} header={t(`${translationsForReportTransit4276Columns}.Package_Code`)} />
          <Column field={'del_cod'} header={t(`${translationsForReportTransit4276Columns}.del_cod`)} />
          <Column style={{ minWidth: "20rem" }} field={'del_nam'} header={t(`${translationsForReportTransit4276Columns}.del_nam`)} />
          <Column field={'gar_cod'} header={t(`${translationsForReportTransit4276Columns}.gar_cod`)} />
          <Column field={'gar_amt'} header={t(`${translationsForReportTransit4276Columns}.gar_amt`)} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
};

export default Transit_4276;
