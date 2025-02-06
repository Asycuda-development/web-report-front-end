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

const SelectivityReport4354 = () => {
  const [reportData, setReportData] = useState([]);
  const tableRef: any = useRef(null);

  useEffect(() => {}, []);

  const handleSubmit = async (data: SearchData) => {
    try {
        console.log(data)
      const res = await axios.post('/reporting/SelectivityReport4354', {
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
      <SimpleCard title="SelectivityReport4354">
        <ReportHeaderInputs
          showStartDate
          showEndDate
          showCustomsList
         // ShowHsCode
          //showDestinationCustomsList
          // ShowTinNumber
          // showCustomsProcedure
          //showDepartureDate
          showRegDate
          //showArrivalDate
         // showValidationDate
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
     <Column field={'SAD_YEAR'}header={'SAD_YEAR'} />
	 <Column field={'SAD_OFFICE'}header={'SAD_OFFICE'}/>
	 <Column field={'SAD_REG_NO'}header={'SAD_REG_NO'}/>
	 <Column field={'SAD_REG_DATE'}header={'SAD_REG_DATE'}/>
	 <Column field={'current_CHANNEL_Dsc'}header={'current_CHANNEL_Dsc'}/>
	 <Column field={'current_CHANNEL_COD'}header={'current_CHANNEL_COD'}/>
	 <Column field={'Selected_CHANNEL'}header={'Selected_CHANNEL'}/>
	 <Column field={'SEL_DATA'}header={'SEL_DATA'}/>
	 <Column field={'STATUS'}header={'STATUS'}/>
	 <Column style={{minWidth:"20rem"}}field={'CMP_NAM'}header={'CMP_NAM'}/>
	 <Column field={'IMPORTER'}header={'IMPORTER'}/>
     <Column field={'ITEMS'}header={'ITEMS'}/>
	 <Column field={'First_Exa'}header={'First_Exa'}/>
	 <Column field={'First_Cexa'}header={'First_Cexa'}/>
	 <Column field={'SECTION'}header={'SECTION'}/>
	 <Column field={'WORKLOAD'}header={'WORKLOAD'}/>
	 <Column field={'INFRINGEMENT_DETAILS'}header={'INFRINGEMENT_DETAILS'}/>
	 <Column field={'Privious_Duty'}header={'Privious_Duty'}/>
	 <Column field={'Current_TAXES'}header={'Current_TAXES'}/>
	 <Column field={'Tax_Diff'}header={'Tax_Diff'}/>
	 <Column field={'CUSTOMS_VALUE'}header={'CUSTOMS_VALUE'}/>
	 <Column field={'hscode'}header={'hscode'}/>
	 <Column style={{minWidth:"20rem"}}field={'dsc1'}header={'dsc1'}/>
	 <Column style={{minWidth:"20rem"}}field={'dsc3'}header={'dsc3'}/>
	 <Column field={'itm_no'}header={'itm_no'}/>
	 <Column field={'fin_cod'}header={'fin_cod'}/>
	 <Column style={{minWidth:"30rem"}}field={'fin_nam'}header={'	 fin_nam'}/>
	 <Column field={'rcpt_no'}header={'	 rcpt_no'}/>
	 <Column field={'rcpt_date'}header={'	 rcpt_date'}/>
	 <Column field={'dec_cod'}header={'	 dec_cod'}/>
	 <Column style={{minWidth:"15rem"}}field={'dec_nam'}header={'	 dec_nam'}/>
    </DataTable>
        </Box>
      </SimpleCard>
    </Container>
  );
};

export default SelectivityReport4354;
