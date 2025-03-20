import { SimpleCard } from '../../components';
import { Box, LinearProgress } from '@mui/material';
import { useState, useRef } from 'react';
import { ROWS_PER_PAGE } from '../../utils/constant';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';


function DataExchange_5051() {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false);
  const tableRef: any = useRef(null);

  const handleSubmit = async (data: SearchData) => {
    console.log(data);
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
    <SimpleCard title="DataExchange5051">
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
          <Column field={'HS_CODE'} header={'HS_CODE'} />
          <Column field={'WeightIRN'} header={'WeightIRN'} />
          <Column field={'AFWGT'} header={'AFWGT'} />
          <Column field={'difference_wght'} header={'difference_wght'} />
          <Column field={'Weight'} header={'Weight'} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
}

export default DataExchange_5051;
