import { Box, LinearProgress } from '@mui/material';
import axios from 'axios';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { useEffect, useRef, useState } from 'react';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
import { SimpleCard } from '../../components';
import { ROWS_PER_PAGE } from '../../utils/constant';
import { Toast } from 'primereact/toast';
import { useTranslation } from 'react-i18next';

const translationsForBasedOnError: string = "errors"
const translationsForBasedOn: string = "basedOn"
const translationsForReportTransit4266: string = "reports.transit_4266"
const translationsForReportTransit4266Columns: string = "reports.transit_4266.columns"

const Transit_4266 = () => {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);
  const toastRef: any = useRef(null);
  const { t } = useTranslation();

  const handleSubmit = async (data: SearchData) => {
    try {
      if (data.basedOn && !data.basedOnValue) {
        toastRef.current.show({
          severity: 'error',
          summary: t(`${translationsForBasedOnError}.basedOnSummaryError`),
          detail: t(`${translationsForBasedOnError}.basedOnDetailedError`)
        });
        return
      }
      setLoading(true)
      const res = await axios.post('/reporting/TransitReport4266', {
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

  const basedOnOptions = [{
    label: t(`${translationsForBasedOn}.declarant`),
    name: 'declarant'
  },
  {
    label: t(`${translationsForBasedOn}.company`),
    name: 'company'
  },
  {
    label: t(`${translationsForBasedOn}.financial`),
    name: 'Financial'
  }]

  return (
    <SimpleCard title={t(`${translationsForReportTransit4266}.title`)}>
      <ReportHeaderInputs
        showStartDate
        showEndDate
        showCustomsList
        showRegDate
        showDepartureDate
        showTransitType2
        showBasedOn
        basedOnOptions={basedOnOptions}
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
          <Column field={'IDE_CUO_DPA_NAM'} header={t(`${translationsForReportTransit4266Columns}.IDE_CUO_DPA_NAM`)} />
          <Column field={'IDE_CUO_DES_NAM'} header={t(`${translationsForReportTransit4266Columns}.IDE_CUO_DES_NAM`)} />
          <Column field={'IDE_TYP_TRS'} header={t(`${translationsForReportTransit4266Columns}.IDE_TYP_TRS`)} />
          <Column field={'STATUS'} header={t(`${translationsForReportTransit4266Columns}.STATUS`)} />
          <Column field={'T1_cnt'} header={t(`${translationsForReportTransit4266Columns}.T1_cnt`)} />
          {/* <Column field={'tad_tot'} header={t(`${translationsForReportTransit4266Columns}.tad_tot`)} /> */}
        </DataTable>
      </Box>
      <Toast ref={toastRef} />
    </SimpleCard>
  );
};

export default Transit_4266;
