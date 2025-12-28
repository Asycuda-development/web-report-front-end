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
const translationsForReportDPS4588: string = "reports.dps_4588"
const translationsForReportDPS4588Columns: string = "reports.dps_4588.columns"

function DPS_4588() {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);
  const { t } = useTranslation();

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true);
      const res = await axios.post('/reporting/DpsReport4588', {
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
    <SimpleCard title={t(`${translationsForReportDPS4588}.title`)}>
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
          exportFilename={`DPS_4588 ${new Date().toISOString()}`}
          ref={tableRef}
          value={reportData}
          rows={ROWS_PER_PAGE}
          rowsPerPageOptions={[3, 10, 25, 50, 100]}
          paginator
          stripedRows
          showGridlines
        >
          <Column filter filterField="ideCuonam" field={'ideCuonam'} header={t(`${translationsForReportDPS4588Columns}.ideCuonam`)} />
          <Column field={'ideRcpDat'} header={t(`${translationsForReportDPS4588Columns}.ideRcpDat`)} />
          <Column field={'ideRcpNbr'} header={t(`${translationsForReportDPS4588Columns}.ideRcpNbr`)} />
          <Column field={'serPrt'} header={t(`${translationsForReportDPS4588Columns}.serPrt`)} />
          <Column filter filterField="username" field={'username'} header={t(`${translationsForReportDPS4588Columns}.username`)} />
          <Column field={'fullName'} header={t(`${translationsForReportDPS4588Columns}.fullName`)} />
          <Column filter filterField="opName" field={'opName'} header={t(`${translationsForReportDPS4588Columns}.opName`)} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
}

export default DPS_4588;
