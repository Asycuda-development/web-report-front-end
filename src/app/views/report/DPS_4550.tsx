import { SimpleCard } from '../../components';
import { Box, styled, LinearProgress } from '@mui/material';
import React, { useEffect, useState, useRef } from 'react';
import { ROWS_PER_PAGE } from '../../utils/constant';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
import { Toast } from 'primereact/toast';

function DPS_4550() {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false);
  const tableRef: any = useRef(null);
  const toastRef: any = useRef(null);

  useEffect(() => { }, []);

  const handleSubmit = async (data: SearchData) => {
    console.log(
      data.basedOn,
      data,
      data.basedOnValue,
      data.startDate,
      data.companyTin,
      data.customsProcedure
    );
    try {
      if (data.basedOn && !data.basedOnValue) {
        toastRef.current.show({
          severity: 'error',
          summary: 'Based On Value',
          detail: 'Based On Value is required when Based On is selected, please try again.'
        });
        return;
      }
      setLoading(true);
      const res = await axios.post('/reporting/DpsReport4550', {
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
  const basedOnOptions = [{
    label: 'declarant',
    name: 'declarant_Code'
  }, {
    label: 'company',
    name: 'company Code'
  }, {
    label: 'Sad_Financial',
    name: 'SAD_Financial'
  }, {
    label: 'Examiner',
    name: 'Examiner'
  }, {
    label: 'I_no',
    name: 'I_no'
  }, {
    label: 'P_no',
    name: 'P_no'
  }, {
    label: 'M_no',
    name: 'M_no'
  }, {
    label: 'HsCode',
    name: 'HsCode'
  }]

  //
  return (
    <SimpleCard title="4550-DPS">
      <ReportHeaderInputs
        showStartDate
        showEndDate
        ShowTinNumber
        showExemptionType
        showCustomsProcedure
        showBasedOn
        basedOnOptions={basedOnOptions}
        showRegDate
        showAssesDate
        showPayDate
        showBasedOnBox
        showCustomsList
        showDepartureCustomsList
        onSearch={handleSubmit}
        tabelRef={tableRef}
      />
      {loading && <LinearProgress />}
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
          <Column field={'sadType'} header={'SAD_Flow'} />
          <Column field={'transportCustomsName'} header={'Border office'} />
          <Column filter filterField="customsName" field={'customsName'} header={'Customs Office'} />
          <Column field={'customsCode'} header={'Custom Code'} />
          <Column field={'itemTotal'} header={'Item_Total'} />
          <Column field={'itemNo'} header={'Item_No'} />
          <Column field={'totalPackage'} header={'Total_Package'} />
          <Column field={'packageType'} header={'Type_Of_Package'} />
          <Column field={'packageCode'} header={'Package Code'} />
          <Column filter filterField='registrationNo' field={'registrationNo'} header={'Reg_No'} />
          <Column field={'registrationDate'} header={'Reg_Date'} />
          <Column filter filterField='assessmentNumber' field={'assessmentNumber'} header={'Assmt_No'} />
          <Column field={'assessmentDate'} header={'Assmt_Date'} />
          <Column field={'receiptDate'} header={'RCPT_Date'} />
          <Column field={'sadStatus'} header={'SAD_Status'} />
          <Column field={'cpc'} header={'Customs_Proc'} />
          <Column field={'customsProcedure'} header={'Extended Proc Code'} />
          <Column field={'hsCode'} header={'HSCODE'} />
          <Column field={'bankName'} header={'Bank Name'} />
          <Column style={{ minWidth: "14rem" }} field={'goodsDescription'} header={'Goods Description'} />
          <Column style={{ minWidth: "20rem" }} field={'goodsAdditionalDesc'} header={'Comercial Description'} />
          <Column style={{ minWidth: "12rem" }} field={'packageMark1'} header={'Marks of Packages 1'} />
          <Column field={'packageMark2'} header={'Marks of Packages 2'} />
          <Column field={'itemGrossWeight'} header={'Item_Gross_Weight'} />
          <Column field={'itemNetWeight'} header={'Item_Net_Weight'} />
          <Column filter filterField='brokerTIN' field={'brokerTIN'} header={'Broker_TIN'} />
          <Column field={'declarantName'} header={'Broker_Name'} />
          <Column field={'companyTIN'} header={'Company_TIN'} />
          <Column field={'companyName'} header={'Company_Name'} />
          <Column filter filterField='financialCode' field={'financialCode'} header={'Financial_Code'} />
          <Column style={{ minWidth: "12rem" }} field={'financialName'} header={'Financial_Name'} />
          <Column field={'freeText'} header={'Free Text'} />
          <Column field={'countryOriginCode'} header={'Country_Orgin_Code'} />
          <Column field={'countryOriginName'} header={'Country_Orgin_Name'} />
          <Column filter filterField='countryExportCode' field={'countryExportCode'} header={'Country_Export_Code'} />
          <Column field={'countryExportName'} header={'Country_Export_Name'} />
          <Column field={'countryDestinationCode'} header={'Country_Dest_Code'} />
          <Column field={'countryDestinationName'} header={'Country_Dest_Name'} />
          <Column field={'lorryTotal'} header={'Lorry_Total'} />
          <Column field={'currencyRate'} header={'Currency_Rate'} />
          <Column field={'currencyCode'} header={'Currency Code'} />
          <Column field={'declarationValueCurrency'} header={'Declaration_Value in Foriegn Currency'} />
          <Column field={'declarationValueAfs'} header={'Declaration_Value_Afs'} />
          <Column field={'declarationTaxesAfs'} header={'Declaration_Taxes_Afs'} />
          <Column field={'itemValueCurrency'} header={'Item_Value_currency'} />
          <Column field={'itemValueAfs'} header={'Item_Value_Af'} />
          <Column field={'itemTaxesAfs'} header={'Item_Taxes_Afs'} />
          <Column field={'taxCode'} header={'Tax_Code'} />
          <Column style={{ minWidth: "12rem" }} field={'taxDescription'} header={'Tax_Code_Description'} />
          <Column field={'taxCodeAmountAfs'} header={'Tax_Code_Amount_Afs'} />
          <Column field={'taxRate'} header={'Tax_Rate'} />
          <Column field={'electronicFeeAfs'} header={'Electronic_Fee_Afs'} />
          <Column field={'vehicleChassis'} header={'Vehicle_Chasis'} />
          <Column field={'engineNo'} header={'Engine NO'} />
          <Column filter filterField='examiner' field={'examiner'} header={'Examiner'} />
          <Column filter filterField='box18_1' field={'box18_1'} header={'Idenetity of Truck at Dep1 Box18'} />
          <Column filter filterField='box18_2' field={'box18_2'} header={'Idenetity of Truck at Dep2 Box18'} />
          <Column filter filterField='box21_1' field={'box21_1'} header={'Identity of Truck Crossing Border1 Box21'} />
          <Column filter filterField='box21_2' field={'box21_2'} header={'Identity of Truck Crossing Border2 Box21'} />
          <Column field={'locationGoods'} header={'Location_Of_Goods'} />
          <Column field={'goodsCategory1'} header={'Gcategory 1'} />
          <Column field={'container'} header={'Container Flag'} />
          <Column filter filterField='receiptNoOriginal' field={'receiptNoOriginal'} header={'Name_of_Representative'} />
          <Column field={'ptyDate'} header={'PTY_DATE'} />
          <Column field={'itemCIFValue'} header={'Item CIF Value'} />
          <Column field={'sadFlow'} header={'Sad Flow'} />
          <Column field={'goodsCategory2'} header={'Goods Category 2'} />
          <Column field={'decRep'} header={'Declerent Rep'} />

          {/* {reportData.length > 0 &&
                Object.keys(reportData[0]).map((keys, index) => (
                  <Column key={index} field={keys} header={keys} />
                ))} */}
          {/* <Column field="id" header="Id"></Column>
              <Column field="name" header="Name"></Column>
              <Column field="description" header="Description"></Column>
              <Column field="active" header="Active"></Column> */}
        </DataTable>
      </Box>
      <Toast ref={toastRef} />
    </SimpleCard>
  );
}

export default DPS_4550;
