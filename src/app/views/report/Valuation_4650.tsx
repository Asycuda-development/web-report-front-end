import { Box, LinearProgress, styled } from '@mui/material';
import axios from 'axios';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { useEffect, useRef, useState } from 'react';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
import { SimpleCard } from '../../components';
import { ROWS_PER_PAGE } from '../../utils/constant';


const Valuation_4650 = () => {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false);
  const tableRef: any = useRef(null);

  useEffect(() => { }, []);

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true)
      const res = await axios.post('/reporting/ValuationReport4650', {
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
      setLoading(false)
    }
  };

  return (
    <SimpleCard title="ValuationReport4650">
      <ReportHeaderInputs
        showStartDate
        showEndDate
        showCustomsList
        showRegDate
        ShowHsCode
        showAcceptR
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

          <Column field={'OFFICE'} header={'OFFICE'} />
          <Column field={'SAD_NO'} header={'SAD_NO'} />
          <Column style={{ minWidth: "15rem" }} field={'SAD_REG_DATE'} header={'SAD_REG_DATE'} />
          <Column style={{ minWidth: "15rem" }} field={'HSCODE'} header={'HSCODE'} />
          <Column style={{ minWidth: "15rem" }} field={'TSC_COD'} header={'TSC_COD'} />
          <Column style={{ minWidth: "20rem" }} field={'Comm_desc'} header={'Comm_desc'} />
          <Column style={{ minWidth: "12rem" }} field={'brand'} header={'brand'} />
          <Column field={'inv_usd'} header={'inv_usd'} />
          <Column field={'accepted_value'} header={'accepted_value'} />
          <Column field={'Value_Declared'} header={'Value_Declared'} />
          <Column field={'Difference'} header={'Difference'} />
          <Column field={'cmp_cod'} header={'cmp_cod'} />
          <Column style={{ minWidth: "12rem" }} field={'CMP_NAM'} header={'CMP_NAM'} />
          <Column field={'dec_cod'} header={'dec_cod'} />
          <Column style={{ minWidth: "20rem" }} field={'dec_nam'} header={'dec_nam'} />
          <Column field={'min_accept'} header={'min_accept'} />
          <Column field={'max_accept'} header={'max_accept'} />
          <Column field={'itm_no'} header={'itm_no'} />
          <Column field={'Item_Taxes'} header={'Item_Taxes'} />
          <Column field={'avg_amt'} header={'avg_amt'} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
};

export default Valuation_4650;
