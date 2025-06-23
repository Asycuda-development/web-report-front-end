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
const translationsForReportTransit4259: string = "reports.transit_4259"
const translationsForReportTransit4259Columns: string = "reports.transit_4259.columns"

const TransitReport4259 = () => {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);
  const { t } = useTranslation();

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true)
      const res = await axios.post('/reporting/TransitReport4259', {
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
      setLoading(false)
    }
  };

  return (
    <SimpleCard title={t(`${translationsForReportTransit4259}.title`)}>
      <ReportHeaderInputs
        showStartDate
        showEndDate
        showCustomsList
        showDestinationCustomsList
        showTransitType2
        showRegDate
        ShowTinNumber
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
          <Column field={'transitType'} header={t(`${translationsForReportTransit4259Columns}.transitType`)} />
          <Column field={'declarationRefYr'} header={t(`${translationsForReportTransit4259Columns}.declarationRefYr`)} />
          <Column field={'deptOffNam'} header={t(`${translationsForReportTransit4259Columns}.deptOffNam`)} />
          <Column field={'destnNam'} header={t(`${translationsForReportTransit4259Columns}.destnNam`)} />
          <Column style={{ minWidth: "20rem" }} field={'status'} header={t(`${translationsForReportTransit4259Columns}.status`)} />
          <Column field={'regNo'} header={t(`${translationsForReportTransit4259Columns}.regNo`)} />
          <Column field={'regDat'} header={t(`${translationsForReportTransit4259Columns}.regDat`)} />
          <Column field={'valNo'} header={t(`${translationsForReportTransit4259Columns}.valNo`)} />
          <Column style={{ minWidth: "12rem" }} field={'arrDate'} header={t(`${translationsForReportTransit4259Columns}.arrDate`)} />
          <Column field={'maxDateOfArrivalLimit'} header={t(`${translationsForReportTransit4259Columns}.maxDateOfArrivalLimit`)} />
          <Column field={'maxDateAllowed'} header={t(`${translationsForReportTransit4259Columns}.maxDateAllowed`)} />
          <Column style={{ minWidth: "12rem" }} field={'transitOfficer'} header={t(`${translationsForReportTransit4259Columns}.transitOfficer`)} />
          <Column field={'declarantCode'} header={t(`${translationsForReportTransit4259Columns}.declarantCode`)} />
          <Column style={{ minWidth: "12rem" }} field={'declarantName'} header={t(`${translationsForReportTransit4259Columns}.declarantName`)} />
          <Column field={'cnsCode'} header={t(`${translationsForReportTransit4259Columns}.cnsCode`)} />
          <Column style={{ minWidth: "25rem" }} field={'cnsName'} header={t(`${translationsForReportTransit4259Columns}.cnsName`)} />
          <Column field={'principalCod'} header={t(`${translationsForReportTransit4259Columns}.principalCod`)} />
          <Column style={{ minWidth: "25rem" }} field={'principalNam'} header={t(`${translationsForReportTransit4259Columns}.principalNam`)} />
          <Column style={{ minWidth: "20rem" }} field={'representedBy'} header={t(`${translationsForReportTransit4259Columns}.representedBy`)} />
          <Column style={{ minWidth: "15rem" }} field={'ctyExportName'} header={t(`${translationsForReportTransit4259Columns}.ctyExportName`)} />
          <Column field={'ctyDestnNam'} header={t(`${translationsForReportTransit4259Columns}.ctyDestnNam`)} />
          <Column field={'modOfTransport'} header={t(`${translationsForReportTransit4259Columns}.modOfTransport`)} />
          <Column field={'lorryToBorder'} header={t(`${translationsForReportTransit4259Columns}.lorryToBorder`)} />
          <Column field={'grossMass'} header={t(`${translationsForReportTransit4259Columns}.grossMass`)} />
          <Column field={'netMass'} header={t(`${translationsForReportTransit4259Columns}.netMass`)} />
          <Column field={'totPkg'} header={t(`${translationsForReportTransit4259Columns}.totPkg`)} />
          <Column style={{ minWidth: "12rem" }} field={'packageName'} header={t(`${translationsForReportTransit4259Columns}.packageName`)} />
          <Column field={'hscode'} header={t(`${translationsForReportTransit4259Columns}.hscode`)} />
          <Column style={{ minWidth: "20rem" }} field={'goodDescription2'} header={t(`${translationsForReportTransit4259Columns}.goodDescription2`)} />
          <Column style={{ minWidth: "30rem" }} field={'goodDescription3'} header={t(`${translationsForReportTransit4259Columns}.goodDescription3`)} />
          <Column style={{ minWidth: "15rem" }} field={'packageMark'} header={t(`${translationsForReportTransit4259Columns}.packageMark`)} />
          <Column field={'contFlg'} header={t(`${translationsForReportTransit4259Columns}.contFlg`)} />
          <Column field={'cont1'} header={t(`${translationsForReportTransit4259Columns}.cont1`)} />
          <Column field={'cont2'} header={t(`${translationsForReportTransit4259Columns}.cont2`)} />
          <Column field={'sealAffixedNo'} header={t(`${translationsForReportTransit4259Columns}.sealAffixedNo`)} />
          <Column field={'sealIdentity'} header={t(`${translationsForReportTransit4259Columns}.sealIdentity`)} />
          <Column field={'garantyCod'} header={t(`${translationsForReportTransit4259Columns}.garantyCod`)} />
          <Column field={'garantyAmnt'} header={t(`${translationsForReportTransit4259Columns}.garantyAmnt`)} />
          <Column style={{ minWidth: "20rem" }} field={'at1Cod'} header={t(`${translationsForReportTransit4259Columns}.at1Cod`)} />
          <Column style={{ minWidth: "20rem" }} field={'at1Nbr'} header={t(`${translationsForReportTransit4259Columns}.at1Nbr`)} />
          <Column field={'at2Cod'} header={t(`${translationsForReportTransit4259Columns}.at2Cod`)} />
          <Column style={{ minWidth: "20rem" }} field={'at2Nbr'} header={t(`${translationsForReportTransit4259Columns}.at2Nbr`)} />
          <Column field={'at3Cod'} header={t(`${translationsForReportTransit4259Columns}.at3Cod`)} />
          <Column style={{ minWidth: "20rem" }} field={'at3Nbr'} header={t(`${translationsForReportTransit4259Columns}.at3Nbr`)} />
          <Column field={'at4Cod'} header={t(`${translationsForReportTransit4259Columns}.at4Cod`)} />
          <Column style={{ minWidth: "20rem" }} field={'at4Nbr'} header={t(`${translationsForReportTransit4259Columns}.at4Nbr`)} />
          <Column field={'decRef'} header={t(`${translationsForReportTransit4259Columns}.decRef`)} />
          <Column field={'loadList'} header={t(`${translationsForReportTransit4259Columns}.loadList`)} />
          <Column field={'destnCty'} header={t(`${translationsForReportTransit4259Columns}.destnCty`)} />
          <Column field={'expCode'} header={t(`${translationsForReportTransit4259Columns}.expCode`)} />
          <Column field={'expNam'} header={t(`${translationsForReportTransit4259Columns}.expNam`)} />
          <Column field={'ctyExport'} header={t(`${translationsForReportTransit4259Columns}.ctyExport`)} />
          <Column field={'ctyDestnCod'} header={t(`${translationsForReportTransit4259Columns}.ctyDestnCod`)} />
          <Column field={'nationalityOfTransport'} header={t(`${translationsForReportTransit4259Columns}.nationalityOfTransport`)} />
          <Column field={'ctyBorder'} header={t(`${translationsForReportTransit4259Columns}.ctyBorder`)} />
          <Column field={'ctyDep'} header={t(`${translationsForReportTransit4259Columns}.ctyDep`)} />
          <Column field={'itmNo'} header={t(`${translationsForReportTransit4259Columns}.itmNo`)} />
          <Column field={'packNbr'} header={t(`${translationsForReportTransit4259Columns}.packNbr`)} />
          <Column field={'packageCode'} header={t(`${translationsForReportTransit4259Columns}.packageCode`)} />
       
          <Column field={'delCod'} header={t(`${translationsForReportTransit4259Columns}.delCod`)} />
          <Column style={{ minWidth: "20rem" }} field={'delNam'} header={t(`${translationsForReportTransit4259Columns}.delNam`)} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
};

export default TransitReport4259;
