import { SimpleCard } from '../../components';
import { Box, styled, LinearProgress } from '@mui/material';
import React, { useEffect, useState, useRef } from 'react';
import { ROWS_PER_PAGE } from '../../utils/constant';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
// I love you

const Transit_4260 = () => {
  const [reportData, setReportData] = useState([]);
  const tableRef: any = useRef(null);

  const handleSubmit = async (data: SearchData) => {
    try {
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
    } catch (error) {}
  };

  return (
    <SimpleCard title="4260- Transit">
      <ReportHeaderInputs
        showStartDate
        showEndDate
        showDepartureCustomsList
        showTransitType2
        showDestinationCustomsList
        //  showCompanyContractorCode
        onSearch={handleSubmit}
        tabelRef={tableRef}
      />

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
          <Column field={'tot_Pkg'} header={'tot_Pkg'} />
          <Column field={'dec_Ref'} header={'dec_Ref'} />
          <Column field={'load_List'} header={'load_List'} />
          <Column field={'reg_No'} header={'reg_No'} />
          <Column field={'reg_Dat'} header={'reg_Dat'} />
          <Column field={'status'} header={'status'} />
          <Column field={'arr_Date'} header={'arr_Date'} />
          <Column field={'dept_Off_Nam'} header={'dept_Off_Nam'} />
          <Column field={'destn_Nam'} header={'destn_Nam'} />
          <Column field={'destn_Cty'} header={'destn_Cty'} />
          <Column field={'transit_Type'} header={'transit_Type'} />
          <Column field={'exp_Code'} header={'exp_Code'} />
          <Column field={'exp_Nam'} header={'exp_Nam'} />
          <Column field={'cns_Code'} header={'cns_Code'} />
          <Column field={'cns_Name'} header={'cns_Name'} />
          <Column field={'cty_Export'} header={'cty_Export'} />
          <Column field={'cty_Export_Name'} header={'cty_Export_Name'} />
          <Column field={'cty_Destn_Cod'} header={'cty_Destn_Cod'} />
          <Column field={'cty_Destn_Name'} header={'cty_Destn_Name'} />
          <Column field={'mod_Of_Transport'} header={'mod_Of_Transport'} />
          <Column field={'principal_Cod'} header={'principal_Cod'} />
          <Column field={'principal_Nam'} header={'principal_Nam'} />
          <Column field={'represented_By'} header={'represented_By'} />
          <Column field={'declarant_Code'} header={'declarant_Code'} />
          <Column field={'declarant_Name'} header={'declarant_Name'} />
          <Column field={'max_Date_Of_Arrival_Limit'} header={'max_Date_Of_Arrival_Limit'} />
          <Column field={'Max_Date_Allowed'} header={'Max_Date_Allowed'} />
          <Column field={'declaration_Ref_Yr'} header={'declaration_Ref_Yr'} />
          <Column field={'Nationality_Of_Transport'} header={'Nationality_Of_Transport'} />
          <Column field={'lorry_To_Border'} header={'lorry_To_Border'} />
          <Column field={'cty_Border'} header={'cty_Border'} />
          <Column field={'cty_Dep'} header={'cty_Dep'} />
          <Column field={'seal_Affixed_No'} header={'seal_Affixed_No'} />
          <Column field={'seal_Identity'} header={'seal_Identity'} />
          <Column field={'aranty_Cod'} header={'aranty_Cod'} />
          <Column field={'Garanty_Amnt'} header={'Garanty_Amnt'} />
          <Column field={'Itm_No'} header={'Itm_No'} />
          <Column field={'Pack_Nbr'} header={'Pack_Nbr'} />
          <Column field={'Package_Mark'} header={'Package_Mark'} />
          <Column field={'hscode'} header={'hscode'} />
          <Column field={'gross_Mass'} header={'gross_Mass'} />
          <Column field={'Net_Mass'} header={'Net_Mass'} />
          <Column field={'Good_Description2'} header={'Good_Description2'} />
          <Column field={'Good_Description3'} header={'Good_Description3'} />
          <Column field={'Package_Code'} header={'Package_Code'} />
          <Column field={'Package_Name'} header={'Package_Name'} />
          <Column field={'at1_Cod'} header={'at1_Cod'} />
          <Column field={'at1_Nbr'} header={'at1_Nbr'} />
          <Column field={'at2_Cod'} header={'at2_Cod'} />
          <Column field={'at2_Nbr'} header={'at2_Nbr'} />
          <Column field={'at3_Cod'} header={'at3_Cod'} />
          <Column field={'at3_Nbr'} header={'at3_Nbr'} />
          <Column field={'at4_Cod'} header={'at4_Cod'} />
          <Column field={'at4_Nbr'} header={'at4_Nbr'} />
          <Column field={'val_No;'} header={'val_No;'} />
          <Column field={'transit_Officer'} header={'transit_Officer'} />
          <Column field={'cont1'} header={'cont1'} />
          <Column field={'cont2'} header={'cont2'} />
          <Column field={'cont_Flg'} header={'cont_Flg'} />
          <Column field={'del_Cod'} header={'del_Cod'} />
          <Column field={'del_Nam'} header={'del_Nam'} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
};

export default Transit_4260;
