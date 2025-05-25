import { Box, LinearProgress } from '@mui/material';
import axios from 'axios';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { useRef, useState } from 'react';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
import { SimpleCard } from '../../components';
import { ROWS_PER_PAGE } from '../../utils/constant';

const Transit_4267 = () => {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);

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
    <SimpleCard title="Transit Report 4267">
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
          
          <Column field={'transitType'} header={'transitType'} />
          <Column field={'declarationRefYr'} header={'Declaration_Ref_Year'} />
          <Column field={'deptOffNam'} header={'Departure_Off_Name'} />
          <Column field={'destnNam'} header={'Destination_off_Name'} />
          <Column style={{ minWidth: "12rem" }} field={'status'} header={'Status'} />
          <Column field={'regNo'} header={'Reg_No'} />
          <Column field={'regDat'} header={'Reg_Date'} />
          <Column field={'valNo'} header={'Validation_No'} />
          <Column style={{ minWidth: "12rem" }} field={'arrDate'} header={'Arrival_Date'} />
          <Column field={'maxDateOfArrivalLimit'} header={'Max_Date_of_Arrival'} />
          <Column field={'maxDateAllowed'} header={'Max_Days_Allowed'} />
          <Column style={{ minWidth: "15rem" }} field={'transitOfficer'} header={'	Departure Officer'} />
          <Column field={'declarantCode'} header={'Declarant_Code'} />
          <Column style={{ minWidth: "12rem" }} field={'declarantName'} header={'Declarant_Name'} />
          <Column field={'cnsCode'} header={'Consignee_Code'} />
          <Column style={{ minWidth: "25rem" }} field={'cnsName'} header={'Consignee_Name'} />
          <Column field={'principalCod'} header={'Principal_Code'} />
          <Column style={{ minWidth: "25rem" }} field={'principalNam'} header={'Principal_Name'} />
          <Column style={{ minWidth: "12rem" }} field={'representedBy'} header={'Represented_By'} />
          <Column style={{ minWidth: "15rem" }} field={'ctyExportName'} header={'ctyExportName'} />
          <Column field={'ctyDestnCod'} header={'Ctry_of_Destn_code'} />
          <Column field={'modOfTransport'} header={'Mode_of_Transport'} />
          <Column field={'lorryToBorder'} header={'Truck To Border'} />
          <Column field={'grossMass'} header={'Gross_Mass'} />
          <Column field={'netMass'} header={'Net_Mass'} />
          <Column field={'totPkg'} header={'Total_Pkg '} />
          <Column style={{ minWidth: "15rem" }} field={'packageName'} header={'Package_Name'} />
          <Column field={'hscode'} header={'Hscode'} />
          <Column style={{ minWidth: "30rem" }} field={'goodDescription2'} header={'goodDescription2'} />
          <Column style={{ minWidth: "30rem" }} field={'goodDescription3'} header={'goodDescription3'} />
          <Column style={{ minWidth: "20rem" }} field={'packageMark'} header={'Package_Mark'} />
          <Column field={'contFlg'} header={'Container Flag'} />
          <Column field={'cont1'} header={'Container 1'} />
          <Column field={'cont2'} header={'Container 2'} />
          <Column field={'sealAffixedNo'} header={'Seal_Affixed_No'} />
          <Column field={'sealIdentity'} header={'Seal_Identity'} />
          <Column field={'garantyCod'} header={'Garanty_Code'} />
          <Column field={'garantyAmnt'} header={'Garanty_Amnt'} />
          <Column style={{ minWidth: "20rem" }} field={'at1Cod'} header={'ATT_AT1_COd'} />
          <Column style={{ minWidth: "20rem" }} field={'at1Nbr'} header={'ATT_AT1_nbr'} />
          <Column field={'at2Cod'} header={'ATT_AT2_COd'} />
          <Column style={{ minWidth: "20rem" }} field={'at2Nbr'} header={'ATT_AT2_nbr'} />
          <Column field={'at3Cod'} header={'ATT_AT3_COd'} />
          <Column style={{ minWidth: "20rem" }} field={'at3Nbr'} header={'ATT_AT3_nbr'} />
          <Column field={'at4Cod'} header={'ATT_AT4_COd'} />
          <Column style={{ minWidth: "20rem" }} field={'at4Nbr'} header={'ATT_AT4_nbr'} />
          <Column field={'decRef'} header={'decRef'} />
          <Column field={'loadList'} header={'loadList'} />
          <Column field={'destnCty'} header={'destnCty'} />
          <Column field={'expCode'} header={'expCode'} />
          <Column field={'expNam'} header={'expNam'} />
          <Column field={'ctyExport'} header={'ctyExport'} />
          <Column field={'ctyDestnNam'} header={'ctyDestnNam'} />
          <Column field={'nationalityOfTransport'} header={'nationalityOfTransport'} />
          <Column field={'ctyBorder'} header={'ctyBorder'} />
          <Column field={'ctyDep'} header={'ctyDep'} />
          <Column field={'itmNo'} header={'itmNo'} />
          <Column field={'packNbr'} header={'packNbr'} />
          <Column field={'packageCode'} header={'packageCode'} />
          <Column field={'astDat'} header={'astDat'} />
          <Column field={'delCod'} header={'delCod'} />

          <Column style={{ minWidth: "20rem" }} field={'delNam'} header={'delNam'} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
};

export default Transit_4267;
