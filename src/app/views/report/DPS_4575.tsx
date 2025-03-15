import { SimpleCard } from '../../components';
import { Box, styled, LinearProgress } from '@mui/material';
import { useEffect, useState, useRef } from 'react';
import { ROWS_PER_PAGE } from '../../utils/constant';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';

const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' }
  }
}));

const LoadingMessage = styled('p')({
  fontSize: '45px',
  textAlign: 'center',
  position: 'absolute',
  top: '68%',
  left: '50%',
  transform: 'translate(-50%, -50%)'
});

const EmptyDataMessage = styled('p')({
  fontSize: '45px',
  textAlign: 'center',
  position: 'absolute',
  top: '68%',
  left: '50%',
  transform: 'translate(-50%, -50%)'
});

function DPS_4575() {
  const [reportData, setReportData] = useState([]);
  const tableRef: any = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('Report generating');
  const [emptyDataMessage, setEmptyDataMessage] = useState('');

  useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setLoadingMessage((prev) => {
          switch (prev) {
            case 'Report is generating':
              return 'Report is generating.';
            case 'Report is generating.':
              return 'Report is generating..';
            case 'Report is generating..':
              return 'Report is generating...';
            default:
              return 'Report is generating.';
          }
        });
      }, 500);
      return () => clearInterval(interval);
    }
  }, [isLoading]);

  const handleSubmit = async (data: SearchData) => {
    try {
      setIsLoading(true);
      setLoadingMessage('Report fenerating');
      const res = await axios.post('/reporting/DpsReport4575', {
        ...data,
        type: data.customsProcedure,
        customsCode: data.CustomsCode
      });
      if (res.data.length === 0) {
        setEmptyDataMessage('No Content to load');
        console.log('event trigared!!');
        setReportData([]);
      } else {
        setReportData(res.data);
        setEmptyDataMessage('');
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <SimpleCard title="DPS_4575">
        <ReportHeaderInputs
          showStartDate
          showEndDate
          // ShowTinNumber
          showExemptionType
          showCustomsProcedure
          // showHsCode
          // showRegDate
          // showUserName
          showAssesDate
          showPayDate
          // showCustomsList
          //   showbasedon
          //  showbasedonvalue
          onSearch={handleSubmit}
          tabelRef={tableRef}
        />
        {isLoading && (
          <>
            <LinearProgress />
            <LoadingMessage>{loadingMessage}</LoadingMessage>
          </>
        )}
        <Box width="100%" overflow="auto">
          {!isLoading && reportData.length === 0 && emptyDataMessage && (
            <EmptyDataMessage>{emptyDataMessage}</EmptyDataMessage>
          )}
          {!isLoading && reportData.length > 0 && (
            <DataTable
              ref={tableRef}
              value={reportData}
              rows={ROWS_PER_PAGE}
              rowsPerPageOptions={[3, 10, 25, 50, 100]}
              paginator
              stripedRows
              showGridlines
            >
              <Column field={'borderCuo'} header={'Border_Custom'} />
              <Column field={'destCuo'} header={'Destination Custom'} />
              <Column field={'decCod'} header={'Declarant_Cod'} />
              <Column field={'decNam1'} header={'Declarant_Cod'} />
              <Column field={'refNo'} header={'Ref_NO'} />
              <Column field={'regNo'} header={'Registeration_NO'} />
              <Column field={'regDate'} header={'Reg_Date'} />
              <Column field={'mark1'} header={'Mark1'} />
              <Column field={'mark2'} header={'Mark2'} />
              <Column field={'decNam'} header={'Declarant_Name'} />
              <Column field={'companyTin'} header={'Company_Cod'} />
              <Column field={'cmpNam'} header={'Company_Name'} />
              <Column field={'finNam'} header={'Fin_Name'} />
              <Column field={'rgdat'} header={'rg_date'} />
              <Column field={'color'} header={'Color'} />
              <Column field={'gaz'} header={'Gaz'} />
              <Column field={'finName'} header={'Fin Name'} />
              <Column field={'passenger'} header={'Passenger'} />
              <Column field={'engNo'} header={'Eng_NO'} />
              <Column field={'shasi'} header={'Shsi'} />
              <Column field={'silandr'} header={'Siladar'} />
              <Column field={'doors'} header={'Door'} />
              <Column field={'valueAfs'} header={'Value_AF'} />
              <Column field={'revenueTaxes'} header={'Revenue_Tax'} />
              <Column field={'status'} header={'Status'} />
              <Column field={'hscode'} header={'HS_Cod'} />
              <Column field={'rcptDate'} header={'Rcp_Date'} />
              <Column field={'rcptNumber'} header={'Rcp_NO'} />
              <Column field={'model'} header={'Model'} />
            </DataTable>
          )}
        </Box>
      </SimpleCard>
    </Container>
  );
}

export default DPS_4575;
