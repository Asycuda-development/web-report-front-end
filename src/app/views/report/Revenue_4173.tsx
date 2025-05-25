import { Box, LinearProgress, styled } from '@mui/material';
import axios from 'axios';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { useEffect, useRef, useState } from 'react';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
import { SimpleCard } from '../../components';
import { ROWS_PER_PAGE } from '../../utils/constant';

const Revenue_4173 = () => {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);

  useEffect(() => { }, []);

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true)
      const res = await axios.post('/reporting/RevenueReport4173', {
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
    <SimpleCard title="Revenue Report 4173">
      <ReportHeaderInputs
        showStartDate
        showEndDate
        showCustomsList
        showDestinationCustomsList
        showRegDate
        showArrivalDate
        showValidationDate
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
          <Column field={'deptOffNam'} header={'Departure Office Name '} />
          <Column field={'destOff'} header={'Destination Office Name'} />
          <Column field={'expCty'} header={'Country of Export Code'} />
          <Column field={'destCty'} header={'Country of Destination Code'} />
          <Column field={'transitType'} header={'Transit Type'} />
          <Column field={'hsCod'} header={'HSCode'} />
          <Column field={'dsc'} header={'Description'} />
          <Column field={'regNo'} header={'Reg_NO'} />
          <Column field={'regDat'} header={'Reg_Date'} />
          <Column field={'cod'} header={'Tax Code'} />
          <Column field={'nam'} header={'Tax DSC'} />
          <Column field={'tot'} header={'Total Payment'} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
};

export default Revenue_4173;
