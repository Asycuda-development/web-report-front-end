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

const TransitReport4275 = () => {
  const [reportData, setReportData] = useState([]);
  const tableRef: any = useRef(null);

  useEffect(() => {}, []);

  const handleSubmit = async (data: SearchData) => {
    try {
        console.log(data)
      const res = await axios.post('/reporting/TransitReport4275', {
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
      <SimpleCard title="TransitReport4275">
        <ReportHeaderInputs
          showStartDate
          showEndDate
          //showCustomsList
          //showDestinationCustomsList
          //showTransitType2
          // ShowTinNumber
          // showCustomsProcedure
          //showDepartureDate
          showRegDate
          showCustomsList
          showDestinationCustomsList
          //ShowHsCode
          //showArrivalDate
          //showValidationDate
          //showTransitType
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
            <Column  field={'VOU'} header={'VOU '} />
            <Column field={'nbr'} header={'nbr'} />
            <Column field={'dat'} header={'dat'} />
            <Column field={'ASS_CTY_COD'} header={'ASS_CTY_COD'} />
            <Column style={{minWidth:"15rem"}}field={'ASS_CTY_NAM'} header={'ASS_CTY_NAM'} />
            <Column style={{minWidth:"20rem"}}field={'ASS_NAM'} header={'ASS_NAM'} />
            <Column style={{minWidth:"12rem"}}field={'HLD_CTY_COD'} header={'HLD_CTY_COD'} />
            <Column field={'HLD_CTY_NAM'} header={'HLD_CTY_NAM'} />
            <Column style={{minWidth:"15rem"}}field={'HLD_NAM'} header={'HLD_NAM'} />
            <Column field={'DEP_CTY_COD1'} header={'DEP_CTY_COD1'} />
            <Column field={'DEP_CTY_NAM1'} header={'DEP_CTY_NAM1'} />
            <Column field={'DST_CTY_COD1'} header={'DST_CTY_COD1'} />
            <Column field={'DST_CTY_NAM1'} header={'DST_CTY_NAM1'} />
            <Column field={'TRS_REG_IDT'} header={'TRS_REG_IDT'} />
            <Column field={'TRS_REG_CTY_COD'} header={'TRS_REG_CTY_COD'} />
            <Column field={'TRS_REG_CTY_NAM'} header={'TRS_REG_CTY_NAM'} />
            <Column field={'TRS_AGR_IDT'} header={'TRS_AGR_IDT'} />
            <Column field={'TRS_AGR_DAT'} header={'TRS_AGR_DAT'} />
            <Column field={'CTN_NBR1'} header={'CTN_NBR1'} />
            <Column field={'CRE_DAT'} header={'CRE_DAT'} />
            <Column field={'DIS_DSC'} header={'DIS_DSC'} />
            <Column field={'TMP_REG_CUO_COD'} header={'TMP_REG_CUO_COD'} />
            <Column field={'TMP_REG_CUO_NAM'} header={'TMP_REG_CUO_NAM'} />
            <Column field={'TMP_ARR_CUO_COD'} header={'TMP_ARR_CUO_COD'} />
            <Column field={'TMP_ARR_CUO_NAM'} header={'TMP_ARR_CUO_NAM'} />
            <Column field={'ITM_PGE'} header={'ITM_PGE'} />
            <Column field={'ITM_ATD_COD1'} header={'ITM_ATD_COD1'} />
            <Column field={'ITM_ATD_REF1'} header={'ITM_ATD_REF1'} />
            <Column field={'ITM_ATD_DAT1'} header={'ITM_ATD_DAT1'} />
            <Column field={'ITM_ATD_COD2'} header={'ITM_ATD_COD2'} />
            <Column field={'ITM_ATD_REF2'} header={'ITM_ATD_REF2'} />
            <Column field={'ITM_ATD_DAT2'} header={'ITM_ATD_DAT2'} />
            <Column field={'ITM_SEN_FLAG'} header={'ITM_SEN_FLAG'} />
            <Column field={'ITM_TOT_PKG'} header={'ITM_TOT_PKG'} />
            <Column field={'ITM_SIG_DAT'} header={'ITM_SIG_DAT'} />
            <Column field={'ITM_OFF_DAT'} header={'ITM_OFF_DAT'} />
            <Column field={'ITM_REG_SEA_FLG'} header={'ITM_REG_SEA_FLG'} />
            <Column style={{minWidth:"15rem"}}field={'ITM_REG_TIM'} header={'ITM_REG_TIM'} />
            <Column style={{minWidth:"20rem"}}field={'ITM_REG_CUO_COD'} header={'ITM_REG_CUO_COD'} />
            <Column field={'ITM_REG_CUO_NAM'} header={'ITM_REG_CUO_NAM'} />
            <Column field={'ITM_REG_YEA'} header={'ITM_REG_YEA'} />
            <Column field={'ITM_REG_DAT'} header={'ITM_REG_DAT'} />
            <Column style={{minWidth:"30rem"}}field={'ITM_REG_USR_NAM'} header={'ITM_REG_USR_NAM'} />
            <Column style={{minWidth:"30rem"}}field={'ITM_REG_USR_IDT'} header={'ITM_REG_USR_IDT'} />
            <Column field={'ITM_ARR_SEA_FLG'} header={'ITM_ARR_SEA_FLG'} />
            <Column style={{minWidth:"15rem"}}field={'ITM_ARR_PKG_NBR'} header={'ITM_ARR_PKG_NBR'} />
            <Column style={{minWidth:"20rem"}}field={'ITM_ARR_PKG_TXT'} header={'ITM_ARR_PKG_TXT'} />
            <Column style={{minWidth:"20rem"}}field={'ITM_ARR_CUO_COD'} header={'ITM_ARR_CUO_COD'} />
            <Column field={'ITM_ARR_CUO_NAM'} header={'ITM_ARR_CUO_NAM'} />
            <Column style={{minWidth:"20rem"}}field={'ITM_ARR_DEL_HRS'} header={'ITM_ARR_DEL_HRS'} />
            <Column field={'ITM_ARR_DEL_DAY'} header={'ITM_ARR_DEL_DAY'} />
            <Column style={{minWidth:"20rem"}}field={'ITM_ARR_RES_FLG'} header={'ITM_ARR_RES_FLG'} />
            <Column field={'ITM_ARR_YEA'} header={'ITM_ARR_YEA'} />
            <Column style={{minWidth:"20rem"}}field={'ITM_ARR_DAT'} header={'ITM_ARR_DAT'} />
            <Column field={'ITM_ARR_USR_NAM'} header={'ITM_ARR_USR_NAM'} />
            <Column field={'ITM_ARR_USR_IDT'} header={'ITM_ARR_USR_IDT'} />
            <Column style={{minWidth:"15rem"}}field={'ITM_ARR_SIG_CUO_NAM'} header={'ITM_ARR_SIG_CUO_NAM'} />
            <Column field={'ITM_ARR_SIG_CUO_COD'} header={'ITM_ARR_SIG_CUO_COD'} />
            <Column field={'ITM_STO_USR_NAM'} header={'ITM_STO_USR_NAM'} />
            <Column field={'ITM_STO_USR_IDT'} header={'ITM_STO_USR_IDT'} />
            <Column field={'ITM_REG_NBR'} header={'ITM_REG_NBR'} />
            <Column field={'ITM_ARR_NBR'} header={'ITM_ARR_NBR'} />
            <Column field={'ITM_GDS_PKG_NBR'} header={'ITM_GDS_PKG_NBR'} />
            <Column field={'ITM_GDS_PKG_COD'} header={'ITM_GDS_PKG_COD'} />
            <Column field={'ITM_GDS_WGT'} header={'ITM_GDS_WGT'} />
            <Column field={'ITM_GDS_DIS'} header={'ITM_GDS_DIS'} />
            <Column style={{minWidth:"20rem"}}field={'gds_dsc'} header={'gds_dsc'} />
          
          
        
           
           
        
            {/* <Column field={'tad_tot'} header={'Customs Value'} /> */}
          </DataTable>
        </Box>
      </SimpleCard>
    </Container>
  );
};

export default TransitReport4275;
