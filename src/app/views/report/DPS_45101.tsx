import { SimpleCard } from '../../components';
import { Box, LinearProgress } from '@mui/material';
import { useState, useRef } from 'react';
import { ROWS_PER_PAGE } from '../../utils/constant';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
import { Toast } from 'primereact/toast';
import { useTranslation } from 'react-i18next';

const translationsForBasedOnError: string = "errors"
const translationsForBasedOn: string = "basedOn"
const translationsForReportDPS45101: string = "reports.dps_45101"
const translationsForReportDPS45101Columns: string = "reports.dps_45101.columns"

function DPS_45101() {
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
      const res = await axios.post('/reporting/DpsReport45101', {
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
  }, {
    label: t(`${translationsForBasedOn}.vIN_Number`),
    name: 'VIN'
  }]

  return (
    <SimpleCard title={t(`${translationsForReportDPS45101}.title`)}>
      <ReportHeaderInputs
        showStartDate
        showEndDate
        ShowTinNumber
        showExemptionType
        showCustomsProcedure
        showBasedOn
        basedOnOptions={basedOnOptions}
        showRegDate
        showAssesDate
        showPayDate
        showOperationDate
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
          <Column field={'status'} header={t(`${translationsForReportDPS45101Columns}.status`)} />
          <Column field={'borderCuo'} header={t(`${translationsForReportDPS45101Columns}.borderCuo`)} />
          <Column field={'destCuo'} header={t(`${translationsForReportDPS45101Columns}.destCuo`)} />
          <Column field={'decCod'} header={t(`${translationsForReportDPS45101Columns}.decCod`)} />
          <Column style={{ minWidth: "15rem" }} field={'decNam1'} header={t(`${translationsForReportDPS45101Columns}.decNam1`)} />
          <Column field={'refNo'} header={t(`${translationsForReportDPS45101Columns}.refNo`)} />
          <Column field={'RegNo'} header={t(`${translationsForReportDPS45101Columns}.RegNo`)} />
          <Column field={'RegDate'} header={t(`${translationsForReportDPS45101Columns}.RegDate`)} />
          <Column field={'hscode'} header={t(`${translationsForReportDPS45101Columns}.hscode`)} />
          <Column style={{ minWidth: "30rem" }} field={'mark1'} header={t(`${translationsForReportDPS45101Columns}.mark1`)} />
          <Column style={{ minWidth: "20rem" }} field={'mark2'} header={t(`${translationsForReportDPS45101Columns}.mark2`)} />
          <Column style={{ minWidth: "20rem" }} field={'decNam'} header={t(`${translationsForReportDPS45101Columns}.decNam`)} />
          <Column style={{ minWidth: "20rem" }} field={'CompanyTin'} header={t(`${translationsForReportDPS45101Columns}.CompanyTin`)} />
          <Column style={{ minWidth: "20rem" }} field={'cmpNam'} header={t(`${translationsForReportDPS45101Columns}.cmpNam`)} />
          <Column style={{ minWidth: "20rem" }} field={'finNam'} header={t(`${translationsForReportDPS45101Columns}.finNam`)} />
          <Column style={{ minWidth: "20rem" }} field={'model'} header={t(`${translationsForReportDPS45101Columns}.model`)} />
          <Column field={'engPow'} header={t(`${translationsForReportDPS45101Columns}.engPow`)} />
          <Column field={'color'} header={t(`${translationsForReportDPS45101Columns}.color`)} />
          <Column field={'engNo'} header={t(`${translationsForReportDPS45101Columns}.engNo`)} />
          <Column field={'shasi'} header={t(`${translationsForReportDPS45101Columns}.shasi`)} />
          <Column field={'RevenueTaxes'} header={t(`${translationsForReportDPS45101Columns}.RevenueTaxes`)} />
          <Column field={'RcptNumber'} header={t(`${translationsForReportDPS45101Columns}.RcptNumber`)} />
          <Column field={'RcptDate'} header={t(`${translationsForReportDPS45101Columns}.RcptDate`)} />
          <Column field={'rgdat'} header={t(`${translationsForReportDPS45101Columns}.rgdat`)} />
          <Column field={'ValueAfs'} header={t(`${translationsForReportDPS45101Columns}.ValueAfs`)} />
        </DataTable>
      </ Box>
      <Toast ref={toastRef} />
    </SimpleCard>
  );
}

export default DPS_45101