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

const SelectivityReport4350 = () => {
  const [reportData, setReportData] = useState([]);
  const tableRef: any = useRef(null);

  useEffect(() => {}, []);

  const handleSubmit = async (data: SearchData) => {
    try {
        console.log(data)
      const res = await axios.post('/reporting/SelectivityReport4350', {
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
      <SimpleCard title="SelectivityReport4350">
        <ReportHeaderInputs
          showStartDate
          showEndDate
          showCustomsList
          //showDestinationCustomsList
          // ShowTinNumber
           showCustomsProcedure
          //showDepartureDate
          showRegDate
          //showArrivalDate
         // showValidationDate
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
        <Column field={'SAD_YEAR'}header={'SAD_YEAR'}/>
	      <Column field={'SAD_OFFICE'}header={'SAD_OFFICE'}/>
	      <Column field={'rev_diff'}header={'rev_diff'}/>
	      <Column field={'TOTAL_TAXES'}header={'TOTAL_TAXES'}/>
	      <Column field={'CUSTOMS_VALUE'}header={'CUSTOMS_VALUE'}/>
	      <Column field={'cnt'}header={'cnt'}/>
	      <Column field={'First_CHANNEL'}header={'First_CHANNEL'}/>
    </DataTable>
        </Box>
      </SimpleCard>
    </Container>
  );
};

export default SelectivityReport4350;
