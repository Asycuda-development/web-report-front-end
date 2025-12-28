import { Box, LinearProgress } from '@mui/material';
import axios from 'axios';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { useRef, useState } from 'react';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
import { SimpleCard } from '../../components';
import { ROWS_PER_PAGE } from '../../utils/constant';
import { useTranslation } from 'react-i18next';

const translationsForBasedOnError: string = "errors"
const translationsForBasedOn: string = "basedOn"
const translationsForReportDPS4553: string = "reports.dps_4553"
const translationsForReportDPS4553Columns: string = "reports.dps_4553.columns"

function DPS_4553() {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);
  const { t } = useTranslation();


  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true);
      const res = await axios.post('/reporting/DpsReport4553', {
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
  }


  return (
    <SimpleCard title={t(`${translationsForReportDPS4553}.title`)}>
      <ReportHeaderInputs
        showStartDate
        showEndDate
        //  ShowTinNumber
        //  showExemptionType
        showCustomsProcedure
        // showHsCode
        showRegDate
        //    showAssesDate
        //   showPayDate
        showCustomsList
        onSearch={handleSubmit}
        tabelRef={tableRef}
      />
      {loading && (
        <LinearProgress />
      )}
      <Box width="100%" overflow="auto">
        <DataTable
          exportFilename={`DPS_4553 ${new Date().toISOString()}`}
          ref={tableRef}
          value={reportData}
          rows={ROWS_PER_PAGE}
          rowsPerPageOptions={[3, 10, 25, 50, 100]}
          paginator
          stripedRows
          showGridlines
          emptyMessage={'No Data Available'}
        >
          <Column
            filter
            filterField="ideTyp_sad"
            field={'ideTyp_sad'}
            header={t(`${translationsForReportDPS4553Columns}.ideTyp_sad`)}
          />
          <Column field={'tptCuoNam'} header={t(`${translationsForReportDPS4553Columns}.tptCuoNam`)} />
          <Column field={' ideCuoNam'} header={t(`${translationsForReportDPS4553Columns}. ideCuoNam`)} />
          <Column field={'itemTotal'} header={t(`${translationsForReportDPS4553Columns}.itemTotal`)} />
          <Column field={'itemNo'} header={t(`${translationsForReportDPS4553Columns}.itemNo`)} />
          <Column field={'iotalPackage'} header={t(`${translationsForReportDPS4553Columns}.iotalPackage`)} />
          <Column field={'typeOfPackage'} header={t(`${translationsForReportDPS4553Columns}.typeOfPackage`)} />
          <Column filter filterField="regNo" field={'regNo'} header={t(`${translationsForReportDPS4553Columns}.regNo`)} />
          <Column field={'regDate'} header={t(`${translationsForReportDPS4553Columns}.regDate`)} />
          <Column field={'astDate'} header={t(`${translationsForReportDPS4553Columns}.astDate`)} />
          <Column field={'rcptDate'} header={t(`${translationsForReportDPS4553Columns}.rcptDate`)} />
          <Column filter filterField="status" field={'status'} header={t(`${translationsForReportDPS4553Columns}.status`)} />
          <Column field={'cpc'} header={t(`${translationsForReportDPS4553Columns}.cpc`)} />
          <Column field={'customs_Proc'} header={t(`${translationsForReportDPS4553Columns}.customs_Proc`)} />
          <Column field={'hsCode'} header={t(`${translationsForReportDPS4553Columns}.hsCode`)} />
          <Column style={{ minWidth: '15rem' }} field={'dsc'} header={t(`${translationsForReportDPS4553Columns}.dsc`)} />
          <Column style={{ minWidth: '15rem' }} field={'gdsDs3'} header={t(`${translationsForReportDPS4553Columns}.gdsDs3`)} />
          <Column field={'pckMrk1'} header={t(`${translationsForReportDPS4553Columns}.pckMrk1`)} />
          <Column field={'pckMrk2'} header={t(`${translationsForReportDPS4553Columns}.pckMrk2`)} />
          <Column field={'itemGrossWeight'} header={t(`${translationsForReportDPS4553Columns}.itemGrossWeight`)} />
          <Column field={'itemNetWeight'} header={t(`${translationsForReportDPS4553Columns}.itemNetWeight`)} />
          <Column filter filterField="brokerTIN" field={'brokerTIN'} header={t(`${translationsForReportDPS4553Columns}.brokerTIN`)} />
          <Column field={'decNam'} header={t(`${translationsForReportDPS4553Columns}.decNam`)} />
          <Column field={'companyTin'} header={t(`${translationsForReportDPS4553Columns}.companyTin`)} />
          <Column field={'cmpNam'} header={t(`${translationsForReportDPS4553Columns}.cmpNam`)} />
          <Column field={'finNam'} header={t(`${translationsForReportDPS4553Columns}.finNam`)} />
          <Column field={'countryOrg'} header={t(`${translationsForReportDPS4553Columns}.countryOrg`)} />
          <Column field={'countryDest'} header={t(`${translationsForReportDPS4553Columns}.countryDest`)} />
          <Column
            filter
            filterField="countryExport"
            field={'countryExport'}
            header={t(`${translationsForReportDPS4553Columns}.countryExport`)}
          />
          <Column field={'lorryTotal'} header={t(`${translationsForReportDPS4553Columns}.lorryTotal`)} />
          <Column field={'currencyRate'} header={t(`${translationsForReportDPS4553Columns}.currencyRate`)} />
          <Column field={'declarationValue_currency'} header={t(`${translationsForReportDPS4553Columns}.declarationValue_currency`)} />
          <Column field={'declarationValue_Afs'} header={t(`${translationsForReportDPS4553Columns}.declarationValue_Afs`)} />
          <Column field={'declarationTaxes'} header={t(`${translationsForReportDPS4553Columns}.declarationTaxes`)} />
          <Column field={'itemValueCurrency'} header={t(`${translationsForReportDPS4553Columns}.itemValueCurrency`)} />
          <Column field={'itemValue_Afs'} header={t(`${translationsForReportDPS4553Columns}.itemValue_Afs`)} />
          <Column field={'itemTaxes'} header={t(`${translationsForReportDPS4553Columns}.itemTaxes`)} />

          <Column field={'ideCuoCod'} header={t(`${translationsForReportDPS4553Columns}.ideCuoCod`)} />

          <Column field={'codeOfPackage'} header={t(`${translationsForReportDPS4553Columns}.codeOfPackage`)} />

          <Column field={'asmtNo'} header={t(`${translationsForReportDPS4553Columns}.asmtNo`)} />

          <Column field={'rcptNo'} header={t(`${translationsForReportDPS4553Columns}.rcptNo`)} />


          <Column filter filterField="bankNam" field={'bankNam'} header={t(`${translationsForReportDPS4553Columns}.bankNam`)} />

          <Column field={'finCod'} header={t(`${translationsForReportDPS4553Columns}.finCod`)} />

          <Column field={'currencyCode'} header={t(`${translationsForReportDPS4553Columns}.currencyCode`)} />

          <Column field={'totalTaxes'} header={t(`${translationsForReportDPS4553Columns}.totalTaxes`)} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
}

export default DPS_4553;
