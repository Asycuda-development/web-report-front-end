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
const translationsForReportDPS4565: string = "reports.dps_4565"
const translationsForReportDPS4565Columns: string = "reports.dps_4565.columns"

function DPS_4565() {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);
  const { t } = useTranslation();

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
    <SimpleCard title={t(`${translationsForReportDPS4565}.title`)}>
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
          <Column field={'Sad_type'} header={t(`${translationsForReportDPS4565Columns}.Sad_type`)} />
          <Column style={{ minWidth: "12rem" }} field={'tpt_custom_nam'} header={t(`${translationsForReportDPS4565Columns}.tpt_custom_nam`)} />
          <Column style={{ minWidth: "12rem" }} filter filterField="ide_custom_nam" field={'ide_custom_nam'} header={t(`${translationsForReportDPS4565Columns}.ide_custom_nam`)} />
          <Column field={'Item_total'} header={t(`${translationsForReportDPS4565Columns}.Item_total`)} />
          <Column field={'Item_No'} header={t(`${translationsForReportDPS4565Columns}.Item_No`)} />
          <Column field={'Total_Package'} header={t(`${translationsForReportDPS4565Columns}.Total_Package`)} />
          <Column field={'Type_of_Package'} header={t(`${translationsForReportDPS4565Columns}.Type_of_Package`)} />
          <Column field={'Code_of_package'} header={t(`${translationsForReportDPS4565Columns}.Code_of_package`)} />
          <Column filter filterField='Reg_No' field={'Reg_No'} header={t(`${translationsForReportDPS4565Columns}.Reg_No`)} />
          <Column field={'Reg_Date'} header={t(`${translationsForReportDPS4565Columns}.Reg_Date`)} />
          <Column filter filterField='ASMT_No' field={'ASMT_No'} header={t(`${translationsForReportDPS4565Columns}.ASMT_No`)} />
          <Column field={'AST_Date'} header={t(`${translationsForReportDPS4565Columns}.AST_Date`)} />
          <Column field={'RCPT_No'} header={t(`${translationsForReportDPS4565Columns}.RCPT_No`)} />
          <Column field={'RCPT_Date'} header={t(`${translationsForReportDPS4565Columns}.RCPT_Date`)} />
          <Column field={'status'} header={t(`${translationsForReportDPS4565Columns}.status`)} />
          <Column field={'cpc'} header={t(`${translationsForReportDPS4565Columns}.cpc`)} />
          <Column field={'Customs_Proc'} header={t(`${translationsForReportDPS4565Columns}.Customs_Proc`)} />
          <Column field={'hs_code'} header={t(`${translationsForReportDPS4565Columns}.hs_code`)} />
          <Column style={{ minWidth: "20rem" }} field={'dsc'} header={t(`${translationsForReportDPS4565Columns}.dsc`)} />
          <Column style={{ minWidth: "25rem" }} field={'gds_description'} header={t(`${translationsForReportDPS4565Columns}.gds_description`)} />
          <Column style={{ minWidth: "20rem" }} field={' Pakage_mark1'} header={t(`${translationsForReportDPS4565Columns}. Pakage_mark1`)} />
          <Column field={'Pakage_mark2'} header={t(`${translationsForReportDPS4565Columns}.Pakage_mark2`)} />
          <Column field={'Item_Gross_Weight'} header={t(`${translationsForReportDPS4565Columns}.Item_Gross_Weight`)} />
          <Column field={'Item_Net_Weight'} header={t(`${translationsForReportDPS4565Columns}.Item_Net_Weight`)} />
          <Column filter filterField='Broker_TIN' field={'Broker_TIN'} header={t(`${translationsForReportDPS4565Columns}.Broker_TIN`)} />
          <Column style={{ minWidth: "12rem" }} field={' dec_nam'} header={t(`${translationsForReportDPS4565Columns}. dec_nam`)} />
          <Column field={'Company_TIN'} header={t(`${translationsForReportDPS4565Columns}.Company_TIN`)} />
          <Column style={{ minWidth: "20rem" }} field={'CMP_Nam'} header={t(`${translationsForReportDPS4565Columns}.CMP_Nam`)} />
          <Column style={{ minWidth: "20rem" }} field={'fin_nam'} header={t(`${translationsForReportDPS4565Columns}.fin_nam`)} />
          <Column style={{ minWidth: "12rem" }} field={'Country_Org'} header={t(`${translationsForReportDPS4565Columns}.Country_Org`)} />
          <Column style={{ minWidth: "12rem" }} field={' Country_Dest'} header={t(`${translationsForReportDPS4565Columns}. Country_Dest`)} />
          <Column style={{ minWidth: "12rem" }} field={'Country_Export'} header={t(`${translationsForReportDPS4565Columns}.Country_Export`)} />
          <Column field={'Lorry_Total'} header={t(`${translationsForReportDPS4565Columns}.Lorry_Total`)} />
          <Column field={'Currecny_Rate'} header={t(`${translationsForReportDPS4565Columns}.Currecny_Rate`)} />
          <Column field={'Declaration_Value_currency'} header={t(`${translationsForReportDPS4565Columns}.Declaration_Value_currency`)} />
          <Column field={'Declaration_Value_Afs'} header={t(`${translationsForReportDPS4565Columns}.Declaration_Value_Afs`)} />
          <Column field={'Declaration_Taxes'} header={t(`${translationsForReportDPS4565Columns}.Declaration_Taxes`)} />
          <Column field={'Item_Value_currency'} header={t(`${translationsForReportDPS4565Columns}.Item_Value_currency`)} />
          <Column field={'Item_Value_Afs'} header={t(`${translationsForReportDPS4565Columns}.Item_Value_Afs`)} />
          <Column field={'tax_amt'} header={t(`${translationsForReportDPS4565Columns}.tax_amt`)} />
          <Column field={'custom_cod'} header={t(`${translationsForReportDPS4565Columns}.custom_cod`)} />
          <Column style={{ minWidth: "12rem" }} field={'bank_nam'} header={t(`${translationsForReportDPS4565Columns}.bank_nam`)} />
          <Column field={'Currrency_code'} header={t(`${translationsForReportDPS4565Columns}.Currrency_code`)} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
};

export default DPS_4565