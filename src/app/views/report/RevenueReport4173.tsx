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

const RevenueReport4173 = () => {
  const [reportData, setReportData] = useState([]);
  const tableRef: any = useRef(null);

  useEffect(() => {}, []);

  const handleSubmit = async (data: SearchData) => {
    try {
        console.log(data)
      const res = await axios.post('/reporting/RevenueReport4173', {
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
      <SimpleCard title="RevenueReport4173">
        <ReportHeaderInputs
          showStartDate
          showEndDate
          showCustomsList
          showDestinationCustomsList
          // ShowTinNumber
          // showCustomsProcedure
          showRegDate
          showArrivalDate
          showValidationDate
          //showCustomsProcedure
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
            <Column  field={'deptOffNam'} header={'deptOffNam '} />
            <Column field={'destOff'} header={'destOff'} />
            <Column field={'expCty'} header={'expCty'} />
            <Column field={'destCty'} header={'destCty'} />
            <Column field={'hsCod'} header={'hsCod'} />
            <Column field={'dsc'} header={'dsc'} />
            <Column field={'regNo'} header={'regNo'} />
            <Column field={'regDat'} header={'regDat'} />
            <Column field={'cod'} header={'cod'} />
            <Column field={'nam'} header={'nam'} />
            <Column field={'tot'} header={'tot'} />
        
            {/* <Column field={'tad_tot'} header={'Customs Value'} /> */}
          </DataTable>
        </Box>
      </SimpleCard>
    </Container>
  );
};

export default RevenueReport4173;
