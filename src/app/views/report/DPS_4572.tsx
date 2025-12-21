import { SimpleCard } from '../../components';
import { Box, styled, LinearProgress } from '@mui/material';
import { useEffect, useState, useRef } from 'react';
import { ROWS_PER_PAGE } from '../../utils/constant';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
import { useTranslation } from 'react-i18next';

const translationsForBasedOnError: string = "errors"
const translationsForBasedOn: string = "basedOn"
const translationsForReportDPS4572: string = "reports.dps_4572"
const translationsForReportDPS4572Columns: string = "reports.dps_4572.columns"

function DPS_4572() {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);
  const { t } = useTranslation();

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
    <SimpleCard title={t(`${translationsForReportDPS4572}.title`)}>
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
          <Column filter filterField="ideaYea" field={'ideaYea'} header={t(`${translationsForReportDPS4572Columns}.ideaYea`)} />
          <Column filter filterField="ideNbr" field={'ideNbr'} header={t(`${translationsForReportDPS4572Columns}.ideNbr`)} />
          <Column field={'ideCuo'} header={t(`${translationsForReportDPS4572Columns}.ideCuo`)} />
          <Column field={'ideCuoNam'} header={t(`${translationsForReportDPS4572Columns}.ideCuoNam`)} />
          <Column field={'shdCod'} header={t(`${translationsForReportDPS4572Columns}.shdCod`)} />
          <Column field={'shdNam'} header={t(`${translationsForReportDPS4572Columns}.shdNam`)} />
          <Column field={'cmpNam'} header={t(`${translationsForReportDPS4572Columns}.cmpNam`)} />
          <Column field={'cmpCod'} header={t(`${translationsForReportDPS4572Columns}.cmpCod`)} />
          <Column filter filterField="decCod" field={'decCod'} header={t(`${translationsForReportDPS4572Columns}.decCod`)} />
          <Column field={'decNam'} header={t(`${translationsForReportDPS4572Columns}.decNam`)} />
          <Column field={'valUsr'} header={t(`${translationsForReportDPS4572Columns}.valUsr`)} />
          <Column field={'extUsr'} header={t(`${translationsForReportDPS4572Columns}.extUsr`)} />
          <Column field={'extPlc'} header={t(`${translationsForReportDPS4572Columns}.extPlc`)} />
          <Column field={'extItm'} header={t(`${translationsForReportDPS4572Columns}.extItm`)} />
          <Column field={'ExitDat'} header={t(`${translationsForReportDPS4572Columns}.ExitDat`)} />
          <Column field={'sadItm'} header={t(`${translationsForReportDPS4572Columns}.sadItm`)} />
          <Column
            filter
            filterField="sadRegNbr"
            field={'sadRegNbr'}
            header={t(`${translationsForReportDPS4572Columns}.sadRegNbr`)}
          />
          <Column field={'sadRegSer'} header={t(`${translationsForReportDPS4572Columns}.sadRegSer`)} />
          <Column field={'sadAssDat'} header={t(`${translationsForReportDPS4572Columns}.sadAssDat`)} />
          <Column field={'sadPckMk1'} header={t(`${translationsForReportDPS4572Columns}.sadPckMk1`)} />
          <Column field={'sadPckMk2'} header={t(`${translationsForReportDPS4572Columns}.sadPckMk2`)} />
          <Column field={'sadPackNbr'} header={t(`${translationsForReportDPS4572Columns}.sadPackNbr`)} />
          <Column field={'sadPckExtNbr'} header={t(`${translationsForReportDPS4572Columns}.sadPckExtNbr`)} />
          <Column field={'sadPckExtWgt'} header={t(`${translationsForReportDPS4572Columns}.sadPckExtWgt`)} />
          <Column field={'manRef'} header={t(`${translationsForReportDPS4572Columns}.manRef`)} />
          <Column field={'bolRef'} header={t(`${translationsForReportDPS4572Columns}.bolRef`)} />
          <Column field={'exitTrucks'} header={t(`${translationsForReportDPS4572Columns}.exitTrucks`)} />
          <Column field={'exitDrivers'} header={t(`${translationsForReportDPS4572Columns}.exitDrivers`)} />
          <Column field={'ideSer'} header={t(`${translationsForReportDPS4572Columns}.ideSer`)} />
          <Column field={'tptInfNam'} header={t(`${translationsForReportDPS4572Columns}.tptInfNam`)} />
          <Column field={'ideBar'} header={t(`${translationsForReportDPS4572Columns}.ideBar`)} />
          <Column field={'tptNatCod'} header={t(`${translationsForReportDPS4572Columns}.tptNatCod`)} />
          <Column field={' tptNatNam'} header={t(`${translationsForReportDPS4572Columns}. tptNatNam`)} />
          <Column field={'valDat'} header={t(`${translationsForReportDPS4572Columns}.valDat`)} />
          <Column field={'valItm'} header={t(`${translationsForReportDPS4572Columns}.valItm`)} />
          <Column field={'itmNbr'} header={t(`${translationsForReportDPS4572Columns}.itmNbr`)} />
          <Column
            filter
            filterField="sadDecYea"
            field={'sadDecYea'}
            header={t(`${translationsForReportDPS4572Columns}.sadDecYea`)}
          />
          <Column
            filter
            filterField="sadDecNbr"
            field={'sadDecNbr'}
            header={t(`${translationsForReportDPS4572Columns}.sadDecNbr`)}
          />
          <Column field={'sadAssYea'} header={t(`${translationsForReportDPS4572Columns}.sadAssYea`)} />
          <Column field={'sadAssSer'} header={t(`${translationsForReportDPS4572Columns}.sadAssSer`)} />
          <Column field={'sadAssNbr'} header={t(`${translationsForReportDPS4572Columns}.sadAssNbr`)} />
          <Column
            style={{ textAlign: 'center' }}
            field={'sadRegDat'}
            header={t(`${translationsForReportDPS4572Columns}.sadRegDat`)}
          />
          <Column field={'sadAssAll'} header={t(`${translationsForReportDPS4572Columns}.sadAssAll`)} />
          <Column field={'sadInstanceId'} header={t(`${translationsForReportDPS4572Columns}.sadInstanceId`)} />
          <Column field={'sadPckTypCod'} header={t(`${translationsForReportDPS4572Columns}.sadPckTypCod`)} />
          <Column field={'sadPckTypNam'} header={t(`${translationsForReportDPS4572Columns}.sadPckTypNam`)} />
          <Column field={'sadWgtGrs'} header={t(`${translationsForReportDPS4572Columns}.sadWgtGrs`)} />
          <Column field={'sadPckExtSel'} header={t(`${translationsForReportDPS4572Columns}.sadPckExtSel`)} />
          <Column field={'sadCtnExitId'} header={t(`${translationsForReportDPS4572Columns}.sadCtnExitId`)} />
          <Column field={'serPrt'} header={t(`${translationsForReportDPS4572Columns}.serPrt`)} />
          <Column field={'tptMot'} header={t(`${translationsForReportDPS4572Columns}.tptMot`)} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
}

export default DPS_4572;
