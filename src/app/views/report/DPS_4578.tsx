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
          <Column field={'tpCuNam'} header={'TP_CU_NAM'} />
          <Column style={{ minWidth: "12rem" }} field={'icdCuNam'} header={'ICD_CU_NAM'} />
          <Column style={{ minWidth: "12rem" }} field={'itemTotal'} header={'ITEM_TOTAL'} />
          <Column field={'sadRegNo'} header={'SAD_REG_NO'} />
          <Column field={'sadRegDate'} header={'SAD_REG_DATE'} />
          <Column field={'sadAsmtNo'} header={'SAD_ASMT_NO'} />
          <Column field={'sadAastDate'} header={'SAD_AST_DATE'} />
          <Column style={{ minWidth: "10rem" }} field={'rcptNo'} header={'RCPT_NO'} />
          <Column field={'rcptDate'} header={'RCPT_DATE'} />
          <Column style={{ minWidth: "20rem" }} field={'bankNam'} header={'BANK_NAM'} />
          <Column field={'brokerTinSad'} header={'BROKER_TIN_SAD'} />
          <Column style={{ minWidth: '12rem' }} field={'decNamSad'} header={'DEC_NAM_SAD'} />
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
          <Column field={'totPkg'} header={'TOT_PKG'} />
          <Column field={'decRef'} header={'DEC_REF'} />
          <Column field={'regNo'} header={'REG_NO'} />
          <Column style={{ minWidth: "30rem" }} field={'regDat'} header={'REG_DAT'} />
          <Column field={'t1status'} header={'T1STATUS'} />
          <Column style={{ minWidth: "12rem" }} field={'arrDate'} header={'ARR_DATE'} />
          <Column field={'deptOffNam'} header={'DEPT_OFF_NAM'} />
          <Column field={'destnNam'} header={'DESTN_NAM'} />
          <Column field={'destnCty'} header={'DESTN_CTY'} />
          <Column style={{ minWidth: "20rem" }} field={'transitType'} header={'TRANSIT_TYPE'} />
          <Column style={{ minWidth: "20rem" }} field={'t1DeclarantCode'} header={'T1_DECLARANT_NAME'} />
          <Column style={{ minWidth: "12rem" }} field={'t1DeclarantName'} header={'T1_DECLARANT_NAME'} />
          <Column style={{ minWidth: "12rem" }} field={'expCode'} header={'EXP_CODE'} />
          <Column style={{ minWidth: "12rem" }} field={'cnsCode'} header={'CNS_CODE'} />
          <Column style={{ minWidth: "25rem" }} field={'cnsName'} header={'CNS_NAME'} />
          <Column field={'ctyExportName'} header={'CTY_EXPORT_NAME'} />
          <Column field={'ctyDestnNam'} header={'CTY_DESTN_NAM'} />
          <Column field={'modOfTransport'} header={'MOD_OF_TRANSPORT'} />
          <Column field={'principalCod'} header={'PRINCIPAL_COD'} />
          <Column style={{ minWidth: "12rem" }} field={'principalNam'} header={'PRINCIPAL_NAM'} />
          <Column style={{ minWidth: "20rem" }} field={'representedBy'} header={'REPRESENTED_BY'} />
          <Column field={'nationalityOfTransport'} header={'NATIONALITY_OF_TRANSPORT'} />
          <Column field={'transitOfficer'} header={'TRANSIT_OFFICER'} />
          <Column field={'contFlg'} header={'CONT_FLG'} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
};

export default DPS_4578