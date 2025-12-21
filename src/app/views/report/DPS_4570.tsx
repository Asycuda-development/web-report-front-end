import { SimpleCard } from '../../components';
import { Box, styled, LinearProgress } from '@mui/material';
import React, { useEffect, useState, useRef } from 'react';
import { ROWS_PER_PAGE } from '../../utils/constant';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
import { Toast } from 'primereact/toast';
import { useTranslation } from 'react-i18next';

const translationsForBasedOnError: string = "errors"
const translationsForBasedOn: string = "basedOn"
const translationsForReportDPS4570: string = "reports.dps_4570"
const translationsForReportDPS4570Columns: string = "reports.dps_4570.columns"

function DPS_4570() {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false);
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
        return
      }
      setLoading(true);
      const res = await axios.post('/reporting/DpsReport4552', {
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
    label: t(`${translationsForBasedOn}.engin_Number`),
    name: 'Engin_Number'
  }, {
    label: t(`${translationsForBasedOn}.vIN_Number`),
    name: 'VIN_Number'
  }]

  return (
    <SimpleCard title={t(`${translationsForReportDPS4570}.title`)}>
      <ReportHeaderInputs
        showStartDate
        showEndDate
        showExemptionType
        showCustomsProcedure
        showBasedOn
        basedOnOptions={basedOnOptions}
        showRegDate
        showAssesDate
        showPayDate
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
          emptyMessage={'No Data Available'}
        >
          <Column field={' IDE_TYP_SAD'} header={t(`${translationsForReportDPS4570Columns}. IDE_TYP_SAD`)} />
          <Column field={' TPT_CUO_NAM'} header={t(`${translationsForReportDPS4570Columns}. TPT_CUO_NAM`)} />
          <Column field={' IDE_CUO_NAM'} header={t(`${translationsForReportDPS4570Columns}. IDE_CUO_NAM`)} />
          <Column field={' IDE_CUO_COD'} header={t(`${translationsForReportDPS4570Columns}. IDE_CUO_COD`)} />
          <Column field={' DEC_COD'} header={t(`${translationsForReportDPS4570Columns}. DEC_COD`)} />
          <Column field={' DEC_NAM'} header={t(`${translationsForReportDPS4570Columns}. DEC_NAM`)} />
          <Column field={' ITEM_TOTAL'} header={t(`${translationsForReportDPS4570Columns}. ITEM_TOTAL`)} />
          <Column field={' ITEM_NO'} header={t(`${translationsForReportDPS4570Columns}. ITEM_NO`)} />
          <Column field={' TOTAL_PACKAGE'} header={t(`${translationsForReportDPS4570Columns}. TOTAL_PACKAGE`)} />
          <Column field={' CODE_OF_PACKAGE'} header={t(`${translationsForReportDPS4570Columns}. CODE_OF_PACKAGE`)} />
          <Column field={' TYPE_OF_PACKAGE'} header={t(`${translationsForReportDPS4570Columns}. TYPE_OF_PACKAGE`)} />
          <Column field={' REG_NO'} header={t(`${translationsForReportDPS4570Columns}. REG_NO`)} />
          <Column field={' REG_DATE'} header={t(`${translationsForReportDPS4570Columns}. REG_DATE`)} />
          <Column field={' ASMT_NO'} header={t(`${translationsForReportDPS4570Columns}. ASMT_NO`)} />
          <Column field={' AST_DATE'} header={t(`${translationsForReportDPS4570Columns}. AST_DATE`)} />
          <Column field={' RCPT_NO'} header={t(`${translationsForReportDPS4570Columns}. RCPT_NO`)} />
          <Column field={' RCPT_DATE'} header={t(`${translationsForReportDPS4570Columns}. RCPT_DATE`)} />
          <Column field={' BANK_NAM'} header={t(`${translationsForReportDPS4570Columns}. BANK_NAM`)} />
          <Column field={' HS_CODE'} header={t(`${translationsForReportDPS4570Columns}. HS_CODE`)} />
          <Column field={' CPC'} header={t(`${translationsForReportDPS4570Columns}. CPC`)} />
          <Column field={' DSC'} header={t(`${translationsForReportDPS4570Columns}. DSC`)} />
          <Column field={' GDS_DS3'} header={t(`${translationsForReportDPS4570Columns}. GDS_DS3`)} />
          <Column field={' PCK_MRK1'} header={t(`${translationsForReportDPS4570Columns}. PCK_MRK1`)} />
          <Column field={' PCK_MRK2'} header={t(`${translationsForReportDPS4570Columns}. PCK_MRK2`)} />
          <Column field={' CUSTOMS_PROC'} header={t(`${translationsForReportDPS4570Columns}. CUSTOMS_PROC`)} />
          <Column field={' ITEM_GROSS_WEIGHT'} header={t(`${translationsForReportDPS4570Columns}. ITEM_GROSS_WEIGHT`)} />
          <Column field={' ITEM_NET_WEIGHT'} header={t(`${translationsForReportDPS4570Columns}. ITEM_NET_WEIGHT`)} />
          <Column field={' BROKER_TIN'} header={t(`${translationsForReportDPS4570Columns}. BROKER_TIN`)} />
          <Column field={' COMPANY_TIN'} header={t(`${translationsForReportDPS4570Columns}. COMPANY_TIN`)} />
          <Column field={' CMP_NAM'} header={t(`${translationsForReportDPS4570Columns}. CMP_NAM`)} />
          <Column field={' FIN_NAM'} header={t(`${translationsForReportDPS4570Columns}. FIN_NAM`)} />
          <Column field={' COUNTRY_DEST'} header={t(`${translationsForReportDPS4570Columns}. COUNTRY_DEST`)} />
          <Column field={' COUNTRY_DEST_COD'} header={t(`${translationsForReportDPS4570Columns}. COUNTRY_DEST_COD`)} />
          <Column field={' COUNTRY_EXPORT'} header={t(`${translationsForReportDPS4570Columns}. COUNTRY_EXPORT`)} />
          <Column field={' COUNTRY_ORG'} header={t(`${translationsForReportDPS4570Columns}. COUNTRY_ORG`)} />
          <Column field={' LORRY_TOTAL'} header={t(`${translationsForReportDPS4570Columns}. LORRY_TOTAL`)} />
          <Column field={' CURRENCY_RATE'} header={t(`${translationsForReportDPS4570Columns}. CURRENCY_RATE`)} />
          <Column field={' DECLARATION_VALUE_CURRENCY'} header={t(`${translationsForReportDPS4570Columns}. DECLARATION_VALUE_CURRENCY`)} />
          <Column field={' DECLARATION_VALUE_AFS'} header={t(`${translationsForReportDPS4570Columns}. DECLARATION_VALUE_AFS`)} />
          <Column field={' ITEM_VALUE_CURRENCY'} header={t(`${translationsForReportDPS4570Columns}. ITEM_VALUE_CURRENCY`)} />
          <Column field={' ITEM_VALUE_AFS'} header={t(`${translationsForReportDPS4570Columns}. ITEM_VALUE_AFS`)} />
          <Column field={' ITEM_TAXES'} header={t(`${translationsForReportDPS4570Columns}. ITEM_TAXES`)} />
          <Column field={' STATUS'} header={t(`${translationsForReportDPS4570Columns}. STATUS`)} />
          <Column field={' ENG_NBR'} header={t(`${translationsForReportDPS4570Columns}. ENG_NBR`)} />
          <Column field={' ENG_VIN'} header={t(`${translationsForReportDPS4570Columns}. ENG_VIN`)} />
          <Column field={' VH1_DSC'} header={t(`${translationsForReportDPS4570Columns}. VH1_DSC`)} />
          <Column field={' VH2_DSC'} header={t(`${translationsForReportDPS4570Columns}. VH2_DSC`)} />
        </DataTable>
      </ Box>
      <Toast ref={toastRef} />
    </SimpleCard>
  );
}

export default DPS_4570