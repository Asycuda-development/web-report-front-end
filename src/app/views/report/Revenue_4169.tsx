import { SimpleCard } from '../../components';
import { Box, styled, LinearProgress } from '@mui/material';
import React, { useEffect, useState, useRef } from 'react';
import { ROWS_PER_PAGE } from '../../utils/constant';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';

function Revenue_4169() {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false);
  const tableRef: any = useRef(null);

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true);
      const res = await axios.post('/reporting/RevenueReport4169', {
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
    label: 'declarant',
    name: 'declarant'
  },{
    label: 'company',
    name: 'company'
},{
    label: 'O_no',
    name: 'O_no'
}]

  return (
    <SimpleCard title="Revenue_4169">
      <ReportHeaderInputs
        showStartDate
        showEndDate
        showPayDate
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
<Column field={'Customs'} header={'Customs'}/>
<Column field={'number_of_sad'} header={'number_of_sad'}/>
<Column field={'amt_040'} header={'amt_040'}/>
<Column field={'amt_041'} header={'amt_041'}/>
<Column field={'amt_042'} header={'amt_042'}/>
<Column field={'amt_043'} header={'amt_043'}/>
<Column field={'amt_044'} header={'amt_044'}/>
<Column field={'amt_045'} header={'amt_045'}/>
<Column field={'amt_046'} header={'amt_046'}/>
<Column field={'amt_047'} header={'amt_047'}/>
<Column field={'amt_048'} header={'amt_048'}/>
<Column field={'amt_049'} header={'amt_049'}/>
<Column field={'Total_Taxes'} header={'Total_Taxes'}/>
<Column field={'amt_011'} header={'amt_011'}/>
<Column field={'amt_012'} header={'amt_012'}/>
<Column field={'amt_013'} header={'amt_013'}/>
<Column field={'amt_014'} header={'amt_014'}/>
<Column field={'amt_015'} header={'amt_015'}/>
<Column field={'amt_016'} header={'amt_016'}/>
<Column field={'amt_017'} header={'amt_017'}/>
<Column field={'amt_018'} header={'amt_018'}/>
<Column field={'ICD'} header={'ICD'}/>
<Column field={'HS_2'} header={'HS_2'}/>
<Column field={'HS2_DESC'} header={'HS2_DESC'}/>
<Column field={'ITEM_VALUE_USD'} header={'ITEM_VALUE_USD'}/>
<Column field={'ITEM_VALUE_AFS'} header={'ITEM_VALUE_AFS'}/>
<Column field={'ITEM_TAX_AMT'} header={'ITEM_TAX_AMT'}/>
<Column field={'Total'} header={'Total'}/>
<Column field={'Transit'} header={'Transit'}/>
<Column field={'ARR'} header={'ARR'}/>
<Column field={'Office'} header={'Office'}/>
        </DataTable>
      </ Box>
    </SimpleCard>
  );
}

export default Revenue_4169