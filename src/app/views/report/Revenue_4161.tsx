import { Box, LinearProgress, styled } from '@mui/material';
import axios from 'axios';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { useEffect, useRef, useState } from 'react';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
import { SimpleCard } from '../../components';
import { ROWS_PER_PAGE } from '../../utils/constant';

const Revenue_4161 = () => {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true)
      const res = await axios.post('/reporting/RevenueReport4161', {
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
    <SimpleCard title="Revenue Report 4161">
      <ReportHeaderInputs
        showStartDate
        showEndDate
        showCustomsList
        showRegDate
        showCustomsProcedure
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
          <Column field={'office'} header={'OFFICE '} />
          <Column field={'cmpNam'} header={'COMPANY_NAME'} />
          <Column field={'cmpCod'} header={'COMPANY_CODE'} />
          <Column field={'cmpNam1'} header={'COMPANY_NAME1'} />
          <Column field={'cmpCod1'} header={'COMPANY_CODE1'} />
          <Column field={'decCod'} header={'DEC_CODE'} />
          <Column field={'decNam'} header={'DEC_NAME'} />
          <Column field={'totalTax'} header={'TOTAL_TEX'} />
          <Column field={'rcpNo'} header={'RECEPT_NO'} />
          <Column field={'rcpDat'} header={'RECEPT_DATE'} />
          <Column field={'modpay'} header={'MOD_PAY'} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
};

export default Revenue_4161;
