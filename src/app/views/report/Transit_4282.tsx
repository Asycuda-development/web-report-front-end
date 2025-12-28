import { SimpleCard } from '../../components';
import { Box, LinearProgress } from '@mui/material';
import { useState, useRef } from 'react';
import { ROWS_PER_PAGE } from '../../utils/constant';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
import { useTranslation } from 'react-i18next';

const translationsForBasedOnError: string = "errors"
const translationsForBasedOn: string = "basedOn"
const translationsForReportTransit4282: string = "reports.transit_4282"
const translationsForReportTransit4282Columns: string = "reports.transit_4282.columns"

const Transit_4282 = () => {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);
  const { t } = useTranslation();

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true);
      const res = await axios.post('/reporting/TransitReport4282', {
        type: data.customsProcedure,
        customsCode: data.CustomsCode,
        ...data
      });
      console.log(res);
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
    <SimpleCard title={t(`${translationsForReportTransit4282}.title`)}>
      <ReportHeaderInputs
        report='Transit_4282'
        showStartDate
        showEndDate
        showTransitType
        showDestinationCustomsList
        onSearch={handleSubmit}
        tabelRef={tableRef}
      />
      {loading && (
        <LinearProgress />
      )}
      <Box width="100%" overflow="auto">
        <DataTable
          exportFilename={`Transit Report 4282 ${new Date().toISOString()}`}
          ref={tableRef}
          value={reportData}
          rows={ROWS_PER_PAGE}
          rowsPerPageOptions={[5, 10, 25, 50, 100]}
          paginator
          stripedRows
          showGridlines
        >
          <Column field={'transit_type'} header={t(`${translationsForReportTransit4282Columns}.transit_type`)} />
          <Column field={'BCP'} header={t(`${translationsForReportTransit4282Columns}.BCP`)} />
          <Column field={'ICD'} header={t(`${translationsForReportTransit4282Columns}.ICD`)} />
          <Column field={'Country_Export'} header={t(`${translationsForReportTransit4282Columns}.Country_Export`)} />
          <Column field={'Country_Dest'} header={t(`${translationsForReportTransit4282Columns}.Country_Dest`)} />
          <Column field={'HS_code'} header={t(`${translationsForReportTransit4282Columns}.HS_code`)} />
          <Column field={'HS_Desc'} header={t(`${translationsForReportTransit4282Columns}.HS_Desc`)} />
          <Column field={'Net_Mass'} header={t(`${translationsForReportTransit4282Columns}.Net_Mass`)} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
};

export default Transit_4282;
