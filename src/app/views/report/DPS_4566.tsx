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

function DPS_4566() {
  const [reportData, setReportData] = useState([]);
  const tableRef: any = useRef(null);

  useEffect(() => { }, []);

  const handleSubmit = async (data: SearchData) => {
    console.log(data)
    try {
      const res = await axios.post('/reporting/DpsReport4566', {
        ...data,
        type: data.customsProcedure,
        customsCode: data.CustomsCode
      });

      setReportData(res.data);
    } catch (error) { }
  };

  return (
    <Container>
      <SimpleCard title="4566-DPS">
        <ReportHeaderInputs
          showStartDate
          showEndDate
          //ShowTinNumber
         // showExemptionType
          showCustomsProcedure
          showRegDate
          showAssesDate
          showPayDate
         // showOperationDate
          showCustomsList
          ShowHsCode
          showGoods
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
            <Column field={'SAD_YEAR'} header={'SAD_YEAR'} />
            <Column style={{minWidth: "12rem"}} field={'SAD_OFFICE'} header={'SAD_OFFICE'} />
            <Column style={{minWidth: "12rem"}} field={'SAD_REG_NO'} header={'SAD_REG_NO'} />
            <Column field={'SAD_REG_DATE'} header={'SAD_REG_DATE'} />
            <Column field={'Selected_CHANNEL_Dsc'} header={'Selected_CHANNEL_Dsc'} />
            <Column field={'Selected_CHANNEL_COD'} header={'Selected_CHANNEL_COD'} />
            <Column field={'Current_CHANNEL'} header={'Current_CHANNEL'} />
            <Column style={{minWidth: "10rem"}}field={'STATUS'} header={'STATUS'} />
            <Column field={'Company_TIN'} header={'Company_TIN'} />
            <Column style={{ minWidth: "20rem" }}field={'cmp_nam'} header={'Company Name'} />
            <Column field={'ITEMS'} header={'ITEMS'} />
            <Column style={{ minWidth: '12rem' }} field={'First_Exa'} header={'FIRST_EXA'} />
            <Column field={'Last_Exa'} header={'LAST_EXA'} />
             <Column  field={'First_Cexa'} header={'FIRST_CEXA'} />
             <Column field={'Last_Cexa'} header={'LAST_CEXA'} />
            <Column field={'WORKLOAD'} header={'WORKLOAD'} />
            <Column field={'TOTAL_TAXES'} header={'TOTAL_TAXES'} />
            <Column field={'Privious_Tax'} header={'Privious_Tax'} />
            <Column style={{minWidth: "12rem"}} field={'ADDITIONAL_TAXES'} header={'ADDITIONAL_TAXES'} />
            <Column field={'CUSTOMS_VALUE'} header={'CUSTOMS_VALUE'} />
            <Column field={'hscode'} header={'hscode'} />
            <Column style={{ minWidth: "30rem" }} field={'dsc1'} header={'Goods Description'} />
            <Column style={{ minWidth: "25rem" }} field={'dsc3'} header={'Goods Additional Description'} />
            <Column field={'itm_no'} header={'itm_no'} />
            <Column field={'fin_cod'} header={'fin_cod'} />
            <Column style={{ minWidth: "30rem" }}field={'fin_nam'} header={'fin_nam'} />
            <Column field={'wgtgrs'} header={'Item Gross Weight'} />
            <Column field={'wgtnet'} header={'Item Net Weight'} />
            <Column filter filterField='rcpt_no' field={'rcpt_no'} header={'Recept_No'} />
            <Column  field={'rcpt_date'} header={'Recept_Date'} />
            <Column field={'dec_cod'} header={'Declarent_Code'} />
            <Column style={{ minWidth: "20rem" }} filter filterField='dec_nam'  field={'dec_nam'} header={'Declarent_Name'} />
            <Column style={{ minWidth: "20rem" }} field={'Lorry_Total'} header={'Lorry_Total'} />
            <Column style={{minWidth: "12rem"}} field={'nat_proc'} header={'nat_proc'} />
            <Column style={{minWidth: "12rem"}} field={'sad_flw'} header={'sad_flw'} />
            <Column style={{minWidth: "12rem"}} field={'CAT'} header={'CAT'} />
            <Column field={'Item_Value_Afs'} header={'Item_Value_Afs'} />
            <Column field={'Item_tax_amt'} header={'Item_tax_amt'} />
            <Column field={'Item_total'} header={'Item_total'} />
            <Column field={'SAD_OFFICENAM'} header={'SAD_OFFICENAM'} />
            {/* {reportData.length > 0 &&
                Object.keys(reportData[0]).map((keys, index) => (
                  <Column key={index} field={keys} header={keys} />
                ))} */}
            {/* <Column field="id" header="Id"></Column>
              <Column field="name" header="Name"></Column>
              <Column field="description" header="Description"></Column>
              <Column field="active" header="Active"></Column> */}
          </DataTable>
        </Box>
      </SimpleCard>
    </Container>
  );
};

export default DPS_4566