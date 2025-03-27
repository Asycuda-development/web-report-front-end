import { SimpleCard } from '../../components';
import { Box, styled, LinearProgress } from '@mui/material';
import { useEffect, useState, useRef } from 'react';
import { ROWS_PER_PAGE } from '../../utils/constant';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';

function DPS_4599() {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true);
      const res = await axios.post('/reporting/DpsReport4599', {
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
    <SimpleCard title="DPS_4599">
      <ReportHeaderInputs
        showStartDate
        showEndDate
        showAssesDate
        showPayDate
        showCustomsProcedure
        showCustomsList
        showHsCode
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
          <Column field={'ideTypSad'} header={'Type'} />
          <Column field={'tptCuoNam'} header={'Border Office'} />
          <Column field={'ideCuoNam'} header={'Custom Office'} />
          <Column field={'ideCuoCod'} header={'Custom Office Cod'} />
          <Column field={'ItemTotal'} header={'Item_Total'} />
          <Column field={'ItemNo'} header={'Item_No'} />
          <Column field={'TotalPackage'} header={'Total Package'} />
          <Column field={'CodeOfPackage'} header={'Package_Cod'} />
          <Column field={'TypeOfPackage'} header={'Package_Type'} />
          <Column field={'RegNo'} header={'Reg_No'} />
          <Column field={'RegDate'} header={'Reg_Date'} />
          <Column field={'ASMTNo'} header={'Assmt_No'} />
          <Column field={'ASTDate'} header={'Assmt_Date'} />
          <Column field={'RCPTNo'} header={'RCPT_No'} />
          <Column field={'RCPTDate'} header={'RCPT_Date'} />
          <Column field={'bankNam'} header={'Bank_Name'} />
          <Column field={'hsCode'} header={'HS_Code'} />
          <Column field={'cpc'} header={'cpc'} />
          <Column field={'dsc'} header={'Description'} />
          <Column style={{ minWidth: '15rem' }} field={'gdsDs3'} header={'Good_Description3'} />
          <Column field={'pckMrk1'} header={'pckMrk1'} />
          <Column field={'pckMrk2'} header={'pckMrk2'} />
          <Column field={'CustomsProc'} header={'CustomsProc'} />
          <Column field={'ItemGrossWeight'} header={'Item_Gross_Weight'} />
          <Column field={'ItemNetWeight'} header={'Item_Net_Weight'} />
          <Column field={'BrokerTin'} header={'Broker_Tin'} />
          <Column field={'decNam'} header={'Declarant_Nam'} />
          <Column field={'CompanyTin'} header={'Company_Tin'} />
          <Column field={'CMPNam'} header={'Company_Nam'} />
          <Column style={{ minWidth: '15rem' }} field={'finNam'} header={'Financial_Name'} />
          <Column field={'CountryDest'} header={'Country_Dest'} />
          <Column field={'CountryExport'} header={'Country_Export'} />
          <Column field={'CountryOrg'} header={'Country_Org'} />
          <Column field={'LorryTotal'} header={'Lorry_Total'} />
          <Column field={'CurrrencyCode'} header={'Currency Code'} />
          <Column field={'CurrecnyRate'} header={'Currency Rate'} />
          <Column field={'DeclarationValueCurrency'} header={'Declaration Value Currency'} />
          <Column field={'DeclarationValueAfs'} header={'Declaration Value_Afs'} />
          <Column field={'DeclarationTaxes'} header={'Declaration Taxes'} />
          <Column field={'ItemValueCurrency'} header={'Item Value Currency'} />
          <Column field={'ItemValueAfs'} header={'Item Value_Afs'} />
          <Column field={'status'} header={'Status'} />
          <Column field={'taxAmt'} header={'Tax Amount'} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
}

export default DPS_4599;
