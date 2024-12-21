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

function DPS_4580() {
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
      const res = await axios.post('/reporting/DpsReport4580', {
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
      <SimpleCard title="DPS_4580">
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
          showCustomsList
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
              <Column field={'idea_yea'} header={'yaer'} />
              <Column field={'ide_nbr'} header={'ide_nbr'} />
              <Column field={'ide_cuo'} header={'ide_cuo'} />
              <Column field={'ide_cuo_nam'} header={'ide_cuo_nam'} />
              <Column field={'shd_cod'} header={'shd_cod'} />
              <Column field={'shd_nam'} header={'shd_nam'} />
              <Column field={'cmp_cod'} header={'cmp_cod'} />
              <Column field={'cmp_nam'} header={'cmp_nam'} />
              <Column field={'dec_cod'} header={'dec_cod'} />
              <Column field={'dec_nam'} header={'dec_nam'} />
              <Column field={'val_usr'} header={'val_usr'} />
              <Column field={'ext_usr'} header={'ext_usr'} />
              <Column field={'ext_plc'} header={'ext_plc'} />
              <Column field={'ext_dat'} header={'ext_dat'} />
              <Column field={' sad_itm'} header={'sad_itm'} />
              <Column field={'sad_reg_nbr'} header={'sad_reg_nbr'} />
              <Column field={'sad_ass_all'} header={'sad_ass_all'} />
              <Column field={'sad_reg_ser'} header={'sad_reg_ser'} />
              <Column field={'sad_pck_mk1'} header={'sad_pck_mk1'} />
              <Column field={'sad_pck_mk2'} header={'sad_pck_mk2'} />
              <Column field={'sad_pack_nbr'} header={'sad_pack_nbr'} />
              <Column field={'sad_wgt_grs'} header={'sad_wgt_grs'} />
              <Column field={'sad_pck_ext_nbr'} header={'sad_pck_ext_nbr'} />
              <Column field={'sad_pck_ext_wgt'} header={'sad_pck_ext_wgt'} />
              <Column field={'man_ref'} header={'man_ref'} />
              <Column field={'bol_ref'} header={'bol_ref'} />
            </DataTable>
          )}
        </Box>
      </SimpleCard>
    </Container>
  );
}

export default DPS_4580;
