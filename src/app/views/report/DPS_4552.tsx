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
const translationsForReportDPS4552: string = "reports.dps_4552"
const translationsForReportDPS4552Columns: string = "reports.dps_4552.columns"

function DPS_4552() {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false);
  const tableRef: any = useRef(null);
  const toastRef: any = useRef(null);
  const { t } = useTranslation();

  const handleSubmit = async (data: SearchData) => {
    try {
      if (data.basedOn && !data.basedOnValue) {
        toastRef.current.show({
          severity: 'error',
          summary: 'Based On Value',
          detail: 'Based On Value is required when Based On is selected, please try again.'
        });
        return
      }
      setLoading(true);
      const res = await axios.post('/reporting/DpsReport4552', {
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
    name: 'declarant'
  }, {
    label: 'company',
    name: 'company'
  }, {
    label: 'Sad_Financial',
    name: 'Sad_Financial'
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

  return (
    <SimpleCard title={t(`${translationsForReportDPS4552}.title`)}>
      <ReportHeaderInputs
        showStartDate
        showEndDate
        ShowTinNumber
        showExemptionType
        showCustomsProcedure
        showDestinationCustomsList
        showBasedOn
        basedOnOptions={basedOnOptions}
        showRegDate
        showAssesDate
        showPayDate
        showCustomsList
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
          emptyMessage={'No Data Available'}
        >

          <Column field={'transportCustomsName'} header={t(`${translationsForReportDPS4552Columns}.transportCustomsName`)} />
          <Column field={'customsName'} header={t(`${translationsForReportDPS4552Columns}.customsName`)} />
          <Column field={'sadType'} header={t(`${translationsForReportDPS4552Columns}.sadType`)} />
          <Column field={'regSer'} header={t(`${translationsForReportDPS4552Columns}.regSer`)} />
          <Column field={'regNo'} header={t(`${translationsForReportDPS4552Columns}.regNo`)} />
          <Column field={'regDate;'} header={t(`${translationsForReportDPS4552Columns}.regDate;`)} />
          <Column field={'asmtNo'} header={t(`${translationsForReportDPS4552Columns}.asmtNo`)} />
          <Column field={'astDate'} header={t(`${translationsForReportDPS4552Columns}.astDate`)} />
          <Column field={'rcptNo'} header={t(`${translationsForReportDPS4552Columns}.rcptNo`)} />
          <Column field={'rcptDate'} header={t(`${translationsForReportDPS4552Columns}.rcptDate`)} />
          <Column field={'status'} header={t(`${translationsForReportDPS4552Columns}.status`)} />
          <Column style={{ minWidth: "15rem" }} field={'brokerTin'} header={t(`${translationsForReportDPS4552Columns}.brokerTin`)} />
          <Column style={{ minWidth: "25rem" }} field={'decNam'} header={t(`${translationsForReportDPS4552Columns}.decNam`)} />
          <Column style={{ minWidth: "15rem" }} field={'companyTin'} header={t(`${translationsForReportDPS4552Columns}.companyTin`)} />
          <Column style={{ minWidth: "30rem" }} field={'cmpNam'} header={t(`${translationsForReportDPS4552Columns}.cmpNam`)} />
          <Column field={'fisCod'} header={t(`${translationsForReportDPS4552Columns}.fisCod`)} />
          <Column style={{ minWidth: "30rem" }} field={'finNam'} header={t(`${translationsForReportDPS4552Columns}.finNam`)} />
          <Column field={'itemTotal'} header={t(`${translationsForReportDPS4552Columns}.itemTotal`)} />
          <Column field={'itemNo'} header={t(`${translationsForReportDPS4552Columns}.itemNo`)} />
          <Column field={'hsCode'} header={t(`${translationsForReportDPS4552Columns}.hsCode`)} />
          <Column style={{ minWidth: "30rem" }} field={'dsc'} header={t(`${translationsForReportDPS4552Columns}.dsc`)} />
          <Column style={{ minWidth: "30rem" }} field={'desc1'} header={t(`${translationsForReportDPS4552Columns}.desc1`)} />
          <Column style={{ minWidth: "30rem" }} field={'MRK1'} header={t(`${translationsForReportDPS4552Columns}.MRK1`)} />
          <Column style={{ minWidth: "30rem" }} field={'MRK2'} header={t(`${translationsForReportDPS4552Columns}.MRK2`)} />
          <Column field={'cpc'} header={t(`${translationsForReportDPS4552Columns}.cpc`)} />
          <Column field={'natProc'} header={t(`${translationsForReportDPS4552Columns}.natProc`)} />
          <Column field={'countryOrg'} header={t(`${translationsForReportDPS4552Columns}.countryOrg`)} />
          <Column field={'countryexport'} header={t(`${translationsForReportDPS4552Columns}.countryexport`)} />
          <Column field={'countryDest'} header={t(`${translationsForReportDPS4552Columns}.countryDest`)} />
          <Column field={'lorryTotal'} header={t(`${translationsForReportDPS4552Columns}.lorryTotal`)} />
          <Column field={'declarationValueCurrecy'} header={t(`${translationsForReportDPS4552Columns}.declarationValueCurrecy`)} />
          <Column field={'declarationValueAfs'} header={t(`${translationsForReportDPS4552Columns}.declarationValueAfs`)} />
          <Column field={'declarationTaxes'} header={t(`${translationsForReportDPS4552Columns}.declarationTaxes`)} />
          <Column field={'locGoods'} header={t(`${translationsForReportDPS4552Columns}.locGoods`)} />
          <Column field={'typeoftransport'} header={t(`${translationsForReportDPS4552Columns}.typeoftransport`)} />
          <Column field={'brdCty'} header={t(`${translationsForReportDPS4552Columns}.brdCty`)} />
          <Column field={'brdNam'} header={t(`${translationsForReportDPS4552Columns}.brdNam`)} />
          <Column field={'gcategoryOfGoods1'} header={t(`${translationsForReportDPS4552Columns}.gcategoryOfGoods1`)} />
          <Column field={'gcategoryOfGoods2'} header={t(`${translationsForReportDPS4552Columns}.gcategoryOfGoods2`)} />
          <Column field={'itemGrossWeight'} header={t(`${translationsForReportDPS4552Columns}.itemGrossWeight`)} />
          <Column field={'itemNetWeight'} header={t(`${translationsForReportDPS4552Columns}.itemNetWeight`)} />
          <Column field={'containerFlag'} header={t(`${translationsForReportDPS4552Columns}.containerFlag`)} />
          <Column field={'licCod'} header={t(`${translationsForReportDPS4552Columns}.licCod`)} />
          <Column field={'txtRsv'} header={t(`${translationsForReportDPS4552Columns}.txtRsv`)} />

          <Column field={'customsCode'} header={t(`${translationsForReportDPS4552Columns}.customsCode`)} />
          <Column style={{ minWidth: "15rem" }} field={'bankNam'} header={t(`${translationsForReportDPS4552Columns}.bankNam`)} />
          <Column field={'countryDestCod'} header={t(`${translationsForReportDPS4552Columns}.countryDestCod`)} />
          <Column field={'freeTxt'} header={t(`${translationsForReportDPS4552Columns}.freeTxt`)} />
          <Column field={'dpaCty'} header={t(`${translationsForReportDPS4552Columns}.dpaCty`)} />
          <Column field={'dpaNam'} header={t(`${translationsForReportDPS4552Columns}.dpaNam`)} />





        </DataTable>
      </ Box>
      <Toast ref={toastRef} />
    </SimpleCard>
  );
}

export default DPS_4552