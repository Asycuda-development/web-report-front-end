import { SimpleCard } from '../../components';
import { Box, styled, LinearProgress } from '@mui/material';
import { useEffect, useState, useRef } from 'react';
import { ROWS_PER_PAGE } from '../../utils/constant';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';

const Exemption_4754 = () => {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true);
      const res = await axios.post('/reporting/ExemptionReport4754', {
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
    <SimpleCard title="4754-Exemption">
      <ReportHeaderInputs
        showStartDate
        showEndDate
        showCustomsList
        showStatusExemption
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
          <Column field={'ref_no'} header={'Reference_NO'} style={{ textAlign: 'center' }} />
          <Column field={'ref_date'} header={'ref_date'} />
          <Column field={'status'} header={'status'} />
          <Column field={'cmp_cod'} header={'cmp_cod'} />
          <Column
            field={'cmp_desc'}
            header={'Company_Desc'}
            style={{ minWidth: '15rem', textAlign: 'center' }}
          />
          <Column field={'contractor_cod'} header={'contractor_cod'} />
          <Column field={'contractor_nam'} header={'contractor_nam'} />
          <Column field={'clr_office'} header={'clr_office'} />
          <Column field={'wgt_tot'} header={'wgt_tot'} />
          <Column field={'written_off_wgt'} header={'written_off_wgt'} />
          <Column field={'rem_wgt'} header={'rem_wgt'} />
          <Column field={'sad_number'} header={'sad_number'} />
          <Column field={'hscode'} header={'hscode'} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
};

export default Exemption_4754;
