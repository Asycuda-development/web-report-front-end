import { Box, styled } from '@mui/material';
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
const translationsForReportDPS4555: string = "reports.dps_4555"
const translationsForReportDPS4555Columns: string = "reports.dps_4555.columns"

function DPS_4555() {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);
  const { t } = useTranslation();

  const handleSubmit = async (data: SearchData) => {
    console.log(data)
    try {
      setLoading(true)
      const res = await axios.post('/reporting/DpsReport4555', {
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
    <SimpleCard title={t(`${translationsForReportDPS4555}.title`)}>
      <ReportHeaderInputs
        showStartDate
        showEndDate
        ShowTinNumber
        showCustomsProcedure
        showRegDate
        showAssesDate
        showPayDate
        showCustomsList
        onSearch={handleSubmit}
        tabelRef={tableRef}
      />
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
          <Column field={'ideTypSad'} header={t(`${translationsForReportDPS4555Columns}.ideTypSad`)} />
          <Column style={{ minWidth: "12rem" }} field={'tptCuoNam'} header={t(`${translationsForReportDPS4555Columns}.tptCuoNam`)} />
          <Column style={{ minWidth: "12rem" }} filter filterField="ideCuoNam" field={'ideCuoNam'} header={t(`${translationsForReportDPS4555Columns}.ideCuoNam`)} />
          <Column field={'itemTotal'} header={t(`${translationsForReportDPS4555Columns}.itemTotal`)} />
          <Column filter filterField='registrationNo' field={'regNo'} header={t(`${translationsForReportDPS4555Columns}.regNo`)} />
          <Column field={'regDate'} header={t(`${translationsForReportDPS4555Columns}.regDate`)} />
          //<Column filter filterField='asmtNo' field={'asmtNo'} header={t(`${translationsForReportDPS4555Columns}.asmtNo`)} />
          <Column field={'astDate'} header={t(`${translationsForReportDPS4555Columns}.astDate`)} />
          <Column field={'rcptNo'} header={t(`${translationsForReportDPS4555Columns}.rcptNo`)} />
          <Column field={'rcptDate'} header={t(`${translationsForReportDPS4555Columns}.rcptDate`)} />
          <Column field={'status'} header={t(`${translationsForReportDPS4555Columns}.status`)} />
          <Column filter filterField='brokerTIN' field={'brokerTIN'} header={t(`${translationsForReportDPS4555Columns}.brokerTIN`)} />
          <Column style={{ minWidth: "20rem" }} field={'decNam'} header={t(`${translationsForReportDPS4555Columns}.decNam`)} />
          <Column field={'companyTin'} header={t(`${translationsForReportDPS4555Columns}.companyTin`)} />
          <Column style={{ minWidth: "20rem" }} field={'cmpNam'} header={t(`${translationsForReportDPS4555Columns}.cmpNam`)} />
          <Column field={'cmpFisCod'} header={t(`${translationsForReportDPS4555Columns}.cmpFisCod`)} />
          <Column style={{ minWidth: "20rem" }} field={'finNam'} header={t(`${translationsForReportDPS4555Columns}.finNam`)} />
          <Column style={{ minWidth: "12rem" }} field={'countryOrg'} header={t(`${translationsForReportDPS4555Columns}.countryOrg`)} />
          <Column style={{ minWidth: "12rem" }} field={'countryExport'} header={t(`${translationsForReportDPS4555Columns}.countryExport`)} />
          <Column field={'lorryTotal'} header={t(`${translationsForReportDPS4555Columns}.lorryTotal`)} />
          <Column field={'declarationValueCurrency'} header={t(`${translationsForReportDPS4555Columns}.declarationValueCurrency`)} />
          <Column field={'declarationValueAfs'} header={t(`${translationsForReportDPS4555Columns}.declarationValueAfs`)} />
          <Column field={'declarationTaxes'} header={t(`${translationsForReportDPS4555Columns}.declarationTaxes`)} />
          <Column field={'ideCuoCod'} header={t(`${translationsForReportDPS4555Columns}.ideCuoCod`)} />
          <Column style={{ minWidth: "12rem" }} field={'bankNam'} header={t(`${translationsForReportDPS4555Columns}.bankNam`)} />
          <Column style={{ minWidth: "12rem" }} field={'countryDest'} header={t(`${translationsForReportDPS4555Columns}.countryDest`)} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
};

export default DPS_4555