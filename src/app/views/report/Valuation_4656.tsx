import { Box, LinearProgress } from '@mui/material';
import axios from 'axios';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { useEffect, useRef, useState } from 'react';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
import { SimpleCard } from '../../components';
import { ROWS_PER_PAGE } from '../../utils/constant';

const Valuation_4656 = () => {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);

  useEffect(() => { }, []);

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true)
      const res = await axios.post('/reporting/ValuationReport4656', {
        startDate: data.startDate,
        endDate: data.endDate,
        customsCode: data.CustomsCode,
        type: data.customsProcedure,
        ...data
      });

      setReportData(res.data);
    } catch (error) { }
    finally {
      setLoading(false)
    }
  };

  return (
    <SimpleCard title="ValuationReport4656">
      <ReportHeaderInputs
        showStartDate
        showEndDate
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

          <Column field={'ID'} header={'ID'} />
          <Column field={'rnk'} header={'rnk'} />
          <Column style={{ minWidth: "15rem" }} field={'Opration_name'} header={'Opration_name'} />
          <Column style={{ minWidth: "15rem" }} field={'History_DAT'} header={'History_DAT'} />
          <Column style={{ minWidth: "15rem" }} field={'track_date'} header={'track_date'} />
          <Column field={'TSC_Gen_DAT'} header={'TSC_Gen_DAT'} />
          <Column field={'HS_CODE'} header={'HS_CODE'} />
          <Column field={'TSC_CODE'} header={'TSC_CODE'} />
          <Column field={'Before_Max_price'} header={'Before_Max_price'} />
          <Column field={'Before_Min_price'} header={'Before_Min_price'} />
          <Column field={'Max_price'} header={'Max_price'} />
          <Column field={'Min_price'} header={'Min_price'} />
          <Column style={{ minWidth: "15rem" }} field={'Country_name'} header={'Country_name'} />
          <Column style={{ minWidth: "15rem" }} field={'Brand'} header={'Brand'} />
          <Column style={{ minWidth: "30rem" }} field={'DSC'} header={'DSC'} />
          <Column field={'DSC1'} header={'DSC1'} />
          <Column style={{ minWidth: "12rem" }} field={'gds_dsc'} header={'gds_dsc'} />
          <Column field={'Formula'} header={'Formula'} />
          <Column style={{ minWidth: "25rem" }} field={'Formula_dsc'} header={'Formula_dsc'} />
          <Column style={{ minWidth: "15rem" }} field={'linked_value'} header={'linked_value'} />
          <Column style={{ minWidth: "15rem" }} field={'USERNAME'} header={'USERNAME'} />
          <Column style={{ minWidth: "15rem" }} field={'FULLNAME'} header={'FULLNAME'} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
};

export default Valuation_4656;
