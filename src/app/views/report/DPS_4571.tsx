import { Box, LinearProgress, styled } from '@mui/material';
import axios from 'axios';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { useEffect, useRef, useState } from 'react';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
import { SimpleCard } from '../../components';
import { ROWS_PER_PAGE } from '../../utils/constant';
import { useTranslation } from 'react-i18next';

const translationsForBasedOnError: string = "errors"
const translationsForBasedOn: string = "basedOn"
const translationsForReportDPS4571: string = "reports.dps_4571"
const translationsForReportDPS4571Columns: string = "reports.dps_4571.columns"

function DPS_4571() {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);
  const { t } = useTranslation();

  useEffect(() => { }, []);

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true)
      const res = await axios.post('/reporting/DpsReport4571', {
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
    <SimpleCard title={t(`${translationsForReportDPS4571}.title`)}>
      <ReportHeaderInputs
        report='DPS_4571'
        showStartDate
        showEndDate
        showCustomsProcedure
        showCustomsList
        onSearch={handleSubmit}
        tabelRef={tableRef}
      />
      {loading && (
        <LinearProgress />
      )}
      <Box width="100%" overflow="auto">
        <DataTable
          exportFilename={`DPS_4571 ${new Date().toISOString()}`}
          ref={tableRef}
          value={reportData}
          rows={ROWS_PER_PAGE}
          rowsPerPageOptions={[5, 10, 25, 50, 100]}
          paginator
          stripedRows
          showGridlines
        >
          <Column field={'OFFICE'} header={t(`${translationsForReportDPS4571Columns}.OFFICE`)} />
          <Column field={'SAD_FLW'} header={t(`${translationsForReportDPS4571Columns}.SAD_FLW`)} />
          <Column field={'SAD_NO'} header={t(`${translationsForReportDPS4571Columns}.SAD_NO`)} />
          <Column field={'SAD_DATE'} header={t(`${translationsForReportDPS4571Columns}.SAD_DATE`)} />
          <Column field={'CMP_COD'} header={t(`${translationsForReportDPS4571Columns}.CMP_COD`)} />
          <Column field={'CMP_NAM'} header={t(`${translationsForReportDPS4571Columns}.CMP_NAM`)} />
          <Column field={'CNT'} header={t(`${translationsForReportDPS4571Columns}.CNT`)} />


        </DataTable>
      </Box>
    </SimpleCard>
  );
}

export default DPS_4571;
