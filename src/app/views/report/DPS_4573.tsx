import { Box, LinearProgress } from '@mui/material';
import axios from 'axios';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Toast } from 'primereact/toast';
import { useRef, useState } from 'react';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
import { SimpleCard } from '../../components';
import { ROWS_PER_PAGE } from '../../utils/constant';
import { useTranslation } from 'react-i18next';

const translationsForBasedOnError: string = "errors"
const translationsForBasedOn: string = "basedOn"
const translationsForReportDPS4573: string = "reports.dps_4573"
const translationsForReportDPS4573Columns: string = "reports.dps_4573.columns"

function DPS_4573() {
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
      const res = await axios.post('/reporting/DpsReport4573', {
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
  },
  {
    label: t(`${translationsForBasedOn}.company`),
    name: 'company'
  },
  {
    label: t(`${translationsForBasedOn}.manifest`),
    name: 'manifest'
  },
  {
    label: t(`${translationsForBasedOn}.i_no`),
    name: 'I_no'
  },
  {
    label: t(`${translationsForBasedOn}.warehouse`),
    name: 'Warehouse'
  }]
  return (
    <SimpleCard title={t(`${translationsForReportDPS4573}.title`)}>
      <ReportHeaderInputs
        showStartDate
        showEndDate
        showCustomsList
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
          ref={tableRef}
          exportFilename={`DPS_4573 ${new Date().toISOString()}`}
          value={reportData}
          rows={ROWS_PER_PAGE}
          rowsPerPageOptions={[3, 10, 25, 50, 100]}
          paginator
          stripedRows
          showGridlines
        >
          <Column field={'ideaYea'} header={t(`${translationsForReportDPS4573Columns}.ideaYea`)} />

          <Column filter filterField="ideNbr" field={'ideNbr'} header={t(`${translationsForReportDPS4573Columns}.ideNbr`)} />
          <Column field={'ideCuo'} header={t(`${translationsForReportDPS4573Columns}.ideCuo`)} />
          <Column field={'ideCuoNam'} header={t(`${translationsForReportDPS4573Columns}.ideCuoNam`)} />
          <Column field={'shdCod'} header={t(`${translationsForReportDPS4573Columns}.shdCod`)} />
          <Column field={'shdNam'} header={t(`${translationsForReportDPS4573Columns}.shdNam`)} />
          <Column filter filterField="cmpCod" field={'cmpCod'} header={t(`${translationsForReportDPS4573Columns}.cmpCod`)} />
          <Column field={'cmpNam'} header={t(`${translationsForReportDPS4573Columns}.cmpNam`)} />
          <Column filter filterField="decCod" field={'decCod'} header={t(`${translationsForReportDPS4573Columns}.decCod`)} />
          <Column field={'decNam'} header={t(`${translationsForReportDPS4573Columns}.decNam`)} />
          <Column field={'valUsr'} header={t(`${translationsForReportDPS4573Columns}.valUsr`)} />
          <Column field={'extUsr'} header={t(`${translationsForReportDPS4573Columns}.extUsr`)} />
          <Column field={'extPlc'} header={t(`${translationsForReportDPS4573Columns}.extPlc`)} />
          <Column field={'extDat'} header={t(`${translationsForReportDPS4573Columns}.extDat`)} />
          <Column field={'sadItm'} header={t(`${translationsForReportDPS4573Columns}.sadItm`)} />
          <Column filter filterField="sadRegNbr" field={'sadRegNbr'} header={t(`${translationsForReportDPS4573Columns}.sadRegNbr`)} />
          <Column field={'sadRegSer'} header={t(`${translationsForReportDPS4573Columns}.sadRegSer`)} />
          <Column field={'sadAssAll'} header={t(`${translationsForReportDPS4573Columns}.sadAssAll`)} />
          <Column field={'sadPckMk1'} header={t(`${translationsForReportDPS4573Columns}.sadPckMk1`)} />
          <Column field={'sadPckMk2s'} header={t(`${translationsForReportDPS4573Columns}.sadPckMk2s`)} />
          <Column field={'sadPackNbr'} header={t(`${translationsForReportDPS4573Columns}.sadPackNbr`)} />
          <Column field={'sadWgtGrs'} header={t(`${translationsForReportDPS4573Columns}.sadWgtGrs`)} />
          <Column field={'sadPckExtNbr'} header={t(`${translationsForReportDPS4573Columns}.sadPckExtNbr`)} />
          <Column field={'sadPckExtWgt'} header={t(`${translationsForReportDPS4573Columns}.sadPckExtWgt`)} />
          <Column filter filterField="manRef" field={'manRef'} header={t(`${translationsForReportDPS4573Columns}.manRef`)} />
          <Column field={'serPrt'} header={t(`${translationsForReportDPS4573Columns}.serPrt`)} />
        </DataTable>
      </Box>
      <Toast ref={toastRef} />
    </SimpleCard>
  );
}

export default DPS_4573;
