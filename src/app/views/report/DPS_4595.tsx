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

function DPS_4595() {
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
      const res = await axios.post('/reporting/DpsReport4595', {
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
      <SimpleCard title="DPS_4595">
        <ReportHeaderInputs
          showStartDate
          showEndDate
          showCustomsProcedure
          showCustomsList
          showHsCode
          showExemptionType
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
              <Column field={'sad_Type'} header={'sad_Type'} />
              <Column filter filterField={'bcp'} field={'bcp'} header={'Border Custom'} />
              <Column field={'icd'} header={'ICD'} />
              <Column
                filter
                filterField="country_Export"
                field={'country_Export'}
                header={'Country_Export'}
              />
              <Column field={'country_Dest'} header={'country_Dest'} />
              <Column field={'hsCode'} header={'HS_Code'} />
              <Column field={'tsc'} header={'TSC'} />
              <Column
                style={{ minWidth: '16rem', textAlign: 'center' }}
                filter
                filterField={'dsc'}
                field={'dsc'}
                header={'DSC'}
              />
              <Column field={'item_Net_Weight'} header={'Item_Net_Weight'} />
              <Column field={'item_Value_currency'} header={'Item_Value_currency'} />
              <Column field={'item_Value_Afs'} header={'Item_Value_Afs'} />
              <Column field={'tax_Rate'} header={'Tax_Rate'} />
              <Column field={'tax_Code'} header={'Tax_Code'} />
              <Column field={'tax_Base'} header={'Tax_Base'} />
              <Column field={'code_Tax_Amount'} header={'Code_Tax_Amount'} />
            </DataTable>
          )}
        </Box>
      </SimpleCard>
    </Container>
  );
}

export default DPS_4595;
