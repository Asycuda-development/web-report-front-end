import { SimpleCard } from '../../components';
import { Box, LinearProgress } from '@mui/material';
import { useState, useRef } from 'react';
import { ROWS_PER_PAGE } from '../../utils/constant';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';

const Transit_4272 = () => {
  const [reportData, setReportData] = useState([]);
  const tableRef: any = useRef(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true);
      const res = await axios.post('/reporting/TransitReport4272', {
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
    <SimpleCard title="4272- Transit">
      <ReportHeaderInputs
        showStartDate
        showEndDate
        showRegDate
        showDestinationCustomsList
        showDepartureCustomsList
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
          <Column field={'dept_Off_Name'} header={'dept_Off_Name'} />
          <Column field={'destn_Name'} header={'destn_Name'} />
          <Column field={'reg_No'} header={'reg_No'} />
          <Column field={'reg_Date'} header={'reg_Date'} />
          <Column field={'arr_Date'} header={'arr_Date'} />
          <Column field={'destn_City'} header={'destn_City'} />
          <Column field={'transit_Type'} header={'transit_Type'} />
          <Column field={'t1_Declarant_Code'} header={'t1_Declarant_Code'} />
          <Column field={'T1_Declarant_Name'} header={'T1_Declarant_Name'} />
          <Column field={'cns_Code'} header={'cns_Code'} />
          <Column field={'cns_Name'} header={'cns_Name'} />
          <Column field={'Package_Mark'} header={'Package_Mark'} />
          <Column field={'hscode'} header={'hscode'} />
          <Column field={'gross_Mass'} header={'gross_Mass'} />
          <Column field={'Net_Mass'} header={'Net_Mass'} />
          <Column field={'Good_Description2'} header={'Good_Description2'} />
          <Column field={'dec_Ref'} header={'dec_Ref'} />
          <Column field={'cty_Export_name'} header={'cty_Export_name'} />
          <Column field={'cty_Destn_Nam'} header={'cty_Destn_Nam'} />
          <Column field={'mod_of_Transport'} header={'mod_of_Transport'} />
          <Column field={'principal_Code'} header={'principal_Code'} />
          <Column field={'principal_Name'} header={'principal_Name'} />
          <Column field={'Nationality_Of_Transport'} header={'Nationality_Of_Transpo'} />
          <Column field={'seal_affixed_No'} header={'seal_affixed_No'} />
          <Column field={'seal_Identity'} header={'seal_Identity'} />
          <Column field={'cont_Flg'} header={'cont_Flg'} />
          <Column field={'status'} header={'status'} />
          <Column field={'transit_Officer'} header={'transit_Officer'} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
};

export default Transit_4272;
