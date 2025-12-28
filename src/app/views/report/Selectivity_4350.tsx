import { Box, LinearProgress, styled } from '@mui/material';
import axios from 'axios';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { useEffect, useRef, useState } from 'react';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
import { SimpleCard } from '../../components';
import { ROWS_PER_PAGE } from '../../utils/constant';
import { useTranslation } from 'react-i18next';

const translationsForBasedOnError: string = "errors"
const translationsForBasedOn: string = "basedOn"
const translationsForReportSelectivity4350: string = "reports.selectivity_4350"
const translationsForReportSelectivity4350Columns: string = "reports.selectivity_4350.columns"

const SelectivityReport4350 = () => {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);
  const { t } = useTranslation();

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true)
      const res = await axios.post('/reporting/SelectivityReport4350', {
        startDate: data.startDate,
        endDate: data.endDate,
        customsCode: data.CustomsCode,
        type: data.customsProcedure,
        ...data
      });
      if (res.data.length === 0) {
        setReportData([]);
      } else {
        setReportData(res.data);
      }
    } catch (error) { }
    finally {
      setLoading(false);
    }
  };

  return (
    <SimpleCard title={t(`${translationsForReportSelectivity4350}.title`)}>
      <ReportHeaderInputs
        report='Selectivity_4350'
        showStartDate
        showEndDate
        showCustomsList
        showCustomsProcedure
        showRegDate
        onSearch={handleSubmit}
        tabelRef={tableRef}
      />
      {loading && (
        <LinearProgress />
      )}
      <Box width="100%" overflow="auto">
        <DataTable
          exportFilename={`Selectivity Report 4350 ${new Date().toISOString()}`}
          ref={tableRef}
          value={reportData}
          rows={ROWS_PER_PAGE}
          rowsPerPageOptions={[5, 10, 25, 50, 100]}
          paginator
          stripedRows
          showGridlines
        >
          <Column field={'SAD_YEAR'} header={t(`${translationsForReportSelectivity4350Columns}.SAD_YEAR`)} />
          <Column field={'SAD_OFFICE'} header={t(`${translationsForReportSelectivity4350Columns}.SAD_OFFICE`)} />
          <Column field={'rev_diff'} header={t(`${translationsForReportSelectivity4350Columns}.rev_diff`)} />
          <Column field={'TOTAL_TAXES'} header={t(`${translationsForReportSelectivity4350Columns}.TOTAL_TAXES`)} />
          <Column field={'CUSTOMS_VALUE'} header={t(`${translationsForReportSelectivity4350Columns}.CUSTOMS_VALUE`)} />
          <Column field={'cnt'} header={t(`${translationsForReportSelectivity4350Columns}.cnt`)} />
          <Column field={'First_CHANNEL'} header={t(`${translationsForReportSelectivity4350Columns}.First_CHANNEL`)} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
};

export default SelectivityReport4350;
