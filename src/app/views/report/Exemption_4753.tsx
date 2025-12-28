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
const translationsForReportExemption4753: string = "reports.exemption_4753"
const translationsForReportExemption4753Columns: string = "reports.exemption_4753.columns"

const Exemption_4753 = () => {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);
  const { t } = useTranslation();

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true);
      const res = await axios.post('/reporting/ExemptionReport4753', {
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
    <SimpleCard title={t(`${translationsForReportExemption4753}.title`)}>
      <ReportHeaderInputs
        report='Exemption_4753'
        showStartDate
        showEndDate
        showCustomsList
        showHsCode
        onSearch={handleSubmit}
        tabelRef={tableRef}
      />
      {loading && (
        <LinearProgress />
      )}
      <Box width="100%" overflow="auto">
        <DataTable
          exportFilename={`ExemptionReport4753 ${new Date().toISOString()}`}
          ref={tableRef}
          value={reportData}
          rows={ROWS_PER_PAGE}
          rowsPerPageOptions={[3, 10, 25, 50, 100]}
          paginator
          stripedRows
          showGridlines
        >
          <Column field={'Autorization_No'} header={t(`${translationsForReportExemption4753Columns}.Autorization_No`)} />
          <Column field={'ref_no'} header={t(`${translationsForReportExemption4753Columns}.ref_no`)} />
          <Column field={'ref_date'} header={t(`${translationsForReportExemption4753Columns}.ref_date`)} />
          <Column field={'type_cert'} header={t(`${translationsForReportExemption4753Columns}.type_cert`)} />
          <Column field={'val_tot'} header={t(`${translationsForReportExemption4753Columns}.val_tot`)} />
          <Column field={'rem_val'} header={t(`${translationsForReportExemption4753Columns}.rem_val`)} />
          <Column field={'wgt_tot'} header={t(`${translationsForReportExemption4753Columns}.wgt_tot`)} />
          <Column field={'rem_wgt'} header={t(`${translationsForReportExemption4753Columns}.rem_wgt`)} />
          <Column field={'CNS_COD'} header={t(`${translationsForReportExemption4753Columns}.CNS_COD`)} />
          <Column field={'reg_no_ctn'} header={t(`${translationsForReportExemption4753Columns}.reg_no_ctn`)} />
          <Column field={'hscode'} header={t(`${translationsForReportExemption4753Columns}.hscode`)} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
};

export default Exemption_4753;
