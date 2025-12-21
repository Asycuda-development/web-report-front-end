import { Box, LinearProgress } from '@mui/material';
import axios from 'axios';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { useRef, useState } from 'react';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
import { SimpleCard } from '../../components';
import { ROWS_PER_PAGE } from '../../utils/constant';
import { useTranslation } from 'react-i18next';

const translationsForBasedOnError: string = "errors"
const translationsForBasedOn: string = "basedOn"
const translationsForReportDPS4583: string = "reports.dps_4583"
const translationsForReportDPS4583Columns: string = "reports.dps_4583.columns"

function DPS_4583() {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false);
  const tableRef: any = useRef(null);
  const { t } = useTranslation();

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true);
      const res = await axios.post('/reporting/DpsReport4583', {
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
    <SimpleCard title={t(`${translationsForReportDPS4583}.title`)}>
      <ReportHeaderInputs
        showStartDate
        showEndDate
        showStatus
        ShowTinNumber
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
          <Column field={'cmpCod'} header={t(`${translationsForReportDPS4583Columns}.cmpCod`)} />
          <Column field={'cmpNam'} header={t(`${translationsForReportDPS4583Columns}.cmpNam`)} />
          <Column field={'cmpAdr'} header={t(`${translationsForReportDPS4583Columns}.cmpAdr`)} />
          <Column field={'cmpAd2'} header={t(`${translationsForReportDPS4583Columns}.cmpAd2`)} />
          <Column field={'cmpAd3'} header={t(`${translationsForReportDPS4583Columns}.cmpAd3`)} />
          <Column field={'cmpAd4'} header={t(`${translationsForReportDPS4583Columns}.cmpAd4`)} />
          <Column field={'cmpTel'} header={t(`${translationsForReportDPS4583Columns}.cmpTel`)} />
          <Column field={'valid_F'} header={t(`${translationsForReportDPS4583Columns}.valid_F`)} />
          <Column field={'valid_To'} header={t(`${translationsForReportDPS4583Columns}.valid_To`)} />
          <Column field={' cmpSta'} header={t(`${translationsForReportDPS4583Columns}. cmpSta`)} />
        </DataTable>
      </ Box>
    </SimpleCard>
  );
}

export default DPS_4583