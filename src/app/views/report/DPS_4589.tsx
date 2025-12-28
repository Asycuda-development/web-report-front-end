import { SimpleCard } from '../../components';
import { Box, styled, LinearProgress } from '@mui/material';
import { useEffect, useState, useRef } from 'react';
import { ROWS_PER_PAGE } from '../../utils/constant';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
import { useTranslation } from 'react-i18next';

const translationsForBasedOnError: string = "errors"
const translationsForBasedOn: string = "basedOn"
const translationsForReportDPS4589: string = "reports.dps_4589"
const translationsForReportDPS4589Columns: string = "reports.dps_4589.columns"

function DPS_4589() {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);
  const { t } = useTranslation();

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true);
      const res = await axios.post('/reporting/DpsReport4589', {
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
    <SimpleCard title={t(`${translationsForReportDPS4589}.title`)}>
      <ReportHeaderInputs
        showserPrt
        showCustomsList
        onSearch={handleSubmit}
        tabelRef={tableRef}
      />
      {loading && (
        <LinearProgress />
      )}
      <Box width="100%" overflow="auto">
        <DataTable
          exportFilename={`DPS_4589 ${new Date().toISOString()}`}
          ref={tableRef}
          value={reportData}
          rows={ROWS_PER_PAGE}
          rowsPerPageOptions={[3, 10, 25, 50, 100]}
          paginator
          stripedRows
          showGridlines
        >
          <Column filter filterField="Office" field={'Office'} header={t(`${translationsForReportDPS4589Columns}.Office`)} />
          <Column field={'NUMBERPLATE'} header={t(`${translationsForReportDPS4589Columns}.NUMBERPLATE`)} />
          <Column field={'GROSSWEIGHT'} header={t(`${translationsForReportDPS4589Columns}.GROSSWEIGHT`)} />
          <Column field={'emptyweight'} header={t(`${translationsForReportDPS4589Columns}.emptyweight`)} />
          <Column filter filterField="NETWEIGHT" field={'NETWEIGHT'} header={t(`${translationsForReportDPS4589Columns}.NETWEIGHT`)} />
          <Column field={'NUMBERPLATE2'} header={t(`${translationsForReportDPS4589Columns}.NUMBERPLATE2`)} />
          <Column filter filterField="ds_date" field={'ds_date'} header={t(`${translationsForReportDPS4589Columns}.ds_date`)} />

          <Column
            filter
            filterField="ds_date_dari"
            field={'ds_date_dari'}
            header={t(`${translationsForReportDPS4589Columns}.ds_date_dari`)}
          />
          <Column filter filterField="DS_ID" field={'DS_ID'} header={t(`${translationsForReportDPS4589Columns}.DS_ID`)} />
          <Column filter filterField="tin" field={'tin'} header={t(`${translationsForReportDPS4589Columns}.tin`)} />
          <Column filter filterField="loguser" field={'loguser'} header={t(`${translationsForReportDPS4589Columns}.loguser`)} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
}

export default DPS_4589;
