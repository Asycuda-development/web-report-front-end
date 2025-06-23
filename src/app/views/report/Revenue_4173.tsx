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
const translationsForReportRevenue4173: string = "reports.revenue_4173"
const translationsForReportRevenue4173Columns: string = "reports.revenue_4173.columns"

const Revenue_4173 = () => {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);
  const { t } = useTranslation();

  useEffect(() => { }, []);

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true)
      const res = await axios.post('/reporting/RevenueReport4173', {
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
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <SimpleCard title={t(`${translationsForReportRevenue4173}.title`)}>
      <ReportHeaderInputs
        showStartDate
        showEndDate
        showCustomsList
        showDestinationCustomsList
        showRegDate
        showArrivalDate
        showValidationDate
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
          <Column field={'deptOffNam'} header={t(`${translationsForReportRevenue4173Columns}.deptOffNam`)} />
          <Column field={'destOff'} header={t(`${translationsForReportRevenue4173Columns}.destOff`)} />
          <Column field={'expCty'} header={t(`${translationsForReportRevenue4173Columns}.expCty`)} />
          <Column field={'destCty'} header={t(`${translationsForReportRevenue4173Columns}.destCty`)} />
          <Column field={'transitType'} header={t(`${translationsForReportRevenue4173Columns}.transitType`)} />
          <Column field={'hsCod'} header={t(`${translationsForReportRevenue4173Columns}.hsCod`)} />
          <Column field={'dsc'} header={t(`${translationsForReportRevenue4173Columns}.dsc`)} />
          <Column field={'regNo'} header={t(`${translationsForReportRevenue4173Columns}.regNo`)} />
          <Column field={'regDat'} header={t(`${translationsForReportRevenue4173Columns}.regDat`)} />
          <Column field={'cod'} header={t(`${translationsForReportRevenue4173Columns}.cod`)} />
          <Column field={'nam'} header={t(`${translationsForReportRevenue4173Columns}.nam`)} />
          <Column field={'tot'} header={t(`${translationsForReportRevenue4173Columns}.tot`)} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
};

export default Revenue_4173;
