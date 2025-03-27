import { SimpleCard } from '../../components';
import { Box, styled, LinearProgress } from '@mui/material';
import { useEffect, useState, useRef } from 'react';
import { ROWS_PER_PAGE } from '../../utils/constant';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';

const Selectivity_4360 = () => {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true);
      const res = await axios.post('/reporting/SelectivityReport4360', {
        startDate: data.startDate,
        endDate: data.endDate,
        customsCode: data.CustomsCode,
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
    <SimpleCard title="Selectivity Report 4360">
      <ReportHeaderInputs
        showStartDate
        showEndDate
        showUserDate
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
          rowsPerPageOptions={[3, 10, 25, 50, 100]}
          paginator
          stripedRows
          showGridlines
        >
          <Column field={'uname'} header={'uname'} />
          <Column field={'udate'} header={'udate'} />
          <Column field={'cust_id'} header={'cust_id'} />
          <Column field={'city'} header={'city'} />
          <Column field={'phone'} header={'phone'} />
          <Column field={'job'} header={'job'} />
          <Column field={'fname'} header={'fname'} />
          <Column field={'cust_acc'} header={'cust_acc'} />
          <Column field={'prop_val'} header={'prop_val'} />
          <Column field={'active'} header={'active'} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
};

export default Selectivity_4360;
