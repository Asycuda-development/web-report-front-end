import { Box, LinearProgress } from '@mui/material';
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
const translationsForReportTransit4279: string = "reports.transit_4279"
const translationsForReportTransit4279Columns: string = "reports.transit_4279.columns"

const Transit_4279 = () => {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);
  const { t } = useTranslation();

  useEffect(() => { }, []);

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true)
      const res = await axios.post('/reporting/TransitReport4279', {
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
    <SimpleCard title={t(`${translationsForReportTransit4279}.title`)}>
      <ReportHeaderInputs
        report='Transit_4279'
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
          exportFilename={`Transit Report 4279 ${new Date().toISOString()}`}
          ref={tableRef}
          value={reportData}
          rows={ROWS_PER_PAGE}
          rowsPerPageOptions={[5, 10, 25, 50, 100]}
          paginator
          stripedRows
          showGridlines
        >
          <Column field={'office'} header={t(`${translationsForReportTransit4279Columns}.office`)} />
          <Column field={'Reg_Year'} header={t(`${translationsForReportTransit4279Columns}.Reg_Year`)} />
          <Column field={'ref_nber'} header={t(`${translationsForReportTransit4279Columns}.ref_nber`)} />
          <Column field={'dec_cod'} header={t(`${translationsForReportTransit4279Columns}.dec_cod`)} />
          <Column field={'SAD_NUMBER'} header={t(`${translationsForReportTransit4279Columns}.SAD_NUMBER`)} />
          <Column field={'NUMBERPLATE'} header={t(`${translationsForReportTransit4279Columns}.NUMBERPLATE`)} />
          <Column field={'NUMBERPLATE2'} header={t(`${translationsForReportTransit4279Columns}.NUMBERPLATE2`)} />
          <Column field={'Total_Weight'} header={t(`${translationsForReportTransit4279Columns}.Total_Weight`)} />
          <Column field={'GROSSWEIGHT'} header={t(`${translationsForReportTransit4279Columns}.GROSSWEIGHT`)} />
          <Column field={'emptyweight'} header={t(`${translationsForReportTransit4279Columns}.emptyweight`)} />
          <Column field={'NETWEIGHT'} header={t(`${translationsForReportTransit4279Columns}.NETWEIGHT`)} />
          <Column field={'ds_date'} header={t(`${translationsForReportTransit4279Columns}.ds_date`)} />
          <Column field={'ds_date_dari'} header={t(`${translationsForReportTransit4279Columns}.ds_date_dari`)} />
          <Column field={'status'} header={t(`${translationsForReportTransit4279Columns}.status`)} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
};

export default Transit_4279;
