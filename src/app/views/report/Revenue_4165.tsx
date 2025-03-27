import { SimpleCard } from '../../components';
import { Box, LinearProgress } from '@mui/material';
import { useState, useRef } from 'react';
import { ROWS_PER_PAGE } from '../../utils/constant';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';

const Revenue_4165 = () => {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true);
      const res = await axios.post('/reporting/RevenueReport4165', {
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
    <SimpleCard title="Revenue Report 4165">
      <ReportHeaderInputs
        showStartDate
        showEndDate
        showCustomsList
        showUserName
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
          <Column field={'customsNam'} header={'customs Nam'} />
          <Column field={'RcpDate'} header={'Rcp_Date'} />
          <Column field={'RcpNbr'} header={'RCP_NO'} />
          <Column field={'ser'} header={'Serial'} />
          <Column field={'DeclarantCode'} header={'Declarant TIN'} />
          <Column field={'CompanyCode'} header={'Company TIN'} />
          <Column style={{ minWidth: '11rem' }} field={'TraderName'} header={'Trader_Name'} />
          <Column field={'ACD_ID'} header={'ACD_ID'} />
          <Column field={'CBS_Batch_ID'} header={'CBS_Batch_ID'} />
          <Column field={'bnk_Nbr'} header={'Bank Ref Number'} />
          <Column field={'bnk_Dat'} header={'Bank Ref Date'} />
          <Column field={'status'} header={'status'} />
          <Column field={'Operation_Time'} header={'Operation_Time'} />
          <Column field={'userid'} header={'User_ID'} />
          <Column field={'TOT'} header={'Amount Toatal'} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
};

export default Revenue_4165;
