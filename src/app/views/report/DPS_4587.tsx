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
const translationsForReportDPS4587: string = "reports.dps_4587"
const translationsForReportDPS4587Columns: string = "reports.dps_4587.columns"

function DPS_4587() {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);
  const { t } = useTranslation();

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true);
      const res = await axios.post('/reporting/DpsReport4587', {
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
    <SimpleCard title={t(`${translationsForReportDPS4587}.title`)}>
      <ReportHeaderInputs
        showUserName
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
          rowsPerPageOptions={[3, 10, 25, 50, 100]}
          paginator
          stripedRows
          showGridlines
        >
          <Column field={'userName'} header={t(`${translationsForReportDPS4587Columns}.userName`)} />
          <Column field={'CustomerId'} header={t(`${translationsForReportDPS4587Columns}.CustomerId`)} />
          <Column field={'CustomerName'} header={t(`${translationsForReportDPS4587Columns}.CustomerName`)} />
          <Column field={'Address'} header={t(`${translationsForReportDPS4587Columns}.Address`)} />
          <Column field={'Job'} header={t(`${translationsForReportDPS4587Columns}.Job`)} />
          <Column field={'FullName'} header={t(`${translationsForReportDPS4587Columns}.FullName`)} />
          <Column field={'Status'} header={t(`${translationsForReportDPS4587Columns}.Status`)} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
}

export default DPS_4587;
