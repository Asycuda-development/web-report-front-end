import { SimpleCard } from '../../components';
import { Box, styled, LinearProgress } from '@mui/material';
import { useEffect, useState, useRef } from 'react';
import { ROWS_PER_PAGE } from '../../utils/constant';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';

const Revenue_4155 = () => {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true);
      const res = await axios.post('/reporting/RevenueReport4155', {
        startDate: data.startDate,
        endDate: data.endDate,
        customsCode: data.CustomsCode,
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
    <SimpleCard title="Revenue Report 4155">
      <ReportHeaderInputs
        showStartDate
        showEndDate
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
          rowsPerPageOptions={[3, 10, 25, 50, 100]}
          paginator
          stripedRows
          showGridlines
        >
          <Column field={'Customs'} header={'Customs'} />
          <Column field={'Reg_No'} header={'SAD_Reg_NO'} />
          <Column field={'reg_dat'} header={'SAD_Reg_Date'} />
          <Column field={'dec_cod'} header={'Declarant_Code'} />
          <Column field={'Declarant_Name'} header={'Declarant Name'} />
          <Column field={'CMP_Code'} header={'Consignee_Code'} />
          <Column field={'CMP_Name'} header={'Consignee_Name'} />
          <Column field={'fis_code'} header={'Financial_Code'} />
          <Column field={'Fis_Name'} header={'Financial_Name'} />
          <Column field={'itm_nbr'} header={'Item No'} />
          <Column field={'itm_tot'} header={'Item Total'} />
          <Column field={'gross_wgt'} header={'Gross Weight'} />
          <Column field={'net_wgt'} header={'Net Weight'} />
          <Column field={'hscode'} header={'HSCODE'} />
          <Column field={'desc3'} header={'Description3'} />
          <Column field={'nat_proc'} header={'Nat Proc code'} />
          <Column field={'item_val_afs'} header={'Item Value Afs'} />
          <Column field={'item_val_fcx'} header={'Item Value Fcurrency'} />
          <Column field={'SAD_currency_rate'} header={'SAD_Currency_Rate'} />
          <Column field={'currency_cod'} header={'currency_cod'} />
          <Column field={'amt_011'} header={'Amt_011'} />
          <Column field={'amt_012'} header={'Amt_012'} />
          <Column field={'amt_013'} header={'Amt_013'} />
          <Column field={'amt_015'} header={'Amt_015'} />
          <Column field={'amt_017'} header={'Amt_017'} />
          <Column field={'amt_018'} header={'Amt_018'} />
          <Column field={'amt_041'} header={'Amt_041'} />
          <Column field={'amt_042'} header={'Amt_042'} />
          <Column field={'amt_043'} header={'Amt_043'} />
          <Column field={'amt_044'} header={'Amt_044'} />
          <Column field={'amt_045'} header={'Amt_045'} />
          <Column field={'amt_046'} header={'Amt_046'} />
          <Column field={'amt_047'} header={'Amt_047'} />
          <Column field={'amt_048'} header={'Amt_048'} />
          <Column field={'amt_049'} header={'Amt_049'} />
          <Column field={'amt_88'} header={'Amt_88'} />
          <Column field={'amt_80'} header={'Amt_80'} />
          <Column field={'amt_019'} header={'Amt_019'} />
          <Column field={'sum_tot'} header={'Total'} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
};

export default Revenue_4155;
