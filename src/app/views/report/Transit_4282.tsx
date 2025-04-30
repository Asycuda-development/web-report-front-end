import { SimpleCard } from '../../components';
import { Box, LinearProgress } from '@mui/material';
import { useState, useRef } from 'react';
import { ROWS_PER_PAGE } from '../../utils/constant';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';

const Transit_4282 = () => {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);

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
    <SimpleCard title="Transit Report 4282">
      <ReportHeaderInputs
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
          ref={tableRef}
          value={reportData}
          rows={ROWS_PER_PAGE}
          rowsPerPageOptions={[5, 10, 25, 50, 100]}
          paginator
          stripedRows
          showGridlines
        >
          <Column field={'transit_type'} header={'Transit Type'} />
          <Column field={'BCP'} header={'BCP'} />
          <Column field={'ICD'} header={'ICD'} />
          <Column field={'Country_Export'} header={'Country_Export'} />
          <Column field={'Country_Dest'} header={'Country_Dest'} />
          <Column field={'HS_code'} header={'HS_code'} />
          <Column field={'HS_Desc'} header={'HS_Desc'} />
          <Column field={'Net_Mass'} header={'Net Weight'} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
};

export default Transit_4282;
