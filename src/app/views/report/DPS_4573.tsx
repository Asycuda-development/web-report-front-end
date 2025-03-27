import { SimpleCard } from '../../components';
import { Box, styled, LinearProgress } from '@mui/material';
import { useEffect, useState, useRef } from 'react';
import { ROWS_PER_PAGE } from '../../utils/constant';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
import { Toast } from 'primereact/toast';

function DPS_4573() {
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
      const res = await axios.post('/reporting/DpsReport4573', {
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
    label: 'declarant',
    name: 'declarant'
  },
  {
    label: 'company',
    name: 'company'
  },
  {
    label: 'manifest',
    name: 'manifest'
  },
  {
    label: 'I_no',
    name: 'I_no'
  },
  {
    label: 'Warehouse',
    name: 'Warehouse'
  }]
  return (
    <SimpleCard title="DPS_4573">
      <ReportHeaderInputs
        showStartDate
        showEndDate
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
          <Column field={'ideaYea'} header={'Year'} />

          <Column filter filterField="ideNbr" field={'ideNbr'} header={'SAD_NO'} />
          <Column field={'ideCuo'} header={'SAD_Cuo'} />
          <Column field={'ideCuoNam'} header={'SAD_Cou_Name'} />
          <Column field={'shdCod'} header={'SAD_Cod'} />
          <Column field={'shdNam'} header={'SAD_Name'} />
          <Column filter filterField="cmpCod" field={'cmpCod'} header={'Company_TIN'} />
          <Column field={'cmpNam'} header={'Company_Name'} />
          <Column filter filterField="decCod" field={'decCod'} header={'Declerant_Cod'} />
          <Column field={'decNam'} header={'Declerant_Name'} />
          <Column field={'valUsr'} header={'Val_Usr'} />
          <Column field={'extUsr'} header={'Exit_Usr'} />
          <Column field={'extPlc'} header={'Exit_Place'} />
          <Column field={'extDat'} header={'Exit_Date'} />
          <Column field={'sadItm'} header={'SAD_Item'} />
          <Column filter filterField="sadRegNbr" field={'sadRegNbr'} header={'SAD_Reg_NO'} />
          <Column field={'sadRegSer'} header={'SAD_Reg_Ser'} />
          <Column field={'sadAssAll'} header={'SAD_ASS_All'} />
          <Column field={'sadPckMk1'} header={'SAD_PckMK1'} />
          <Column field={'sadPckMk2s'} header={'SAD_Pck_MK2'} />
          <Column field={'sadPackNbr'} header={'SAD_Pck_MK_NO'} />
          <Column field={'sadWgtGrs'} header={'SAD_Wgt_Grs'} />
          <Column field={'sadPckExtNbr'} header={'SAD_Pck_Exit NO'} />
          <Column field={'sadPckExtWgt'} header={'SAD Pck_Exit Wgt'} />
          <Column filter filterField="manRef" field={'manRef'} header={'Man_Ref'} />
          <Column field={'serPrt'} header={'serPrt'} />
        </DataTable>
      </Box>
      <Toast ref={toastRef} />
    </SimpleCard>
  );
}

export default DPS_4573;
