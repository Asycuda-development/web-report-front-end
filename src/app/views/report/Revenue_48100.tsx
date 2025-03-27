import { Box, LinearProgress, styled } from '@mui/material';
import axios from 'axios';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { useEffect, useRef, useState } from 'react';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
import { SimpleCard } from '../../components';
import { ROWS_PER_PAGE } from '../../utils/constant';

const Revenue_48100 = () => {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true)
      const res = await axios.post('/reporting/RevenueReport48100', {
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
    <SimpleCard title="Revenue Report 48100">
      <ReportHeaderInputs
        showStartDate
        showEndDate
        showCustomsList
        showDepartureDate
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
          <Column field={'status'} header={'STATUS '} />
          <Column field={'cuocod'} header={'CUOCODE'} />
          <Column field={'regdat'} header={'REG_DATE'} />
          <Column field={'regnbr'} header={'REG_NO'} />
          <Column field={'perlna'} header={'PERLNA'} />
          <Column field={'perfna'} header={'PREFNA'} />
          <Column field={'perplc'} header={'PERPLC'} />
          <Column field={'pernad'} header={'PERNAD'} />
          <Column field={'peradr'} header={'PERADR'} />
          <Column field={'percit'} header={'PERCIT'} />
          <Column field={'percna'} header={'PERCNA'} />
          <Column field={'per_Job'} header={'PER_JOB'} />
          <Column field={'pasnbr'} header={'PASNBR'} />
          <Column field={'issdat'} header={'ISSDAT'} />
          <Column field={'isscit'} header={'ISSCIT'} />
          <Column field={'isscna'} header={'ISSCNA'} />
          <Column field={'perbsn'} header={'PERBSN'} />
          <Column field={'cshpro'} header={'CSHPRO'} />
          <Column field={'cshuse'} header={'CSHUSE'} />
          <Column field={'motdsc'} header={'MOTDSC'} />
          <Column field={'depcty'} header={'DEPCTY'} />
          <Column field={'depnam'} header={'DEPNAM'} />
          <Column field={'depdat'} header={'DEPDAT'} />
          <Column field={'tracty'} header={'TRACTY'} />
          <Column field={'tranam'} header={'TRANAM'} />
          <Column field={'tradat'} header={'TRADAT'} />
          <Column field={'arrcty'} header={'ARRCTY'} />
          <Column field={'arrnam'} header={'ARRNAM'} />
          <Column field={'arrdat'} header={'ARRDAT'} />
          <Column field={'cmpnam'} header={'CMPNAM'} />
          <Column field={'cmocod'} header={'CMPCOD'} />
          <Column field={'refnbr'} header={'REFNBR'} />
          <Column field={'cuodat'} header={'CUODAT'} />
          <Column field={'amttot'} header={'AMTTOT'} />
          <Column field={'amtdsc'} header={'AMTDSC'} />
          <Column field={'amtoth'} header={'AMTOTH'} />
          <Column field={'amtval'} header={'AMTVAL'} />
          <Column field={'curcod'} header={'CURCOD'} />
          <Column field={'curdsc'} header={'CURDSC'} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
};

export default Revenue_48100;
