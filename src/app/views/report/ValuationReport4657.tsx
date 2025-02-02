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

const ValuationReport4657 = () => {
  const [reportData, setReportData] = useState([]);
  const tableRef: any = useRef(null);

  useEffect(() => {}, []);

  const handleSubmit = async (data: SearchData) => {
    try {
        console.log(data)
      const res = await axios.post('/reporting/ValuationReport4657', {
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
      <SimpleCard title="ValuationReport4657">
        <ReportHeaderInputs
          showStartDate
          showEndDate
          showCustomsList
          //showDestinationCustomsList
          // ShowTinNumber
          // showCustomsProcedure
          showRegDate
          //showUserName
         // ShowHsCode
         //showCreationDate
         //showLinkedDate
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
       
        <Column field={'HS_CODE'} header ={'HS_CODE'} />
        <Column field={'TSC_CODE'} header ={'TSC_CODE'} />
        <Column style={{minWidth:"15rem"}}field={'DSC'} header ={'DSC'} />
        <Column style={{minWidth:"15rem"}}field={'Country_name'} header ={'Country_name'} />
        <Column style={{minWidth:"15rem"}}field={'Item_No'} header ={'Item_No'} />
        <Column field={'Item_Value'} header ={'Item_Value'} />
        <Column field={'Item_tax'} header ={'Item_tax'} />
        <Column field={'TSC_Status'} header ={'TSC_Status'} />
          </DataTable>
        </Box>
      </SimpleCard>
    </Container>
  );
};

export default ValuationReport4657;
