import { Box, LinearProgress, styled } from '@mui/material';
import axios from 'axios';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { useEffect, useRef, useState } from 'react';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
import { SimpleCard } from '../../components';
import { ROWS_PER_PAGE } from '../../utils/constant';

const Revenue_48101 = () => {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true)
      const res = await axios.post('/reporting/RevenueReport48101', {
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
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <SimpleCard title="Revenue Report 48101">
      <ReportHeaderInputs
        showStartDate
        showEndDate
        showCustomsList
        showDepartureDate
        showRegDate
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
          <Column field={'cuonam'} header={'CUONAM '} />
          <Column field={'curcod'} header={'CURCOD'} />
          <Column field={'curdsc'} header={'CURDSC'} />
          <Column field={'amtval'} header={'AMTVAL'} />
          <Column field={'arrnam'} header={'ARRNAM'} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
};

export default Revenue_48101;
