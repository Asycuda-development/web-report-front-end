import { SimpleCard } from '../../components';
import { Box, styled, LinearProgress } from '@mui/material';
import { useEffect, useState, useRef } from 'react';
import { ROWS_PER_PAGE } from '../../utils/constant';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';

const Exemption_4753 = () => {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true);
      const res = await axios.post('/reporting/ExemptionReport4753', {
        startDate: data.startDate,
        endDate: data.endDate,
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
    <SimpleCard title="4753-Exemption">
      <ReportHeaderInputs
        showStartDate
        showEndDate
        showCustomsList
        showHsCode
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
          rowsPerPageOptions={[3, 10, 25, 50, 100]}
          paginator
          stripedRows
          showGridlines
        >
          <Column field={'Autorization_No'} header={'Autorization_No'} />
          <Column field={'ref_no'} header={'ref_no'} />
          <Column field={'ref_date'} header={'ref_date'} />
          <Column field={'type_cert'} header={'type_cert'} />
          <Column field={'val_tot'} header={'val_tot'} />
          <Column field={'rem_val'} header={'rem_val'} />
          <Column field={'wgt_tot'} header={'wgt_tot'} />
          <Column field={'rem_wgt'} header={'rem_wgt'} />
          <Column field={'CNS_COD'} header={'CNS_COD'} />
          <Column field={'reg_no_ctn'} header={'reg_no_ctn'} />
          <Column field={'hscode'} header={'hscode'} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
};

export default Exemption_4753;
