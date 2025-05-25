import { SimpleCard } from '../../components';
import { Box, LinearProgress } from '@mui/material';
import { useState, useRef } from 'react';
import { ROWS_PER_PAGE } from '../../utils/constant';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';

const Transit_4283 = () => {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true);
      const res = await axios.post('/reporting/TransitReport4283', {
        type: data.customsProcedure,
        customsCode: data.CustomsCode,
        ...data
      });
      if (res.data.length === 0) {
        setReportData([]);
      } else {
        setReportData(res.data);
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <SimpleCard title="Transit Report 4283">
      <ReportHeaderInputs
        showStartDate
        showEndDate
        showAssesDate
        showArrivalDate
        showDestinationCustomsList
        showDepartureCustomsList
        showTransitType
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
          <Column field={'transit_Type'} header={'Transit_type'} />
          <Column field={'dept_off_Name'} header={'	Departure_Off_Name'} />
          <Column field={'destn_Name'} header={'destnDestination_off_Name_Name'} />
          <Column field={'status'} header={'status'} />
          <Column field={'op_Date'} header={'op_Date'} />
          <Column field={'reg_No'} header={'Reg_No'} />
          <Column field={'reg_Date'} header={'Reg_Date'} />
          <Column field={'val_No'} header={'val_No'} />
          <Column field={'val_Date'} header={'val_Date'} />
          <Column field={'arr_Date'} header={'arr_Date'} />
          <Column field={'declarant_Code'} header={'declarant_Code'} />
          <Column field={'declarant_Name'} header={'declarant_Name'} />
          <Column field={'cns_Code'} header={'cns_Code'} />
          <Column field={'cns_Name'} header={'cns_Name'} />
          <Column field={'principal_Code'} header={'principal_Code'} />
          <Column field={'principal_Name'} header={'principal_Name'} />
          <Column field={'cty_Export_Name'} header={'cty_Export_Name'} />
          <Column field={'cty_Destn_Name'} header={'cty_Destn_Name'} />
          <Column field={'gross_Mass'} header={'gross_Mass'} />
          <Column field={'Net_Mass'} header={'Net_Mass'} />
          <Column field={'hscode'} header={'Hscode'} />
          <Column field={'Good_Description2'} header={'Good_Description2'} />
          <Column field={'Good_Description3'} header={'Good_Description3'} />
          <Column field={'Customs_Prc'} header={'Customs_Prc'} />
          <Column field={'Dep_Date'} header={'Dep_Date'} />
          <Column field={'exp_Code'} header={'exp_Code'} />
          <Column field={'exp_Nam'} header={'exp_Nam'} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
};

export default Transit_4283;
