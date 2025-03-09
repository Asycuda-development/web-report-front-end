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
const Exemption_4754 = () => {
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
      const res = await axios.post('/reporting/ExemptionReport4754', {
        startDate: data.startDate,
        endDate: data.endDate,
        customsCode: data.CustomsCode,
        ...data
      });

      if (res.data.length === 0) {
        setEmptyDataMessage('No Content to load');
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
      <SimpleCard title="4754-Exemption">
        <ReportHeaderInputs
          showStartDate
          showEndDate
          showCustomsList
          showBasedOnExemption
          showBasedOnExemptionValue
          showStatusExemption
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
              <Column field={'Autorization_No'} header={'Autorization_No'} />
              <Column field={'ref_no'} header={'Reference_NO'} style={{ textAlign: 'center' }} />
              <Column field={'ref_date'} header={'ref_date'} />
              <Column field={'status'} header={'status'} />
              <Column field={'cmp_cod'} header={'cmp_cod'} />
              <Column
                field={'cmp_desc'}
                header={'Company_Desc'}
                style={{ minWidth: '15rem', textAlign: 'center' }}
              />
              <Column field={'contractor_cod'} header={'contractor_cod'} />
              <Column field={'contractor_nam'} header={'contractor_nam'} />
              <Column field={'clr_office'} header={'clr_office'} />
              <Column field={'wgt_tot'} header={'wgt_tot'} />
              <Column field={'written_off_wgt'} header={'written_off_wgt'} />
              <Column field={'rem_wgt'} header={'rem_wgt'} />
              <Column field={'sad_number'} header={'sad_number'} />
              <Column field={'hscode'} header={'hscode'} />
            </DataTable>
          )}
        </Box>
      </SimpleCard>
    </Container>
  );
};

export default Exemption_4754;
