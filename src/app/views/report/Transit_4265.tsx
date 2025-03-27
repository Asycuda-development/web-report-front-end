import { Box, LinearProgress } from '@mui/material';
import axios from 'axios';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { useEffect, useRef, useState } from 'react';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
import { SimpleCard } from '../../components';
import { ROWS_PER_PAGE } from '../../utils/constant';

const Transit_4265 = () => {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);


  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true)
      const res = await axios.post('/reporting/TransitReport4265', {
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
    <SimpleCard title="Transit Report 4265">
      <ReportHeaderInputs
        showStartDate
        showEndDate
        showCustomsList
        showRegDate
        showDepartureDate
        showTransitType2
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
          <Column field={'IDE_CUO_DPA_NAM'} header={'IDE_CUO_DPA_NAM '} />
          <Column field={'IDE_CUO_DES_NAM'} header={'IDE_CUO_DES_NAM'} />
          <Column field={'IDE_TYP_TRS'} header={'IDE_TYP_TRS'} />
          <Column field={'STATUS'} header={'STATUS'} />
          <Column field={'T1_cnt'} header={'T1_cnt'} />
          {/* <Column field={'tad_tot'} header={'Customs Value'} /> */}
        </DataTable>
      </Box>
    </SimpleCard>
  );
};

export default Transit_4265;
