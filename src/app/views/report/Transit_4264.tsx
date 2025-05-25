import { SimpleCard } from '../../components';
import { Box, styled, LinearProgress } from '@mui/material';
import React, { useEffect, useState, useRef } from 'react';
import { ROWS_PER_PAGE } from '../../utils/constant';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';

const Transit_4264 = () => {
  const [reportData, setReportData] = useState([]);
  const tableRef: any = useRef(null);

  const handleSubmit = async (data: SearchData) => {
    try {
      const res = await axios.post('/reporting/TransitReport4264', {
        type: data.customsProcedure,
        customsCode: data.CustomsCode,
        ...data
      });
      console.log(res);
      if (res.data.length === 0) {
        setReportData([]);
      } else {
        setReportData(res.data);
      }
    } catch (error) {}
  };

  return (
    <SimpleCard title="4264- Transit">
      <ReportHeaderInputs
        showStartDate
        showEndDate
        showDepartureCustomsList
        showOperationDate
        showUserName
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
          <Column field={'Transit_Type'} header={'Transit_Type'} />
          <Column field={'Reg_No'} header={'Reg_No'} />
          <Column field={'Reg_Date'} header={'Reg_Date'} />
          <Column field={'User_Name'} header={'User_Name'} />
          <Column field={'Dep_Office'} header={'Dep_Office'} />
          <Column field={'Dest_Office'} header={'Dest_Office'} />
          <Column field={'Operation_Name'} header={'Operation_Name'} />
          <Column field={'Status'} header={'Status'} />
          <Column field={'Operation_Date'} header={'Operation_Date'} />
          <Column field={'CMP_Cod'} header={'CMP_Cod'} />
          <Column field={'CMP_Name'} header={'CMP_Name'} />
          <Column field={'DEC_Name'} header={'DEC_Name'} />
          <Column field={'dec_Cod'} header={'dec_Cod'} />
          <Column field={'del_Cod'} header={'del_Cod'} />
          <Column field={'del_Nam'} header={'del_Nam'} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
};

export default Transit_4264;
