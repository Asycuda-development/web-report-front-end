import { Box, LinearProgress, styled } from '@mui/material';
import axios from 'axios';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { useEffect, useRef, useState } from 'react';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
import { SimpleCard } from '../../components';
import { ROWS_PER_PAGE } from '../../utils/constant';

const Transit_4277 = () => {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true)
      const res = await axios.post('/reporting/TransitReport4277', {
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
    <SimpleCard title="Transit Report 4277">
      <ReportHeaderInputs
        showStartDate
        showEndDate
        showCustomsList
        showRegDate
        showNumPalate
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
          <Column field={'locationid'} header={'locationid '} />
          <Column field={'NUMBERPLATE'} header={'NUMBERPLATE'} />
          <Column field={'GROSSWEIGHT'} header={'GROSSWEIGHT'} />
          <Column field={'emptyweight'} header={'emptyweight'} />
          <Column field={'NETWEIGHT'} header={'NETWEIGHT'} />
          <Column field={'NUMBERPLATE2'} header={'NUMBERPLATE2'} />
          <Column field={'dsdate'} header={'dsdate'} />
          <Column field={'DSID'} header={'DSID'} />
          <Column field={'tin'} header={'tin'} />
          <Column field={'loguser'} header={'loguser'} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
};

export default Transit_4277;
