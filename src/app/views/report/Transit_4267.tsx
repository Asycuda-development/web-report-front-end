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
const translationsForReportTransit4267: string = "reports.transit_4267"
const translationsForReportTransit4267Columns: string = "reports.transit_4267.columns"

const Transit_4267 = () => {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);
  const { t } = useTranslation();

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true)
      const res = await axios.post('/reporting/TransitReport4267', {
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
    } catch (error) { }
    finally {
      setLoading(false);
    }
  };

  return (
    <SimpleCard title={t(`${translationsForReportTransit4267}.title`)}>
      <ReportHeaderInputs
        showStartDate
        showEndDate
        showCustomsList
        showDestinationCustomsList
        showTransitType2
        showRegDate
        ShowHsCode
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
          
          <Column field={'transitType'} header={t(`${translationsForReportTransit4267Columns}.transitType`)} />
          <Column field={'declarationRefYr'} header={t(`${translationsForReportTransit4267Columns}.declarationRefYr`)} />
          <Column field={'deptOffNam'} header={t(`${translationsForReportTransit4267Columns}.deptOffNam`)} />
          <Column field={'destnNam'} header={t(`${translationsForReportTransit4267Columns}.destnNam`)} />
          <Column style={{ minWidth: "12rem" }} field={'status'} header={t(`${translationsForReportTransit4267Columns}.status`)} />
          <Column field={'regNo'} header={t(`${translationsForReportTransit4267Columns}.regNo`)} />
          <Column field={'regDat'} header={t(`${translationsForReportTransit4267Columns}.regDat`)} />
          <Column field={'valNo'} header={t(`${translationsForReportTransit4267Columns}.valNo`)} />
          <Column style={{ minWidth: "12rem" }} field={'arrDate'} header={t(`${translationsForReportTransit4267Columns}.arrDate`)} />
          <Column field={'maxDateOfArrivalLimit'} header={t(`${translationsForReportTransit4267Columns}.maxDateOfArrivalLimit`)} />
          <Column field={'maxDateAllowed'} header={t(`${translationsForReportTransit4267Columns}.maxDateAllowed`)} />
          <Column style={{ minWidth: "15rem" }} field={'transitOfficer'} header={t(`${translationsForReportTransit4267Columns}.transitOfficer`)} />
          <Column field={'declarantCode'} header={t(`${translationsForReportTransit4267Columns}.declarantCode`)} />
          <Column style={{ minWidth: "12rem" }} field={'declarantName'} header={t(`${translationsForReportTransit4267Columns}.declarantName`)} />
          <Column field={'cnsCode'} header={t(`${translationsForReportTransit4267Columns}.cnsCode`)} />
          <Column style={{ minWidth: "25rem" }} field={'cnsName'} header={t(`${translationsForReportTransit4267Columns}.cnsName`)} />
          <Column field={'principalCod'} header={t(`${translationsForReportTransit4267Columns}.principalCod`)} />
          <Column style={{ minWidth: "25rem" }} field={'principalNam'} header={t(`${translationsForReportTransit4267Columns}.principalNam`)} />
          <Column style={{ minWidth: "12rem" }} field={'representedBy'} header={t(`${translationsForReportTransit4267Columns}.representedBy`)} />
          <Column style={{ minWidth: "15rem" }} field={'ctyExportName'} header={t(`${translationsForReportTransit4267Columns}.ctyExportName`)} />
          <Column field={'ctyDestnCod'} header={t(`${translationsForReportTransit4267Columns}.ctyDestnCod`)} />
          <Column field={'modOfTransport'} header={t(`${translationsForReportTransit4267Columns}.modOfTransport`)} />
          <Column field={'lorryToBorder'} header={t(`${translationsForReportTransit4267Columns}.lorryToBorder`)} />
          <Column field={'grossMass'} header={t(`${translationsForReportTransit4267Columns}.grossMass`)} />
          <Column field={'netMass'} header={t(`${translationsForReportTransit4267Columns}.netMass`)} />
          <Column field={'totPkg'} header={t(`${translationsForReportTransit4267Columns}.totPkg`)} />
          <Column style={{ minWidth: "15rem" }} field={'packageName'} header={t(`${translationsForReportTransit4267Columns}.packageName`)} />
          <Column field={'hscode'} header={t(`${translationsForReportTransit4267Columns}.hscode`)} />
          <Column style={{ minWidth: "30rem" }} field={'goodDescription2'} header={t(`${translationsForReportTransit4267Columns}.goodDescription2`)} />
          <Column style={{ minWidth: "30rem" }} field={'goodDescription3'} header={t(`${translationsForReportTransit4267Columns}.goodDescription3`)} />
          <Column style={{ minWidth: "20rem" }} field={'packageMark'} header={t(`${translationsForReportTransit4267Columns}.packageMark`)} />
          <Column field={'contFlg'} header={t(`${translationsForReportTransit4267Columns}.contFlg`)} />
          <Column field={'cont1'} header={t(`${translationsForReportTransit4267Columns}.cont1`)} />
          <Column field={'cont2'} header={t(`${translationsForReportTransit4267Columns}.cont2`)} />
          <Column field={'sealAffixedNo'} header={t(`${translationsForReportTransit4267Columns}.sealAffixedNo`)} />
          <Column field={'sealIdentity'} header={t(`${translationsForReportTransit4267Columns}.sealIdentity`)} />
          <Column field={'garantyCod'} header={t(`${translationsForReportTransit4267Columns}.garantyCod`)} />
          <Column field={'garantyAmnt'} header={t(`${translationsForReportTransit4267Columns}.garantyAmnt`)} />
          <Column style={{ minWidth: "20rem" }} field={'at1Cod'} header={t(`${translationsForReportTransit4267Columns}.at1Cod`)} />
          <Column style={{ minWidth: "20rem" }} field={'at1Nbr'} header={t(`${translationsForReportTransit4267Columns}.at1Nbr`)} />
          <Column field={'at2Cod'} header={t(`${translationsForReportTransit4267Columns}.at2Cod`)} />
          <Column style={{ minWidth: "20rem" }} field={'at2Nbr'} header={t(`${translationsForReportTransit4267Columns}.at2Nbr`)} />
          <Column field={'at3Cod'} header={t(`${translationsForReportTransit4267Columns}.at3Cod`)} />
          <Column style={{ minWidth: "20rem" }} field={'at3Nbr'} header={t(`${translationsForReportTransit4267Columns}.at3Nbr`)} />
          <Column field={'at4Cod'} header={t(`${translationsForReportTransit4267Columns}.at4Cod`)} />
          <Column style={{ minWidth: "20rem" }} field={'at4Nbr'} header={t(`${translationsForReportTransit4267Columns}.at4Nbr`)} />
          <Column field={'decRef'} header={t(`${translationsForReportTransit4267Columns}.decRef`)} />
          <Column field={'loadList'} header={t(`${translationsForReportTransit4267Columns}.loadList`)} />
          <Column field={'destnCty'} header={t(`${translationsForReportTransit4267Columns}.destnCty`)} />
          <Column field={'expCode'} header={t(`${translationsForReportTransit4267Columns}.expCode`)} />
          <Column field={'expNam'} header={t(`${translationsForReportTransit4267Columns}.expNam`)} />
          <Column field={'ctyExport'} header={t(`${translationsForReportTransit4267Columns}.ctyExport`)} />
          <Column field={'ctyDestnNam'} header={t(`${translationsForReportTransit4267Columns}.ctyDestnNam`)} />
          <Column field={'nationalityOfTransport'} header={t(`${translationsForReportTransit4267Columns}.nationalityOfTransport`)} />
          <Column field={'ctyBorder'} header={t(`${translationsForReportTransit4267Columns}.ctyBorder`)} />
          <Column field={'ctyDep'} header={t(`${translationsForReportTransit4267Columns}.ctyDep`)} />
          <Column field={'itmNo'} header={t(`${translationsForReportTransit4267Columns}.itmNo`)} />
          <Column field={'packNbr'} header={t(`${translationsForReportTransit4267Columns}.packNbr`)} />
          <Column field={'packageCode'} header={t(`${translationsForReportTransit4267Columns}.packageCode`)} />
          <Column field={'astDat'} header={t(`${translationsForReportTransit4267Columns}.astDat`)} />
          <Column field={'delCod'} header={t(`${translationsForReportTransit4267Columns}.delCod`)} />

          <Column style={{ minWidth: "20rem" }} field={'delNam'} header={t(`${translationsForReportTransit4267Columns}.delNam`)} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
};

export default Transit_4267;
