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
const translationsForReportRevenue48100: string = "reports.revenue_48100"
const translationsForReportRevenue48100Columns: string = "reports.revenue_48100.columns"

const Revenue_48100 = () => {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);
  const { t } = useTranslation();

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true)
      const res = await axios.post('/reporting/RevenueReport48100', {
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
    <SimpleCard title={t(`${translationsForReportRevenue48100}.title`)}>
      <ReportHeaderInputs
        showStartDate
        showEndDate
        showCustomsList
        showDepartureDate
        showRegDate
        onSearch={handleSubmit}
        tabelRef={tableRef}
      />
      {loading && (
        <LinearProgress />
      )}
      <Box width="100%" overflow="auto">
        <DataTable
          exportFilename={`Revenue Report 48100 ${new Date().toISOString()}`}
          ref={tableRef}
          value={reportData}
          rows={ROWS_PER_PAGE}
          rowsPerPageOptions={[5, 10, 25, 50, 100]}
          paginator
          stripedRows
          showGridlines
        >
          <Column field={'status'} header={t(`${translationsForReportRevenue48100Columns}.status`)} />
          <Column field={'cuocod'} header={t(`${translationsForReportRevenue48100Columns}.cuocod`)} />
          <Column field={'regdat'} header={t(`${translationsForReportRevenue48100Columns}.regdat`)} />
          <Column field={'regnbr'} header={t(`${translationsForReportRevenue48100Columns}.regnbr`)} />
          <Column field={'perlna'} header={t(`${translationsForReportRevenue48100Columns}.perlna`)} />
          <Column field={'perfna'} header={t(`${translationsForReportRevenue48100Columns}.perfna`)} />
          <Column field={'perplc'} header={t(`${translationsForReportRevenue48100Columns}.perplc`)} />
          <Column field={'pernad'} header={t(`${translationsForReportRevenue48100Columns}.pernad`)} />
          <Column field={'peradr'} header={t(`${translationsForReportRevenue48100Columns}.peradr`)} />
          <Column field={'percit'} header={t(`${translationsForReportRevenue48100Columns}.percit`)} />
          <Column field={'percna'} header={t(`${translationsForReportRevenue48100Columns}.percna`)} />
          <Column field={'per_Job'} header={t(`${translationsForReportRevenue48100Columns}.per_Job`)} />
          <Column field={'pasnbr'} header={t(`${translationsForReportRevenue48100Columns}.pasnbr`)} />
          <Column field={'issdat'} header={t(`${translationsForReportRevenue48100Columns}.issdat`)} />
          <Column field={'isscit'} header={t(`${translationsForReportRevenue48100Columns}.isscit`)} />
          <Column field={'isscna'} header={t(`${translationsForReportRevenue48100Columns}.isscna`)} />
          <Column field={'perbsn'} header={t(`${translationsForReportRevenue48100Columns}.perbsn`)} />
          <Column field={'cshpro'} header={t(`${translationsForReportRevenue48100Columns}.cshpro`)} />
          <Column field={'cshuse'} header={t(`${translationsForReportRevenue48100Columns}.cshuse`)} />
          <Column field={'motdsc'} header={t(`${translationsForReportRevenue48100Columns}.motdsc`)} />
          <Column field={'depcty'} header={t(`${translationsForReportRevenue48100Columns}.depcty`)} />
          <Column field={'depnam'} header={t(`${translationsForReportRevenue48100Columns}.depnam`)} />
          <Column field={'depdat'} header={t(`${translationsForReportRevenue48100Columns}.depdat`)} />
          <Column field={'tracty'} header={t(`${translationsForReportRevenue48100Columns}.tracty`)} />
          <Column field={'tranam'} header={t(`${translationsForReportRevenue48100Columns}.tranam`)} />
          <Column field={'tradat'} header={t(`${translationsForReportRevenue48100Columns}.tradat`)} />
          <Column field={'arrcty'} header={t(`${translationsForReportRevenue48100Columns}.arrcty`)} />
          <Column field={'arrnam'} header={t(`${translationsForReportRevenue48100Columns}.arrnam`)} />
          <Column field={'arrdat'} header={t(`${translationsForReportRevenue48100Columns}.arrdat`)} />
          <Column field={'cmpnam'} header={t(`${translationsForReportRevenue48100Columns}.cmpnam`)} />
          <Column field={'cmocod'} header={t(`${translationsForReportRevenue48100Columns}.cmocod`)} />
          <Column field={'refnbr'} header={t(`${translationsForReportRevenue48100Columns}.refnbr`)} />
          <Column field={'cuodat'} header={t(`${translationsForReportRevenue48100Columns}.cuodat`)} />
          <Column field={'amttot'} header={t(`${translationsForReportRevenue48100Columns}.amttot`)} />
          <Column field={'amtdsc'} header={t(`${translationsForReportRevenue48100Columns}.amtdsc`)} />
          <Column field={'amtoth'} header={t(`${translationsForReportRevenue48100Columns}.amtoth`)} />
          <Column field={'amtval'} header={t(`${translationsForReportRevenue48100Columns}.amtval`)} />
          <Column field={'curcod'} header={t(`${translationsForReportRevenue48100Columns}.curcod`)} />
          <Column field={'curdsc'} header={t(`${translationsForReportRevenue48100Columns}.curdsc`)} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
};

export default Revenue_48100;
