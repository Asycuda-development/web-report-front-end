import { Box, LinearProgress } from '@mui/material';
import axios from 'axios';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { useEffect, useRef, useState } from 'react';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
import { SimpleCard } from '../../components';
import { ROWS_PER_PAGE } from '../../utils/constant';

const Transit_4257 = () => {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);

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
    <SimpleCard title="Transit Report 4257">
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
          <Column field={'transitType'} header={'transitType'} />
          <Column field={'declarationRefYr'} header={'declarationRefYr'} />
          <Column field={'deptOffNam'} header={'deptOffNam'} />
          <Column field={'destnNam'} header={'destnNam'} />
          <Column field={'status'} header={'status'} />
          <Column field={'expCode'} header={'expCode'} />
          <Column field={'expNam'} header={'expNam'} />
          <Column field={'regNo'} header={'REG_NO'} />
          <Column field={'regDat'} header={'regDat'} />
          <Column field={'valNo'} header={'valNo'} />
          <Column field={'astDat'} header={'astDat'} />
          <Column style={{ minWidth: "12rem" }} field={'arrDate'} header={'arrDate'} />
          <Column field={'declarantCode'} header={'declarantCode'} />
          <Column field={'declarantName'} header={'declarantName'} />
          <Column field={'cnsCode'} header={'cnsCode'} />
          <Column style={{ minWidth: "25rem" }} field={'cnsName'} header={'cnsName'} />
          <Column field={'principalCod'} header={'principalCod'} />
          <Column field={'principalNam'} header={'principalNam'} />
          <Column field={'representedBy'} header={'representedBy'} />
          <Column field={'ctyExport'} header={'ctyExport'} />
          <Column field={'ctyExportName'} header={'ctyExportName'} />
          <Column field={'ctyDestnCod'} header={'ctyDestnCod'} />
          <Column field={'modOfTransport'} header={'modOfTransport'} />
          <Column field={'lorryToBorder'} header={'lorryToBorder'} />
          <Column field={'grossMass'} header={'grossMass'} />
          <Column field={'netMass'} header={'netMass'} />
          <Column field={'packageCode'} header={'packageCode'} />
          <Column field={'packageName'} header={'packageName'} />
          <Column field={'hscode'} header={'hscode'} />
          <Column field={'goodDescription2'} header={'goodDescription2'} />
          <Column field={'goodDescription3'} header={'goodDescription3'} />
          <Column field={'packageMark'} header={'packageMark'} />
          <Column field={'cont1'} header={'cont1'} />
          <Column field={'cont2'} header={'cont2'} />
          <Column field={'sealAffixedNo'} header={'sealAffixedNo'} />
          <Column field={'sealIdentity'} header={'sealIdentity'} />
          <Column field={'garantyCod'} header={'garantyCod'} />
          <Column field={'garantyAmnt'} header={'garantyAmnt'} />
          <Column field={'at1Cod'} header={'at1Cod'} />
          <Column field={'at1Nbr'} header={'at1Nbr'} />
          <Column field={'at2Cod'} header={'at2Cod'} />
          <Column field={'at2Nbr'} header={'at2Nbr'} />
          <Column field={'at3Cod'} header={'at3Cod'} />
          <Column field={'at3Nbr'} header={'at3Nbr'} />
          <Column field={'at4Cod'} header={'at4Cod'} />
          <Column field={'at4Nbr'} header={'at4Nbr'} />
          <Column field={'transitOfficer'} header={'transitOfficer'} />
          <Column field={'totPkg'} header={'totPkg '} />
          <Column field={'decRef'} header={'decRef'} />
          <Column field={'loadList'} header={'loadList'} />
          <Column field={'destnCty'} header={'destnCty'} />
          <Column field={'ctyDestnNam'} header={'ctyDestnNam'} />
          <Column field={'maxDateOfArrivalLimit'} header={'maxDateOfArrivalLimit'} />
          <Column field={'maxDateAllowed'} header={'maxDateAllowed'} />
          <Column field={'nationalityOfTransport'} header={'nationalityOfTransport'} />
          <Column field={'ctyBorder'} header={'ctyBorder'} />
          <Column field={'ctyDep'} header={'ctyDep'} />
          <Column field={'itmNo'} header={'itmNo'} />
          <Column field={'packNbr'} header={'packNbr'} />
          <Column field={'delCod'} header={'delCod'} />
          <Column field={'mNo'} header={'mNo'} />
          <Column field={'delNam'} header={'delNam'} />
          <Column field={'astDat_1'} header={'astDat_1'} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
};

export default Transit_4257;
