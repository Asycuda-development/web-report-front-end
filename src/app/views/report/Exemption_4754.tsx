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
const translationsForReportExemption4754: string = "reports.exemption_4754"
const translationsForReportExemption4754Columns: string = "reports.exemption_4754.columns"

const Exemption_4754 = () => {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);
  const { t } = useTranslation();

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true);
      const res = await axios.post('/reporting/ExemptionReport4754', {
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
    <SimpleCard title={t(`${translationsForReportExemption4754}.title`)}>
      <ReportHeaderInputs
        report='Exemption_4754'
        showStartDate
        showEndDate
        showCustomsList
        showStatusExemption
        onSearch={handleSubmit}
        tabelRef={tableRef}
      />
      {loading && (
        <LinearProgress />
      )}
      <Box width="100%" overflow="auto">
        <DataTable
          exportFilename={`ExemptionReport4754 ${new Date().toISOString()}`}
          ref={tableRef}
          value={reportData}
          rows={ROWS_PER_PAGE}
          rowsPerPageOptions={[3, 10, 25, 50, 100]}
          paginator
          stripedRows
          showGridlines
        >
          <Column field={'Autorization_No'} header={t(`${translationsForReportExemption4754Columns}.Autorization_No`)} />
          <Column field={'ref_no'} header={t(`${translationsForReportExemption4754Columns}.ref_no`)} style={{ textAlign: 'center' }} />
          <Column field={'ref_date'} header={t(`${translationsForReportExemption4754Columns}.ref_date`)} />
          <Column field={'status'} header={t(`${translationsForReportExemption4754Columns}.status`)} />
          <Column field={'cmp_cod'} header={t(`${translationsForReportExemption4754Columns}.cmp_cod`)} />
          <Column
            field={'cmp_desc'}
            header={t(`${translationsForReportExemption4754Columns}.cmp_desc`)}
            style={{ minWidth: '15rem', textAlign: 'center' }}
          />
          <Column field={'contractor_cod'} header={t(`${translationsForReportExemption4754Columns}.contractor_cod`)} />
          <Column field={'contractor_nam'} header={t(`${translationsForReportExemption4754Columns}.contractor_nam`)} />
          <Column field={'clr_office'} header={t(`${translationsForReportExemption4754Columns}.clr_office`)} />
          <Column field={'wgt_tot'} header={t(`${translationsForReportExemption4754Columns}.wgt_tot`)} />
          <Column field={'written_off_wgt'} header={t(`${translationsForReportExemption4754Columns}.written_off_wgt`)} />
          <Column field={'rem_wgt'} header={t(`${translationsForReportExemption4754Columns}.rem_wgt`)} />
          <Column field={'sad_number'} header={t(`${translationsForReportExemption4754Columns}.sad_number`)} />
          <Column field={'hscode'} header={t(`${translationsForReportExemption4754Columns}.hscode`)} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
};

export default Exemption_4754;
