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
const translationsForReportTransit4258: string = "reports.transit_4258"
const translationsForReportTransit4258Columns: string = "reports.transit_4258.columns"

const Transit_4258 = () => {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);
  const { t } = useTranslation();

  useEffect(() => { }, []);

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true)
      const res = await axios.post('/reporting/TransitReport4258', {
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
    <SimpleCard title={t(`${translationsForReportTransit4258}.title`)}>
      <ReportHeaderInputs
        report='Transit_4258'
        showStartDate
        showEndDate
        showCustomsList
        showDestinationCustomsList
        showTransitType2
        showRegDate
        showArrivalDate
        showValidationDate
        onSearch={handleSubmit}
        tabelRef={tableRef}
      />
      {loading && (
        <LinearProgress />
      )}
      <Box width="100%" overflow="auto">
        <DataTable
          ref={tableRef}
          exportFilename={`Transit Report 4258 ${new Date().toISOString()}`}
          value={reportData}
          rows={ROWS_PER_PAGE}
          rowsPerPageOptions={[5, 10, 25, 50, 100]}
          paginator
          stripedRows
          showGridlines
        >
          <Column field={'transitType'} header={t(`${translationsForReportTransit4258Columns}.transitType`)} />
          <Column field={'declarationRefYr'} header={t(`${translationsForReportTransit4258Columns}.declarationRefYr`)} />
          <Column field={'deptOffNam'} header={t(`${translationsForReportTransit4258Columns}.deptOffNam`)} />
          <Column field={'destnNam'} header={t(`${translationsForReportTransit4258Columns}.destnNam`)} />
          <Column style={{ minWidth: "12rem" }} field={'status'} header={t(`${translationsForReportTransit4258Columns}.status`)} />
          <Column field={'regNo'} header={t(`${translationsForReportTransit4258Columns}.regNo`)} />
          <Column field={'regDat'} header={t(`${translationsForReportTransit4258Columns}.regDat`)} />
          <Column field={'valNo'} header={t(`${translationsForReportTransit4258Columns}.valNo`)} />
          <Column style={{ minWidth: "12rem" }} field={'arrDate'} header={t(`${translationsForReportTransit4258Columns}.arrDate`)} />
          <Column field={'maxDateOfArrivalLimit'} header={t(`${translationsForReportTransit4258Columns}.maxDateOfArrivalLimit`)} />
          <Column field={'transitOfficer'} header={t(`${translationsForReportTransit4258Columns}.transitOfficer`)} />
          <Column field={'declarantCode'} header={t(`${translationsForReportTransit4258Columns}.declarantCode`)} />
          <Column field={'declarantName'} header={t(`${translationsForReportTransit4258Columns}.declarantName`)} />
          <Column field={'cnsCode'} header={t(`${translationsForReportTransit4258Columns}.cnsCode`)} />
          <Column style={{ minWidth: "25rem" }} field={'cnsName'} header={t(`${translationsForReportTransit4258Columns}.cnsName`)} />
          <Column field={'principalCod'} header={t(`${translationsForReportTransit4258Columns}.principalCod`)} />
          <Column style={{ minWidth: "25rem" }} field={'principalNam'} header={t(`${translationsForReportTransit4258Columns}.principalNam`)} />
          <Column field={'representedBy'} header={t(`${translationsForReportTransit4258Columns}.representedBy`)} />
          <Column style={{ minWidth: "15rem" }} field={'ctyExportName'} header={t(`${translationsForReportTransit4258Columns}.ctyExportName`)} />
          <Column field={'ctyDestnNam'} header={t(`${translationsForReportTransit4258Columns}.ctyDestnNam`)} />
          <Column field={'modOfTransport'} header={t(`${translationsForReportTransit4258Columns}.modOfTransport`)} />
          <Column field={'lorryToBorder'} header={t(`${translationsForReportTransit4258Columns}.lorryToBorder`)} />
          <Column field={'grossMass'} header={t(`${translationsForReportTransit4258Columns}.grossMass`)} />
          <Column field={'netMass'} header={t(`${translationsForReportTransit4258Columns}.netMass`)} />
          <Column field={'totPkg'} header={t(`${translationsForReportTransit4258Columns}.totPkg`)} />
          <Column field={'packageName'} header={t(`${translationsForReportTransit4258Columns}.packageName`)} />
          <Column field={'hscode'} header={t(`${translationsForReportTransit4258Columns}.hscode`)} />
          <Column style={{ minWidth: "20rem" }} field={'goodDescription2'} header={t(`${translationsForReportTransit4258Columns}.goodDescription2`)} />
          <Column style={{ minWidth: "30rem" }} field={'goodDescription3'} header={t(`${translationsForReportTransit4258Columns}.goodDescription3`)} />
          <Column field={'packageMark'} header={t(`${translationsForReportTransit4258Columns}.packageMark`)} />
          <Column field={'contFlg'} header={t(`${translationsForReportTransit4258Columns}.contFlg`)} />
          <Column field={'cont1'} header={t(`${translationsForReportTransit4258Columns}.cont1`)} />
          <Column field={'cont2'} header={t(`${translationsForReportTransit4258Columns}.cont2`)} />
          <Column field={'sealAffixedNo'} header={t(`${translationsForReportTransit4258Columns}.sealAffixedNo`)} />
          <Column field={'sealIdentity'} header={t(`${translationsForReportTransit4258Columns}.sealIdentity`)} />
          <Column field={'garantyCod'} header={t(`${translationsForReportTransit4258Columns}.garantyCod`)} />
          <Column field={'garantyAmnt'} header={t(`${translationsForReportTransit4258Columns}.garantyAmnt`)} />
          <Column style={{ minWidth: "20rem" }} field={'at1Cod'} header={t(`${translationsForReportTransit4258Columns}.at1Cod`)} />
          <Column style={{ minWidth: "20rem" }} field={'at1Nbr'} header={t(`${translationsForReportTransit4258Columns}.at1Nbr`)} />
          <Column field={'at2Cod'} header={t(`${translationsForReportTransit4258Columns}.at2Cod`)} />
          <Column style={{ minWidth: "20rem" }} field={'at2Nbr'} header={t(`${translationsForReportTransit4258Columns}.at2Nbr`)} />
          <Column field={'at3Cod'} header={t(`${translationsForReportTransit4258Columns}.at3Cod`)} />
          <Column style={{ minWidth: "20rem" }} field={'at3Nbr'} header={t(`${translationsForReportTransit4258Columns}.at3Nbr`)} />
          <Column field={'at4Cod'} header={t(`${translationsForReportTransit4258Columns}.at4Cod`)} />
          <Column style={{ minWidth: "20rem" }} field={'at4Nbr'} header={t(`${translationsForReportTransit4258Columns}.at4Nbr`)} />
          <Column field={'decRef'} header={t(`${translationsForReportTransit4258Columns}.decRef`)} />
          <Column field={'loadList'} header={t(`${translationsForReportTransit4258Columns}.loadList`)} />
          <Column field={'destnCty'} header={t(`${translationsForReportTransit4258Columns}.destnCty`)} />
          <Column field={'expCode'} header={t(`${translationsForReportTransit4258Columns}.expCode`)} />
          <Column field={'expNam'} header={t(`${translationsForReportTransit4258Columns}.expNam`)} />
          <Column field={'ctyExport'} header={t(`${translationsForReportTransit4258Columns}.ctyExport`)} />
          <Column field={'ctyDestnCod'} header={t(`${translationsForReportTransit4258Columns}.ctyDestnCod`)} />
          <Column field={'maxDateAllowed'} header={t(`${translationsForReportTransit4258Columns}.maxDateAllowed`)} />
          <Column field={'nationalityOfTransport'} header={t(`${translationsForReportTransit4258Columns}.nationalityOfTransport`)} />
          <Column field={'ctyBorder'} header={t(`${translationsForReportTransit4258Columns}.ctyBorder`)} />
          <Column field={'ctyDep'} header={t(`${translationsForReportTransit4258Columns}.ctyDep`)} />
          <Column field={'itmNo'} header={t(`${translationsForReportTransit4258Columns}.itmNo`)} />
          <Column field={'packNbr'} header={t(`${translationsForReportTransit4258Columns}.packNbr`)} />
          <Column field={'packageCode'} header={t(`${translationsForReportTransit4258Columns}.packageCode`)} />
          <Column field={'astDat'} header={t(`${translationsForReportTransit4258Columns}.astDat`)} />
          <Column field={'delCod'} header={t(`${translationsForReportTransit4258Columns}.delCod`)} />
          <Column field={'delNam'} header={t(`${translationsForReportTransit4258Columns}.delNam`)} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
};

export default Transit_4258;
