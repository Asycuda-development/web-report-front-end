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
const translationsForReportDataExchange5051: string = "reports.dataexchange_5051"
const translationsForReportDataExchange5051Columns: string = "reports.dataexchange_5051.columns"


function DataExchange_5051() {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false);
  const tableRef: any = useRef(null);
  const { t } = useTranslation();

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true);
      const res = await axios.post('/reporting/DataExchangeReport5051', {
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
    <SimpleCard title={t(`${translationsForReportDataExchange5051}.title`)}>
      <ReportHeaderInputs
        showStartDate
        showEndDate
        showDeclarationDate
        showHsCode
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
          <Column field={'HS_CODE'} header={t(`${translationsForReportDataExchange5051Columns}.HS_CODE`)} />
          <Column field={'WeightIRN'} header={t(`${translationsForReportDataExchange5051Columns}.WeightIRN`)} />
          <Column field={'AFWGT'} header={t(`${translationsForReportDataExchange5051Columns}.AFWGT`)} />
          <Column field={'difference_wght'} header={t(`${translationsForReportDataExchange5051Columns}.difference_wght`)} />
          <Column field={'Weight'} header={t(`${translationsForReportDataExchange5051Columns}.Weight`)} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
}

export default DataExchange_5051;
