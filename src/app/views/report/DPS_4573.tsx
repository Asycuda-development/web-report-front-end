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

function DPS_4573() {
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
      const res = await axios.post('/reporting/DpsReport4573', {
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
      <SimpleCard title="DPS_4573">
        <ReportHeaderInputs
          showStartDate
          showEndDate
          // ShowTinNumber
          // showExemptionType
          // showCustomsProcedure
          // showHsCode
          // showRegDate
          // showUserName
          // showAssesDate
          // showPayDate
          // showCustomsList
          //    showbasedon
          //   showbasedonvalue
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
              <Column field={'ideaYea'} header={'Year'} />

              <Column filter filterField="ideNbr" field={'ideNbr'} header={'SAD_NO'} />
              <Column field={'ideCuo'} header={'SAD_Cuo'} />
              <Column field={'ideCuoNam'} header={'SAD_Cou_Name'} />
              <Column field={'shdCod'} header={'SAD_Cod'} />
              <Column field={'shdNam'} header={'SAD_Name'} />
              <Column filter filterField="cmpCod" field={'cmpCod'} header={'Company_TIN'} />
              <Column field={'cmpNam'} header={'Company_Name'} />
              <Column filter filterField="decCod" field={'decCod'} header={'Declerant_Cod'} />
              <Column field={'decNam'} header={'Declerant_Name'} />
              <Column field={'valUsr'} header={'Val_Usr'} />
              <Column field={'extUsr'} header={'Exit_Usr'} />
              <Column field={'extPlc'} header={'Exit_Place'} />
              <Column field={'extDat'} header={'Exit_Date'} />
              <Column field={'sadItm'} header={'SAD_Item'} />
              <Column filter filterField="sadRegNbr" field={'sadRegNbr'} header={'SAD_Reg_NO'} />
              <Column field={'sadRegSer'} header={'SAD_Reg_Ser'} />
              <Column field={'sadAssAll'} header={'SAD_ASS_All'} />
              <Column field={'sadPckMk1'} header={'SAD_PckMK1'} />
              <Column field={'sadPckMk2s'} header={'SAD_Pck_MK2'} />
              <Column field={'sadPackNbr'} header={'SAD_Pck_MK_NO'} />
              <Column field={'sadWgtGrs'} header={'SAD_Wgt_Grs'} />
              <Column field={'sadPckExtNbr'} header={'SAD_Pck_Exit NO'} />
              <Column field={'sadPckExtWgt'} header={'SAD Pck_Exit Wgt'} />
              <Column filter filterField="manRef" field={'manRef'} header={'Man_Ref'} />
              <Column field={'serPrt'} header={'serPrt'} />
            </DataTable>
          )}
        </Box>
      </SimpleCard>
    </Container>
  );
}

export default DPS_4573;
