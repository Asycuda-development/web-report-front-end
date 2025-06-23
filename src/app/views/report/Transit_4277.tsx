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
const translationsForReportTransit4277: string = "reports.transit_4277"
const translationsForReportTransit4277Columns: string = "reports.transit_4277.columns"

const Transit_4277 = () => {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);
  const { t } = useTranslation();

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true)
      const res = await axios.post('/reporting/TransitReport4277', {
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
    <SimpleCard title={t(`${translationsForReportTransit4277}.title`)}>
      <ReportHeaderInputs
        showStartDate
        showEndDate
        showCustomsList
        showRegDate
        showNumPalate
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
          rowsPerPageOptions={[5, 10, 25, 50, 100]}
          paginator
          stripedRows
          showGridlines
        >
          <Column field={'locationid'} header={t(`${translationsForReportTransit4277Columns}.locationid`)} />
          <Column field={'NUMBERPLATE'} header={t(`${translationsForReportTransit4277Columns}.NUMBERPLATE`)} />
          <Column field={'GROSSWEIGHT'} header={t(`${translationsForReportTransit4277Columns}.GROSSWEIGHT`)} />
          <Column field={'emptyweight'} header={t(`${translationsForReportTransit4277Columns}.emptyweight`)} />
          <Column field={'NETWEIGHT'} header={t(`${translationsForReportTransit4277Columns}.NETWEIGHT`)} />
          <Column field={'NUMBERPLATE2'} header={t(`${translationsForReportTransit4277Columns}.NUMBERPLATE2`)} />
          <Column field={'dsdate'} header={t(`${translationsForReportTransit4277Columns}.dsdate`)} />
          <Column field={'DSID'} header={t(`${translationsForReportTransit4277Columns}.DSID`)} />
          <Column field={'tin'} header={t(`${translationsForReportTransit4277Columns}.tin`)} />
          <Column field={'loguser'} header={t(`${translationsForReportTransit4277Columns}.loguser`)} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
};

export default Transit_4277;
