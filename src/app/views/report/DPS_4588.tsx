import { SimpleCard } from '../../components';
import { Box, styled, LinearProgress } from '@mui/material';
import { useEffect, useState, useRef } from 'react';
import { ROWS_PER_PAGE } from '../../utils/constant';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';

function DPS_4588() {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true);
      const res = await axios.post('/reporting/DpsReport4588', {
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
    <SimpleCard title="DPS_4588">
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
          <Column filter filterField="ideCuonam" field={'ideCuonam'} header={'ideCuonam'} />
          <Column field={'ideRcpDat'} header={'ideRcpDat'} />
          <Column field={'ideRcpNbr'} header={'ideRcpNbr'} />
          <Column field={'serPrt'} header={'serPrt'} />
          <Column filter filterField="username" field={'username'} header={'username'} />
          <Column field={'fullName'} header={'fullName'} />
          <Column filter filterField="opName" field={'opName'} header={'opName'} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
}

export default DPS_4588;
