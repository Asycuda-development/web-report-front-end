import { SimpleCard } from '../../components';
import { Box, styled, LinearProgress } from '@mui/material';
import React, { useEffect, useState, useRef } from 'react';
import { ROWS_PER_PAGE } from '../../utils/constant';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
import { useTranslation } from 'react-i18next';

const translationsForBasedOnError: string = "errors"
const translationsForBasedOn: string = "basedOn"
const translationsForReportDPS4551: string = "reports.dps_4551"
const translationsForReportDPS4551Columns: string = "reports.dps_4551.columns"

function DPS_4551() {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false);
  const tableRef: any = useRef(null);
  const { t } = useTranslation();

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true);
      const res = await axios.post('/reporting/DpsReport4551', {
        ...data,
        type: data.customsProcedure,
        customsCode: data.CustomsCode
      });
      if (res.data.length === 0) {
        setLoading(false)
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


  return (
    <SimpleCard title={t(`${translationsForReportDPS4551}.title`)}>
      <ReportHeaderInputs
        report='DPS_4551'
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
        showCustomsList
        onSearch={handleSubmit}
        tabelRef={tableRef}
      />
      {loading && (
        <LinearProgress />
      )}
      <Box width="100%" overflow="auto">
        <DataTable
          exportFilename={`DPS_4551 ${new Date().toISOString()}`}
          ref={tableRef}
          value={reportData}
          rows={ROWS_PER_PAGE}
          rowsPerPageOptions={[5, 10, 25, 50, 100]}
          paginator
          stripedRows
          showGridlines
          emptyMessage={'No Data Available'}
        >
          <Column filter filterField="ideTypSad" field={'ideTypSad'} header={t(`${translationsForReportDPS4551Columns}.ideTypSad`)} />
          <Column field={'tptCuoNam'} header={t(`${translationsForReportDPS4551Columns}.tptCuoNam`)} />
          <Column filter filterField="ideCuoNam" field={'ideCuoNam'} header={t(`${translationsForReportDPS4551Columns}.ideCuoNam`)} />
          <Column field={'regNo'} header={t(`${translationsForReportDPS4551Columns}.regNo`)} />
          <Column
            filter
            filterField="regDate"
            field={'regDate'}
            header={t(`${translationsForReportDPS4551Columns}.regDate`)}
          />
          <Column field={'rcptNo'} header={t(`${translationsForReportDPS4551Columns}.rcptNo`)} />
          <Column field={'rcptDate'} header={t(`${translationsForReportDPS4551Columns}.rcptDate`)} />
          <Column field={'status'} header={t(`${translationsForReportDPS4551Columns}.status`)} />
          <Column style={{ minWidth: '20rem' }} field={'cpc'} header={t(`${translationsForReportDPS4551Columns}.cpc`)} />
          <Column field={'customsProc'} header={t(`${translationsForReportDPS4551Columns}.customsProc`)} />
          <Column field={'brokerTin'} header={t(`${translationsForReportDPS4551Columns}.brokerTin`)} />
          <Column field={'decNam'} header={t(`${translationsForReportDPS4551Columns}.decNam`)} />
          <Column
            filter
            filterField="companyTin"
            style={{ minWidth: '12rem' }}
            field={'companyTin'}
            header={t(`${translationsForReportDPS4551Columns}.companyTin`)}
          />
          <Column filter filterField="cmpNam" field={'cmpNam'} header={t(`${translationsForReportDPS4551Columns}.cmpNam`)} />
          <Column field={'fisCod'} header={t(`${translationsForReportDPS4551Columns}.fisCod`)} />
          <Column field={'finNam'} header={t(`${translationsForReportDPS4551Columns}.finNam`)} />
          <Column field={'countryOrg'} header={t(`${translationsForReportDPS4551Columns}.countryOrg`)} />
          <Column
            filter
            filterField="countryExport"
            field={'countryExport'}
            header={t(`${translationsForReportDPS4551Columns}.countryExport`)}
          />
          <Column field={'countryDest'} header={t(`${translationsForReportDPS4551Columns}.countryDest`)} />
          <Column field={'lorryTotal'} header={t(`${translationsForReportDPS4551Columns}.lorryTotal`)} />
          <Column field={'currencyRate'} header={t(`${translationsForReportDPS4551Columns}.currencyRate`)} />
          <Column field={'declarationValueCurrency'} header={t(`${translationsForReportDPS4551Columns}.declarationValueCurrency`)} />
          <Column field={'declarationValueAfs'} header={t(`${translationsForReportDPS4551Columns}.declarationValueAfs`)} />
          <Column field={'declarationTaxes'} header={t(`${translationsForReportDPS4551Columns}.declarationTaxes`)} />
          <Column field={'itemValueCurrency'} header={t(`${translationsForReportDPS4551Columns}.itemValueCurrency`)} />
          <Column field={'itemValueAfs'} header={t(`${translationsForReportDPS4551Columns}.itemValueAfs`)} />
          <Column field={'itemTaxes'} header={t(`${translationsForReportDPS4551Columns}.itemTaxes`)} />
          <Column field={'itemTotal'} header={t(`${translationsForReportDPS4551Columns}.itemTotal`)} />
          <Column field={'itemNo'} header={t(`${translationsForReportDPS4551Columns}.itemNo`)} />
          <Column field={'totalPackage'} header={t(`${translationsForReportDPS4551Columns}.totalPackage`)} />
          <Column
            filter
            filterField="typeOfPackage"
            field={'typeOfPackage'}
            header={t(`${translationsForReportDPS4551Columns}.typeOfPackage`)}
          />
          <Column
            filter
            filterField="itemGrossWeight"
            field={'itemGrossWeight'}
            header={t(`${translationsForReportDPS4551Columns}.itemGrossWeight`)}
          />
          <Column field={'itemNetWeight'} header={t(`${translationsForReportDPS4551Columns}.itemNetWeight`)} />
          <Column style={{ minWidth: '14rem' }} field={'hsCode'} header={t(`${translationsForReportDPS4551Columns}.hsCode`)} />
          <Column field={'pckMrk1Second'} header={t(`${translationsForReportDPS4551Columns}.pckMrk1Second`)} />
          <Column field={'pckMrk2Second'} header={t(`${translationsForReportDPS4551Columns}.pckMrk2Second`)} />
          <Column field={'pckMrk1First'} header={t(`${translationsForReportDPS4551Columns}.pckMrk1First`)} />
          <Column field={'pckMrk2First'} header={t(`${translationsForReportDPS4551Columns}.pckMrk2First`)} />
          <Column field={'typeofTransport'} header={t(`${translationsForReportDPS4551Columns}.typeofTransport`)} />
          <Column field={'locGoods'} header={t(`${translationsForReportDPS4551Columns}.locGoods`)} />
          <Column field={'licCod'} header={t(`${translationsForReportDPS4551Columns}.licCod`)} />
          <Column field={'txtFre'} header={t(`${translationsForReportDPS4551Columns}.txtFre`)} />
          <Column field={'tarVmtFirst'} header={t(`${translationsForReportDPS4551Columns}.tarVmtFirst`)} />
          <Column field={'tarAtt'} header={t(`${translationsForReportDPS4551Columns}.tarAtt`)} />
          <Column field={'tarVdt'} header={t(`${translationsForReportDPS4551Columns}.tarVdt`)} />
          <Column field={'ideCuoCod'} header={t(`${translationsForReportDPS4551Columns}.ideCuoCod`)} />
          <Column field={'codeOfPackage'} header={t(`${translationsForReportDPS4551Columns}.codeOfPackage`)} />
          <Column field={'bankNam'} header={t(`${translationsForReportDPS4551Columns}.bankNam`)} />
          <Column style={{ minWidth: '14rem' }} field={'hs5'} header={t(`${translationsForReportDPS4551Columns}.hs5`)} />
          <Column style={{ minWidth: '12rem' }} field={'dsc'} header={t(`${translationsForReportDPS4551Columns}.dsc`)} />
          <Column field={'gdsDs3'} header={t(`${translationsForReportDPS4551Columns}.gdsDs3`)} />
          <Column field={'countryDestCod'} header={t(`${translationsForReportDPS4551Columns}.countryDestCod`)} />
          <Column field={'currencyCode'} header={t(`${translationsForReportDPS4551Columns}.currencyCode`)} />
          <Column field={'itemCifValue'} header={t(`${translationsForReportDPS4551Columns}.itemCifValue`)} />
          <Column field={'licCodItem'} header={t(`${translationsForReportDPS4551Columns}.licCodItem`)} />
          <Column style={{ minWidth: '12rem' }} field={'txtFreItem'} header={t(`${translationsForReportDPS4551Columns}.txtFreItem`)} />
          <Column
            filter
            filterField="gCategoryOfGoods1"
            field={'gCategoryOfGoods1'}
            header={t(`${translationsForReportDPS4551Columns}.gCategoryOfGoods1`)}
          />
          <Column field={'gCategoryOfGoods2'} header={t(`${translationsForReportDPS4551Columns}.gCategoryOfGoods2`)} />
          <Column
            filter
            filterField="tarVmtSecond"
            field={'tarVmtSecond'}
            header={t(`${translationsForReportDPS4551Columns}.tarVmtSecond`)}
          />


        </DataTable>
      </ Box>
    </SimpleCard>
  );
}

export default DPS_4551;