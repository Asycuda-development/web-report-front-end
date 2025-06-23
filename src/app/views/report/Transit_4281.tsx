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
const translationsForReportTransit4281: string = "reports.transit_4281"
const translationsForReportTransit4281Columns: string = "reports.transit_4281.columns"

const Transit_4281 = () => {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);
  const { t } = useTranslation();

  useEffect(() => { }, []);

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true)
      const res = await axios.post('/reporting/TransitReport4281', {
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
    } catch (error) { }
    finally {
      setLoading(false);
    }
  };

  return (
    <SimpleCard title={t(`${translationsForReportTransit4281}.title`)}>
      <ReportHeaderInputs
        showStartDate
        showEndDate
        showCustomsList
        showRegDate
        showfarwarCode
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
        >
          <Column field={'Dep_Office_Name'} header={t(`${translationsForReportTransit4281Columns}.Dep_Office_Name`)} />
          <Column field={'Dest_Office_Name'} header={t(`${translationsForReportTransit4281Columns}.Dest_Office_Name`)} />
          <Column field={'Forwarder_code'} header={t(`${translationsForReportTransit4281Columns}.Forwarder_code`)} />
          <Column field={'Forwarder_name'} header={t(`${translationsForReportTransit4281Columns}.Forwarder_name`)} />
          <Column field={'Number_of_T1s'} header={t(`${translationsForReportTransit4281Columns}.Number_of_T1s`)} />
          <Column field={'status'} header={t(`${translationsForReportTransit4281Columns}.status`)} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
};

export default Transit_4281;
