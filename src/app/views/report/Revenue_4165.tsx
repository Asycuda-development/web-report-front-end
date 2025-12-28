import { SimpleCard } from '../../components';
import { Box, LinearProgress } from '@mui/material';
import { useState, useRef } from 'react';
import { ROWS_PER_PAGE } from '../../utils/constant';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
import { useTranslation } from 'react-i18next';

const translationsForBasedOnError: string = "errors"
const translationsForBasedOn: string = "basedOn"
const translationsForReportRevenue4165: string = "reports.revenue_4165"
const translationsForReportRevenue4165Columns: string = "reports.revenue_4165.columns"

const Revenue_4165 = () => {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);
  const { t } = useTranslation();

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true);
      const res = await axios.post('/reporting/RevenueReport4165', {
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
    <SimpleCard title={t(`${translationsForReportRevenue4165}.title`)}>
      <ReportHeaderInputs
        report='Revenue_4165'
        showStartDate
        showEndDate
        showCustomsList
        showUserName
        onSearch={handleSubmit}
        tabelRef={tableRef}
      />
      {loading && (
        <LinearProgress />
      )}
      <Box width="100%" overflow="auto">
        <DataTable
          exportFilename={`Revenue Report 4165 ${new Date().toISOString()}`}
          ref={tableRef}
          value={reportData}
          rows={ROWS_PER_PAGE}
          rowsPerPageOptions={[3, 10, 25, 50, 100]}
          paginator
          stripedRows
          showGridlines
        >
          <Column field={'customsNam'} header={t(`${translationsForReportRevenue4165Columns}.customsNam`)} />
          <Column field={'RcpDate'} header={t(`${translationsForReportRevenue4165Columns}.RcpDate`)} />
          <Column field={'RcpNbr'} header={t(`${translationsForReportRevenue4165Columns}.RcpNbr`)} />
          <Column field={'ser'} header={t(`${translationsForReportRevenue4165Columns}.ser`)} />
          <Column field={'DeclarantCode'} header={t(`${translationsForReportRevenue4165Columns}.DeclarantCode`)} />
          <Column field={'CompanyCode'} header={t(`${translationsForReportRevenue4165Columns}.CompanyCode`)} />
          <Column style={{ minWidth: '11rem' }} field={'TraderName'} header={t(`${translationsForReportRevenue4165Columns}.TraderName`)} />
          <Column field={'ACD_ID'} header={t(`${translationsForReportRevenue4165Columns}.ACD_ID`)} />
          <Column field={'CBS_Batch_ID'} header={t(`${translationsForReportRevenue4165Columns}.CBS_Batch_ID`)} />
          <Column field={'bnk_Nbr'} header={t(`${translationsForReportRevenue4165Columns}.bnk_Nbr`)} />
          <Column field={'bnk_Dat'} header={t(`${translationsForReportRevenue4165Columns}.bnk_Dat`)} />
          <Column field={'status'} header={t(`${translationsForReportRevenue4165Columns}.status`)} />
          <Column field={'Operation_Time'} header={t(`${translationsForReportRevenue4165Columns}.Operation_Time`)} />
          <Column field={'userid'} header={t(`${translationsForReportRevenue4165Columns}.userid`)} />
          <Column field={'userName'} header={t(`${translationsForReportRevenue4165Columns}.userName`)} />
          <Column field={'TOT'} header={t(`${translationsForReportRevenue4165Columns}.TOT`)} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
};

export default Revenue_4165;
