import { SimpleCard } from '../../components';
import { Box, styled, LinearProgress } from '@mui/material';
import React, { useEffect, useState, useRef } from 'react';
import { ROWS_PER_PAGE } from '../../utils/constant';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';

function DPS_45102() {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false);
  const tableRef: any = useRef(null);

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true);
      const res = await axios.post('/reporting/DpsReport45102', {
        ...data,
        type: data.customsProcedure,
        customsCode: data.CustomsCode
      });
      if (res.data.length === 0) {
        setLoading(false)
        setReportData([]);
      } else {
        setReportData(res.data);
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  const basedOnOptions = [{
    label: 'Engine',
    name: 'Engine'
  },{
    label: 'VIN_Number',
    name: 'VIN'
}]

  return (
    <SimpleCard title="DPS_45102">
      <ReportHeaderInputs
        showStartDate
        showEndDate
        showRegDate
        showCustomsList
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
          emptyMessage={'No Data Available'}
        >
        <Column field={'New_Customs'} header={'New_Customs'}/>
        <Column field={'newSadType'} header={'newSadType'}/>
        <Column field={'newSer'} header={'newSer'}/>
        <Column field={'new_I'} header={'new_I'}/>
        <Column field={'new_I_Date'} header={'new_I_Date'}/>
        <Column field={'newSer1'} header={'newSer1'}/>
        <Column field={' other_I'} header={' other_I'}/>
        <Column field={' new_I_Date_1'} header={' new_I_Date_1'}/>
        </DataTable>
      </ Box>
    </SimpleCard>
  );
}

export default DPS_45102