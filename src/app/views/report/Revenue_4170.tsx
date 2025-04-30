import { SimpleCard } from '../../components';
import { Box, styled, LinearProgress } from '@mui/material';
import React, { useEffect, useState, useRef } from 'react';
import { ROWS_PER_PAGE } from '../../utils/constant';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';

function Revenue_4170() {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false);
  const tableRef: any = useRef(null);

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true);
      const res = await axios.post('/reporting/RevenueReport4170', {
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
    <SimpleCard title="Revenue Report 4170">
      <ReportHeaderInputs
        showStartDate
        showEndDate
        showRegDate
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
          rowsPerPageOptions={[5, 10, 25, 50, 100]}
          paginator
          stripedRows
          showGridlines
          emptyMessage={'No Data Available'}
        >
          <Column field={'office'} header={'office'} />
          <Column field={'reg_nbr'} header={'Register Number'} />
          <Column field={'reg_date'} header={'Register Date'} />
          <Column field={'dec_nam'} header={'Broker Name'} />
          <Column field={'Company_TIN'} header={'Company TIN'} />
          <Column field={'cmp_nam'} header={'Company Name'} />
          <Column field={'amt_041'} header={'amt_041'} />
          <Column field={'amt_042'} header={'amt_042'} />
          <Column field={'amt_047'} header={'amt_047'} />
        </DataTable>
      </ Box>
    </SimpleCard>
  );
}

export default Revenue_4170