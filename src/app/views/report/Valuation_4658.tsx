import { Box, LinearProgress, styled } from '@mui/material';
import axios from 'axios';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { useEffect, useRef, useState } from 'react';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
import { SimpleCard } from '../../components';
import { ROWS_PER_PAGE } from '../../utils/constant';

const Valuation_4658 = () => {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);

  useEffect(() => { }, []);

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true)
      const res = await axios.post('/reporting/ValuationReport4658', {
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
    <SimpleCard title="ValuationReport4658">
      <ReportHeaderInputs
        showStartDate
        showEndDate
        showCustomsList
        showRegDate
        ShowRegisterNo
        showOpreationOptionValuation
        showOpreationOptionValuationValue
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

          <Column field={'CUO_COD'} header={'CUO_COD'} />
          <Column field={'CUO_NAM'} header={'CUO_NAM'} />
          <Column style={{ minWidth: "15rem" }} field={'REG_YER'} header={'REG_YER'} />
          <Column style={{ minWidth: "15rem" }} field={'REG_SER'} header={'REG_SER'} />
          <Column style={{ minWidth: "15rem" }} field={'REG_NBR'} header={'REG_NBR'} />
          <Column field={'reg_date'} header={'reg_date'} />
          <Column field={'REJREASON'} header={'REJREASON'} />
          <Column field={'ANALYSIS_REMARK'} header={'ANALYSIS_REMARK'} />
          <Column field={'GEN_INV'} header={'GEN_INV'} />
          <Column field={'GDS_DSC'} header={'GDS_DSC'} />
          <Column field={'HSC_COD'} header={'HSC_COD'} />
          <Column field={'CTY_ORG'} header={'CTY_ORG'} />
          <Column field={'AMOUNT'} header={'AMOUNT'} />
          <Column field={'CURRENCY_COD'} header={'CURRENCY_COD'} />
          <Column field={'UOM'} header={'UOM'} />
          <Column field={'UNT_COST'} header={'UNT_COST'} />
          <Column field={'CMP_NAM'} header={'CMP_NAM'} />
          <Column field={'TOT_QTY'} header={'TOT_QTY'} />
          <Column field={'OP_NAME'} header={'OP_NAME'} />
          <Column field={'OP_DATE_TIME'} header={'OP_DATE_TIME'} />
          <Column field={'USERname'} header={'USERname'} />
          <Column field={'fullname'} header={'fullname'} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
};

export default Valuation_4658;
