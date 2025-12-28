import { SimpleCard } from '../../components';
import { Box, styled, LinearProgress } from '@mui/material';
import { useEffect, useState, useRef } from 'react';
import { ROWS_PER_PAGE } from '../../utils/constant';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
import { Toast } from 'primereact/toast';
import { useTranslation } from 'react-i18next';

const translationsForBasedOnError: string = "errors"
const translationsForBasedOn: string = "basedOn"
const translationsForReportDPS4575: string = "reports.dps_4575"
const translationsForReportDPS4575Columns: string = "reports.dps_4575.columns"

function DPS_4575() {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
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
      const res = await axios.post('/reporting/DpsReport4575', {
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
    label: t(`${translationsForBasedOn}.engine`),
    name: 'Engine'
  },
  {
    label: t(`${translationsForBasedOn}.vIN`),
    name: 'VIN'
  }]
  return (
    <SimpleCard title={t(`${translationsForReportDPS4575}.title`)}>
      <ReportHeaderInputs
        report='DPS_4575'
        showStartDate
        showEndDate
        showExemptionType
        showCustomsProcedure
        showRegDate
        showAssesDate
        showPayDate
        showBasedOn
        basedOnOptions={basedOnOptions}
        onSearch={handleSubmit}
        tabelRef={tableRef}
      />
      {loading && (
        <LinearProgress />
      )}
      <Box width="100%" overflow="auto">
        <DataTable
          exportFilename={`DPS_4575 ${new Date().toISOString()}`}
          ref={tableRef}
          value={reportData}
          rows={ROWS_PER_PAGE}
          rowsPerPageOptions={[3, 10, 25, 50, 100]}
          paginator
          stripedRows
          showGridlines
        >
          <Column field={'status'} header={t(`${translationsForReportDPS4575Columns}.status`)} />
          <Column field={'borderCuo'} header={t(`${translationsForReportDPS4575Columns}.borderCuo`)} />
          <Column field={'destCuo'} header={t(`${translationsForReportDPS4575Columns}.destCuo`)} />
          <Column field={'decCod'} header={t(`${translationsForReportDPS4575Columns}.decCod`)} />
          <Column field={'decNam1'} header={t(`${translationsForReportDPS4575Columns}.decNam1`)} />
          <Column field={'refNo'} header={t(`${translationsForReportDPS4575Columns}.refNo`)} />
          <Column field={'regNo'} header={t(`${translationsForReportDPS4575Columns}.regNo`)} />
          <Column field={'regDate'} header={t(`${translationsForReportDPS4575Columns}.regDate`)} />
          <Column field={'hscode'} header={t(`${translationsForReportDPS4575Columns}.hscode`)} />
          <Column field={'mark1'} header={t(`${translationsForReportDPS4575Columns}.mark1`)} />
          <Column field={'mark2'} header={t(`${translationsForReportDPS4575Columns}.mark2`)} />
          <Column field={'decNam'} header={t(`${translationsForReportDPS4575Columns}.decNam`)} />
          <Column field={'companyTin'} header={t(`${translationsForReportDPS4575Columns}.companyTin`)} />
          <Column field={'cmpNam'} header={t(`${translationsForReportDPS4575Columns}.cmpNam`)} />
          <Column field={'finNam'} header={t(`${translationsForReportDPS4575Columns}.finNam`)} />
          <Column field={'model'} header={t(`${translationsForReportDPS4575Columns}.model`)} />
          <Column field={'color'} header={t(`${translationsForReportDPS4575Columns}.color`)} />
          <Column field={'gaz'} header={t(`${translationsForReportDPS4575Columns}.gaz`)} />
          <Column field={'passenger'} header={t(`${translationsForReportDPS4575Columns}.passenger`)} />
          <Column field={'engNo'} header={t(`${translationsForReportDPS4575Columns}.engNo`)} />
          <Column field={'shasi'} header={t(`${translationsForReportDPS4575Columns}.shasi`)} />
          <Column field={'doors'} header={t(`${translationsForReportDPS4575Columns}.doors`)} />
          <Column field={'valueAfs'} header={t(`${translationsForReportDPS4575Columns}.valueAfs`)} />
          <Column field={'revenueTaxes'} header={t(`${translationsForReportDPS4575Columns}.revenueTaxes`)} />
          <Column field={'rcptNumber'} header={t(`${translationsForReportDPS4575Columns}.rcptNumber`)} />
          <Column field={'rcptDate'} header={t(`${translationsForReportDPS4575Columns}.rcptDate`)} />
          <Column field={'rgdat'} header={t(`${translationsForReportDPS4575Columns}.rgdat`)} />
          <Column field={'finName'} header={t(`${translationsForReportDPS4575Columns}.finName`)} />
          <Column field={'silandr'} header={t(`${translationsForReportDPS4575Columns}.silandr`)} />
        </DataTable>
      </Box>
      <Toast ref={toastRef} />
    </SimpleCard>
  );
}

export default DPS_4575;
