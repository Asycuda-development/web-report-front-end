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

function DPS_4593() {
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
      const res = await axios.post('/reporting/DpsReport4593', {
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
      <SimpleCard title="DPS_4593">
        <ReportHeaderInputs
          // showserPrt
          showCustomsList
          showStartDate
          showEndDate
          showAssesDate
          showPayDate
          showcontainerNumber
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
              <Column field={'container_no'} header={'Container_NO'} />
              <Column field={'ide_typ_sad'} header={'Custom Proc'} />
              <Column field={'tpt_cuo_nam'} header={'Border Office'} />
              <Column field={'ide_cuo_nam'} header={'Custom Office'} />
              <Column field={'ide_cuo_cod'} header={'Custom_code'} />
              <Column field={'typeoftransport'} header={'typOofTransport'} />
              <Column field={'Item_total'} header={'Item Total'} />
              <Column field={'Item_No'} header={'Item_No'} />
              <Column field={'Total_Package'} header={'Total Package'} />
              <Column field={'Type_of_Package'} header={'Type of Package'} />
              <Column field={'Code_of_package'} header={'Code of package'} />
              <Column field={'Reg_No'} header={'Reg_NO'} />
              <Column field={'Reg_Date'} header={'Reg_Date'} />
              <Column field={'ASMT_No'} header={'ASMT_NO'} />
              <Column field={'AST_Date'} header={'AST_Date'} />
              <Column field={'RCPT_No'} header={'RCPT_NO'} />
              <Column field={'RCPT_Date'} header={'RCPT_Date'} />
              <Column field={'bank_nam'} header={'Bank_Name'} />
              <Column field={'liccod'} header={''} />
              <Column field={'txtfre'} header={''} />
              <Column field={'hs_code'} header={'HS_Code'} />
              <Column field={'hs5'} header={'HS5'} />
              <Column field={'cpc'} header={'CPS'} />
              <Column field={'dsc'} header={'DSC'} />
              <Column field={'gds_ds3'} header={'gds_ds3'} />
              <Column field={'pck_mrk1'} header={'Marks of Package 1'} />
              <Column field={'pck_mrk2'} header={'Marks of Package 2'} />
              <Column field={'Customs_Proc'} header={'Customs_Proc'} />
              <Column field={'Item_Gross_Weight'} header={'Item_Gross_Weight'} />
              <Column field={'Item_Net_Weight'} header={'Item_Net_Weight'} />
              <Column field={'Broker_TIN'} header={'Broker_TIN'} />
              <Column field={'dec_nam'} header={'Declarant Name'} />
              <Column field={'Company_TIN'} header={'Company_TIN'} />
              <Column field={'cmp_nam'} header={'Comany_Name'} />
              <Column field={'fin_nam'} header={'SAD_Financial_Name'} />
              <Column field={'fis_cod'} header={'SAD_Financial Code'} />
              <Column field={'Country_Dest'} header={'Country_Dest Name'} />
              <Column field={'Country_Dest_cod'} header={'Country Dest Cod'} />
              <Column field={'Country_Export'} header={'Country_Export'} />
              <Column field={'Country_Org'} header={'Country_Org'} />
              <Column field={'Lorry_Total'} header={'Lorry_Total'} />
              <Column field={'Currrency_code'} header={'Currrency Code'} />
              <Column field={'Currecny_Rate'} header={'Currecny Rate'} />
              <Column field={'Declaration_Value_currency'} header={'Declaration Value Crrency'} />
              <Column field={'Declaration_Value_Afs'} header={'Declaration_Value_Afs'} />
              <Column field={'Declaration_Taxes'} header={'Declaration_Taxes'} />
              <Column field={'Item_Value_currency'} header={'Item Value Currency'} />
              <Column field={'Item_Value_Afs'} header={'Item_Value_Afs'} />
              <Column field={'Item_CIF_Value'} header={'Item_CIF_Value'} />
              <Column field={'Item_Taxes'} header={'Item_Taxes'} />
              <Column field={'status'} header={'Status'} />
              <Column field={'loc_goods'} header={'location_Of_goods'} />
              <Column field={'lic_cod'} header={'lic_Cod'} />
              <Column field={'txt_fre'} header={'txt_fre'} />
              <Column field={'pck_mrk_1'} header={'Pck_Mrk_1'} />
              <Column field={'pck_mrk_2'} header={'Pck_Mrk_2'} />
              <Column field={'tar_vmt'} header={'tar_vmt'} />
              <Column field={'tar_att'} header={'tar_att'} />
              <Column field={'tar_vdt'} header={'tar_vdt'} />
              <Column field={'tar_vmt_1'} header={'tar_vmt_1'} />
              <Column field={'gcategory_of_goods1'} header={'gcategory_of_goods1'} />
              <Column field={'FUELLITERS'} header={'FUEL LITERS'} />
              <Column field={'gcategory_of_goods2'} header={'gcategory_of_goods2'} />
            </DataTable>
          )}
        </Box>
      </SimpleCard>
    </Container>
  );
}

export default DPS_4593;
