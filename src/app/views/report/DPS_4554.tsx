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
const translationsForReportDPS4554: string = "reports.dps_4554"
const translationsForReportDPS4554Columns: string = "reports.dps_4554.columns"

function DPS_4554() {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);
  const { t } = useTranslation();

  useEffect(() => { }, []);

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true);
      const res = await axios.post('/reporting/DpsReport4554', {
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

    <SimpleCard title={t(`${translationsForReportDPS4554}.title`)}>
      <ReportHeaderInputs
        showStartDate
        showEndDate
        ShowTinNumber
        showTaxCode
        showCustomsProcedure
        showRegDate
        showAssesDate
        showPayDate
        showCustomsList
        ShowHsCode
        onSearch={handleSubmit}
        tabelRef={tableRef}

      />
      {loading && (
        <LinearProgress />
      )}
      <Box width="100%" overflow="auto">
        <DataTable
          exportFilename={`DPS_4554 ${new Date().toISOString()}`}
          ref={tableRef}
          value={reportData}
          rows={ROWS_PER_PAGE}
          rowsPerPageOptions={[5, 10, 25, 50, 100]}
          paginator
          stripedRows
          showGridlines
          emptyMessage={'No Data Available'}
        >

          <Column field={'ideTypSad'} header={t(`${translationsForReportDPS4554Columns}.ideTypSad`)} />
          <Column style={{ minWidth: "12rem" }} field={'tptCuoNam'} header={t(`${translationsForReportDPS4554Columns}.tptCuoNam`)} />
          <Column style={{ minWidth: "12rem" }} filter filterField="ideCuoNam" field={'ideCuoNam'} header={t(`${translationsForReportDPS4554Columns}.ideCuoNam`)} />
          <Column field={'ideCuoCod'} header={t(`${translationsForReportDPS4554Columns}.ideCuoCod`)} />
          <Column field={'itemTotal'} header={t(`${translationsForReportDPS4554Columns}.itemTotal`)} />
          <Column field={'itemNo'} header={t(`${translationsForReportDPS4554Columns}.itemNo`)} />
          <Column field={'totalPackage'} header={t(`${translationsForReportDPS4554Columns}.totalPackage`)} />
          <Column field={'codeOfPackage'} header={t(`${translationsForReportDPS4554Columns}.codeOfPackage`)} />
          <Column field={'typeOfPackage'} header={t(`${translationsForReportDPS4554Columns}.typeOfPackage`)} />
          <Column filter filterField='registrationNo' field={'regNo'} header={t(`${translationsForReportDPS4554Columns}.regNo`)} />
          <Column field={'regDate'} header={t(`${translationsForReportDPS4554Columns}.regDate`)} />
          <Column filter filterField='asmtNo' field={'asmtNo'} header={t(`${translationsForReportDPS4554Columns}.asmtNo`)} />
          <Column field={'astDate'} header={t(`${translationsForReportDPS4554Columns}.astDate`)} />
          <Column field={'rcptNo'} header={t(`${translationsForReportDPS4554Columns}.rcptNo`)} />
          <Column field={'rcptDate'} header={t(`${translationsForReportDPS4554Columns}.rcptDate`)} />
          <Column style={{ minWidth: "12rem" }} field={'bankNam'} header={t(`${translationsForReportDPS4554Columns}.bankNam`)} />
          <Column field={'hsCode'} header={t(`${translationsForReportDPS4554Columns}.hsCode`)} />
          <Column field={'cpc'} header={t(`${translationsForReportDPS4554Columns}.cpc`)} />
          <Column style={{ minWidth: "20rem" }} field={'dsc'} header={t(`${translationsForReportDPS4554Columns}.dsc`)} />
          <Column style={{ minWidth: "25rem" }} field={'gdsDs3'} header={t(`${translationsForReportDPS4554Columns}.gdsDs3`)} />
          <Column style={{ minWidth: "20rem" }} field={'pckMrk1'} header={t(`${translationsForReportDPS4554Columns}.pckMrk1`)} />
          <Column field={'pckMrk2'} header={t(`${translationsForReportDPS4554Columns}.pckMrk2`)} />
          <Column field={'taxAmt'} header={t(`${translationsForReportDPS4554Columns}.taxAmt`)} />
          <Column field={'customsProc'} header={t(`${translationsForReportDPS4554Columns}.customsProc`)} />
          <Column field={'itemGrossWeight'} header={t(`${translationsForReportDPS4554Columns}.itemGrossWeight`)} />
          <Column field={'itemNetWeight'} header={t(`${translationsForReportDPS4554Columns}.itemNetWeight`)} />
          <Column filter filterField='brokerTIN' field={'brokerTIN'} header={t(`${translationsForReportDPS4554Columns}.brokerTIN`)} />
          <Column style={{ minWidth: "12rem" }} field={'decNam'} header={t(`${translationsForReportDPS4554Columns}.decNam`)} />
          <Column field={'companyTin'} header={t(`${translationsForReportDPS4554Columns}.companyTin`)} />
          <Column style={{ minWidth: "15rem" }} field={'cmpNam'} header={t(`${translationsForReportDPS4554Columns}.cmpNam`)} />
          <Column style={{ minWidth: "20rem" }} field={'finNam'} header={t(`${translationsForReportDPS4554Columns}.finNam`)} />
          <Column style={{ minWidth: "12rem" }} field={'countryDest'} header={t(`${translationsForReportDPS4554Columns}.countryDest`)} />
          <Column style={{ minWidth: "12rem" }} field={'countryExport'} header={t(`${translationsForReportDPS4554Columns}.countryExport`)} />
          <Column style={{ minWidth: "12rem" }} field={'countryOrg'} header={t(`${translationsForReportDPS4554Columns}.countryOrg`)} />
          <Column field={'lorryTotal'} header={t(`${translationsForReportDPS4554Columns}.lorryTotal`)} />
          <Column field={'currrencyCode'} header={t(`${translationsForReportDPS4554Columns}.currrencyCode`)} />
          <Column field={'currecnyRate'} header={t(`${translationsForReportDPS4554Columns}.currecnyRate`)} />
          <Column field={'declarationValueCurrency'} header={t(`${translationsForReportDPS4554Columns}.declarationValueCurrency`)} />
          <Column field={'declarationValueAfs'} header={t(`${translationsForReportDPS4554Columns}.declarationValueAfs`)} />
          <Column field={'declarationTaxes'} header={t(`${translationsForReportDPS4554Columns}.declarationTaxes`)} />
          <Column field={'itemValueCurrency'} header={t(`${translationsForReportDPS4554Columns}.itemValueCurrency`)} />
          <Column field={'itemValueAfs'} header={t(`${translationsForReportDPS4554Columns}.itemValueAfs`)} />
          <Column field={'taxRate'} header={t(`${translationsForReportDPS4554Columns}.taxRate`)} />
          <Column field={'codeTaxAmount'} header={t(`${translationsForReportDPS4554Columns}.codeTaxAmount`)} />
          <Column field={'taxCode'} header={t(`${translationsForReportDPS4554Columns}.taxCode`)} />
          <Column field={'status'} header={t(`${translationsForReportDPS4554Columns}.status`)} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
};

export default DPS_4554