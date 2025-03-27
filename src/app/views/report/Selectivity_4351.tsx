import { Box, LinearProgress, styled } from '@mui/material';
import axios from 'axios';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { useEffect, useRef, useState } from 'react';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
import { SimpleCard } from '../../components';
import { ROWS_PER_PAGE } from '../../utils/constant';

const Selectivity_4351 = () => {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true)
      const res = await axios.post('/reporting/SelectivityReport4351', {
        startDate: data.startDate,
        endDate: data.endDate,
        customsCode: data.CustomsCode,
        type: data.customsProcedure,
        ...data
      });
      if (res.data.length === 0) {
        setReportData([]);
      } else {
        setReportData(res.data);
      }
    } catch (error) { }
    finally {
      setLoading(false);
    }
  };

  return (
    <SimpleCard title="Selectivity Report 4351">
      <ReportHeaderInputs
        showStartDate
        showEndDate
        showCustomsList
        showRegDate
        onSearch={handleSubmit}
        tabelRef={tableRef}
      />
      {loading && (
        <LinearProgress />
      )}
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
          <Column style={{ minWidth: "15rem" }} field={'SAD_OFFICE'} header={'SAD_OFFICE'} />
          <Column field={'SAD_REG_NO'} header={'SAD_REG_NO'} />
          <Column field={'SAD_REG_DATE'} header={'SAD_REG_DATE'} />
          <Column field={'Current_CHANNEL_Dsc'} header={'Current_CHANNEL_Dsc'} />
          <Column field={'Current_CHANNEL_COD'} header={'Current_CHANNEL_COD'} />
          <Column field={'Selected_CHANNEL'} header={'Selected_CHANNEL'} />
          <Column field={'STATUS'} header={'STATUS'} />
          <Column style={{ minWidth: "25rem" }} field={'CMP_NAM'} header={'CMP_NAM'} />
          <Column field={'IMPORTER'} header={'IMPORTER'} />
          <Column field={'ITEMS'} header={'ITEMS'} />
          <Column style={{ minWidth: "30rem" }} field={'First_Exa'} header={'First_Exa'} />
          <Column field={'First_Cexa'} header={'First_Cexa'} />
          <Column field={'SECTION'} header={'SECTION'} />
          <Column field={'WORKLOAD'} header={'WORKLOAD'} />
          <Column field={'Privious_Duty'} header={'Privious_Duty'} />
          <Column field={'Sad_Current_TAXES'} header={'Sad_Current_TAXES'} />
          <Column field={'Tax_Diff'} header={'Tax_Diff;'} />
          <Column field={'SAD_CUSTOMS_VALUE'} header={'SAD_CUSTOMS_VALUE'} />
          <Column field={'fin_cod'} header={'fin_cod'} />
          <Column style={{ minWidth: "25rem" }} field={'fin_nam'} header={'fin_nam'} />
          <Column field={'rcpt_no'} header={' rcpt_no'} />
          <Column field={'rcpt_date'} header={'rcpt_date'} />
          <Column field={'dec_cod'} header={'dec_cod'} />
          <Column style={{ minWidth: "15rem" }} field={'dec_nam'} header={'dec_nam'} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
};

export default Selectivity_4351;
