import { Box, LinearProgress } from '@mui/material';
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
const translationsForReportTransit4268: string = "reports.transit_4268"
const translationsForReportTransit4268Columns: string = "reports.transit_4268.columns"

const Transit_4268 = () => {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);
  const { t } = useTranslation();

  useEffect(() => { }, []);

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true)
      const res = await axios.post('/reporting/TransitReport4268', {
        startDate: data.startDate,
        endDate: data.endDate,
        customsCode: data.CustomsCode,
        type: data.customsProcedure,
        ...data
      });
      if (res.data.length === 0) {
        setReportData([]);
      } else {
        setReportData(res.data);
      }
      setReportData(res.data);
    } catch (error) { }
    finally {
      setLoading(false);
    }
  };

  return (
    <SimpleCard title={t(`${translationsForReportTransit4268}.title`)}>
      <ReportHeaderInputs
        showStartDate
        showEndDate
        showCustomsList
        showDestinationCustomsList
        showRegDate
        showTransitType2
        onSearch={handleSubmit}
        tabelRef={tableRef}
      />
      {loading && (
        <LinearProgress />
      )}
      <Box width="100%" overflow="auto">
        <DataTable
          exportFilename={`Transit Report 4268 ${new Date().toISOString()}`}
          ref={tableRef}
          value={reportData}
          rows={ROWS_PER_PAGE}
          rowsPerPageOptions={[5, 10, 25, 50, 100]}
          paginator
          stripedRows
          showGridlines
        >
          <Column field={'trsType'} header={t(`${translationsForReportTransit4268Columns}.trsType`)} />
          <Column field={'ctyExp'} header={t(`${translationsForReportTransit4268Columns}.ctyExp`)} />
          <Column field={'depCod'} header={t(`${translationsForReportTransit4268Columns}.depCod`)} />
          <Column field={'destCod'} header={t(`${translationsForReportTransit4268Columns}.destCod`)} />
          <Column field={'exemp'} header={t(`${translationsForReportTransit4268Columns}.exemp`)} />
          <Column field={'countNo'} header={t(`${translationsForReportTransit4268Columns}.countNo`)} />
          {/* <Column field={'tad_tot'} header={t(`${translationsForReportTransit4268Columns}.tad_tot`)} /> */}
        </DataTable>
      </Box>
    </SimpleCard>
  );
};

export default Transit_4268;
