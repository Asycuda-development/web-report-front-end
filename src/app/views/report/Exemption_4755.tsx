import { SimpleCard } from '../../components';
import { Box, styled, LinearProgress } from '@mui/material';
import { useEffect, useState, useRef } from 'react';
import { ROWS_PER_PAGE } from '../../utils/constant';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';

const Exemption_4755 = () => {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true);
      const res = await axios.post('/reporting/ExemptionReport4755', {
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
    <SimpleCard title="4755-Exemption">
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
          <Column field={'Autorization_No'} header={'Autorization_No'} />
          <Column field={'cert_reg_dat'} header={'cert_reg_dat'} />
          <Column field={'issue_off'} header={'issue_off'} />
          <Column field={'issue_off_nam'} header={'issue_off_nam'} />
          <Column field={'issue_year'} header={'issue_year'} />
          <Column field={'valid_from'} header={'valid_from'} />
          <Column field={'valid_to'} header={'valid_to'} />
          <Column field={'ref_no'} header={'ref_no'} />
          <Column field={'ref_date'} header={'ref_date'} />
          <Column field={'subc'} header={'subc'} />
          <Column field={'subc_nam'} header={'subc_nam'} />
          <Column field={'cmp_cod'} header={'cmp_cod'} />
          <Column field={'cmp_desc'} header={'cmp_desc'} />
          <Column field={'contractor_cod'} header={'contractor_cod'} />
          <Column field={'contractor_nam'} header={'contractor_nam'} />
          <Column field={'type_cert;'} header={'type_cert;'} />
          <Column field={'nfc_cod'} header={'nfc_cod'} />
          <Column field={'issu_auto'} header={'issu_auto'} />
          <Column field={'Border_office'} header={'Border_office'} />
          <Column field={'clr_office'} header={'clr_office'} />
          <Column field={'proc_cod'} header={'proc_cod'} />
          <Column field={'acc_cod'} header={'acc_cod'} />
          <Column field={'val_tot'} header={'val_tot'} />
          <Column field={'wgt_tot'} header={'wgt_tot'} />
          <Column field={'rem_val'} header={'rem_val'} />
          <Column field={'rem_wgt'} header={'rem_wgt'} />
          <Column field={'hscode'} header={'hscode'} />
          <Column field={'HS_DESC'} header={'HS_DESC'} />
          <Column field={'itm_val_usd'} header={'itm_val_usd'} />
          <Column field={'itm_val_afs'} header={'itm_val_afs'} />
          <Column field={'net_wgt'} header={'net_wgt'} />
          <Column field={'gross_wgt'} header={'gross_wgt'} />
          <Column field={'itm_um1_nam'} header={'itm_um1_nam'} />
          <Column field={'written_off_wgt'} header={'written_off_wgt'} />
          <Column field={'sad_number'} header={'sad_number'} />
          <Column field={'sad_yer'} header={'sad_yer'} />
          <Column field={'sad_reg_dat'} header={'sad_reg_dat'} />
          <Column field={'sad_off_cod'} header={'sad_off_cod'} />
          <Column field={'sad_off_nam'} header={'sad_off_nam'} />
          <Column field={'sad_net_wgt'} header={'sad_net_wgt'} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
};

export default Exemption_4755;
