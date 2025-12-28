import { SimpleCard } from '../../components';
import { Box, styled, LinearProgress } from '@mui/material';
import React, { useEffect, useState, useRef } from 'react';
import { ROWS_PER_PAGE } from '../../utils/constant';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
import { Toast } from 'primereact/toast';
import { useTranslation } from 'react-i18next';

const translationsForBasedOnError: string = "errors"
const translationsForBasedOn: string = "basedOn"
const translationsForReportDps4550: string = "reports.dps_4550"
const translationsForReportDps4550Columns: string = "reports.dps_4550.columns"

function DPS_4550() {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false);
  const tableRef: any = useRef(null);
  const toastRef: any = useRef(null);
  const { t } = useTranslation();

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
          summary: t(`${translationsForBasedOnError}.basedOnSummaryError`),
          detail: t(`${translationsForBasedOnError}.basedOnDetailedError`)
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
    label: t(`${translationsForBasedOn}.declarant`),
    name: 'declarant_Code'
  }, {
    label: t(`${translationsForBasedOn}.company`),
    name: 'company Code'
  }, {
    label: t(`${translationsForBasedOn}.sad_financial`),
    name: 'SAD_Financial'
  }, {
    label: t(`${translationsForBasedOn}.examiner`),
    name: 'Examiner'
  }, {
    label: t(`${translationsForBasedOn}.i_no`),
    name: 'I_no'
  }, {
    label: t(`${translationsForBasedOn}.p_no`),
    name: 'P_no'
  }, {
    label: t(`${translationsForBasedOn}.m_no`),
    name: 'M_no'
  }, {
    label: t(`${translationsForBasedOn}.hscode`),
    name: 'HsCode'
  }]
  console.log(tableRef)
  //
  return (
    <SimpleCard title={t(`${translationsForReportDps4550}.title`)}>
      <ReportHeaderInputs
        report='DpsReport4550'
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
          exportFilename={`DPS_4550 ${new Date().toISOString()}`}
          ref={tableRef}
          value={reportData}
          rows={ROWS_PER_PAGE}
          rowsPerPageOptions={[5, 10, 25, 50, 100]}
          paginator
          stripedRows
          showGridlines
        >
          <Column field={'sadType'} header={t(`${translationsForReportDps4550Columns}.sadType`)} />
          <Column field={'transportCustomsName'} header={t(`${translationsForReportDps4550Columns}.transportCustomsName`)} />
          <Column filter filterField="customsName" field={'customsName'} header={t(`${translationsForReportDps4550Columns}.customsName`)} />
          <Column field={'customsCode'} header={t(`${translationsForReportDps4550Columns}.customsCode`)} />
          <Column field={'itemTotal'} header={t(`${translationsForReportDps4550Columns}.itemTotal`)} />
          <Column field={'itemNo'} header={t(`${translationsForReportDps4550Columns}.itemNo`)} />
          <Column field={'totalPackage'} header={t(`${translationsForReportDps4550Columns}.totalPackage`)} />
          <Column field={'packageType'} header={t(`${translationsForReportDps4550Columns}.packageType`)} />
          <Column field={'packageCode'} header={t(`${translationsForReportDps4550Columns}.packageCode`)} />
          <Column filter filterField='registrationNo' field={'registrationNo'} header={t(`${translationsForReportDps4550Columns}.registrationNo`)} />
          <Column field={'registrationDate'} header={t(`${translationsForReportDps4550Columns}.registrationDate`)} />
          <Column filter filterField='assessmentNumber' field={'assessmentNumber'} header={t(`${translationsForReportDps4550Columns}.assessmentNumber`)} />
          <Column field={'assessmentDate'} header={t(`${translationsForReportDps4550Columns}.assessmentDate`)} />
          <Column field={'receiptDate'} header={t(`${translationsForReportDps4550Columns}.receiptDate`)} />
          <Column field={'sadStatus'} header={t(`${translationsForReportDps4550Columns}.sadStatus`)} />
          <Column field={'cpc'} header={t(`${translationsForReportDps4550Columns}.cpc`)} />
          <Column field={'customsProcedure'} header={t(`${translationsForReportDps4550Columns}.customsProcedure`)} />
          <Column field={'hsCode'} header={t(`${translationsForReportDps4550Columns}.hsCode`)} />
          <Column field={'bankName'} header={t(`${translationsForReportDps4550Columns}.bankName`)} />
          <Column style={{ minWidth: "14rem" }} field={'goodsDescription'} header={t(`${translationsForReportDps4550Columns}.goodsDescription`)} />
          <Column style={{ minWidth: "20rem" }} field={'goodsAdditionalDesc'} header={t(`${translationsForReportDps4550Columns}.goodsAdditionalDesc`)} />
          <Column style={{ minWidth: "12rem" }} field={'packageMark1'} header={t(`${translationsForReportDps4550Columns}.packageMark1`)} />
          <Column field={'packageMark2'} header={t(`${translationsForReportDps4550Columns}.packageMark2`)} />
          <Column field={'itemGrossWeight'} header={t(`${translationsForReportDps4550Columns}.itemGrossWeight`)} />
          <Column field={'itemNetWeight'} header={t(`${translationsForReportDps4550Columns}.itemNetWeight`)} />
          <Column filter filterField='brokerTIN' field={'brokerTIN'} header={t(`${translationsForReportDps4550Columns}.brokerTIN`)} />
          <Column field={'declarantName'} header={t(`${translationsForReportDps4550Columns}.declarantName`)} />
          <Column field={'companyTIN'} header={t(`${translationsForReportDps4550Columns}.companyTIN`)} />
          <Column field={'companyName'} header={t(`${translationsForReportDps4550Columns}.companyName`)} />
          <Column filter filterField='financialCode' field={'financialCode'} header={t(`${translationsForReportDps4550Columns}.financialCode`)} />
          <Column style={{ minWidth: "12rem" }} field={'financialName'} header={t(`${translationsForReportDps4550Columns}.financialName`)} />
          <Column field={'freeText'} header={t(`${translationsForReportDps4550Columns}.freeText`)} />
          <Column field={'countryOriginCode'} header={t(`${translationsForReportDps4550Columns}.countryOriginCode`)} />
          <Column field={'countryOriginName'} header={t(`${translationsForReportDps4550Columns}.countryOriginName`)} />
          <Column filter filterField='countryExportCode' field={'countryExportCode'} header={t(`${translationsForReportDps4550Columns}.countryExportCode`)} />
          <Column field={'countryExportName'} header={t(`${translationsForReportDps4550Columns}.countryExportName`)} />
          <Column field={'countryDestinationCode'} header={t(`${translationsForReportDps4550Columns}.countryDestinationCode`)} />
          <Column field={'countryDestinationName'} header={t(`${translationsForReportDps4550Columns}.countryDestinationName`)} />
          <Column field={'lorryTotal'} header={t(`${translationsForReportDps4550Columns}.lorryTotal`)} />
          <Column field={'currencyRate'} header={t(`${translationsForReportDps4550Columns}.currencyRate`)} />
          <Column field={'currencyCode'} header={t(`${translationsForReportDps4550Columns}.currencyCode`)} />
          <Column field={'declarationValueCurrency'} header={t(`${translationsForReportDps4550Columns}.declarationValueCurrency`)} />
          <Column field={'declarationValueAfs'} header={t(`${translationsForReportDps4550Columns}.declarationValueAfs`)} />
          <Column field={'declarationTaxesAfs'} header={t(`${translationsForReportDps4550Columns}.declarationTaxesAfs`)} />
          <Column field={'itemValueCurrency'} header={t(`${translationsForReportDps4550Columns}.itemValueCurrency`)} />
          <Column field={'itemValueAfs'} header={t(`${translationsForReportDps4550Columns}.itemValueAfs`)} />
          <Column field={'itemTaxesAfs'} header={t(`${translationsForReportDps4550Columns}.itemTaxesAfs`)} />
          <Column field={'taxCode'} header={t(`${translationsForReportDps4550Columns}.taxCode`)} />
          <Column style={{ minWidth: "12rem" }} field={'taxDescription'} header={t(`${translationsForReportDps4550Columns}.taxDescription`)} />
          <Column field={'taxCodeAmountAfs'} header={t(`${translationsForReportDps4550Columns}.taxCodeAmountAfs`)} />
          <Column field={'taxRate'} header={t(`${translationsForReportDps4550Columns}.taxRate`)} />
          <Column field={'electronicFeeAfs'} header={t(`${translationsForReportDps4550Columns}.electronicFeeAfs`)} />
          <Column field={'vehicleChassis'} header={t(`${translationsForReportDps4550Columns}.vehicleChassis`)} />
          <Column field={'engineNo'} header={t(`${translationsForReportDps4550Columns}.engineNo`)} />
          <Column filter filterField='examiner' field={'examiner'} header={t(`${translationsForReportDps4550Columns}.examiner`)} />
          <Column filter filterField='box18_1' field={'box18_1'} header={t(`${translationsForReportDps4550Columns}.box18_1`)} />
          <Column filter filterField='box18_2' field={'box18_2'} header={t(`${translationsForReportDps4550Columns}.box18_2`)} />
          <Column filter filterField='box21_1' field={'box21_1'} header={t(`${translationsForReportDps4550Columns}.box21_1`)} />
          <Column filter filterField='box21_2' field={'box21_2'} header={t(`${translationsForReportDps4550Columns}.box21_2`)} />
          <Column field={'locationGoods'} header={t(`${translationsForReportDps4550Columns}.locationGoods`)} />
          <Column field={'goodsCategory1'} header={t(`${translationsForReportDps4550Columns}.goodsCategory1`)} />
          <Column field={'container'} header={t(`${translationsForReportDps4550Columns}.container`)} />
          <Column filter filterField='receiptNoOriginal' field={'receiptNoOriginal'} header={t(`${translationsForReportDps4550Columns}.receiptNoOriginal`)} />
          <Column field={'ptyDate'} header={t(`${translationsForReportDps4550Columns}.ptyDate`)} />
          <Column field={'itemCIFValue'} header={t(`${translationsForReportDps4550Columns}.itemCIFValue`)} />
          <Column field={'sadFlow'} header={t(`${translationsForReportDps4550Columns}.sadFlow`)} />
          <Column field={'goodsCategory2'} header={t(`${translationsForReportDps4550Columns}.goodsCategory2`)} />
          <Column field={'decRep'} header={t(`${translationsForReportDps4550Columns}.decRep`)} />

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
