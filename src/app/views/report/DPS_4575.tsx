import { SimpleCard } from '../../components';
import { Box, styled, LinearProgress } from '@mui/material';
import { useEffect, useState, useRef } from 'react';
import { ROWS_PER_PAGE } from '../../utils/constant';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
import { Toast } from 'primereact/toast';

function DPS_4575() {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
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
      const res = await axios.post('/reporting/DpsReport4575', {
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
  },
  {
    label: 'VIN',
    name: 'VIN'
  }]
  return (
    <SimpleCard title="DPS_4575">
      <ReportHeaderInputs
        showStartDate
        showEndDate
        showExemptionType
        showCustomsProcedure
        showAssesDate
        showPayDate
        showBasedOn
        basedOnOptions={basedOnOptions}
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
          <Column field={'borderCuo'} header={'Border_Custom'} />
          <Column field={'destCuo'} header={'Destination Custom'} />
          <Column field={'decCod'} header={'Declarant_Cod'} />
          <Column field={'decNam1'} header={'Declarant_Cod'} />
          <Column field={'refNo'} header={'Ref_NO'} />
          <Column field={'regNo'} header={'Registeration_NO'} />
          <Column field={'regDate'} header={'Reg_Date'} />
          <Column field={'mark1'} header={'Mark1'} />
          <Column field={'mark2'} header={'Mark2'} />
          <Column field={'decNam'} header={'Declarant_Name'} />
          <Column field={'companyTin'} header={'Company_Cod'} />
          <Column field={'cmpNam'} header={'Company_Name'} />
          <Column field={'finNam'} header={'Fin_Name'} />
          <Column field={'rgdat'} header={'rg_date'} />
          <Column field={'color'} header={'Color'} />
          <Column field={'gaz'} header={'Gaz'} />
          <Column field={'finName'} header={'Fin Name'} />
          <Column field={'passenger'} header={'Passenger'} />
          <Column field={'engNo'} header={'Eng_NO'} />
          <Column field={'shasi'} header={'Shsi'} />
          <Column field={'silandr'} header={'Siladar'} />
          <Column field={'doors'} header={'Door'} />
          <Column field={'valueAfs'} header={'Value_AF'} />
          <Column field={'revenueTaxes'} header={'Revenue_Tax'} />
          <Column field={'status'} header={'Status'} />
          <Column field={'hscode'} header={'HS_Cod'} />
          <Column field={'rcptDate'} header={'Rcp_Date'} />
          <Column field={'rcptNumber'} header={'Rcp_NO'} />
          <Column field={'model'} header={'Model'} />
        </DataTable>
      </Box>
      <Toast ref={toastRef} />
    </SimpleCard>
  );
}

export default DPS_4575;
