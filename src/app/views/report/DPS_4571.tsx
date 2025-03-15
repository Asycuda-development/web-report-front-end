import { Box, styled } from '@mui/material';
import axios from 'axios';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { useEffect, useRef, useState } from 'react';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
import { SimpleCard } from '../../components';
import { ROWS_PER_PAGE } from '../../utils/constant';
//checked

const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' }
  }
}));

function DPS_4571() {
  const [reportData, setReportData] = useState([]);
  const tableRef: any = useRef(null);

  useEffect(() => { }, []);

  const handleSubmit = async (data: SearchData) => {
    console.log(data);
    try {
      const res = await axios.post('/reporting/DpsReport4571', {
        ...data,
        type: data.customsProcedure,
        customsCode: data.CustomsCode
      });

      setReportData(res.data);
    } catch (error) { }
  };

  return (
    <Container>
      <SimpleCard title="DPS_4571">
        <ReportHeaderInputs
          showStartDate
          showEndDate
          //ShowTinNumber
          //showOperationDate
          showCustomsProcedure
          // showRegDate
          // showAssesDate
          // showPayDate
          showCustomsList
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
            <Column field={'OFFICE'} header={'OFFICE_CODE'} />
            <Column field={'SAD_NO'} header={'SAD_RegNo'} />
            <Column field={'SAD_DATE'} header={'SAD_DATE'} />
            <Column field={'CMP_COD'} header={'COMPANY_CODE'} />
            <Column field={'CMP_NAM'} header={'COMPANY_NAME'} />
            <Column field={'SAD_FLW'} header={'SAD_TYPE'} />
            <Column field={'CNT'} header={'COUNT'} />


          </DataTable>
        </Box>
      </SimpleCard>
    </Container>
  );
}

export default DPS_4571;
