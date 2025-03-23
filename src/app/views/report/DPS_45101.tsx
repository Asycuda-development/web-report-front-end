import { SimpleCard } from '../../components';
import { Box, styled, LinearProgress } from '@mui/material';
import React, { useEffect, useState, useRef } from 'react';
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
          <Column field={'borderCuo'} header={'borderCuo'} />
          <Column field={'destCuo'} header={'destCuo'} />
          <Column field={'decCod'} header={'decCod'} />
          <Column style={{ minWidth: "15rem" }} field={'decNam1'} header={'decNam1'} />
          <Column field={'refNo'} header={'refNo'} />
          <Column field={'RegNo'} header={'RegNo'} />
          <Column field={'RegDate'} header={'RegDate'} />
          <Column style={{ minWidth: "30rem" }} field={'mark1'} header={'mark1'} />
          <Column style={{ minWidth: "20rem" }} field={'mark2'} header={'mark2'} />
          <Column style={{ minWidth: "20rem" }} field={'decNam'} header={'decNam'} />
          <Column style={{ minWidth: "20rem" }} field={'CompanyTin'} header={'CompanyTin'} />
          <Column style={{ minWidth: "20rem" }} field={'cmpNam'} header={'cmpNam'} />
          <Column style={{ minWidth: "20rem" }} field={'finNam'} header={'finNam'} />
          <Column field={'rgdat'} header={'rgdat'} />
          <Column field={'color'} header={'color'} />
          <Column style={{ minWidth: "20rem" }} field={'finName'} header={'finName'} />
          <Column field={'engNo'} header={'engNo'} />
          <Column field={'shasi'} header={'shasi'} />
          <Column field={'ValueAfs'} header={'ValueAfs'} />
          <Column field={'RevenueTaxes'} header={'RevenueTaxes'} />
          <Column field={'status'} header={'status'} />
          <Column field={'hscode'} header={'hscode'} />
          <Column field={'RcptDate'} header={'RcptDate'} />
          <Column field={'RcptNumber'} header={'RcptNumber'} />
          <Column field={'engPow'} header={'engPow'} />
          <Column style={{ minWidth: "20rem" }} field={'model'} header={'model'} />
        </DataTable>
      </ Box>
      <Toast ref={toastRef} />
    </SimpleCard>
  );
}

export default DPS_45101