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
const translationsForReportDPS45103: string = "reports.dps_45103"
const translationsForReportDPS45103Columns: string = "reports.dps_45103.columns"

function DPS_45103() {
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
          detail:t(`${translationsForBasedOnError}.basedOnDetailedError`)
        });
        return
      }
      setLoading(true);
      const res = await axios.post('/reporting/DpsReport45103', {
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
    label: t(`${translationsForBasedOn}.declarant`),
    name: 'declarant'
  }, {
    label: t(`${translationsForBasedOn}.company`),
    name: 'company'
  }, {
    label: t(`${translationsForBasedOn}.sad_Financial`),
    name: 'Sad_Financial'

  }, {
    label: t(`${translationsForBasedOn}.i_no`),
    name: 'I_no'

  }, {
    label: t(`${translationsForBasedOn}.p_no`),
    name: 'P_no'

  }, {
    label: t(`${translationsForBasedOn}.m_no`),
    name: 'M_no'

  }]

  return (
    <SimpleCard title={t(`${translationsForReportDPS45103}.title`)}>
      <ReportHeaderInputs
        showStartDate
        showEndDate
        ShowTinNumber
        showExemptionType
        showCustomsProcedure
        showTaxCode
        showBasedOn
        basedOnOptions={basedOnOptions}
        showRegDate
        showAssesDate
        showPayDate
        showHsCode
        showCustomsList
        onSearch={handleSubmit}
        tabelRef={tableRef}
      />
      {loading && (
        <LinearProgress />
      )}
      <Box width="100%" overflow="auto">
        <DataTable
          exportFilename={`DPS_45103 ${new Date().toISOString()}`}
          ref={tableRef}
          value={reportData}
          rows={ROWS_PER_PAGE}
          rowsPerPageOptions={[5, 10, 25, 50, 100]}
          paginator
          stripedRows
          showGridlines
          emptyMessage={'No Data Available'}
        >
          <Column field={'DestCustoms'} header={t(`${translationsForReportDPS45103Columns}.DestCustoms`)} />
          <Column field={'TypeSad'} header={t(`${translationsForReportDPS45103Columns}.TypeSad`)} />
          <Column field={'PayDate'} header={t(`${translationsForReportDPS45103Columns}.PayDate`)} />
          <Column field={'ProcExt'} header={t(`${translationsForReportDPS45103Columns}.ProcExt`)} />
          <Column field={'CustomsProc'} header={t(`${translationsForReportDPS45103Columns}.CustomsProc`)} />
          <Column field={'Dsc2'} header={t(`${translationsForReportDPS45103Columns}.Dsc2`)} />
          <Column style={{ minWidth: "25rem" }} field={'Dsc1'} header={t(`${translationsForReportDPS45103Columns}.Dsc1`)} />
          <Column field={'HsCode'} header={t(`${translationsForReportDPS45103Columns}.HsCode`)} />
          <Column field={'ItemNetWeight'} header={t(`${translationsForReportDPS45103Columns}.ItemNetWeight`)} />
          <Column field={'CompanyTIN'} header={t(`${translationsForReportDPS45103Columns}.CompanyTIN`)} />
          <Column field={'CmpName'} header={t(`${translationsForReportDPS45103Columns}.CmpName`)} />
          <Column field={'ItemValueCurrency'} header={t(`${translationsForReportDPS45103Columns}.ItemValueCurrency`)} />
          <Column field={'ItemValueAfs'} header={t(`${translationsForReportDPS45103Columns}.ItemValueAfs`)} />
          <Column field={'ItemTaxes'} header={t(`${translationsForReportDPS45103Columns}.ItemTaxes`)} />
          <Column field={'TaxRate'} header={t(`${translationsForReportDPS45103Columns}.TaxRate`)} />
          <Column field={'CodeTaxAmount'} header={t(`${translationsForReportDPS45103Columns}.CodeTaxAmount`)} />
          <Column field={'TaxCode'} header={t(`${translationsForReportDPS45103Columns}.TaxCode`)} />
          <Column field={'IdeCuoCod'} header={t(`${translationsForReportDPS45103Columns}.IdeCuoCod`)} />
          <Column style={{ minWidth: "30rem" }} field={'mark1'} header={t(`${translationsForReportDPS45103Columns}.mark1`)} />
          <Column field={'mark2'} header={t(`${translationsForReportDPS45103Columns}.mark2`)} />
          <Column field={'TaxDecription'} header={t(`${translationsForReportDPS45103Columns}.TaxDecription`)} />
        </DataTable>
      </ Box>
      <Toast ref={toastRef} />
    </SimpleCard>
  );
}

export default DPS_45103