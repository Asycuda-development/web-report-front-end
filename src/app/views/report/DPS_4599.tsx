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
const translationsForReportDPS4599: string = "reports.dps_4599"
const translationsForReportDPS4599Columns: string = "reports.dps_4599.columns"

function DPS_4599() {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);
  const { t } = useTranslation();

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true);
      const res = await axios.post('/reporting/DpsReport4599', {
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
    <SimpleCard title={t(`${translationsForReportDPS4599}.title`)}>
      <ReportHeaderInputs
        showStartDate
        showEndDate
        showAssesDate
        showPayDate
        showCustomsProcedure
        showCustomsList
        showHsCode
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
          rowsPerPageOptions={[3, 10, 25, 50, 100]}
          paginator
          stripedRows
          showGridlines
        >
          <Column field={'ideTypSad'} header={t(`${translationsForReportDPS4599Columns}.ideTypSad`)} />
          <Column field={'tptCuoNam'} header={t(`${translationsForReportDPS4599Columns}.tptCuoNam`)} />
          <Column field={'ideCuoNam'} header={t(`${translationsForReportDPS4599Columns}.ideCuoNam`)} />
          <Column field={'ItemTotal'} header={t(`${translationsForReportDPS4599Columns}.ItemTotal`)} />
          <Column field={'ItemNo'} header={t(`${translationsForReportDPS4599Columns}.ItemNo`)} />
          <Column field={'TotalPackage'} header={t(`${translationsForReportDPS4599Columns}.TotalPackage`)} />
          <Column field={'TypeOfPackage'} header={t(`${translationsForReportDPS4599Columns}.TypeOfPackage`)} />
          <Column field={'RegNo'} header={t(`${translationsForReportDPS4599Columns}.RegNo`)} />
          <Column field={'RegDate'} header={t(`${translationsForReportDPS4599Columns}.RegDate`)} />
          <Column field={'ASMTNo'} header={t(`${translationsForReportDPS4599Columns}.ASMTNo`)} />
          <Column field={'ASTDate'} header={t(`${translationsForReportDPS4599Columns}.ASTDate`)} />
          <Column field={'ideCuoCod'} header={t(`${translationsForReportDPS4599Columns}.ideCuoCod`)} />
          <Column field={'CodeOfPackage'} header={t(`${translationsForReportDPS4599Columns}.CodeOfPackage`)} />
          <Column field={'RCPTNo'} header={t(`${translationsForReportDPS4599Columns}.RCPTNo`)} />
          <Column field={'RCPTDate'} header={t(`${translationsForReportDPS4599Columns}.RCPTDate`)} />
          <Column field={'status'} header={t(`${translationsForReportDPS4599Columns}.status`)} />
          <Column field={'cpc'} header={t(`${translationsForReportDPS4599Columns}.cpc`)} />
          <Column field={'CustomsProc'} header={t(`${translationsForReportDPS4599Columns}.CustomsProc`)} />
          <Column field={'hsCode'} header={t(`${translationsForReportDPS4599Columns}.hsCode`)} />
          <Column field={'dsc'} header={t(`${translationsForReportDPS4599Columns}.dsc`)} />
          <Column style={{ minWidth: '15rem' }} field={'gdsDs3'} header={t(`${translationsForReportDPS4599Columns}.gdsDs3`)} />
          <Column field={'pckMrk1'} header={t(`${translationsForReportDPS4599Columns}.pckMrk1`)} />
          <Column field={'pckMrk2'} header={t(`${translationsForReportDPS4599Columns}.pckMrk2`)} />
          <Column field={'ItemGrossWeight'} header={t(`${translationsForReportDPS4599Columns}.ItemGrossWeight`)} />
          <Column field={'ItemNetWeight'} header={t(`${translationsForReportDPS4599Columns}.ItemNetWeight`)} />
          <Column field={'BrokerTin'} header={t(`${translationsForReportDPS4599Columns}.BrokerTin`)} />
          <Column field={'decNam'} header={t(`${translationsForReportDPS4599Columns}.decNam`)} />
          <Column field={'CompanyTin'} header={t(`${translationsForReportDPS4599Columns}.CompanyTin`)} />
          <Column field={'CMPNam'} header={t(`${translationsForReportDPS4599Columns}.CMPNam`)} />
          <Column style={{ minWidth: '15rem' }} field={'finNam'} header={t(`${translationsForReportDPS4599Columns}.finNam`)} />
          <Column field={'CountryOrg'} header={t(`${translationsForReportDPS4599Columns}.CountryOrg`)} />
          <Column field={'CountryDest'} header={t(`${translationsForReportDPS4599Columns}.CountryDest`)} />
          <Column field={'CountryExport'} header={t(`${translationsForReportDPS4599Columns}.CountryExport`)} />
          <Column field={'LorryTotal'} header={t(`${translationsForReportDPS4599Columns}.LorryTotal`)} />
          <Column field={'CurrecnyRate'} header={t(`${translationsForReportDPS4599Columns}.CurrecnyRate`)} />
          <Column field={'DeclarationValueCurrency'} header={t(`${translationsForReportDPS4599Columns}.DeclarationValueCurrency`)} />
          <Column field={'DeclarationValueAfs'} header={t(`${translationsForReportDPS4599Columns}.DeclarationValueAfs`)} />
          <Column field={'DeclarationTaxes'} header={t(`${translationsForReportDPS4599Columns}.DeclarationTaxes`)} />
          <Column field={'ItemValueCurrency'} header={t(`${translationsForReportDPS4599Columns}.ItemValueCurrency`)} />
          <Column field={'ItemValueAfs'} header={t(`${translationsForReportDPS4599Columns}.ItemValueAfs`)} />
          <Column field={'taxAmt'} header={t(`${translationsForReportDPS4599Columns}.taxAmt`)} />
          <Column field={'bankNam'} header={t(`${translationsForReportDPS4599Columns}.bankNam`)} />
          <Column field={'CurrrencyCode'} header={t(`${translationsForReportDPS4599Columns}.CurrrencyCode`)} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
}

export default DPS_4599;
