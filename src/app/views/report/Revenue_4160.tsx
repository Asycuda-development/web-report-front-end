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
const translationsForReportRevenue4160: string = "reports.revenue_4160"
const translationsForReportRevenue4160Columns: string = "reports.revenue_4160.columns"

const Revenue_4160 = () => {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);
  const { t } = useTranslation();

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true)
      const res = await axios.post('/reporting/RevenueReport4160', {
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
    <SimpleCard title={t(`${translationsForReportRevenue4160}.title`)}>
      <ReportHeaderInputs
        showStartDate
        showEndDate
        showCustomsList
        showCustomsProcedure
        ShowTinNumber
        onSearch={handleSubmit}
        tabelRef={tableRef}
      />
      {loading && (
        <LinearProgress />
      )}
      <Box width="100%" overflow="auto">
        <DataTable
          exportFilename={`Revenue Report 4160 ${new Date().toISOString()}`}
          ref={tableRef}
          value={reportData}
          rows={ROWS_PER_PAGE}
          rowsPerPageOptions={[5, 10, 25, 50, 100]}
          paginator
          stripedRows
          showGridlines
        >
          <Column style={{ minWidth: "12rem" }} field={'sadN'} header={t(`${translationsForReportRevenue4160Columns}.sadN`)} />
          <Column field={'regDat'} header={t(`${translationsForReportRevenue4160Columns}.regDat`)} />
          <Column field={'rcptNo'} header={t(`${translationsForReportRevenue4160Columns}.rcptNo`)} />
          <Column style={{ minWidth: "5rem" }} field={'office'} header={t(`${translationsForReportRevenue4160Columns}.office`)} />
          <Column field={'rcpDat'} header={t(`${translationsForReportRevenue4160Columns}.rcpDat`)} />
          <Column style={{ minWidth: "12rem" }} field={'cmpCod'} header={t(`${translationsForReportRevenue4160Columns}.cmpCod`)} />
          <Column style={{ minWidth: "20rem" }} field={'cmpNam'} header={t(`${translationsForReportRevenue4160Columns}.cmpNam`)} />
          <Column style={{ minWidth: "12rem" }} field={'cmpad3'} header={t(`${translationsForReportRevenue4160Columns}.cmpad3`)} />
          <Column style={{ minWidth: "10rem" }} field={'decCod'} header={t(`${translationsForReportRevenue4160Columns}.decCod`)} />
          <Column style={{ minWidth: "20rem" }} field={'decNam'} header={t(`${translationsForReportRevenue4160Columns}.decNam`)} />
          <Column field={'finCod'} header={t(`${translationsForReportRevenue4160Columns}.finCod`)} />
          <Column style={{ minWidth: "20rem" }} field={'finNam'} header={t(`${translationsForReportRevenue4160Columns}.finNam`)} />
          <Column field={'declarationValueCurrency'} header={t(`${translationsForReportRevenue4160Columns}.declarationValueCurrency`)} />
          <Column field={'declarationValueAfs'} header={t(`${translationsForReportRevenue4160Columns}.declarationValueAfs`)} />
          <Column style={{ minWidth: "12rem" }} field={'taxTotalIm'} header={t(`${translationsForReportRevenue4160Columns}.taxTotalIm`)} />
          <Column field={'amt_011'} header={t(`${translationsForReportRevenue4160Columns}.amt_011`)} />
          <Column field={'amt_012'} header={t(`${translationsForReportRevenue4160Columns}.amt_012`)} />
          <Column field={'amt_013'} header={t(`${translationsForReportRevenue4160Columns}.amt_013`)} />
          <Column field={'amt_015'} header={t(`${translationsForReportRevenue4160Columns}.amt_015`)} />
          <Column field={'amt_017'} header={t(`${translationsForReportRevenue4160Columns}.amt_017`)} />
          <Column field={'amt_018'} header={t(`${translationsForReportRevenue4160Columns}.amt_018`)} />
          <Column field={'amt_041'} header={t(`${translationsForReportRevenue4160Columns}.amt_041`)} />
          <Column field={'amt_042'} header={t(`${translationsForReportRevenue4160Columns}.amt_042`)} />
          <Column field={'amt_043'} header={t(`${translationsForReportRevenue4160Columns}.amt_043`)} />
          <Column field={'amt_044'} header={t(`${translationsForReportRevenue4160Columns}.amt_044`)} />
          <Column field={'amt_045'} header={t(`${translationsForReportRevenue4160Columns}.amt_045`)} />
          <Column field={'amt_046'} header={t(`${translationsForReportRevenue4160Columns}.amt_046`)} />
          <Column field={'amt_047'} header={t(`${translationsForReportRevenue4160Columns}.amt_047`)} />
          <Column field={'amt_048'} header={t(`${translationsForReportRevenue4160Columns}.amt_048`)} />
          <Column field={'amt_049'} header={t(`${translationsForReportRevenue4160Columns}.amt_049`)} />
          <Column field={'amt_75'} header={t(`${translationsForReportRevenue4160Columns}.amt_75`)} />
          <Column field={'amt_88'} header={t(`${translationsForReportRevenue4160Columns}.amt_88`)} />
          <Column field={'amt_80'} header={t(`${translationsForReportRevenue4160Columns}.amt_80`)} />
          <Column field={'amt_014'} header={t(`${translationsForReportRevenue4160Columns}.amt_014`)} />
          <Column field={'amt_040'} header={t(`${translationsForReportRevenue4160Columns}.amt_040`)} />
          <Column field={'amt_019'} header={t(`${translationsForReportRevenue4160Columns}.amt_019`)} />
          <Column field={'amt_099'} header={t(`${translationsForReportRevenue4160Columns}.amt_099`)} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
};

export default Revenue_4160;
