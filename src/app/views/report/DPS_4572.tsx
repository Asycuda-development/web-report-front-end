import { SimpleCard } from '../../components';
import { Box, styled, LinearProgress } from '@mui/material';
import { useEffect, useState, useRef } from 'react';
import { ROWS_PER_PAGE } from '../../utils/constant';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';

function DPS_4572() {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true);
      const res = await axios.post('/reporting/DpsReport4572', {
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
    <SimpleCard title="DPS_4572">
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
          <Column filter filterField="ideaYea" field={'ideaYea'} header={'Year'} />
          <Column filter filterField="ideNbr" field={'ideNbr'} header={'Exit_No'} />
          <Column field={'ideCuo'} header={'Customs_Code'} />
          <Column field={'ideCuoNam'} header={'Customs_Name'} />
          <Column field={'shdCod'} header={'Where_House_Cod'} />
          <Column field={'shdNam'} header={'Where_House_Name'} />
          <Column field={'cmpNam'} header={'Company_Name'} />
          <Column field={'cmpCod'} header={'Company_TIN'} />
          <Column filter filterField="decCod" field={'decCod'} header={'Broker_Code'} />
          <Column field={'decNam'} header={'Broker_Name'} />
          <Column field={'valUsr'} header={'val_Usr'} />
          <Column field={'extUsr'} header={'Exit Usr'} />
          <Column field={'extPlc'} header={'place_of_exit'} />
          <Column field={'extItm'} header={'Exit Itm'} />
          <Column field={'ExitDat'} header={'Exit Date'} />
          <Column field={'sadItm'} header={'sad_Item'} />
          <Column
            filter
            filterField="sadRegNbr"
            field={'sadRegNbr'}
            header={'Reg_NO'}
          />
          <Column field={'sadRegSer'} header={'Sad_Serial_NO'} />
          <Column field={'sadAssDat'} header={'Assesment_Date'} />
          <Column field={'sadPckMk1'} header={'	Desc1'} />
          <Column field={'sadPckMk2'} header={'	Desc2'} />
          <Column field={'sadPackNbr'} header={'sad_pack_nbr'} />
          <Column field={'sadPckExtNbr'} header={'No_of_exit_packages'} />
          <Column field={'sadPckExtWgt'} header={'weigh_of_exit_packages'} />
          <Column field={'manRef'} header={'manifest_ref'} />
          <Column field={'bolRef'} header={'bol_Ref'} />
          <Column field={'exitTrucks'} header={'Exit_Trucks'} />
          <Column field={'exitDrivers'} header={'Exit_Drivers'} />
          <Column field={'ideSer'} header={'ID_Ser'} />
          <Column field={'tptInfNam'} header={'Transport_Name'} />
          <Column field={'ideBar'} header={'IDE_Bar'} />
          <Column field={'tptNatCod'} header={'Transport_Cod'} />
          <Column field={' tptNatNam'} header={'Transport_Name'} />
          <Column field={'valDat'} header={'Val_Date'} />
          <Column field={'valItm'} header={'valItm'} />
          <Column field={'itmNbr'} header={'item NO'} />
          <Column
            filter
            filterField="sadDecYea"
            field={'sadDecYea'}
            header={'Decleration_Year'}
          />
          <Column
            filter
            filterField="sadDecNbr"
            field={'sadDecNbr'}
            header={'Decleration_NO'}
          />
          <Column field={'sadAssYea'} header={'Assesment_Year'} />
          <Column field={'sadAssSer'} header={'Assesment Serial No'} />
          <Column field={'sadAssNbr'} header={'Assesment_No'} />
          <Column
            style={{ textAlign: 'center' }}
            field={'sadRegDat'}
            header={'Sad Registeration Date'}
          />
          <Column field={'sadAssAll'} header={'Assesment_detail'} />
          <Column field={'sadInstanceId'} header={'sad_Instance Id'} />
          <Column field={'sadPckTypCod'} header={'sad_Pck_Typ_Cod'} />
          <Column field={'sadPckTypNam'} header={'sad_Pck_Typ_Name'} />
          <Column field={'sadWgtGrs'} header={'sad_Wgt_Grs'} />
          <Column field={'sadPckExtSel'} header={'sad_Pck_Ext_Sel'} />
          <Column field={'sadCtnExitId'} header={'sad_Ctn_Exit_Id'} />
          <Column field={'serPrt'} header={'ser_Prt'} />
          <Column field={'tptMot'} header={'tpt_Mot'} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
}

export default DPS_4572;
