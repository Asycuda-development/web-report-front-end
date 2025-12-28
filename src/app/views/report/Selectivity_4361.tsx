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
const translationsForReportSelectivity4361: string = "reports.selectivity_4361"
const translationsForReportSelectivity4361Columns: string = "reports.selectivity_4361.columns"

const Selectivity_4361 = () => {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);
  const { t } = useTranslation();

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true);
      const res = await axios.post('/reporting/SelectivityReport4361', {
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
    <SimpleCard title={t(`${translationsForReportSelectivity4361}.title`)}>
      <ReportHeaderInputs
        showStartDate
        showEndDate
        showCustomsList
        showCustomsProcedure
        showPayDate
        showAssesDate
        onSearch={handleSubmit}
        tabelRef={tableRef}
      />
      {loading && (
        <LinearProgress />
      )}
      <Box width="100%" overflow="auto">
        <DataTable
          exportFilename={`Selectivity Report 4361 ${new Date().toISOString()}`}
          ref={tableRef}
          value={reportData}
          rows={ROWS_PER_PAGE}
          rowsPerPageOptions={[3, 10, 25, 50, 100]}
          paginator
          stripedRows
          showGridlines
        >
          <Column field={'uname'} header={t(`${translationsForReportSelectivity4361Columns}.uname`)} />
          <Column field={'udate'} header={t(`${translationsForReportSelectivity4361Columns}.udate`)} />
          <Column field={'cust_id'} header={t(`${translationsForReportSelectivity4361Columns}.cust_id`)} />
          <Column field={'city'} header={t(`${translationsForReportSelectivity4361Columns}.city`)} />
          <Column field={'phone'} header={t(`${translationsForReportSelectivity4361Columns}.phone`)} />
          <Column field={'job'} header={t(`${translationsForReportSelectivity4361Columns}.job`)} />
          <Column field={'fname'} header={t(`${translationsForReportSelectivity4361Columns}.fname`)} />
          <Column field={'cust_acc'} header={t(`${translationsForReportSelectivity4361Columns}.cust_acc`)} />
          <Column field={'prop_val'} header={t(`${translationsForReportSelectivity4361Columns}.prop_val`)} />
          <Column field={'active'} header={t(`${translationsForReportSelectivity4361Columns}.active`)} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
};

export default Selectivity_4361;
