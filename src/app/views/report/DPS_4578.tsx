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
const translationsForReportDPS4578: string = "reports.dps_4578"
const translationsForReportDPS4578Columns: string = "reports.dps_4578.columns"

function DPS_4578() {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);
  const { t } = useTranslation();

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true)
      const res = await axios.post('/reporting/DpsReport4578', {
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
    <SimpleCard title={t(`${translationsForReportDPS4578}.title`)}>
      <ReportHeaderInputs
        report='DPS_4578'
        showStartDate
        showEndDate
        showRegDate
        showCustomsList
        onSearch={handleSubmit}
        tabelRef={tableRef}
      />
      {loading && (
        <LinearProgress />
      )}
      <Box width="100%" overflow="auto">
        <DataTable
          exportFilename={`DPS_4578 ${new Date().toISOString()}`}
          ref={tableRef}
          value={reportData}
          rows={ROWS_PER_PAGE}
          rowsPerPageOptions={[5, 10, 25, 50, 100]}
          paginator
          stripedRows
          showGridlines
        >
          <Column field={'tpCuNam'} header={t(`${translationsForReportDPS4578Columns}.tpCuNam`)} />
          <Column style={{ minWidth: "12rem" }} field={'icdCuNam'} header={t(`${translationsForReportDPS4578Columns}.icdCuNam`)} />
          <Column style={{ minWidth: "12rem" }} field={'itemTotal'} header={t(`${translationsForReportDPS4578Columns}.itemTotal`)} />
          <Column field={'sadRegNo'} header={t(`${translationsForReportDPS4578Columns}.sadRegNo`)} />
          <Column field={'sadRegDate'} header={t(`${translationsForReportDPS4578Columns}.sadRegDate`)} />
          <Column field={'sadAsmtNo'} header={t(`${translationsForReportDPS4578Columns}.sadAsmtNo`)} />
          <Column field={'sadAastDate'} header={t(`${translationsForReportDPS4578Columns}.sadAastDate`)} />
          <Column style={{ minWidth: "10rem" }} field={'rcptNo'} header={t(`${translationsForReportDPS4578Columns}.rcptNo`)} />
          <Column field={'rcptDate'} header={t(`${translationsForReportDPS4578Columns}.rcptDate`)} />
          <Column style={{ minWidth: "20rem" }} field={'bankNam'} header={t(`${translationsForReportDPS4578Columns}.bankNam`)} />
          <Column field={'brokerTinSad'} header={t(`${translationsForReportDPS4578Columns}.brokerTinSad`)} />
          <Column style={{ minWidth: '12rem' }} field={'decNamSad'} header={t(`${translationsForReportDPS4578Columns}.decNamSad`)} />
          <Column field={'companyTin'} header={t(`${translationsForReportDPS4578Columns}.companyTin`)} />
          <Column style={{ minWidth: "25rem" }} field={'cmpNam'} header={t(`${translationsForReportDPS4578Columns}.cmpNam`)} />
          <Column field={'countryDest'} header={t(`${translationsForReportDPS4578Columns}.countryDest`)} />
          <Column field={'countryExport'} header={t(`${translationsForReportDPS4578Columns}.countryExport`)} />
          <Column field={'countryOrg'} header={t(`${translationsForReportDPS4578Columns}.countryOrg`)} />
          <Column field={'lorryTotal'} header={t(`${translationsForReportDPS4578Columns}.lorryTotal`)} />
          <Column style={{ minWidth: "12rem" }} field={'declarationValueCurrency'} header={t(`${translationsForReportDPS4578Columns}.declarationValueCurrency`)} />
          <Column field={'declarationValueAfs'} header={t(`${translationsForReportDPS4578Columns}.declarationValueAfs`)} />
          <Column field={'declarationTaxes'} header={t(`${translationsForReportDPS4578Columns}.declarationTaxes`)} />
          <Column field={'declarationstatus'} header={t(`${translationsForReportDPS4578Columns}.declarationstatus`)} />
          <Column field={'totPkg'} header={t(`${translationsForReportDPS4578Columns}.totPkg`)} />
          <Column field={'decRef'} header={t(`${translationsForReportDPS4578Columns}.decRef`)} />
          <Column field={'regNo'} header={t(`${translationsForReportDPS4578Columns}.regNo`)} />
          <Column style={{ minWidth: "30rem" }} field={'regDat'} header={t(`${translationsForReportDPS4578Columns}.regDat`)} />
          <Column field={'t1status'} header={t(`${translationsForReportDPS4578Columns}.t1status`)} />
          <Column style={{ minWidth: "12rem" }} field={'arrDate'} header={t(`${translationsForReportDPS4578Columns}.arrDate`)} />
          <Column field={'deptOffNam'} header={t(`${translationsForReportDPS4578Columns}.deptOffNam`)} />
          <Column field={'destnNam'} header={t(`${translationsForReportDPS4578Columns}.destnNam`)} />
          <Column field={'destnCty'} header={t(`${translationsForReportDPS4578Columns}.destnCty`)} />
          <Column style={{ minWidth: "20rem" }} field={'transitType'} header={t(`${translationsForReportDPS4578Columns}.transitType`)} />
          <Column style={{ minWidth: "20rem" }} field={'t1DeclarantCode'} header={t(`${translationsForReportDPS4578Columns}.t1DeclarantCode`)} />
          <Column style={{ minWidth: "12rem" }} field={'t1DeclarantName'} header={t(`${translationsForReportDPS4578Columns}.t1DeclarantName`)} />
          <Column style={{ minWidth: "12rem" }} field={'expCode'} header={t(`${translationsForReportDPS4578Columns}.expCode`)} />
          <Column style={{ minWidth: "12rem" }} field={'cnsCode'} header={t(`${translationsForReportDPS4578Columns}.cnsCode`)} />
          <Column style={{ minWidth: "25rem" }} field={'cnsName'} header={t(`${translationsForReportDPS4578Columns}.cnsName`)} />
          <Column field={'ctyExportName'} header={t(`${translationsForReportDPS4578Columns}.ctyExportName`)} />
          <Column field={'ctyDestnNam'} header={t(`${translationsForReportDPS4578Columns}.ctyDestnNam`)} />
          <Column field={'modOfTransport'} header={t(`${translationsForReportDPS4578Columns}.modOfTransport`)} />
          <Column field={'principalCod'} header={t(`${translationsForReportDPS4578Columns}.principalCod`)} />
          <Column style={{ minWidth: "12rem" }} field={'T1_Principal_Name'} header={t(`${translationsForReportDPS4578Columns}.T1_Principal_Name`)} />
          <Column style={{ minWidth: "20rem" }} field={'representedBy'} header={t(`${translationsForReportDPS4578Columns}.representedBy`)} />
          <Column field={'nationalityOfTransport'} header={t(`${translationsForReportDPS4578Columns}.nationalityOfTransport`)} />
          <Column field={'transitOfficer'} header={t(`${translationsForReportDPS4578Columns}.transitOfficer`)} />
          <Column field={'contFlg'} header={t(`${translationsForReportDPS4578Columns}.contFlg`)} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
};

export default DPS_4578