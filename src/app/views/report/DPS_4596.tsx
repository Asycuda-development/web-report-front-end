import { SimpleCard } from '../../components';
import { Box, styled, LinearProgress } from '@mui/material';
import { useEffect, useState, useRef } from 'react';
import { ROWS_PER_PAGE } from '../../utils/constant';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';

function DPS_4596() {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true);
      const res = await axios.post('/reporting/DpsReport4596', {
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
    <SimpleCard title="DPS_4596">
      <ReportHeaderInputs showStartDate showEndDate onSearch={handleSubmit} tabelRef={tableRef} />
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
          <Column field={'Hs6_cod'} header={'hs_cod'} />
          <Column field={'tar_pr1'} header={'tar_pr1'} />
          <Column field={'tar_pr2'} header={'tar_pr2'} />
          <Column field={'tar_pr3'} header={'tar_pr3'} />
          <Column field={'tar_pr4'} header={'tar_pr4'} />
          <Column field={'valid_from'} header={'Valid_From'} />
          <Column field={'valid_to'} header={'Valid_To'} />
          <Column field={'tar_all'} header={'DSC1'} />
          <Column field={'tar_dsc'} header={'DSC2'} />
          <Column field={'tar_t01'} header={'Tar_1'} />
          <Column field={'tar_t02'} header={'Tar_2'} />
          <Column field={'user_name'} header={'User_Name'} />
          <Column field={'operation_name'} header={'Operation Name'} />
          <Column field={'operation_date'} header={'Operation_Date'} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
}

export default DPS_4596;
