import { Box, LinearProgress } from '@mui/material';
import axios from 'axios';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { useRef, useState } from 'react';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
import { SimpleCard } from '../../components';
import { ROWS_PER_PAGE } from '../../utils/constant';

function DPS_4583() {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false);
  const tableRef: any = useRef(null);

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true);
      const res = await axios.post('/reporting/DpsReport4583', {
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

  return (
    <SimpleCard title="DPS_4583">
      <ReportHeaderInputs
        showStartDate
        showEndDate
        showStatus
        ShowTinNumber
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
<Column field={'cmpCod'} header={'cmpCod'}/>
<Column field={'cmpNam'} header={'cmpNam'}/>
<Column field={'cmpAdr'} header={'cmpAdr'}/>
<Column field={'cmpAd2'} header={'cmpAd2'}/>
<Column field={'cmpAd3'} header={'cmpAd3'}/>
<Column field={'cmpAd4'} header={'cmpAd4'}/>
<Column field={'cmpTel'} header={'cmpTel'}/>
<Column field={'valid_F'} header={'valid_F'}/>
<Column field={'valid_To'} header={'valid_To'}/>
<Column field={' cmpSta'} header={' cmpSta'} />
        </DataTable>
      </ Box>
    </SimpleCard>
  );
}

export default DPS_4583