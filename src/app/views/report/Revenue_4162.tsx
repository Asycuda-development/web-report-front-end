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
const translationsForReportRevenue4162: string = "reports.revenue_4162"
const translationsForReportRevenue4162Columns: string = "reports.revenue_4162.columns"

const Revenue_4162 = () => {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);
  const { t } = useTranslation();

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true)
      const res = await axios.post('/reporting/RevenueReport4162', {
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
    <SimpleCard title={t(`${translationsForReportRevenue4162}.title`)}>
      <ReportHeaderInputs
        showStartDate
        showEndDate
        showUserName
        showCustomsList
        ShowModOfPayment
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

          <Column field={'idenam'} header={t(`${translationsForReportRevenue4162Columns}.idenam`)} />
          <Column field={'ideyea'} header={t(`${translationsForReportRevenue4162Columns}.ideyea`)} />
          <Column field={'ideser'} header={t(`${translationsForReportRevenue4162Columns}.ideser`)} />
          <Column field={'idenbr'} header={t(`${translationsForReportRevenue4162Columns}.idenbr`)} />
          <Column field={'ref'} header={t(`${translationsForReportRevenue4162Columns}.ref`)} />
          <Column field={'rcpDat'} header={t(`${translationsForReportRevenue4162Columns}.rcpDat`)} />
          <Column style={{ minWidth: "20rem" }} field={'operationTime'} header={t(`${translationsForReportRevenue4162Columns}.operationTime`)} />
          <Column field={'userid'} header={t(`${translationsForReportRevenue4162Columns}.userid`)} />
          <Column style={{ minWidth: "14rem" }} field={'userName'} header={t(`${translationsForReportRevenue4162Columns}.userName`)} />
          <Column field={'tarcmpcod'} header={t(`${translationsForReportRevenue4162Columns}.tarcmpcod`)} />
          <Column style={{ minWidth: "20rem" }} field={'tranam'} header={t(`${translationsForReportRevenue4162Columns}.tranam`)} />
          <Column field={'regdat'} header={t(`${translationsForReportRevenue4162Columns}.regdat`)} />
          <Column field={'rcpnbr'} header={t(`${translationsForReportRevenue4162Columns}.rcpnbr`)} />
          <Column field={'bnkNbr'} header={t(`${translationsForReportRevenue4162Columns}.bnkNbr`)} />
          <Column field={'bnkDat'} header={t(`${translationsForReportRevenue4162Columns}.bnkDat`)} />
          <Column field={'assNbr'} header={t(`${translationsForReportRevenue4162Columns}.assNbr`)} />
          <Column field={'assSer'} header={t(`${translationsForReportRevenue4162Columns}.assSer`)} />
          <Column field={'modTyp'} header={t(`${translationsForReportRevenue4162Columns}.modTyp`)} />
          <Column style={{ minWidth: "15rem" }} field={'nam'} header={t(`${translationsForReportRevenue4162Columns}.nam`)} />
          <Column field={'saremiasht'} header={t(`${translationsForReportRevenue4162Columns}.saremiasht`)} />
          <Column field={'sharwali'} header={t(`${translationsForReportRevenue4162Columns}.sharwali`)} />
          <Column field={'municipalityPlusRedCrescent'} header={t(`${translationsForReportRevenue4162Columns}.municipalityPlusRedCrescent`)} />
          <Column field={'customsDuty'} header={t(`${translationsForReportRevenue4162Columns}.customsDuty`)} />
          <Column field={'amttot'} header={t(`${translationsForReportRevenue4162Columns}.amttot`)} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
};

export default Revenue_4162;
