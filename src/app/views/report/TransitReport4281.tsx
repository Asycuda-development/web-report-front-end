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

const TransitReport4281 = () => {
  const [reportData, setReportData] = useState([]);
  const tableRef: any = useRef(null);

  useEffect(() => {}, []);

  const handleSubmit = async (data: SearchData) => {
    try {
        console.log(data)
      const res = await axios.post('/reporting/TransitReport4281', {
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
      <SimpleCard title="TransitReport4281">
        <ReportHeaderInputs
          showStartDate
          showEndDate
          showCustomsList
          //showDestinationCustomsList
          // ShowTinNumber
          // showCustomsProcedure
          showRegDate
          showfarwarCode
          //showNumPalate
          //showDepartureDate
          //showTransitType2
          //showArrivalDate
          //showValidationDate
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
            <Column  field={'Dep_Office_Name'} header={'Dep_Office_Name '} />
            <Column field={'Dest_Office_Name'} header={'Dest_Office_Name'} />
            <Column field={'Forwarder_code'} header={'Forwarder_code'} />
            <Column field={'Forwarder_name'} header={'Forwarder_name'} />
            <Column field={'Number_of_T1s'} header={'Number_of_T1s'} />
            <Column field={'status'} header={'status'} />
          </DataTable>
        </Box>
      </SimpleCard>
    </Container>
  );
};

export default TransitReport4281;
