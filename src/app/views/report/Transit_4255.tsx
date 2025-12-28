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
const translationsForReportTransit4255: string = "reports.transit_4255"
const translationsForReportTransit4255Columns: string = "reports.transit_4255.columns"
// I love you

const Transit_4255 = () => {
  const [reportData, setReportData] = useState([]);
  const tableRef: any = useRef(null);
  const { t } = useTranslation();

  const handleSubmit = async (data: SearchData) => {
    try {
      const res = await axios.post('/reporting/TransitReport4255', {
        type: data.customsProcedure,
        customsCode: data.CustomsCode,
        ...data
      });

      setReportData([]);
      {
        setReportData(res.data);
      }
    } catch (error) { }
  };

  return (
    <SimpleCard title={t(`${translationsForReportTransit4255}.title`)}>
      <ReportHeaderInputs
        showStartDate
        showEndDate
        showAssesDate
        showArrivalDate
        showDestinationCustomsList
        showDepartureCustomsList
        showTransitType2
        //  showCompanyContractorCode
        onSearch={handleSubmit}
        tabelRef={tableRef}
      />

      <Box width="100%" overflow="auto">
        <DataTable
          exportFilename={`Transit Report 4255 ${new Date().toISOString()}`}
          ref={tableRef}
          value={reportData}
          rows={ROWS_PER_PAGE}
          rowsPerPageOptions={[5, 10, 25, 50, 100]}
          paginator
          stripedRows
          showGridlines
        >
          <Column field={'transit_Type'} header={t(`${translationsForReportTransit4255Columns}.transit_Type`)} />
          <Column field={'declaration_Ref_Yr'} header={t(`${translationsForReportTransit4255Columns}.declaration_Ref_Yr`)} />
          <Column field={'dept_Off_Nam'} header={t(`${translationsForReportTransit4255Columns}.dept_Off_Nam`)} />
          <Column field={'destn_Nam'} header={t(`${translationsForReportTransit4255Columns}.destn_Nam`)} />
          <Column field={'status'} header={t(`${translationsForReportTransit4255Columns}.status`)} />
          <Column field={'reg_No'} header={t(`${translationsForReportTransit4255Columns}.reg_No`)} />
          <Column field={'reg_Dat'} header={t(`${translationsForReportTransit4255Columns}.reg_Dat`)} />
          <Column field={'val_No;'} header={t(`${translationsForReportTransit4255Columns}.val_No;`)} />
          <Column field={'arr_Date'} header={t(`${translationsForReportTransit4255Columns}.arr_Date`)} />
          <Column field={'max_Date_Of_Arrival_Limit'} header={t(`${translationsForReportTransit4255Columns}.max_Date_Of_Arrival_Limit`)} />
          <Column field={'Max_Date_Allowed'} header={t(`${translationsForReportTransit4255Columns}.Max_Date_Allowed`)} />
          <Column field={'transit_Officer'} header={t(`${translationsForReportTransit4255Columns}.transit_Officer`)} />
          <Column field={'declarant_Code'} header={t(`${translationsForReportTransit4255Columns}.declarant_Code`)} />
          <Column field={'declarant_Name'} header={t(`${translationsForReportTransit4255Columns}.declarant_Name`)} />
          <Column field={'cns_Code'} header={t(`${translationsForReportTransit4255Columns}.cns_Code`)} />
          <Column field={'cns_Name'} header={t(`${translationsForReportTransit4255Columns}.cns_Name`)} />
          <Column field={'principal_Cod'} header={t(`${translationsForReportTransit4255Columns}.principal_Cod`)} />
          <Column field={'principal_Nam'} header={t(`${translationsForReportTransit4255Columns}.principal_Nam`)} />
          <Column field={'represented_By'} header={t(`${translationsForReportTransit4255Columns}.represented_By`)} />
          <Column field={'cty_Export_Name'} header={t(`${translationsForReportTransit4255Columns}.cty_Export_Name`)} />
          <Column field={'cty_Destn_Name'} header={t(`${translationsForReportTransit4255Columns}.cty_Destn_Name`)} />
          <Column field={'mod_Of_Transport'} header={t(`${translationsForReportTransit4255Columns}.mod_Of_Transport`)} />
          <Column field={'lorry_To_Border'} header={t(`${translationsForReportTransit4255Columns}.lorry_To_Border`)} />
          <Column field={'gross_Mass'} header={t(`${translationsForReportTransit4255Columns}.gross_Mass`)} />
          <Column field={'Net_Mass'} header={t(`${translationsForReportTransit4255Columns}.Net_Mass`)} />
          <Column field={'tot_Pkg'} header={t(`${translationsForReportTransit4255Columns}.tot_Pkg`)} />
          <Column field={'Package_Name'} header={t(`${translationsForReportTransit4255Columns}.Package_Name`)} />
          <Column field={'hscode'} header={t(`${translationsForReportTransit4255Columns}.hscode`)} />
          <Column field={'Good_Description2'} header={t(`${translationsForReportTransit4255Columns}.Good_Description2`)} />
          <Column field={'Good_Description3'} header={t(`${translationsForReportTransit4255Columns}.Good_Description3`)} />
          <Column field={'Package_Mark'} header={t(`${translationsForReportTransit4255Columns}.Package_Mark`)} />
          <Column field={'cont_Flg'} header={t(`${translationsForReportTransit4255Columns}.cont_Flg`)} />
          <Column field={'cont1'} header={t(`${translationsForReportTransit4255Columns}.cont1`)} />
          <Column field={'cont2'} header={t(`${translationsForReportTransit4255Columns}.cont2`)} />
          <Column field={'seal_Affixed_No'} header={t(`${translationsForReportTransit4255Columns}.seal_Affixed_No`)} />
          <Column field={'seal_Identity'} header={t(`${translationsForReportTransit4255Columns}.seal_Identity`)} />
          <Column field={'Garanty_Cod'} header={t(`${translationsForReportTransit4255Columns}.Garanty_Cod`)} />
          <Column field={'Garanty_Amnt'} header={t(`${translationsForReportTransit4255Columns}.Garanty_Amnt`)} />
          <Column field={'at1_Cod'} header={t(`${translationsForReportTransit4255Columns}.at1_Cod`)} />
          <Column field={'at1_Nbr'} header={t(`${translationsForReportTransit4255Columns}.at1_Nbr`)} />
          <Column field={'at2_Cod'} header={t(`${translationsForReportTransit4255Columns}.at2_Cod`)} />
          <Column field={'at2_Nbr'} header={t(`${translationsForReportTransit4255Columns}.at2_Nbr`)} />
          <Column field={'at3_Cod'} header={t(`${translationsForReportTransit4255Columns}.at3_Cod`)} />
          <Column field={'at3_Nbr'} header={t(`${translationsForReportTransit4255Columns}.at3_Nbr`)} />
          <Column field={'at4_Cod'} header={t(`${translationsForReportTransit4255Columns}.at4_Cod`)} />
          <Column field={'at4_Nbr'} header={t(`${translationsForReportTransit4255Columns}.at4_Nbr`)} />
          <Column field={'dec_Ref'} header={t(`${translationsForReportTransit4255Columns}.dec_Ref`)} />
          <Column field={'load_List'} header={t(`${translationsForReportTransit4255Columns}.load_List`)} />
          <Column field={'destn_Cty'} header={t(`${translationsForReportTransit4255Columns}.destn_Cty`)} />
          <Column field={'exp_Code'} header={t(`${translationsForReportTransit4255Columns}.exp_Code`)} />
          <Column field={'exp_Nam'} header={t(`${translationsForReportTransit4255Columns}.exp_Nam`)} />
          <Column field={'cty_Export'} header={t(`${translationsForReportTransit4255Columns}.cty_Export`)} />
          <Column field={'cty_Destn_Cod'} header={t(`${translationsForReportTransit4255Columns}.cty_Destn_Cod`)} />
          <Column field={'Nationality_Of_Transport'} header={t(`${translationsForReportTransit4255Columns}.Nationality_Of_Transport`)} />
          <Column field={'cty_Border'} header={t(`${translationsForReportTransit4255Columns}.cty_Border`)} />
          <Column field={'cty_Dep'} header={t(`${translationsForReportTransit4255Columns}.cty_Dep`)} />
          <Column field={'Itm_No'} header={t(`${translationsForReportTransit4255Columns}.Itm_No`)} />
          <Column field={'Pack_Nbr'} header={t(`${translationsForReportTransit4255Columns}.Pack_Nbr`)} />
          <Column field={'Package_Code'} header={t(`${translationsForReportTransit4255Columns}.Package_Code`)} />
          <Column field={'ast_Dat'} header={t(`${translationsForReportTransit4255Columns}.ast_Dat`)} />
          <Column field={'del_Cod'} header={t(`${translationsForReportTransit4255Columns}.del_Cod`)} />
          <Column field={'del_Nam'} header={t(`${translationsForReportTransit4255Columns}.del_Nam`)} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
};

export default Transit_4255;
