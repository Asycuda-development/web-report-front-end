import { SimpleCard } from '../../components';
import { Box, styled, LinearProgress } from '@mui/material';
import { useEffect, useState, useRef } from 'react';
import { ROWS_PER_PAGE } from '../../utils/constant';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';

function DPS_4589() {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true);
      const res = await axios.post('/reporting/DpsReport4589', {
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
    <SimpleCard title="DPS_4589">
      <ReportHeaderInputs
        showserPrt
        showCustomsList
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
          <Column filter filterField="Office" field={'Office'} header={'Office'} />
          <Column field={'NUMBERPLATE'} header={'NUMBERPLATE'} />
          <Column field={'GROSSWEIGHT'} header={'GROSSWEIGHT'} />
          <Column field={'emptyweight'} header={'emptyweight'} />
          <Column filter filterField="NETWEIGHT" field={'NETWEIGHT'} header={'NETWEIGHT'} />
          <Column field={'NUMBERPLATE2'} header={'NUMBERPLATE2'} />
          <Column filter filterField="ds_date" field={'ds_date'} header={'ds_date'} />

          <Column
            filter
            filterField="ds_date_dari"
            field={'ds_date_dari'}
            header={'ds_date_dari'}
          />
          <Column filter filterField="DS_ID" field={'DS_ID'} header={'DS_ID'} />
          <Column filter filterField="tin" field={'tin'} header={'tin'} />
          <Column filter filterField="loguser" field={'loguser'} header={'loguser'} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
}

export default DPS_4589;
