import { SimpleCard } from '../../components';
import { Box, LinearProgress } from '@mui/material';
import { useState, useRef } from 'react';
import { ROWS_PER_PAGE } from '../../utils/constant';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
import { Toast } from 'primereact/toast';

function DPS_45101() {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false);
  const tableRef: any = useRef(null);
  const toastRef: any = useRef(null);

  const handleSubmit = async (data: SearchData) => {
    try {
      if (data.basedOn && !data.basedOnValue) {
        toastRef.current.show({
          severity: 'error',
          summary: 'Based On Value',
          detail: 'Based On Value is required when Based On is selected, please try again.'
        });
        return
      }
      setLoading(true);
      const res = await axios.post('/reporting/DpsReport45101', {
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
  const basedOnOptions = [{
    label: 'Engine',
    name: 'Engine'
  }, {
    label: 'VIN_Number',
    name: 'VIN'
  }]

  return (
    <SimpleCard title="DPS_45101">
      <ReportHeaderInputs
        showStartDate
        showEndDate
        ShowTinNumber
        showExemptionType
        showCustomsProcedure
        showBasedOn
        basedOnOptions={basedOnOptions}
        showRegDate
        showAssesDate
        showPayDate
        showOperationDate
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
          <Column field={'status'} header={'status'} />
          <Column field={'borderCuo'} header={'Border office'} />
          <Column field={'destCuo'} header={'Customs Office'} />
          <Column field={'decCod'} header={'Dec Code'} />
          <Column style={{ minWidth: "15rem" }} field={'decNam1'} header={'Dec Name'} />
          <Column field={'refNo'} header={'Ref No'} />
          <Column field={'RegNo'} header={'Register_No'} />
          <Column field={'RegDate'} header={'Register_date'} />
          <Column field={'hscode'} header={'HSCODE'} />
          <Column style={{ minWidth: "30rem" }} field={'mark1'} header={'mark1'} />
          <Column style={{ minWidth: "20rem" }} field={'mark2'} header={'mark2'} />
          <Column style={{ minWidth: "20rem" }} field={'decNam'} header={'Brokers_name'} />
          <Column style={{ minWidth: "20rem" }} field={'CompanyTin'} header={'CompanyTin'} />
          <Column style={{ minWidth: "20rem" }} field={'cmpNam'} header={'cmpNam'} />
          <Column style={{ minWidth: "20rem" }} field={'finNam'} header={'finNam'} />
          <Column style={{ minWidth: "20rem" }} field={'model'} header={'model'} />
          <Column field={'engPow'} header={'engPow'} />
          <Column field={'color'} header={'color'} />
          <Column field={'engNo'} header={'engNo'} />
          <Column field={'shasi'} header={'shasi'} />
          <Column field={'RevenueTaxes'} header={'RevenueTaxes'} />
          <Column field={'RcptNumber'} header={'RcptNumber'} />
          <Column field={'RcptDate'} header={'RcptDate'} />
          <Column field={'rgdat'} header={'rgdat'} />
          <Column field={'ValueAfs'} header={'ValueAfs'} />
        </DataTable>
      </ Box>
      <Toast ref={toastRef} />
    </SimpleCard>
  );
}

export default DPS_45101