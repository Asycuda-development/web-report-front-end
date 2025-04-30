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
          <Column field={'cmpCod'} header={'COMPANAY_CODE'} />
          <Column field={'cmpNam'} header={'COMPANY_NAME'} />
          <Column field={'cmpAdr'} header={'COMPANY_ADDR'} />
          <Column field={'cmpAd2'} header={'COMPANY_ADDR2'} />
          <Column field={'cmpAd3'} header={'COMPANY_ADDR3'} />
          <Column field={'cmpAd4'} header={'COMPANY_ADDR4'} />
          <Column field={'cmpTel'} header={'COMPANY_TELL'} />
          <Column field={'valid_F'} header={'VALIDE_FROM'} />
          <Column field={'valid_To'} header={'VALIDE_TO'} />
          <Column field={' cmpSta'} header={' COMPANY_STATUS'} />
        </DataTable>
      </ Box>
    </SimpleCard>
  );
}

export default DPS_4583