import { Box, LinearProgress, styled } from '@mui/material';
import axios from 'axios';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { useEffect, useRef, useState } from 'react';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
import { SimpleCard } from '../../components';
import { ROWS_PER_PAGE } from '../../utils/constant';

function DPS_4578() {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true)
      const res = await axios.post('/reporting/DpsReport4578', {
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
    <SimpleCard title="4578-DPS">
      <ReportHeaderInputs
        showStartDate
        showEndDate
        showRegDate
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
          <Column field={'tpCuNam'} header={'Border Customs'} />
          <Column style={{ minWidth: "12rem" }} field={'icdCuNam'} header={'Destination Customs'} />
          <Column style={{ minWidth: "12rem" }} field={'itemTotal'} header={'ITEM_TOTAL'} />
          <Column field={'sadRegNo'} header={'SAD_REG_NO'} />
          <Column field={'sadRegDate'} header={'SAD_REG_DATE'} />
          <Column field={'sadAsmtNo'} header={'SAD_ASMT_NO'} />
          <Column field={'sadAastDate'} header={'SAD_AST_DATE'} />
          <Column style={{ minWidth: "10rem" }} field={'rcptNo'} header={'P_NO'} />
          <Column field={'rcptDate'} header={'P_Date'} />
          <Column style={{ minWidth: "20rem" }} field={'bankNam'} header={'BANK_NAM'} />
          <Column field={'brokerTinSad'} header={'BROKER_TIN_SAD'} />
          <Column style={{ minWidth: '12rem' }} field={'decNamSad'} header={'	Broker_NAM_SAD'} />
          <Column field={'companyTin'} header={'COMPANY_TIN'} />
          <Column style={{ minWidth: "25rem" }} field={'cmpNam'} header={'CMP_NAM'} />
          <Column field={'countryDest'} header={'COUNTRY_DEST'} />
          <Column field={'countryExport'} header={'COUNTRY_EXPORT'} />
          <Column field={'countryOrg'} header={'COUNTRY_ORG'} />
          <Column field={'lorryTotal'} header={'LORRY_TOTAL'} />
          <Column style={{ minWidth: "12rem" }} field={'declarationValueCurrency'} header={'DECLARATION_VALUE_CURRENCY'} />
          <Column field={'declarationValueAfs'} header={'DECLARATION_VALUE_AFS'} />
          <Column field={'declarationTaxes'} header={'DECLARATION_TAXES'} />
          <Column field={'declarationstatus'} header={'DECLARATION_STATUS'} />
          <Column field={'totPkg'} header={'1_Total_Package'} />
          <Column field={'decRef'} header={'T1_Dec_Ref'} />
          <Column field={'regNo'} header={'T1_Register_NO'} />
          <Column style={{ minWidth: "30rem" }} field={'regDat'} header={'T1_Register_Date'} />
          <Column field={'t1status'} header={'T1_Status'} />
          <Column style={{ minWidth: "12rem" }} field={'arrDate'} header={'T1_Arrival_Date'} />
          <Column field={'deptOffNam'} header={'BCP'} />
          <Column field={'destnNam'} header={'	ICD'} />
          <Column field={'destnCty'} header={'T1_Dest_Cty'} />
          <Column style={{ minWidth: "20rem" }} field={'transitType'} header={'TRANSIT_TYPE'} />
          <Column style={{ minWidth: "20rem" }} field={'t1DeclarantCode'} header={'T1_Broker_TIN'} />
          <Column style={{ minWidth: "12rem" }} field={'t1DeclarantName'} header={'T1_Broker_Name'} />
          <Column style={{ minWidth: "12rem" }} field={'expCode'} header={'Exp_Code'} />
          <Column style={{ minWidth: "12rem" }} field={'cnsCode'} header={'T1_Consignee_TIN'} />
          <Column style={{ minWidth: "25rem" }} field={'cnsName'} header={'T1_Consignee_Name'} />
          <Column field={'ctyExportName'} header={'T1_Country_Of_Export'} />
          <Column field={'ctyDestnNam'} header={'T1_Country_Of_Des'} />
          <Column field={'modOfTransport'} header={'T1_Mod_of_transport'} />
          <Column field={'principalCod'} header={'T1_Principal_cod'} />
          <Column style={{ minWidth: "12rem" }} field={'T1_Principal_Name'} header={'PRINCIPAL_NAM'} />
          <Column style={{ minWidth: "20rem" }} field={'representedBy'} header={'T1_Referenced_By'} />
          <Column field={'nationalityOfTransport'} header={'T1_Nationality_Of_transport'} />
          <Column field={'transitOfficer'} header={'T1_transit_officer'} />
          <Column field={'contFlg'} header={'Container_Flag'} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
};

export default DPS_4578