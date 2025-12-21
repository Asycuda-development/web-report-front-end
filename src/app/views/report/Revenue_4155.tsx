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
const translationsForReportRevenue4155: string = "reports.revenue_4155"
const translationsForReportRevenue4155Columns: string = "reports.revenue_4155.columns"

const Revenue_4155 = () => {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);
  const { t } = useTranslation();

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
    <SimpleCard title={t(`${translationsForReportRevenue4155}.title`)}>
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
          <Column field={'Customs'} header={t(`${translationsForReportRevenue4155Columns}.Customs`)} />
          <Column field={'Reg_No'} header={t(`${translationsForReportRevenue4155Columns}.Reg_No`)} />
          <Column field={'reg_dat'} header={t(`${translationsForReportRevenue4155Columns}.reg_dat`)} />
          <Column field={'dec_cod'} header={t(`${translationsForReportRevenue4155Columns}.dec_cod`)} />
          <Column field={'Declarant_Name'} header={t(`${translationsForReportRevenue4155Columns}.Declarant_Name`)} />
          <Column field={'CMP_Code'} header={t(`${translationsForReportRevenue4155Columns}.CMP_Code`)} />
          <Column field={'CMP_Name'} header={t(`${translationsForReportRevenue4155Columns}.CMP_Name`)} />
          <Column field={'fis_code'} header={t(`${translationsForReportRevenue4155Columns}.fis_code`)} />
          <Column field={'Fis_Name'} header={t(`${translationsForReportRevenue4155Columns}.Fis_Name`)} />
          <Column field={'itm_nbr'} header={t(`${translationsForReportRevenue4155Columns}.itm_nbr`)} />
          <Column field={'itm_tot'} header={t(`${translationsForReportRevenue4155Columns}.itm_tot`)} />
          <Column field={'gross_wgt'} header={t(`${translationsForReportRevenue4155Columns}.gross_wgt`)} />
          <Column field={'net_wgt'} header={t(`${translationsForReportRevenue4155Columns}.net_wgt`)} />
          <Column field={'hscode'} header={t(`${translationsForReportRevenue4155Columns}.hscode`)} />
          <Column field={'desc3'} header={t(`${translationsForReportRevenue4155Columns}.desc3`)} />
          <Column field={'nat_proc'} header={t(`${translationsForReportRevenue4155Columns}.nat_proc`)} />
          <Column field={'item_val_afs'} header={t(`${translationsForReportRevenue4155Columns}.item_val_afs`)} />
          <Column field={'item_val_fcx'} header={t(`${translationsForReportRevenue4155Columns}.item_val_fcx`)} />
          <Column field={'SAD_currency_rate'} header={t(`${translationsForReportRevenue4155Columns}.SAD_currency_rate`)} />
          <Column field={'currency_cod'} header={t(`${translationsForReportRevenue4155Columns}.currency_cod`)} />
          <Column field={'amt_011'} header={t(`${translationsForReportRevenue4155Columns}.amt_011`)} />
          <Column field={'amt_012'} header={t(`${translationsForReportRevenue4155Columns}.amt_012`)} />
          <Column field={'amt_013'} header={t(`${translationsForReportRevenue4155Columns}.amt_013`)} />
          <Column field={'amt_015'} header={t(`${translationsForReportRevenue4155Columns}.amt_015`)} />
          <Column field={'amt_017'} header={t(`${translationsForReportRevenue4155Columns}.amt_017`)} />
          <Column field={'amt_018'} header={t(`${translationsForReportRevenue4155Columns}.amt_018`)} />
          <Column field={'amt_041'} header={t(`${translationsForReportRevenue4155Columns}.amt_041`)} />
          <Column field={'amt_042'} header={t(`${translationsForReportRevenue4155Columns}.amt_042`)} />
          <Column field={'amt_043'} header={t(`${translationsForReportRevenue4155Columns}.amt_043`)} />
          <Column field={'amt_044'} header={t(`${translationsForReportRevenue4155Columns}.amt_044`)} />
          <Column field={'amt_045'} header={t(`${translationsForReportRevenue4155Columns}.amt_045`)} />
          <Column field={'amt_046'} header={t(`${translationsForReportRevenue4155Columns}.amt_046`)} />
          <Column field={'amt_047'} header={t(`${translationsForReportRevenue4155Columns}.amt_047`)} />
          <Column field={'amt_048'} header={t(`${translationsForReportRevenue4155Columns}.amt_048`)} />
          <Column field={'amt_049'} header={t(`${translationsForReportRevenue4155Columns}.amt_049`)} />
          <Column field={'amt_88'} header={t(`${translationsForReportRevenue4155Columns}.amt_88`)} />
          <Column field={'amt_80'} header={t(`${translationsForReportRevenue4155Columns}.amt_80`)} />
          <Column field={'amt_019'} header={t(`${translationsForReportRevenue4155Columns}.amt_019`)} />
          <Column field={'sum_tot'} header={t(`${translationsForReportRevenue4155Columns}.sum_tot`)} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
};

export default Revenue_4155;
