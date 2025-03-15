import { Box, styled } from '@mui/material';
import axios from 'axios';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { useEffect, useRef, useState } from 'react';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
import { SimpleCard } from '../../components';
import { ROWS_PER_PAGE } from '../../utils/constant';

const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' }
  }
}));

const RevenueReport4161 = () => {
  const [reportData, setReportData] = useState([]);
  const tableRef: any = useRef(null);

  useEffect(() => {}, []);

  const handleSubmit = async (data: SearchData) => {
    try {
        console.log(data)
      const res = await axios.post('/reporting/RevenueReport4161', {
        startDate: data.startDate,
        endDate: data.endDate,
        customsCode: data.CustomsCode,
        type: data.customsProcedure,
        ...data
      });

      setReportData(res.data);
    } catch (error) {}
  };

  return (
    <Container>
      <SimpleCard title="RevenueReport4161">
        <ReportHeaderInputs
          showStartDate
          showEndDate
          showCustomsList
          // ShowTinNumber
          // showCustomsProcedure
          showRegDate
          showCustomsProcedure
          //showPayDate
          //ShowTinNumber
          onSearch={handleSubmit}
          tabelRef={tableRef}
        />
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
            <Column  field={'office'} header={'OFFICE '} />
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
        
            {/* <Column field={'tad_tot'} header={'Customs Value'} /> */}
          </DataTable>
        </Box>
      </SimpleCard>
    </Container>
  );
};

export default RevenueReport4161;
