import { Box, LinearProgress, styled } from '@mui/material';
import axios from 'axios';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { useEffect, useRef, useState } from 'react';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
import { SimpleCard } from '../../components';
import { ROWS_PER_PAGE } from '../../utils/constant';

function DPS_4565() {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);

  const handleSubmit = async (data: SearchData) => {
    try {

      setLoading(true)
      const res = await axios.post('/reporting/DpsReport4565', {
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
    <SimpleCard title="4565-DPS">
      <ReportHeaderInputs
        showStartDate
        showEndDate
        showCustomsProcedure
        showRegDate
        showAssesDate
        showPayDate
        showCustomsList
        ShowHsCode
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
          <Column field={'Sad_type'} header={'SAD Type'} />
          <Column style={{ minWidth: "12rem" }} field={'tpt_custom_nam'} header={'Border office'} />
          <Column style={{ minWidth: "12rem" }} filter filterField="ide_custom_nam" field={'ide_custom_nam'} header={'Customs Office'} />
          <Column field={'Item_total'} header={'Item_Total'} />
          <Column field={'Item_No'} header={'Item_No'} />
          <Column field={'Total_Package'} header={'Total_Package'} />
          <Column field={'Type_of_Package'} header={'Package_Type'} />
          <Column field={'Code_of_package'} header={'Package_Code'} />
          <Column filter filterField='Reg_No' field={'Reg_No'} header={'Reg_No'} />
          <Column field={'Reg_Date'} header={'Reg_Date'} />
          <Column filter filterField='ASMT_No' field={'ASMT_No'} header={'AsseM_Number'} />
          <Column field={'AST_Date'} header={'AsseM_Date'} />
          <Column field={'RCPT_No'} header={'RCPT_NO'} />
          <Column field={'RCPT_Date'} header={'RECPT_Date'} />
          <Column field={'status'} header={'SAD_STATUS'} />
          <Column field={'cpc'} header={'Customs_Pro'} />
          <Column field={'Customs_Proc'} header={'Extended Proc Code'} />
          <Column field={'hs_code'} header={'HS_Code'} />
          <Column style={{ minWidth: "20rem" }} field={'dsc'} header={'Goods Description'} />
          <Column style={{ minWidth: "25rem" }} field={'gds_description'} header={'Comercial Description'} />
          <Column style={{ minWidth: "20rem" }} field={' Pakage_mark1'} header={'Marks of Packages 1'} />
          <Column field={'Pakage_mark2'} header={'Marks of Packages 2'} />
          <Column field={'Item_Gross_Weight'} header={'Item_Gross_Weight'} />
          <Column field={'Item_Net_Weight'} header={'Item_Net_Weight'} />
          <Column filter filterField='Broker_TIN' field={'Broker_TIN'} header={'Broker_TIN'} />
          <Column style={{ minWidth: "12rem" }} field={' dec_nam'} header={'Declarant_Name'} />
          <Column field={'Company_TIN'} header={'Company_TIN'} />
          <Column style={{ minWidth: "20rem" }} field={'CMP_Nam'} header={'Company_Name'} />
          <Column style={{ minWidth: "20rem" }} field={'fin_nam'} header={'Financial_Name'} />
          <Column style={{ minWidth: "12rem" }} field={'Country_Org'} header={'Country_Origin_Name'} />
          <Column style={{ minWidth: "12rem" }} field={' Country_Dest'} header={'Country_Destination Name'} />
          <Column style={{ minWidth: "12rem" }} field={'Country_Export'} header={'Country_Export_Name'} />
          <Column field={'Lorry_Total'} header={'Lorry_Total'} />
          <Column field={'Currecny_Rate'} header={'Currency_Rate'} />
          <Column field={'Declaration_Value_currency'} header={'Declaration_Value in Foriegn Currency'} />
          <Column field={'Declaration_Value_Afs'} header={'Declaration_Value_Afs'} />
          <Column field={'Declaration_Taxes'} header={'Declaration_Taxes'} />
          <Column field={'Item_Value_currency'} header={'Item_Value_currency'} />
          <Column field={'Item_Value_Afs'} header={'Item_Value_Afs'} />
          <Column field={'tax_amt'} header={'Item Tax Amount'} />
          <Column field={'custom_cod'} header={'Custom Code'} />
          <Column style={{ minWidth: "12rem" }} field={'bank_nam'} header={'Bank_Name'} />
          <Column field={'Currrency_code'} header={'Currency Code'} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
};

export default DPS_4565