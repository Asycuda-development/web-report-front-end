import { SimpleCard } from '../../components';
import { Box, LinearProgress, styled } from '@mui/material';
import React, { useEffect, useState, useRef } from 'react';
import { ROWS_PER_PAGE } from '../../utils/constant';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
import { useTranslation } from 'react-i18next';
import { Toast } from 'primereact/toast';

const translationsForBasedOnError: string = "errors"
const translationsForBasedOn: string = "basedOn"
const translationsForReportTransit4250: string = "reports.transit_4250"
const translationsForReportTransit4250Columns: string = "reports.transit_4250.columns"

const Transit_4250 = () => {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);
  const toastRef: any = useRef(null);
  const { t } = useTranslation();

  useEffect(() => { }, []);

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
      const res = await axios.post('/reporting/transit4250', {
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
    label: 'Box number 18 part 1',
    name: 'Box number 18 part 1'
  },{
    label: 'Box number 18 part 2',
    name: 'Box number 18 part 2'
},{
  label: 'Box number 21 part 1',
  name: 'Box number 21 part 1'
},{
  label: 'Box number 21 part 2',
  name: 'Box number 21 part 2',
}
]

  return (
    <SimpleCard title={t(`${translationsForReportTransit4250}.title`)}>
      <ReportHeaderInputs
        showStartDate
        showEndDate
        showRegDate
        showAssesDate
        showArrivalDate
        showTransitType
        showBasedOn
        basedOnOptions={basedOnOptions}
        showDepartureCustomsList
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
          <Column field={'transit_type'} header={t(`${translationsForReportTransit4250Columns}.transit_type`)} />
          <Column field={'declaration_ref_yr'} header={t(`${translationsForReportTransit4250Columns}.declaration_ref_yr`)} />
          <Column field={'dept_off_nam'} header={t(`${translationsForReportTransit4250Columns}.dept_off_nam`)} />
          <Column field={'destn_nam'} header={t(`${translationsForReportTransit4250Columns}.destn_nam`)} />
          <Column filter filterField="status" field={'status'} header={t(`${translationsForReportTransit4250Columns}.status`)} />
          <Column filter filterField="reg_no" field={'reg_no'} header={t(`${translationsForReportTransit4250Columns}.reg_no`)} />
          <Column field={'reg_dat'} header={t(`${translationsForReportTransit4250Columns}.reg_dat`)} />
          <Column field={'val_no'} header={t(`${translationsForReportTransit4250Columns}.val_no`)} />
          <Column filter filterField="cns_code" field={'cns_code'} header={t(`${translationsForReportTransit4250Columns}.cns_code`)} />
          <Column field={'cns_name'} header={t(`${translationsForReportTransit4250Columns}.cns_name`)} />
          <Column field={'arr_date'} header={t(`${translationsForReportTransit4250Columns}.arr_date`)} />
          <Column filter filterField="hscode" field={'hscode'} header={t(`${translationsForReportTransit4250Columns}.hscode`)} />
          <Column field={'Max_date_allowed'} header={t(`${translationsForReportTransit4250Columns}.Max_date_allowed`)} />
          <Column field={'declarant_code'} header={t(`${translationsForReportTransit4250Columns}.declarant_code`)} />
          <Column field={'declarant_name'} header={t(`${translationsForReportTransit4250Columns}.declarant_name`)} />
          <Column field={'principal_cod'} header={t(`${translationsForReportTransit4250Columns}.principal_cod`)} />
          <Column field={'principal_nam'} header={t(`${translationsForReportTransit4250Columns}.principal_nam`)} />
          <Column field={'represented_by'} header={t(`${translationsForReportTransit4250Columns}.represented_by`)} />
          <Column field={'cty_export_name'} header={t(`${translationsForReportTransit4250Columns}.cty_export_name`)} />
          <Column field={'cty_destn_cod'} header={t(`${translationsForReportTransit4250Columns}.cty_destn_cod`)} />
          <Column field={'mod_of_transport'} header={t(`${translationsForReportTransit4250Columns}.mod_of_transport`)} />
          <Column field={'lorry_to_border'} header={t(`${translationsForReportTransit4250Columns}.lorry_to_border`)} />
          <Column field={'TPT_MOT_DPA_NAMA'} header={t(`${translationsForReportTransit4250Columns}.TPT_MOT_DPA_NAMA`)} />
          <Column field={'TPT_MOT_BRD_NAMA'} header={t(`${translationsForReportTransit4250Columns}.TPT_MOT_BRD_NAMA`)} />
          <Column field={'gross_mass'} header={t(`${translationsForReportTransit4250Columns}.gross_mass`)} />
          <Column field={'Net_Mass'} header={t(`${translationsForReportTransit4250Columns}.Net_Mass`)} />
          <Column field={'tot_pkg'} header={t(`${translationsForReportTransit4250Columns}.tot_pkg`)} />
          <Column field={'Package_Name'} header={t(`${translationsForReportTransit4250Columns}.Package_Name`)} />
          <Column field={'Good_Description2'} header={t(`${translationsForReportTransit4250Columns}.Good_Description2`)} />
          <Column field={'Good_Description3'} header={t(`${translationsForReportTransit4250Columns}.Good_Description3`)} />
          <Column field={'Package_Mark'} header={t(`${translationsForReportTransit4250Columns}.Package_Mark`)} />
          <Column field={'Package_Code'} header={t(`${translationsForReportTransit4250Columns}.Package_Code`)} />
          <Column field={'cont_flg'} header={t(`${translationsForReportTransit4250Columns}.cont_flg`)} />
          <Column field={'cont1'} header={t(`${translationsForReportTransit4250Columns}.cont1`)} />
          <Column field={'cont2'} header={t(`${translationsForReportTransit4250Columns}.cont2`)} />
          <Column field={'seal_affixed_no'} header={t(`${translationsForReportTransit4250Columns}.seal_affixed_no`)} />
          <Column field={'seal_identity'} header={t(`${translationsForReportTransit4250Columns}.seal_identity`)} />
          <Column field={'Garanty_cod'} header={t(`${translationsForReportTransit4250Columns}.Garanty_cod`)} />
          <Column field={'Garanty_amnt'} header={t(`${translationsForReportTransit4250Columns}.Garanty_amnt`)} />
          <Column field={'at1_cod'} header={t(`${translationsForReportTransit4250Columns}.at1_cod`)} />
          <Column field={'at1_nbr'} header={t(`${translationsForReportTransit4250Columns}.at1_nbr`)} />
          <Column field={'at2_cod'} header={t(`${translationsForReportTransit4250Columns}.at2_cod`)} />
          <Column field={'at2_nbr'} header={t(`${translationsForReportTransit4250Columns}.at2_nbr`)} />
          <Column field={'at3_cod'} header={t(`${translationsForReportTransit4250Columns}.at3_cod`)} />
          <Column field={'at3_nbr'} header={t(`${translationsForReportTransit4250Columns}.at3_nbr`)} />
          <Column field={'at4_cod'} header={t(`${translationsForReportTransit4250Columns}.at4_cod`)} />
          <Column field={'at4_nbr'} header={t(`${translationsForReportTransit4250Columns}.at4_nbr`)} />
          <Column field={'dat'} header={t(`${translationsForReportTransit4250Columns}.dat`)} />
          <Column field={'plc'} header={t(`${translationsForReportTransit4250Columns}.plc`)} />
          <Column field={'finName'} header={t(`${translationsForReportTransit4250Columns}.finName`)} />
          <Column field={'dec_ref'} header={t(`${translationsForReportTransit4250Columns}.dec_ref`)} />
          <Column field={'load_list'} header={t(`${translationsForReportTransit4250Columns}.load_list`)} />
          <Column field={'destn_cty'} header={t(`${translationsForReportTransit4250Columns}.destn_cty`)} />
          <Column field={'exp_code'} header={t(`${translationsForReportTransit4250Columns}.exp_code`)} />
          <Column field={'exp_nam'} header={t(`${translationsForReportTransit4250Columns}.exp_nam`)} />
          <Column field={'cty_export'} header={t(`${translationsForReportTransit4250Columns}.cty_export`)} />
          <Column field={'cty_destn_name'} header={t(`${translationsForReportTransit4250Columns}.cty_destn_name`)} />
          <Column field={'max_date_of_arrival_limit'} header={t(`${translationsForReportTransit4250Columns}.max_date_of_arrival_limit`)} />
          <Column field={'Nationality_of_transport'} header={t(`${translationsForReportTransit4250Columns}.Nationality_of_transport`)} />
          <Column field={'cty_border'} header={t(`${translationsForReportTransit4250Columns}.cty_border`)} />
          <Column field={'cty_dep'} header={t(`${translationsForReportTransit4250Columns}.cty_dep`)} />
          <Column field={'Itm_No'} header={t(`${translationsForReportTransit4250Columns}.Itm_No`)} />
          <Column field={'Pack_Nbr'} header={t(`${translationsForReportTransit4250Columns}.Pack_Nbr`)} />
          <Column field={'ast_dat'} header={t(`${translationsForReportTransit4250Columns}.ast_dat`)} />
          <Column field={'transit_officer'} header={t(`${translationsForReportTransit4250Columns}.transit_officer`)} />
          <Column field={'del_cod'} header={t(`${translationsForReportTransit4250Columns}.del_cod`)} />
          <Column field={'del_nam'} header={t(`${translationsForReportTransit4250Columns}.del_nam`)} />
          <Column field={'gar_cod'} header={t(`${translationsForReportTransit4250Columns}.gar_cod`)} />
          <Column field={'gar_amt'} header={t(`${translationsForReportTransit4250Columns}.gar_amt`)} />
          <Column field={'trsctl'} header={t(`${translationsForReportTransit4250Columns}.trsctl`)} />
        </DataTable>
      </Box>
      <Toast ref={toastRef} />
    </SimpleCard>
  );
};

export default Transit_4250;
