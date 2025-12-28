import { SimpleCard } from '../../components';
import { Box, styled, LinearProgress } from '@mui/material';
import React, { useEffect, useState, useRef } from 'react';
import { ROWS_PER_PAGE } from '../../utils/constant';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
import { useTranslation } from 'react-i18next';

const translationsForBasedOnError: string = "errors"
const translationsForBasedOn: string = "basedOn"
const translationsForReportTransit4274: string = "reports.transit_4274"
const translationsForReportTransit4274Columns: string = "reports.transit_4274.columns"

const Transit_4274 = () => {
  const [reportData, setReportData] = useState([]);
  const tableRef: any = useRef(null);
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true);
      const res = await axios.post('/reporting/TransitReport4274', {
        type: data.customsProcedure,
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
    <SimpleCard title={t(`${translationsForReportTransit4274}.title`)}>
      <ReportHeaderInputs
        report='Transit_4274'
        showStartDate
        showEndDate
        showI_Number
        showTransitType
        showcontainerNumber
        showDestinationCustomsList
        showDepartureCustomsList
        onSearch={handleSubmit}
        tabelRef={tableRef}
      />
      {loading && (
        <LinearProgress />
      )}
      <Box width="100%" overflow="auto">
        <DataTable
          exportFilename={`Transit Report 4274 ${new Date().toISOString()}`}
          ref={tableRef}
          value={reportData}
          rows={ROWS_PER_PAGE}
          rowsPerPageOptions={[5, 10, 25, 50, 100]}
          paginator
          stripedRows
          showGridlines
        >
          <Column field={'transit_Type'} header={t(`${translationsForReportTransit4274Columns}.transit_Type`)} />
          <Column field={'declaration_Ref_Yr'} header={t(`${translationsForReportTransit4274Columns}.declaration_Ref_Yr`)} />
          <Column field={'dept_Off_Nam'} header={t(`${translationsForReportTransit4274Columns}.dept_Off_Nam`)} />
          <Column field={'destn_Nam'} header={t(`${translationsForReportTransit4274Columns}.destn_Nam`)} />
          <Column field={'status'} header={t(`${translationsForReportTransit4274Columns}.status`)} />
          <Column field={'reg_No'} header={t(`${translationsForReportTransit4274Columns}.reg_No`)} />
          <Column field={'reg_Dat'} header={t(`${translationsForReportTransit4274Columns}.reg_Dat`)} />
          <Column field={'arr_Date'} header={t(`${translationsForReportTransit4274Columns}.arr_Date`)} />
          <Column field={'val_No;'} header={t(`${translationsForReportTransit4274Columns}.val_No;`)} />
          <Column field={'max_Date_Of_Arrival_Limit'} header={t(`${translationsForReportTransit4274Columns}.max_Date_Of_Arrival_Limit`)} />
          <Column field={'Max_Date_Allowed'} header={t(`${translationsForReportTransit4274Columns}.Max_Date_Allowed`)} />
          <Column field={'transit_Officer'} header={t(`${translationsForReportTransit4274Columns}.transit_Officer`)} />
          <Column field={'assest_officer'} header={t(`${translationsForReportTransit4274Columns}.assest_officer`)} />
          <Column field={'declarant_Code'} header={t(`${translationsForReportTransit4274Columns}.declarant_Code`)} />
          <Column field={'declarant_Name'} header={t(`${translationsForReportTransit4274Columns}.declarant_Name`)} />
          <Column field={'cns_Code'} header={t(`${translationsForReportTransit4274Columns}.cns_Code`)} />
          <Column field={'cns_Name'} header={t(`${translationsForReportTransit4274Columns}.cns_Name`)} />
          <Column field={'principal_Cod'} header={t(`${translationsForReportTransit4274Columns}.principal_Cod`)} />
          <Column field={'principal_Nam'} header={t(`${translationsForReportTransit4274Columns}.principal_Nam`)} />
          <Column field={'represented_By'} header={t(`${translationsForReportTransit4274Columns}.represented_By`)} />
          <Column field={'exp_Code'} header={t(`${translationsForReportTransit4274Columns}.exp_Code`)} />
          <Column field={'cty_Destn_Cod'} header={t(`${translationsForReportTransit4274Columns}.cty_Destn_Cod`)} />
          <Column field={'mod_Of_Transport'} header={t(`${translationsForReportTransit4274Columns}.mod_Of_Transport`)} />
          <Column field={'lorry_To_Border'} header={t(`${translationsForReportTransit4274Columns}.lorry_To_Border`)} />
          <Column field={'gross_Mass'} header={t(`${translationsForReportTransit4274Columns}.gross_Mass`)} />
          <Column field={'Net_Mass'} header={t(`${translationsForReportTransit4274Columns}.Net_Mass`)} />
          <Column field={'tot_Pkg'} header={t(`${translationsForReportTransit4274Columns}.tot_Pkg`)} />
          <Column field={'Package_Name'} header={t(`${translationsForReportTransit4274Columns}.Package_Name`)} />
          <Column field={'hscode'} header={t(`${translationsForReportTransit4274Columns}.hscode`)} />
          <Column field={'Good_Description2'} header={t(`${translationsForReportTransit4274Columns}.Good_Description2`)} />
          <Column field={'Good_Description3'} header={t(`${translationsForReportTransit4274Columns}.Good_Description3`)} />
          <Column field={'Package_Mark'} header={t(`${translationsForReportTransit4274Columns}.Package_Mark`)} />
          <Column field={'cont1'} header={t(`${translationsForReportTransit4274Columns}.cont1`)} />
          <Column field={'cont2'} header={t(`${translationsForReportTransit4274Columns}.cont2`)} />
          <Column field={'cont_Flg'} header={t(`${translationsForReportTransit4274Columns}.cont_Flg`)} />
          <Column field={'cty_Export_Name'} header={t(`${translationsForReportTransit4274Columns}.cty_Export_Name`)} />
          <Column field={'seal_Affixed_No'} header={t(`${translationsForReportTransit4274Columns}.seal_Affixed_No`)} />
          <Column field={'seal_Identity'} header={t(`${translationsForReportTransit4274Columns}.seal_Identity`)} />
          <Column field={'Garanty_Cod'} header={t(`${translationsForReportTransit4274Columns}.Garanty_Cod`)} />
          <Column field={'Garanty_Amnt'} header={t(`${translationsForReportTransit4274Columns}.Garanty_Amnt`)} />
          <Column field={'at1_Cod'} header={t(`${translationsForReportTransit4274Columns}.at1_Cod`)} />
          <Column field={'at1_Nbr'} header={t(`${translationsForReportTransit4274Columns}.at1_Nbr`)} />
          <Column field={'at2_Cod'} header={t(`${translationsForReportTransit4274Columns}.at2_Cod`)} />
          <Column field={'at2_Nbr'} header={t(`${translationsForReportTransit4274Columns}.at2_Nbr`)} />
          <Column field={'at3_Cod'} header={t(`${translationsForReportTransit4274Columns}.at3_Cod`)} />
          <Column field={'at3_Nbr'} header={t(`${translationsForReportTransit4274Columns}.at3_Nbr`)} />
          <Column field={'at4_Cod'} header={t(`${translationsForReportTransit4274Columns}.at4_Cod`)} />
          <Column field={'at4_Nbr'} header={t(`${translationsForReportTransit4274Columns}.at4_Nbr`)} />
          <Column field={'del_Cod'} header={t(`${translationsForReportTransit4274Columns}.del_Cod`)} />
          <Column field={'del_Nam'} header={t(`${translationsForReportTransit4274Columns}.del_Nam`)} />
          <Column field={'dec_Ref'} header={t(`${translationsForReportTransit4274Columns}.dec_Ref`)} />
          <Column field={'load_List'} header={t(`${translationsForReportTransit4274Columns}.load_List`)} />
          <Column field={'destn_Cty'} header={t(`${translationsForReportTransit4274Columns}.destn_Cty`)} />
          <Column field={'exp_Nam'} header={t(`${translationsForReportTransit4274Columns}.exp_Nam`)} />
          <Column field={'cty_Export'} header={t(`${translationsForReportTransit4274Columns}.cty_Export`)} />
          <Column field={'cty_Destn_Name'} header={t(`${translationsForReportTransit4274Columns}.cty_Destn_Name`)} />
          <Column field={'Nationality_Of_Transport'} header={t(`${translationsForReportTransit4274Columns}.Nationality_Of_Transport`)} />
          <Column field={'cty_Border'} header={t(`${translationsForReportTransit4274Columns}.cty_Border`)} />
          <Column field={'cty_Dep'} header={t(`${translationsForReportTransit4274Columns}.cty_Dep`)} />
          <Column field={'Itm_No'} header={t(`${translationsForReportTransit4274Columns}.Itm_No`)} />
          <Column field={'Pack_Nbr'} header={t(`${translationsForReportTransit4274Columns}.Pack_Nbr`)} />
          <Column field={'Package_Code'} header={t(`${translationsForReportTransit4274Columns}.Package_Code`)} />
          <Column field={'showGridlines'} header={t(`${translationsForReportTransit4274Columns}.showGridlines`)} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
};

export default Transit_4274;
