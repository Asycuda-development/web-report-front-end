import { SimpleCard } from '../../components';
import { Box, styled, LinearProgress } from '@mui/material';
import { useEffect, useState, useRef } from 'react';
import { ROWS_PER_PAGE } from '../../utils/constant';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
import { useTranslation } from 'react-i18next';

const translationsForBasedOnError: string = "errors"
const translationsForBasedOn: string = "basedOn"
const translationsForReportDPS4595: string = "reports.dps_4595"
const translationsForReportDPS4595Columns: string = "reports.dps_4595.columns"

function DPS_4595() {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);
  const { t } = useTranslation();

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true);
      const res = await axios.post('/reporting/DpsReport4595', {
        ...data,
        type: data.customsProcedure,
        customsCode: data.CustomsCode
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
    <SimpleCard title={t(`${translationsForReportDPS4595}.title`)}>
      <ReportHeaderInputs
        showStartDate
        showEndDate
        showCustomsProcedure
        showCustomsList
        showHsCode
        showExemptionType
        onSearch={handleSubmit}
        tabelRef={tableRef}
      />
      {loading && (
        <LinearProgress />
      )}
      <Box width="100%" overflow="auto">
        <DataTable
          exportFilename={`DPS_4595 ${new Date().toISOString()}`}
          ref={tableRef}
          value={reportData}
          rows={ROWS_PER_PAGE}
          rowsPerPageOptions={[3, 10, 25, 50, 100]}
          paginator
          stripedRows
          showGridlines
        >
          <Column field={'sad_Type'} header={t(`${translationsForReportDPS4595Columns}.sad_Type`)} />
          <Column filter filterField={'bcp'} field={'bcp'} header={t(`${translationsForReportDPS4595Columns}.bcp`)} />
          <Column field={'icd'} header={t(`${translationsForReportDPS4595Columns}.icd`)} />
          <Column
            filter
            filterField="country_Export"
            field={'country_Export'}
            header={t(`${translationsForReportDPS4595Columns}.country_Export`)}
          />
          <Column field={'country_Dest'} header={t(`${translationsForReportDPS4595Columns}.country_Dest`)} />
          <Column field={'hsCode'} header={t(`${translationsForReportDPS4595Columns}.hsCode`)} />
          <Column field={'tsc'} header={t(`${translationsForReportDPS4595Columns}.tsc`)} />
          <Column
            style={{ minWidth: '16rem', textAlign: 'center' }}
            filter
            filterField={'dsc'}
            field={'dsc'}
            header={t(`${translationsForReportDPS4595Columns}.dsc`)}
          />
          <Column field={'item_Net_Weight'} header={t(`${translationsForReportDPS4595Columns}.item_Net_Weight`)} />
          <Column field={'item_Value_currency'} header={t(`${translationsForReportDPS4595Columns}.item_Value_currency`)} />
          <Column field={'item_Value_Afs'} header={t(`${translationsForReportDPS4595Columns}.item_Value_Afs`)} />
          <Column field={'tax_Rate'} header={t(`${translationsForReportDPS4595Columns}.tax_Rate`)} />
          <Column field={'tax_Code'} header={t(`${translationsForReportDPS4595Columns}.tax_Code`)} />
          <Column field={'tax_Base'} header={t(`${translationsForReportDPS4595Columns}.tax_Base`)} />
          <Column field={'code_Tax_Amount'} header={t(`${translationsForReportDPS4595Columns}.code_Tax_Amount`)} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
}

export default DPS_4595;
