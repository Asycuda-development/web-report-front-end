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
const translationsForReportDPS4580: string = "reports.dps_4580"
const translationsForReportDPS4580Columns: string = "reports.dps_4580.columns"

function DPS_4580() {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);
  const { t } = useTranslation();

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
    <SimpleCard title={t(`${translationsForReportDPS4580}.title`)}>
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
          exportFilename={`DPS_4580 ${new Date().toISOString()}`}
          ref={tableRef}
          value={reportData}
          rows={ROWS_PER_PAGE}
          rowsPerPageOptions={[3, 10, 25, 50, 100]}
          paginator
          stripedRows
          showGridlines
        >
          <Column field={'idea_yea'} header={t(`${translationsForReportDPS4580Columns}.idea_yea`)} />
          <Column field={'ide_nbr'} header={t(`${translationsForReportDPS4580Columns}.ide_nbr`)} />
          <Column field={'ide_cuo'} header={t(`${translationsForReportDPS4580Columns}.ide_cuo`)} />
          <Column field={'ide_cuo_nam'} header={t(`${translationsForReportDPS4580Columns}.ide_cuo_nam`)} />
          <Column field={'shd_cod'} header={t(`${translationsForReportDPS4580Columns}.shd_cod`)} />
          <Column field={'shd_nam'} header={t(`${translationsForReportDPS4580Columns}.shd_nam`)} />
          <Column field={'cmp_cod'} header={t(`${translationsForReportDPS4580Columns}.cmp_cod`)} />
          <Column field={'cmp_nam'} header={t(`${translationsForReportDPS4580Columns}.cmp_nam`)} />
          <Column field={'dec_cod'} header={t(`${translationsForReportDPS4580Columns}.dec_cod`)} />
          <Column field={'dec_nam'} header={t(`${translationsForReportDPS4580Columns}.dec_nam`)} />
          <Column field={'val_usr'} header={t(`${translationsForReportDPS4580Columns}.val_usr`)} />
          <Column field={'ext_usr'} header={t(`${translationsForReportDPS4580Columns}.ext_usr`)} />
          <Column field={'ext_plc'} header={t(`${translationsForReportDPS4580Columns}.ext_plc`)} />
          <Column field={'ext_dat'} header={t(`${translationsForReportDPS4580Columns}.ext_dat`)} />
          <Column field={' sad_itm'} header={t(`${translationsForReportDPS4580Columns}. sad_itm`)} />
          <Column field={'sad_reg_nbr'} header={t(`${translationsForReportDPS4580Columns}.sad_reg_nbr`)} />
          <Column field={'sad_ass_all'} header={t(`${translationsForReportDPS4580Columns}.sad_ass_all`)} />
          <Column field={'sad_reg_ser'} header={t(`${translationsForReportDPS4580Columns}.sad_reg_ser`)} />
          <Column field={'sad_pck_mk1'} header={t(`${translationsForReportDPS4580Columns}.sad_pck_mk1`)} />
          <Column field={'sad_pck_mk2'} header={t(`${translationsForReportDPS4580Columns}.sad_pck_mk2`)} />
          <Column field={'sad_pack_nbr'} header={t(`${translationsForReportDPS4580Columns}.sad_pack_nbr`)} />
          <Column field={'sad_wgt_grs'} header={t(`${translationsForReportDPS4580Columns}.sad_wgt_grs`)} />
          <Column field={'sad_pck_ext_nbr'} header={t(`${translationsForReportDPS4580Columns}.sad_pck_ext_nbr`)} />
          <Column field={'sad_pck_ext_wgt'} header={t(`${translationsForReportDPS4580Columns}.sad_pck_ext_wgt`)} />
          <Column field={'man_ref'} header={t(`${translationsForReportDPS4580Columns}.man_ref`)} />
          <Column field={'bol_ref'} header={t(`${translationsForReportDPS4580Columns}.bol_ref`)} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
}

export default DPS_4580;
