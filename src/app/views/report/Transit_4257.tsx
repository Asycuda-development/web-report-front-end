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
const translationsForReportTransit4257: string = "reports.transit_4257"
const translationsForReportTransit4257Columns: string = "reports.transit_4257.columns"

const Transit_4257 = () => {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);
  const { t } = useTranslation();

  useEffect(() => { }, []);

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true)
      const res = await axios.post('/reporting/TransitReport4257', {
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
    <SimpleCard title={t(`${translationsForReportTransit4257}.title`)}>
      <ReportHeaderInputs
        showStartDate
        showEndDate
        showCustomsList
        showDestinationCustomsList
        showRegDate
        showArrivalDate
        showValidationDate
        showTransitType2
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
          <Column field={'transitType'} header={t(`${translationsForReportTransit4257Columns}.transitType`)} />
          <Column field={'declarationRefYr'} header={t(`${translationsForReportTransit4257Columns}.declarationRefYr`)} />
          <Column field={'deptOffNam'} header={t(`${translationsForReportTransit4257Columns}.deptOffNam`)} />
          <Column field={'destnNam'} header={t(`${translationsForReportTransit4257Columns}.destnNam`)} />
          <Column field={'status'} header={t(`${translationsForReportTransit4257Columns}.status`)} />
          <Column field={'expCode'} header={t(`${translationsForReportTransit4257Columns}.expCode`)} />
          <Column field={'expNam'} header={t(`${translationsForReportTransit4257Columns}.expNam`)} />
          <Column field={'regNo'} header={t(`${translationsForReportTransit4257Columns}.regNo`)} />
          <Column field={'regDat'} header={t(`${translationsForReportTransit4257Columns}.regDat`)} />
          <Column field={'valNo'} header={t(`${translationsForReportTransit4257Columns}.valNo`)} />
          <Column field={'astDat'} header={t(`${translationsForReportTransit4257Columns}.astDat`)} />
          <Column style={{ minWidth: "12rem" }} field={'arrDate'} header={t(`${translationsForReportTransit4257Columns}.arrDate`)} />
          <Column field={'declarantCode'} header={t(`${translationsForReportTransit4257Columns}.declarantCode`)} />
          <Column field={'declarantName'} header={t(`${translationsForReportTransit4257Columns}.declarantName`)} />
          <Column field={'cnsCode'} header={t(`${translationsForReportTransit4257Columns}.cnsCode`)} />
          <Column style={{ minWidth: "25rem" }} field={'cnsName'} header={t(`${translationsForReportTransit4257Columns}.cnsName`)} />
          <Column field={'principalCod'} header={t(`${translationsForReportTransit4257Columns}.principalCod`)} />
          <Column field={'principalNam'} header={t(`${translationsForReportTransit4257Columns}.principalNam`)} />
          <Column field={'representedBy'} header={t(`${translationsForReportTransit4257Columns}.representedBy`)} />
          <Column field={'ctyExport'} header={t(`${translationsForReportTransit4257Columns}.ctyExport`)} />
          <Column field={'ctyExportName'} header={t(`${translationsForReportTransit4257Columns}.ctyExportName`)} />
          <Column field={'ctyDestnCod'} header={t(`${translationsForReportTransit4257Columns}.ctyDestnCod`)} />
          <Column field={'modOfTransport'} header={t(`${translationsForReportTransit4257Columns}.modOfTransport`)} />
          <Column field={'lorryToBorder'} header={t(`${translationsForReportTransit4257Columns}.lorryToBorder`)} />
          <Column field={'grossMass'} header={t(`${translationsForReportTransit4257Columns}.grossMass`)} />
          <Column field={'netMass'} header={t(`${translationsForReportTransit4257Columns}.netMass`)} />
          <Column field={'packageCode'} header={t(`${translationsForReportTransit4257Columns}.packageCode`)} />
          <Column field={'packageName'} header={t(`${translationsForReportTransit4257Columns}.packageName`)} />
          <Column field={'hscode'} header={t(`${translationsForReportTransit4257Columns}.hscode`)} />
          <Column field={'goodDescription2'} header={t(`${translationsForReportTransit4257Columns}.goodDescription2`)} />
          <Column field={'goodDescription3'} header={t(`${translationsForReportTransit4257Columns}.goodDescription3`)} />
          <Column field={'packageMark'} header={t(`${translationsForReportTransit4257Columns}.packageMark`)} />
          <Column field={'cont1'} header={t(`${translationsForReportTransit4257Columns}.cont1`)} />
          <Column field={'cont2'} header={t(`${translationsForReportTransit4257Columns}.cont2`)} />
          <Column field={'sealAffixedNo'} header={t(`${translationsForReportTransit4257Columns}.sealAffixedNo`)} />
          <Column field={'sealIdentity'} header={t(`${translationsForReportTransit4257Columns}.sealIdentity`)} />
          <Column field={'garantyCod'} header={t(`${translationsForReportTransit4257Columns}.garantyCod`)} />
          <Column field={'garantyAmnt'} header={t(`${translationsForReportTransit4257Columns}.garantyAmnt`)} />
          <Column field={'at1Cod'} header={t(`${translationsForReportTransit4257Columns}.at1Cod`)} />
          <Column field={'at1Nbr'} header={t(`${translationsForReportTransit4257Columns}.at1Nbr`)} />
          <Column field={'at2Cod'} header={t(`${translationsForReportTransit4257Columns}.at2Cod`)} />
          <Column field={'at2Nbr'} header={t(`${translationsForReportTransit4257Columns}.at2Nbr`)} />
          <Column field={'at3Cod'} header={t(`${translationsForReportTransit4257Columns}.at3Cod`)} />
          <Column field={'at3Nbr'} header={t(`${translationsForReportTransit4257Columns}.at3Nbr`)} />
          <Column field={'at4Cod'} header={t(`${translationsForReportTransit4257Columns}.at4Cod`)} />
          <Column field={'at4Nbr'} header={t(`${translationsForReportTransit4257Columns}.at4Nbr`)} />
          <Column field={'transitOfficer'} header={t(`${translationsForReportTransit4257Columns}.transitOfficer`)} />
          <Column field={'totPkg'} header={t(`${translationsForReportTransit4257Columns}.totPkg`)} />
          <Column field={'decRef'} header={t(`${translationsForReportTransit4257Columns}.decRef`)} />
          <Column field={'loadList'} header={t(`${translationsForReportTransit4257Columns}.loadList`)} />
          <Column field={'destnCty'} header={t(`${translationsForReportTransit4257Columns}.destnCty`)} />
          <Column field={'ctyDestnNam'} header={t(`${translationsForReportTransit4257Columns}.ctyDestnNam`)} />
          <Column field={'maxDateOfArrivalLimit'} header={t(`${translationsForReportTransit4257Columns}.maxDateOfArrivalLimit`)} />
          <Column field={'maxDateAllowed'} header={t(`${translationsForReportTransit4257Columns}.maxDateAllowed`)} />
          <Column field={'nationalityOfTransport'} header={t(`${translationsForReportTransit4257Columns}.nationalityOfTransport`)} />
          <Column field={'ctyBorder'} header={t(`${translationsForReportTransit4257Columns}.ctyBorder`)} />
          <Column field={'ctyDep'} header={t(`${translationsForReportTransit4257Columns}.ctyDep`)} />
          <Column field={'itmNo'} header={t(`${translationsForReportTransit4257Columns}.itmNo`)} />
          <Column field={'packNbr'} header={t(`${translationsForReportTransit4257Columns}.packNbr`)} />
          <Column field={'delCod'} header={t(`${translationsForReportTransit4257Columns}.delCod`)} />
          <Column field={'mNo'} header={t(`${translationsForReportTransit4257Columns}.mNo`)} />
          <Column field={'delNam'} header={t(`${translationsForReportTransit4257Columns}.delNam`)} />
          <Column field={'astDat_1'} header={t(`${translationsForReportTransit4257Columns}.astDat_1`)} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
};

export default Transit_4257;
