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
const translationsForReportDPS4557: string = "reports.dps_4557"
const translationsForReportDPS4557Columns: string = "reports.dps_4557.columns"

function DPS_4557() {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);
  const { t } = useTranslation();

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true);
      const res = await axios.post('/reporting/DpsReport4557', {
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
    <SimpleCard title={t(`${translationsForReportDPS4557}.title`)}>
      <ReportHeaderInputs
        report='DPS_4557'
        showStartDate
        showEndDate
        ShowTinNumber
        showCustomsProcedure
        showRegDate
        showAssesDate
        showPayDate
        showCustomsList
        onSearch={handleSubmit}
        tabelRef={tableRef}
      />
      {loading && (
        <LinearProgress />
      )}
      <Box width="100%" overflow="auto">
        <DataTable
          exportFilename={`DPS_4557 ${new Date().toISOString()}`}
          ref={tableRef}
          value={reportData}
          rows={ROWS_PER_PAGE}
          rowsPerPageOptions={[3, 10, 25, 50, 100]}
          paginator
          stripedRows
          showGridlines
        >
          <Column
            filter
            filterField="ide_typ_sad"
            style={{ textAlign: 'center' }}
            field={'ide_typ_sad'}
            header={t(`${translationsForReportDPS4557Columns}.ide_typ_sad`)}
          />
          <Column field={'tpt_cuo_nam'} header={t(`${translationsForReportDPS4557Columns}.tpt_cuo_nam`)} />
          <Column field={'ide_cuo_nam'} header={t(`${translationsForReportDPS4557Columns}.ide_cuo_nam`)} />
          <Column field={'Item_total'} header={t(`${translationsForReportDPS4557Columns}.Item_total`)} />
          <Column
            filter
            filterField="Reg_No"
            style={{ minWidth: '4rem', textAlign: 'center' }}
            field={'Reg_No'}
            header={t(`${translationsForReportDPS4557Columns}.Reg_No`)}
          />
          <Column field={'Reg_Date'} header={t(`${translationsForReportDPS4557Columns}.Reg_Date`)} />
          <Column field={'ASMT_No'} header={t(`${translationsForReportDPS4557Columns}.ASMT_No`)} />
          <Column field={'AST_Date'} header={t(`${translationsForReportDPS4557Columns}.AST_Date`)} />
          <Column field={'RCPT_No'} header={t(`${translationsForReportDPS4557Columns}.RCPT_No`)} />
          <Column field={'RCPT_Date'} header={t(`${translationsForReportDPS4557Columns}.RCPT_Date`)} />
          <Column filter filterField="status" field={'status'} header={t(`${translationsForReportDPS4557Columns}.status`)} />
          <Column filter filterField="Broker_TIN" field={'Broker_TIN'} header={t(`${translationsForReportDPS4557Columns}.Broker_TIN`)} />
          <Column field={'dec_nam'} header={t(`${translationsForReportDPS4557Columns}.dec_nam`)} />
          <Column
            filter
            filterField="Company_TIN"
            style={{ textAlign: 'center' }}
            field={'Company_TIN'}
            header={t(`${translationsForReportDPS4557Columns}.Company_TIN`)}
          />
          <Column style={{ minWidth: '12rem' }} field={'cmp_nam'} header={t(`${translationsForReportDPS4557Columns}.cmp_nam`)} />
          <Column field={'fis_cod'} header={t(`${translationsForReportDPS4557Columns}.fis_cod`)} />
          <Column
            style={{ minWidth: '10rem', textAlign: 'center' }}
            field={'fin_nam'}
            header={t(`${translationsForReportDPS4557Columns}.fin_nam`)}
          />
          <Column field={'Country_Org'} header={t(`${translationsForReportDPS4557Columns}.Country_Org`)} />
          <Column field={'Country_Export'} header={t(`${translationsForReportDPS4557Columns}.Country_Export`)} />
          <Column
            style={{ textAlign: 'center' }}
            field={'Lorry_Total'}
            header={t(`${translationsForReportDPS4557Columns}.Lorry_Total`)}
          />
          <Column field={'Item_Value_currency'} header={t(`${translationsForReportDPS4557Columns}.Item_Value_currency`)} />
          <Column field={'Item_Value_Afs'} header={t(`${translationsForReportDPS4557Columns}.Item_Value_Afs`)} />
          <Column style={{ textAlign: 'center' }} field={'Item_Taxes'} header={t(`${translationsForReportDPS4557Columns}.Item_Taxes`)} />
          <Column field={'netwgt'} header={t(`${translationsForReportDPS4557Columns}.netwgt`)} />
          <Column field={'grswgt'} header={t(`${translationsForReportDPS4557Columns}.grswgt`)} />
          <Column style={{ textAlign: 'center' }} field={'pk1'} header={t(`${translationsForReportDPS4557Columns}.pk1`)} />
          <Column field={'pk2'} header={t(`${translationsForReportDPS4557Columns}.pk2`)} />
          <Column field={'ide_cuo_cod'} header={t(`${translationsForReportDPS4557Columns}.ide_cuo_cod`)} />
          <Column
            filter
            filterField="bank_nam"
            style={{ minWidth: '8rem', textAlign: 'center' }}
            field={'bank_nam'}
            header={t(`${translationsForReportDPS4557Columns}.bank_nam`)}
          />
          <Column field={'CMP_EXP_TIN'} header={t(`${translationsForReportDPS4557Columns}.CMP_EXP_TIN`)} />
          <Column style={{ minWidth: '10rem' }} field={'cmp_exp_nam'} header={t(`${translationsForReportDPS4557Columns}.cmp_exp_nam`)} />
          <Column field={'Country_Dest'} header={t(`${translationsForReportDPS4557Columns}.Country_Dest`)} />
          <Column field={'cap'} header={t(`${translationsForReportDPS4557Columns}.cap`)} />
          <Column field={'hscode'} header={t(`${translationsForReportDPS4557Columns}.hscode`)} />

        </DataTable>
      </Box>
    </SimpleCard>
  );
}

export default DPS_4557;
