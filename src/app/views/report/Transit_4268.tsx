import { Box, LinearProgress } from '@mui/material';
import axios from 'axios';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { useEffect, useRef, useState } from 'react';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
import { SimpleCard } from '../../components';
import { ROWS_PER_PAGE } from '../../utils/constant';

const Transit_4268 = () => {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);

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
    <SimpleCard title="Transit Report 4268">
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
          ref={tableRef}
          value={reportData}
          rows={ROWS_PER_PAGE}
          rowsPerPageOptions={[5, 10, 25, 50, 100]}
          paginator
          stripedRows
          showGridlines
        >
          <Column field={'countNo'} header={'countNo '} />
          <Column field={'exemp'} header={'exemp'} />
          <Column field={'ctyExp'} header={'ctyExp'} />
          <Column field={'trsType'} header={'trsType'} />
          <Column field={'depCod'} header={'depCod'} />
          <Column field={'destCod'} header={'destCod'} />
          {/* <Column field={'tad_tot'} header={'Customs Value'} /> */}
        </DataTable>
      </Box>
    </SimpleCard>
  );
};

export default Transit_4268;
