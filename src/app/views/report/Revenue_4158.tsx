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
const translationsForReportRevenue4158: string = "reports.revenue_4158"
const translationsForReportRevenue4158Columns: string = "reports.revenue_4158.columns"

const Revenue_4158 = () => {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);
  const { t } = useTranslation();

  useEffect(() => { }, []);

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true)
      const res = await axios.post('/reporting/RevenueReport4158', {
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
    <SimpleCard title={t(`${translationsForReportRevenue4158}.title`)}>
      <ReportHeaderInputs
        showStartDate
        showEndDate
        showCustomsList
        showRegDate
        showPayDate
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
          <Column style={{ minWidth: "20rem" }} field={'office'} header={t(`${translationsForReportRevenue4158Columns}.office`)} />
          <Column field={'amt_028'} header={t(`${translationsForReportRevenue4158Columns}.amt_028`)} />
          <Column field={'amt_026'} header={t(`${translationsForReportRevenue4158Columns}.amt_026`)} />
          <Column field={'amt_022'} header={t(`${translationsForReportRevenue4158Columns}.amt_022`)} />
          <Column field={'amt_21'} header={t(`${translationsForReportRevenue4158Columns}.amt_21`)} />
          <Column field={'amt_45'} header={t(`${translationsForReportRevenue4158Columns}.amt_45`)} />
          <Column field={'amt_41'} header={t(`${translationsForReportRevenue4158Columns}.amt_41`)} />
          <Column field={'amt_43'} header={t(`${translationsForReportRevenue4158Columns}.amt_43`)} />
          <Column field={'amt_46'} header={t(`${translationsForReportRevenue4158Columns}.amt_46`)} />
          <Column field={'amt_47'} header={t(`${translationsForReportRevenue4158Columns}.amt_47`)} />
          <Column field={'amt_047'} header={t(`${translationsForReportRevenue4158Columns}.amt_047`)} />
          <Column field={'amt_42'} header={t(`${translationsForReportRevenue4158Columns}.amt_42`)} />
          <Column field={'amt_64'} header={t(`${translationsForReportRevenue4158Columns}.amt_64`)} />
          <Column field={'amt_25'} header={t(`${translationsForReportRevenue4158Columns}.amt_25`)} />
          <Column field={'amt_68'} header={t(`${translationsForReportRevenue4158Columns}.amt_68`)} />
          <Column field={'amt_66'} header={t(`${translationsForReportRevenue4158Columns}.amt_66`)} />
          <Column field={'amt_029'} header={t(`${translationsForReportRevenue4158Columns}.amt_029`)} />
          <Column field={'amt_039'} header={t(`${translationsForReportRevenue4158Columns}.amt_039`)} />
          <Column field={'amt_038'} header={t(`${translationsForReportRevenue4158Columns}.amt_038`)} />
          <Column field={'amt_11'} header={t(`${translationsForReportRevenue4158Columns}.amt_11`)} />
          <Column field={'amt_12'} header={t(`${translationsForReportRevenue4158Columns}.amt_12`)} />
          <Column field={'amt_14'} header={t(`${translationsForReportRevenue4158Columns}.amt_14`)} />
          <Column field={'amt_015'} header={t(`${translationsForReportRevenue4158Columns}.amt_015`)} />
          <Column field={'amt_016'} header={t(`${translationsForReportRevenue4158Columns}.amt_016`)} />
          <Column field={'amt_017'} header={t(`${translationsForReportRevenue4158Columns}.amt_017`)} />
          <Column field={'amt_20'} header={t(`${translationsForReportRevenue4158Columns}.amt_20`)} />
          <Column field={'amt_32'} header={t(`${translationsForReportRevenue4158Columns}.amt_32`)} />
          <Column field={'amt_49'} header={t(`${translationsForReportRevenue4158Columns}.amt_49`)} />
          <Column field={'amt_51'} header={t(`${translationsForReportRevenue4158Columns}.amt_51`)} />
          <Column field={'amt_52'} header={t(`${translationsForReportRevenue4158Columns}.amt_52`)} />
          <Column field={'amt_53'} header={t(`${translationsForReportRevenue4158Columns}.amt_53`)} />
          <Column field={'amt_58'} header={t(`${translationsForReportRevenue4158Columns}.amt_58`)} />
          <Column field={'amt_65'} header={t(`${translationsForReportRevenue4158Columns}.amt_65`)} />
          <Column field={'amt_70'} header={t(`${translationsForReportRevenue4158Columns}.amt_70`)} />
          <Column field={'amt_75'} header={t(`${translationsForReportRevenue4158Columns}.amt_75`)} />
          <Column field={'amt_025'} header={t(`${translationsForReportRevenue4158Columns}.amt_025`)} />
          <Column field={'amt_040'} header={t(`${translationsForReportRevenue4158Columns}.amt_040`)} />
          <Column field={'amt_044'} header={t(`${translationsForReportRevenue4158Columns}.amt_044`)} />
          <Column field={'amt_076'} header={t(`${translationsForReportRevenue4158Columns}.amt_076`)} />
          <Column field={'amt_13'} header={t(`${translationsForReportRevenue4158Columns}.amt_13`)} />
          <Column field={'amt_15'} header={t(`${translationsForReportRevenue4158Columns}.amt_15`)} />
          <Column field={'amt_16'} header={t(`${translationsForReportRevenue4158Columns}.amt_16`)} />
          <Column field={'amt_17'} header={t(`${translationsForReportRevenue4158Columns}.amt_17`)} />
          <Column field={'amt_19'} header={t(`${translationsForReportRevenue4158Columns}.amt_19`)} />
          <Column field={'amt_55'} header={t(`${translationsForReportRevenue4158Columns}.amt_55`)} />
          <Column field={'amt_57'} header={t(`${translationsForReportRevenue4158Columns}.amt_57`)} />
          <Column field={'amt_60'} header={t(`${translationsForReportRevenue4158Columns}.amt_60`)} />
          <Column field={'amt_67'} header={t(`${translationsForReportRevenue4158Columns}.amt_67`)} />
          <Column field={'amt_72'} header={t(`${translationsForReportRevenue4158Columns}.amt_72`)} />
          <Column field={'amt_73'} header={t(`${translationsForReportRevenue4158Columns}.amt_73`)} />
          <Column field={'amt_74'} header={t(`${translationsForReportRevenue4158Columns}.amt_74`)} />
          <Column field={'amt_77'} header={t(`${translationsForReportRevenue4158Columns}.amt_77`)} />
          <Column field={'amt_78'} header={t(`${translationsForReportRevenue4158Columns}.amt_78`)} />
          <Column field={'amt_79'} header={t(`${translationsForReportRevenue4158Columns}.amt_79`)} />
          <Column field={'amt_80'} header={t(`${translationsForReportRevenue4158Columns}.amt_80`)} />
          <Column field={'amt_021'} header={t(`${translationsForReportRevenue4158Columns}.amt_021`)} />
          <Column field={'amt_63'} header={t(`${translationsForReportRevenue4158Columns}.amt_63`)} />
          <Column field={'amt_080'} header={t(`${translationsForReportRevenue4158Columns}.amt_080`)} />
          <Column field={'amt_81'} header={t(`${translationsForReportRevenue4158Columns}.amt_81`)} />
          <Column field={'amt_82'} header={t(`${translationsForReportRevenue4158Columns}.amt_82`)} />
          <Column field={'amt_71'} header={t(`${translationsForReportRevenue4158Columns}.amt_71`)} />
          <Column field={'amt_83'} header={t(`${translationsForReportRevenue4158Columns}.amt_83`)} />
          <Column field={'amt_84'} header={t(`${translationsForReportRevenue4158Columns}.amt_84`)} />
          <Column field={'amt_85'} header={t(`${translationsForReportRevenue4158Columns}.amt_85`)} />
          <Column field={'amt_86'} header={t(`${translationsForReportRevenue4158Columns}.amt_86`)} />
          <Column field={'amt_87'} header={t(`${translationsForReportRevenue4158Columns}.amt_87`)} />
          <Column field={'amt_88'} header={t(`${translationsForReportRevenue4158Columns}.amt_88`)} />
          <Column field={'amt_89'} header={t(`${translationsForReportRevenue4158Columns}.amt_89`)} />
          <Column field={'amt_90'} header={t(`${translationsForReportRevenue4158Columns}.amt_90`)} />
          <Column field={'amt_92'} header={t(`${translationsForReportRevenue4158Columns}.amt_92`)} />
          <Column field={'amt_93'} header={t(`${translationsForReportRevenue4158Columns}.amt_93`)} />
          <Column field={'amt_94'} header={t(`${translationsForReportRevenue4158Columns}.amt_94`)} />
          <Column field={'amt_96'} header={t(`${translationsForReportRevenue4158Columns}.amt_96`)} />
          <Column field={'amt_97'} header={t(`${translationsForReportRevenue4158Columns}.amt_97`)} />
          <Column field={'amt_33'} header={t(`${translationsForReportRevenue4158Columns}.amt_33`)} />
          <Column field={'amt_61'} header={t(`${translationsForReportRevenue4158Columns}.amt_61`)} />
          <Column field={'amt_62'} header={t(`${translationsForReportRevenue4158Columns}.amt_62`)} />
          <Column field={'amt_019'} header={t(`${translationsForReportRevenue4158Columns}.amt_019`)} />
          <Column field={'amt_098'} header={t(`${translationsForReportRevenue4158Columns}.amt_098`)} />
          <Column field={'amt_099'} header={t(`${translationsForReportRevenue4158Columns}.amt_099`)} />
          <Column field={'amt_100'} header={t(`${translationsForReportRevenue4158Columns}.amt_100`)} />
          <Column style={{ minWidth: "12rem" }} field={'amt_total'} header={t(`${translationsForReportRevenue4158Columns}.amt_total`)} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
};

export default Revenue_4158;
