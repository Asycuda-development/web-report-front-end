import { Box, LinearProgress, styled } from '@mui/material';
import axios from 'axios';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { useEffect, useRef, useState } from 'react';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
import { SimpleCard } from '../../components';
import { ROWS_PER_PAGE } from '../../utils/constant';

const Revenue_4160 = () => {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true)
      const res = await axios.post('/reporting/RevenueReport4160', {
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
    <SimpleCard title="Revenue Report 4160">
      <ReportHeaderInputs
        showStartDate
        showEndDate
        showCustomsList
        showCustomsProcedure
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
        >
          <Column style={{ minWidth: "12rem" }} field={'sadN'} header={'SAD_NO'} />
          <Column field={'regDat'} header={'Reg_Date'} />
          <Column field={'rcptNo'} header={'Reciept_NO'} />
          <Column style={{ minWidth: "5rem" }} field={'office'} header={'Office'} />
          <Column field={'rcpDat'} header={'Rcpt_Date'} />
          <Column style={{ minWidth: "12rem" }} field={'cmpCod'} header={'Company_Code'} />
          <Column style={{ minWidth: "20rem" }} field={'cmpNam'} header={'Company_Name'} />
          <Column style={{ minWidth: "12rem" }} field={'cmpad3'} header={'cmpad3'} />
          <Column style={{ minWidth: "10rem" }} field={'decCod'} header={'Declarant_Code'} />
          <Column style={{ minWidth: "20rem" }} field={'decNam'} header={'Declarant_Name'} />
          <Column field={'finCod'} header={'SAD_Financial_Code'} />
          <Column style={{ minWidth: "20rem" }} field={'finNam'} header={'SAD_Financial_Name'} />
          <Column field={'declarationValueCurrency'} header={'DEC_VALUE_CURRENCY'} />
          <Column field={'declarationValueAfs'} header={'Declaration_Value_AFs'} />
          <Column style={{ minWidth: "12rem" }} field={'taxTotalIm'} header={'Total_Tax'} />
          <Column field={'amt_011'} header={'amt_011'} />
          <Column field={'amt_012'} header={'amt_012'} />
          <Column field={'amt_013'} header={'amt_013'} />
          <Column field={'amt_015'} header={'amt_015'} />
          <Column field={'amt_017'} header={'amt_017'} />
          <Column field={'amt_018'} header={'amt_018'} />
          <Column field={'amt_041'} header={'amt_041'} />
          <Column field={'amt_042'} header={'amt_042'} />
          <Column field={'amt_043'} header={'amt_043'} />
          <Column field={'amt_044'} header={'amt_044'} />
          <Column field={'amt_045'} header={'amt_045'} />
          <Column field={'amt_046'} header={'amt_046'} />
          <Column field={'amt_047'} header={'amt_047'} />
          <Column field={'amt_048'} header={'amt_048'} />
          <Column field={'amt_049'} header={'amt_049'} />
          <Column field={'amt_75'} header={'amt_75'} />
          <Column field={'amt_88'} header={'amt_88'} />
          <Column field={'amt_80'} header={'amt_80'} />
          <Column field={'amt_014'} header={'amt_014'} />
          <Column field={'amt_040'} header={'amt_040'} />
          <Column field={'amt_019'} header={'amt_019'} />
          <Column field={'amt_099'} header={'amt_099'} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
};

export default Revenue_4160;
