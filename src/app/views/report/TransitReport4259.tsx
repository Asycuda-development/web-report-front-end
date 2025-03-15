import { Box, styled } from '@mui/material';
import axios from 'axios';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { useEffect, useRef, useState } from 'react';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
import { SimpleCard } from '../../components';
import { ROWS_PER_PAGE } from '../../utils/constant';

const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' }
  }
}));

const TransitReport4259 = () => {
  const [reportData, setReportData] = useState([]);
  const tableRef: any = useRef(null);

  useEffect(() => {}, []);

  const handleSubmit = async (data: SearchData) => {
    try {
        console.log(data)
      const res = await axios.post('/reporting/TransitReport4259', {
        startDate: data.startDate,
        endDate: data.endDate,
        customsCode: data.CustomsCode,
        type: data.customsProcedure,
        ...data
      });

      setReportData(res.data);
    } catch (error) {}
  };

  return (
    <Container>
      <SimpleCard title="TransitReport4259">
        <ReportHeaderInputs
          showStartDate
          showEndDate
          showCustomsList
          showDestinationCustomsList
          showTransitType2
          // ShowTinNumber
          // showCustomsProcedure
          //showDepartureDate
          showRegDate
          //showArrivalDate
          //showValidationDate
          //showTransitType
          //showCustomsProcedure
          ShowTinNumber
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
            <Column  field={'totPkg'} header={'totPkg '} />
            <Column field={'decRef'} header={'decRef'} />
            <Column field={'loadList'} header={'loadList'} />
            <Column field={'regNo'} header={'REG_NO'} />
            <Column field={'regDat'} header={'regDat'} />
            <Column style={{minWidth:"20rem"}}field={'status'} header={'status'} />
            <Column style={{minWidth:"12rem"}}field={'arrDate'} header={'arrDate'} />
            <Column field={'deptOffNam'} header={'deptOffNam'} />
            <Column field={'destnNam'} header={'destnNam'} />
            <Column field={'destnCty'} header={'destnCty'} />
            <Column field={'transitType'} header={'transitType'} />
            <Column field={'expCode'} header={'expCode'} />
            <Column field={'expNam'} header={'expNam'} />
            <Column field={'cnsCode'} header={'cnsCode'} />
            <Column style={{minWidth:"25rem"}}field={'cnsName'} header={'cnsName'} />
            <Column field={'ctyExport'} header={'ctyExport'} />
            <Column style={{minWidth:"15rem"}}field={'ctyExportName'} header={'ctyExportName'} />
            <Column field={'ctyDestnCod'} header={'ctyDestnCod'} />
            <Column field={'ctyDestnNam'} header={'ctyDestnNam'} />
            <Column field={'modOfTransport'} header={'modOfTransport'} />
            <Column field={'principalCod'} header={'principalCod'} />
            <Column style={{minWidth:"25rem"}}field={'principalNam'} header={'principalNam'} />
            <Column style={{minWidth:"20rem"}}field={'representedBy'} header={'representedBy'} />
            <Column field={'declarantCode'} header={'declarantCode'} />
            <Column style={{minWidth:"12rem"}}field={'declarantName'} header={'declarantName'} />
            <Column field={'maxDateOfArrivalLimit'} header={'maxDateOfArrivalLimit'} />
            <Column field={'maxDateAllowed'} header={'maxDateAllowed'} />
            <Column field={'declarationRefYr'} header={'declarationRefYr'} />
            <Column field={'nationalityOfTransport'} header={'nationalityOfTransport'} />
            <Column field={'lorryToBorder'} header={'lorryToBorder'} />
            <Column field={'ctyBorder'} header={'ctyBorder'} />
            <Column field={'ctyDep'} header={'ctyDep'} />
            <Column field={'sealAffixedNo'} header={'sealAffixedNo'} />
            <Column field={'sealIdentity'} header={'sealIdentity'} />
            <Column field={'garantyCod'} header={'garantyCod'} />
            <Column field={'garantyAmnt'} header={'garantyAmnt'} />
            <Column field={'itmNo'} header={'itmNo'} />
            <Column field={'packNbr'} header={'packNbr'} />
            <Column style={{minWidth:"15rem"}}field={'packageMark'} header={'packageMark'} />
            <Column field={'hscode'} header={'hscode'} />
            <Column field={'grossMass'} header={'grossMass'} />
            <Column field={'netMass'} header={'netMass'} />
            <Column style={{minWidth:"20rem"}}field={'goodDescription2'} header={'goodDescription2'} />
            <Column style={{minWidth:"30rem"}}field={'goodDescription3'} header={'goodDescription3'} />
            <Column field={'packageCode'} header={'packageCode'} />
            <Column style={{minWidth:"12rem"}}field={'packageName'} header={'packageName'} />
            <Column style={{minWidth:"20rem"}}field={'at1Cod'} header={'at1Cod'} />
            <Column style={{minWidth:"20rem"}}field={'at1Nbr'} header={'at1Nbr'} />
            <Column field={'at2Cod'} header={'at2Cod'} />
            <Column style={{minWidth:"20rem"}}field={'at2Nbr'} header={'at2Nbr'} />
            <Column field={'at3Cod'} header={'at3Cod'} />
            <Column style={{minWidth:"20rem"}}field={'at3Nbr'} header={'at3Nbr'} />
            <Column field={'at4Cod'} header={'at4Cod'} />
            <Column style={{minWidth:"20rem"}}field={'at4Nbr'} header={'at4Nbr'} />
            <Column field={'valNo'} header={'valNo'} />
            <Column style={{minWidth:"12rem"}}field={'transitOfficer'} header={'transitOfficer'} />
            <Column field={'cont1'} header={'cont1'} />
            <Column field={'cont2'} header={'cont2'} />
            <Column field={'contFlg'} header={'contFlg'} />
            <Column field={'delCod'} header={'delCod'} />
            <Column style={{minWidth:"20rem"}} field={'delNam'} header={'delNam'} />
        
           
           
        
            {/* <Column field={'tad_tot'} header={'Customs Value'} /> */}
          </DataTable>
        </Box>
      </SimpleCard>
    </Container>
  );
};

export default TransitReport4259;
