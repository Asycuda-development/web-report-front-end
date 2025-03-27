import { Box, LinearProgress } from '@mui/material';
import axios from 'axios';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { useEffect, useRef, useState } from 'react';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
import { SimpleCard } from '../../components';
import { ROWS_PER_PAGE } from '../../utils/constant';


const Valuation_4654 = () => {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false);
  const tableRef: any = useRef(null);

  useEffect(() => { }, []);

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true)
      const res = await axios.post('/reporting/ValuationReport4654', {
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
    <SimpleCard title="ValuationReport4654">
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
          <Column style={{ minWidth: "12rem" }} field={'office'} header={'office '} />
          <Column style={{ minWidth: "12rem" }} field={'Dec_type'} header={'Dec_type'} />
          <Column style={{ minWidth: "15rem" }} field={'Lan'} header={'Lan'} />
          <Column field={'Reg_No'} header={'Reg_No'} />
          <Column field={'Reg_Date'} header={'Reg_Date'} />
          <Column field={'Company_TIN'} header={'Company_TIN'} />
          <Column style={{ minWidth: "20rem" }} field={'cmp_nam'} header={'cmp_nam'} />
          <Column field={'Broker_TIN'} header={'Broker_TIN'} />
          <Column style={{ minWidth: "15rem" }} field={'dec_nam'} header={'dec_nam'} />
          <Column field={'HS_CODE'} header={'HS_CODE'} />
          <Column style={{ minWidth: "15rem" }} field={'mark1'} header={'mark1'} />
          <Column style={{ minWidth: "30rem" }} field={'Tariff_dec'} header={'Tariff_dec'} />
          <Column field={'TSC_CODE'} header={'TSC_CODE'} />
          <Column style={{ minWidth: "30rem" }} field={'TSC_DSC'} header={'TSC_DSC'} />
          <Column field={'Pack_Total'} header={'Pack_Total'} />
          <Column style={{ minWidth: "15rem" }} field={'Pack_Name'} header={'Pack_Name'} />
          <Column style={{ minWidth: "25rem" }} field={'Country_name'} header={'Country_name'} />
          <Column style={{ minWidth: "10rem" }} field={'Item_No'} header={'Item_No'} />
          <Column field={'Item_Gross_Weight'} header={'Item_Gross_Weight'} />
          <Column field={'Item_Net_Weight'} header={'Item_Net_Weight'} />
          <Column field={'Item_Value'} header={'Item_Value'} />
          <Column field={'Item_tax'} header={'Item_tax'} />
          <Column field={'TSC_Status'} header={'TSC_Status'} />

        </DataTable>
      </Box>
    </SimpleCard>
  );
};

export default Valuation_4654;
