import { Box, LinearProgress, styled } from '@mui/material';
import axios from 'axios';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { useEffect, useRef, useState } from 'react';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
import { SimpleCard } from '../../components';
import { ROWS_PER_PAGE } from '../../utils/constant';

const Revenue_4163 = () => {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true)
      const res = await axios.post('/reporting/RevenueReport4163', {
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
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <SimpleCard title="RevenueReport4163">
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
          <Column field={'ideCuo'} header={'IDE_CUO '} />
          <Column field={'declarationValue'} header={'DECLARATION_VALUE'} />
          <Column field={'declarationTaxes'} header={'DECLARATION_TAXES'} />
          <Column field={'sadTotal'} header={'SAD_TOTAL'} />
          <Column field={'lorryTotal'} header={'LORRY_TOTAL'} />
          <Column field={'valuePerDeclaration'} header={'VALUE_PER_DECLARATION'} />
          <Column field={'dutyPerDeclaration'} header={'DUTY_PER_DECLARATION'} />
          <Column field={'valuePerLorry'} header={'VALUE_PER_LORRY'} />
          <Column field={'dutyPerLorry'} header={'DUTY_PER_LORRY'} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
};

export default Revenue_4163;
