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
const Revenue_4155 = () => {
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
      const res = await axios.post('/reporting/RevenueReport4155', {
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
        console.log('the data: ', data);
        setEmptyDataMessage('');
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <SimpleCard title="4155-Revenue">
        <ReportHeaderInputs
          showStartDate
          showEndDate
          showCustomsList
          //   showCustomsProcedure
          //   showTaxCode
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
              <Column field={''} header={''} />

              <Column field={'Customs'} header={'Customs'} />
              <Column field={'Reg_No'} header={'SAD_Reg_NO'} />
              <Column field={'reg_dat'} header={'SAD_Reg_Date'} />
              <Column field={'CMP_Code'} header={'Company_Code'} />
              <Column field={'CMP_Name'} header={'Company_Name'} />
              <Column field={'dec_cod'} header={'Declarant_Code'} />
              <Column field={'Declarant_Name'} header={'Declarant Name'} />
              <Column field={'fis_code'} header={'Financial_Code'} />
              <Column field={'Fis_Name'} header={'Financial_Name'} />
              <Column field={'itm_nbr'} header={'Item No'} />
              <Column field={'itm_tot'} header={'Item Total'} />
              <Column field={'gross_wgt'} header={'Gross Weight'} />
              <Column field={'net_wgt'} header={'Net Weight'} />
              <Column field={'hscode'} header={'HSCODE'} />
              <Column field={'desc3'} header={'Description3'} />
              <Column field={'nat_proc'} header={'Nat Proc code'} />
              <Column field={'item_val_afs'} header={'Item Value Afs'} />
              <Column field={'item_val_fcx'} header={'Item Value Fcurrency'} />
              <Column field={'currency_cod'} header={'currency_cod'} />
              <Column field={'SAD_currency_rate'} header={'SAD_Currency_Rate'} />
              <Column field={'amt_011'} header={'Amt_011'} />
              <Column field={'amt_012'} header={'Amt_012'} />
              <Column field={'amt_013'} header={'Amt_013'} />
              <Column field={'amt_015'} header={'Amt_015'} />
              <Column field={'amt_017'} header={'Amt_017'} />
              <Column field={'amt_049'} header={'Amt_049'} />
              <Column field={'amt_018'} header={'Amt_018'} />
              <Column field={'amt_041'} header={'Amt_041'} />
              <Column field={'amt_042'} header={'Amt_042'} />
              <Column field={'amt_043'} header={'Amt_043'} />
              <Column field={'amt_044'} header={'Amt_044'} />
              <Column field={'amt_045'} header={'Amt_045'} />
              <Column field={'amt_046'} header={'Amt_046'} />
              <Column field={'amt_047'} header={'Amt_047'} />
              <Column field={'amt_048'} header={'Amt_048'} />
              <Column field={'amt_88'} header={'Amt_88'} />
              <Column field={'amt_80'} header={'Amt_80'} />
              <Column field={'amt_019'} header={'Amt_019'} />
              <Column field={'sum_tot'} header={'Total'} />
            </DataTable>
          )}
        </Box>
      </SimpleCard>
    </Container>
  );
};

export default Revenue_4155;
