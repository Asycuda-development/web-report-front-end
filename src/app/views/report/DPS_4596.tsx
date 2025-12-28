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
const translationsForReportDPS4596: string = "reports.dps_4596"
const translationsForReportDPS4596Columns: string = "reports.dps_4596.columns"

function DPS_4596() {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);
  const { t } = useTranslation();

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true);
      const res = await axios.post('/reporting/DpsReport4596', {
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
    <SimpleCard title={t(`${translationsForReportDPS4596}.title`)}>
      <ReportHeaderInputs showStartDate showEndDate onSearch={handleSubmit} tabelRef={tableRef} />
      {loading && (
        <LinearProgress />
      )}
      <Box width="100%" overflow="auto">
        <DataTable
          exportFilename={`DPS_4596 ${new Date().toISOString()}`}
          ref={tableRef}
          value={reportData}
          rows={ROWS_PER_PAGE}
          rowsPerPageOptions={[3, 10, 25, 50, 100]}
          paginator
          stripedRows
          showGridlines
        >
          <Column field={'Hs6_cod'} header={t(`${translationsForReportDPS4596Columns}.Hs6_cod`)} />
          <Column field={'tar_pr1'} header={t(`${translationsForReportDPS4596Columns}.tar_pr1`)} />
          <Column field={'tar_pr2'} header={t(`${translationsForReportDPS4596Columns}.tar_pr2`)} />
          <Column field={'tar_pr3'} header={t(`${translationsForReportDPS4596Columns}.tar_pr3`)} />
          <Column field={'tar_pr4'} header={t(`${translationsForReportDPS4596Columns}.tar_pr4`)} />
          <Column field={'valid_from'} header={t(`${translationsForReportDPS4596Columns}.valid_from`)} />
          <Column field={'valid_to'} header={t(`${translationsForReportDPS4596Columns}.valid_to`)} />
          <Column field={'tar_all'} header={t(`${translationsForReportDPS4596Columns}.tar_all`)} />
          <Column field={'tar_dsc'} header={t(`${translationsForReportDPS4596Columns}.tar_dsc`)} />
          <Column field={'tar_t01'} header={t(`${translationsForReportDPS4596Columns}.tar_t01`)} />
          <Column field={'tar_t02'} header={t(`${translationsForReportDPS4596Columns}.tar_t02`)} />
          <Column field={'user_name'} header={t(`${translationsForReportDPS4596Columns}.user_name`)} />
          <Column field={'operation_name'} header={t(`${translationsForReportDPS4596Columns}.operation_name`)} />
          <Column field={'operation_date'} header={t(`${translationsForReportDPS4596Columns}.operation_date`)} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
}

export default DPS_4596;
