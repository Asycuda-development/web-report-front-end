import { SimpleCard } from '../../components';
import { Box, styled, LinearProgress } from '@mui/material';
import React, { useEffect, useState, useRef } from 'react';
import { ROWS_PER_PAGE } from '../../utils/constant';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
import { useTranslation } from 'react-i18next';
import { Toast } from 'primereact/toast';
import tr from 'date-fns/esm/locale/tr/index.js';

const translationsForBasedOnError: string = "errors"
const translationsForBasedOn: string = "basedOn"
const translationsForReportTransit4260: string = "reports.transit_4260"
const translationsForReportTransit4260Columns: string = "reports.transit_4260.columns"

const Transit_4260 = () => {
  const [reportData, setReportData] = useState([]);
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
        return;
      }
      const res = await axios.post('/reporting/TransitReport4260', {
        type: data.customsProcedure,
        customsCode: data.CustomsCode,
        ...data
      });
      if (res.data.length === 0) {
        setReportData([]);
      } else {
        setReportData(res.data);
      }
    } catch (error) { }
  };
  const basedOnOptions = [{
    label: t(`${translationsForBasedOn}.declarant`),
    name: 'declarant_Code'
  }]
  return (
    <SimpleCard title={t(`${translationsForReportTransit4260}.title`)}>
      <ReportHeaderInputs
        report='Transit_4260'
        showStartDate
        showEndDate
        showDepartureCustomsList
        showTransitType2
        showDestinationCustomsList
        showBasedOn
        basedOnOptions={basedOnOptions}
        //  showCompanyContractorCode
        onSearch={handleSubmit}
        tabelRef={tableRef}
      />

      <Box width="100%" overflow="auto">
        <DataTable
          exportFilename={`Transit Report 4260 ${new Date().toISOString()}`}
          ref={tableRef}
          value={reportData}
          rows={ROWS_PER_PAGE}
          rowsPerPageOptions={[5, 10, 25, 50, 100]}
          paginator
          stripedRows
          showGridlines
        >
          <Column field={'transit_Type'} header={t(`${translationsForReportTransit4260Columns}.transit_Type`)} />
          <Column field={'declaration_Ref_Yr'} header={t(`${translationsForReportTransit4260Columns}.declaration_Ref_Yr`)} />
          <Column field={'dept_Off_Nam'} header={t(`${translationsForReportTransit4260Columns}.dept_Off_Nam`)} />
          <Column field={'destn_Nam'} header={t(`${translationsForReportTransit4260Columns}.destn_Nam`)} />
          <Column field={'status'} header={t(`${translationsForReportTransit4260Columns}.status`)} />
          <Column field={'reg_No'} header={t(`${translationsForReportTransit4260Columns}.reg_No`)} />
          <Column field={'reg_Dat'} header={t(`${translationsForReportTransit4260Columns}.reg_Dat`)} />
          <Column field={'val_No;'} header={t(`${translationsForReportTransit4260Columns}.val_No;`)} />
          <Column field={'arr_Date'} header={t(`${translationsForReportTransit4260Columns}.arr_Date`)} />
          <Column field={'max_Date_Of_Arrival_Limit'} header={t(`${translationsForReportTransit4260Columns}.max_Date_Of_Arrival_Limit`)} />
          <Column field={'Max_Date_Allowed'} header={t(`${translationsForReportTransit4260Columns}.Max_Date_Allowed`)} />
          <Column field={'transit_Officer'} header={t(`${translationsForReportTransit4260Columns}.transit_Officer`)} />
          <Column field={'declarant_Code'} header={t(`${translationsForReportTransit4260Columns}.declarant_Code`)} />
          <Column field={'declarant_Name'} header={t(`${translationsForReportTransit4260Columns}.declarant_Name`)} />
          <Column field={'cns_Code'} header={t(`${translationsForReportTransit4260Columns}.cns_Code`)} />
          <Column field={'cns_Name'} header={t(`${translationsForReportTransit4260Columns}.cns_Name`)} />
          <Column field={'principal_Cod'} header={t(`${translationsForReportTransit4260Columns}.principal_Cod`)} />
          <Column field={'principal_Nam'} header={t(`${translationsForReportTransit4260Columns}.principal_Nam`)} />
          <Column field={'represented_By'} header={t(`${translationsForReportTransit4260Columns}.represented_By`)} />
          <Column field={'exp_Code'} header={t(`${translationsForReportTransit4260Columns}.exp_Code`)} />
          <Column field={'cty_Destn_Cod'} header={t(`${translationsForReportTransit4260Columns}.cty_Destn_Cod`)} />
          <Column field={'mod_Of_Transport'} header={t(`${translationsForReportTransit4260Columns}.mod_Of_Transport`)} />
          <Column field={'lorry_To_Border'} header={t(`${translationsForReportTransit4260Columns}.lorry_To_Border`)} />
          <Column field={'gross_Mass'} header={t(`${translationsForReportTransit4260Columns}.gross_Mass`)} />
          <Column field={'Net_Mass'} header={t(`${translationsForReportTransit4260Columns}.Net_Mass`)} />
          <Column field={'tot_Pkg'} header={t(`${translationsForReportTransit4260Columns}.tot_Pkg`)} />
          <Column field={'Package_Name'} header={t(`${translationsForReportTransit4260Columns}.Package_Name`)} />
          <Column field={'hscode'} header={t(`${translationsForReportTransit4260Columns}.hscode`)} />
          <Column field={'Good_Description2'} header={t(`${translationsForReportTransit4260Columns}.Good_Description2`)} />
          <Column field={'Good_Description3'} header={t(`${translationsForReportTransit4260Columns}.Good_Description3`)} />
          <Column field={'Package_Mark'} header={t(`${translationsForReportTransit4260Columns}.Package_Mark`)} />
          <Column field={'cont_Flg'} header={t(`${translationsForReportTransit4260Columns}.cont_Flg`)} />
          <Column field={'cont1'} header={t(`${translationsForReportTransit4260Columns}.cont1`)} />
          <Column field={'cont2'} header={t(`${translationsForReportTransit4260Columns}.cont2`)} />
          <Column field={'seal_Affixed_No'} header={t(`${translationsForReportTransit4260Columns}.seal_Affixed_No`)} />
          <Column field={'seal_Identity'} header={t(`${translationsForReportTransit4260Columns}.seal_Identity`)} />
          <Column field={'aranty_Cod'} header={t(`${translationsForReportTransit4260Columns}.aranty_Cod`)} />
          <Column field={'Garanty_Amnt'} header={t(`${translationsForReportTransit4260Columns}.Garanty_Amnt`)} />
          <Column field={'at1_Cod'} header={t(`${translationsForReportTransit4260Columns}.at1_Cod`)} />
          <Column field={'at1_Nbr'} header={t(`${translationsForReportTransit4260Columns}.at1_Nbr`)} />
          <Column field={'at2_Cod'} header={t(`${translationsForReportTransit4260Columns}.at2_Cod`)} />
          <Column field={'at2_Nbr'} header={t(`${translationsForReportTransit4260Columns}.at2_Nbr`)} />
          <Column field={'at3_Cod'} header={t(`${translationsForReportTransit4260Columns}.at3_Cod`)} />
          <Column field={'at3_Nbr'} header={t(`${translationsForReportTransit4260Columns}.at3_Nbr`)} />
          <Column field={'at4_Cod'} header={t(`${translationsForReportTransit4260Columns}.at4_Cod`)} />
          <Column field={'at4_Nbr'} header={t(`${translationsForReportTransit4260Columns}.at4_Nbr`)} />
          <Column field={'Itm_No'} header={t(`${translationsForReportTransit4260Columns}.Itm_No`)} />
          <Column field={'dec_Ref'} header={t(`${translationsForReportTransit4260Columns}.dec_Ref`)} />
          <Column field={'load_List'} header={t(`${translationsForReportTransit4260Columns}.load_List`)} />
          <Column field={'destn_Cty'} header={t(`${translationsForReportTransit4260Columns}.destn_Cty`)} />
          <Column field={'exp_Nam'} header={t(`${translationsForReportTransit4260Columns}.exp_Nam`)} />
          <Column field={'cty_Export'} header={t(`${translationsForReportTransit4260Columns}.cty_Export`)} />
          <Column field={'cty_Export_Name'} header={t(`${translationsForReportTransit4260Columns}.cty_Export_Name`)} />
          <Column field={'cty_Destn_Name'} header={t(`${translationsForReportTransit4260Columns}.cty_Destn_Name`)} />
          <Column field={'Nationality_Of_Transport'} header={t(`${translationsForReportTransit4260Columns}.Nationality_Of_Transport`)} />
          <Column field={'cty_Border'} header={t(`${translationsForReportTransit4260Columns}.cty_Border`)} />
          <Column field={'cty_Dep'} header={t(`${translationsForReportTransit4260Columns}.cty_Dep`)} />
          <Column field={'Pack_Nbr'} header={t(`${translationsForReportTransit4260Columns}.Pack_Nbr`)} />
          <Column field={'Package_Code'} header={t(`${translationsForReportTransit4260Columns}.Package_Code`)} />
          <Column field={'del_Cod'} header={t(`${translationsForReportTransit4260Columns}.del_Cod`)} />
          <Column field={'del_Nam'} header={t(`${translationsForReportTransit4260Columns}.del_Nam`)} />
        </DataTable>
      </Box>
      <Toast ref={toastRef} />
    </SimpleCard>
  );
};

export default Transit_4260;
