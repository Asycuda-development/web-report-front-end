import { SimpleCard } from '../../components';
import { Box, styled, LinearProgress } from '@mui/material';
import { useEffect, useState, useRef } from 'react';
import { ROWS_PER_PAGE } from '../../utils/constant';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';

function DataExchange5051() {
  const [reportData, setReportData] = useState([]);
  const tableRef: any = useRef(null);

  const handleSubmit = async (data: SearchData) => {
    try {
      const res = await axios.post('/reporting/DataExchangeReport5051', {
        ...data,
        type: data.customsProcedure,
        customsCode: data.CustomsCode
      });
      {
        setReportData(res.data);
      }
    } catch (error) {}
  };

  return (
    <SimpleCard title="DataExchange5050">
      <ReportHeaderInputs
        showStartDate
        showEndDate
        showDeclarationDate
        showHsCode
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
          <Column field={'icd'} header={'icd'} />
          <Column field={'Reg_Date'} header={'Reg_Date'} />
          <Column field={'Reg_Date_eng'} header={'Reg_Date_eng'} />
          <Column field={'Rcp_Date'} header={'Rcp_Date'} />
          <Column field={'Rcp_Date_eng'} header={'Rcp_Date_eng'} />
          <Column field={'Reg_No'} header={'Reg_No'} />
          <Column field={'Company_TIN'} header={'Company_TIN'} />
          <Column field={'cmp_nam'} header={'cmp_nam'} />
          <Column field={'hs_code'} header={'hs_code'} />
          <Column field={'dsc'} header={'dsc'} />
          <Column field={'Country_Org'} header={'Country_Org'} />
          <Column field={'Country_Dest'} header={'Country_Dest'} />
          <Column field={'proc'} header={'proc'} />
          <Column field={'type'} header={'type'} />
          <Column field={'truck_Total'} header={'truck_Total'} />
          <Column field={'location'} header={'location'} />
          <Column field={'MOT'} header={'MOT'} />
          <Column field={'Item_Gross_Weight'} header={'Item_Gross_Weight'} />
          <Column field={'Item_Net_Weight'} header={'Item_Net_Weight'} />
          <Column field={'itm_value'} header={'itm_value'} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
}

export default DataExchange5051;
