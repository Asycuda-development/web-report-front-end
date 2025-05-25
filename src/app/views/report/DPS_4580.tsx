import { SimpleCard } from '../../components';
import { Box, styled, LinearProgress } from '@mui/material';
import { useEffect, useState, useRef } from 'react';
import { ROWS_PER_PAGE } from '../../utils/constant';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';

function DPS_4580() {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true);
      const res = await axios.post('/reporting/DpsReport4580', {
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
    <SimpleCard title="DPS_4580">
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
          <Column field={'idea_yea'} header={'YEAR'} />
          <Column field={'ide_nbr'} header={'IDE_NO'} />
          <Column field={'ide_cuo'} header={'IDE_CUSTOMS_CODE'} />
          <Column field={'ide_cuo_nam'} header={'IDE_CUSTOMS_NAME'} />
          <Column field={'shd_cod'} header={'shd_cod'} />
          <Column field={'shd_nam'} header={'shd_nam'} />
          <Column field={'cmp_cod'} header={'cmp_cod'} />
          <Column field={'cmp_nam'} header={'cmp_nam'} />
          <Column field={'dec_cod'} header={'dec_cod'} />
          <Column field={'dec_nam'} header={'dec_nam'} />
          <Column field={'val_usr'} header={'val_usr'} />
          <Column field={'ext_usr'} header={'ext_usr'} />
          <Column field={'ext_plc'} header={'ext_plc'} />
          <Column field={'ext_dat'} header={'ext_dat'} />
          <Column field={' sad_itm'} header={'sad_itm'} />
          <Column field={'sad_reg_nbr'} header={'sad_reg_nbr'} />
          <Column field={'sad_ass_all'} header={'sad_ass_all'} />
          <Column field={'sad_reg_ser'} header={'sad_reg_ser'} />
          <Column field={'sad_pck_mk1'} header={'sad_pck_mk1'} />
          <Column field={'sad_pck_mk2'} header={'sad_pck_mk2'} />
          <Column field={'sad_pack_nbr'} header={'sad_pack_nbr'} />
          <Column field={'sad_wgt_grs'} header={'sad_wgt_grs'} />
          <Column field={'sad_pck_ext_nbr'} header={'sad_pck_ext_nbr'} />
          <Column field={'sad_pck_ext_wgt'} header={'sad_pck_ext_wgt'} />
          <Column field={'man_ref'} header={'man_ref'} />
          <Column field={'bol_ref'} header={'bol_ref'} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
}

export default DPS_4580;
