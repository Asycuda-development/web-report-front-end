import { SimpleCard } from '../../components';
import { Box, styled, LinearProgress } from '@mui/material';
import React, { useEffect, useState, useRef } from 'react';
import { ROWS_PER_PAGE } from '../../utils/constant';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';

function DPS_4551() {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false);
  const tableRef: any = useRef(null);

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
    <SimpleCard title="DPS_4551">
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
          <Column filter filterField="ideTypSad" field={'ideTypSad'} header={'IDE Type SAD'} />
          <Column field={'tptCuoNam'} header={'Border office'} />
          <Column filter filterField="ideCuoNam" field={'ideCuoNam'} header={'Customs Office'} />
          <Column field={'regNo'} header={'Reg_No'} />
          <Column
            filter
            filterField="regDate"
            field={'regDate'}
            header={'Reg_Date'}
          />
          <Column field={'rcptNo'} header={'RCPT_No'} />
          <Column field={'rcptDate'} header={'RCPT_Date'} />
          <Column field={'status'} header={'Status'} />
          <Column style={{ minWidth: '20rem' }} field={'cpc'} header={'Customs_Proc'} />
          <Column field={'customsProc'} header={'Extended Proc Code'} />
          <Column field={'brokerTin'} header={'Broker_Tin'} />
          <Column field={'decNam'} header={'Broker_Name'} />
          <Column
            filter
            filterField="companyTin"
            style={{ minWidth: '12rem' }}
            field={'companyTin'}
            header={'Company_Tin'}
          />
          <Column filter filterField="cmpNam" field={'cmpNam'} header={'Company_Name'} />
          <Column field={'fisCod'} header={'SAD_Financial_Code'} />
          <Column field={'finNam'} header={'SAD_Financial_Name'} />
          <Column field={'countryOrg'} header={'Country_Org_Name'} />
          <Column
            filter
            filterField="countryExport"
            field={'countryExport'}
            header={'Country_Export_Name'}
          />
          <Column field={'countryDest'} header={'Country_Dest_Name'} />
          <Column field={'lorryTotal'} header={'Lorry_Total'} />
          <Column field={'currencyRate'} header={'Currency_Rate'} />
          <Column field={'declarationValueCurrency'} header={'Declaration_Value in Foriegn Currency'} />
          <Column field={'declarationValueAfs'} header={'Declaration_Value_Afs'} />
          <Column field={'declarationTaxes'} header={'Declaration_Taxes'} />
          <Column field={'itemValueCurrency'} header={'Item_Value_Currency'} />
          <Column field={'itemValueAfs'} header={'Item_Value_Afs'} />
          <Column field={'itemTaxes'} header={'Item_Taxes'} />
          <Column field={'itemTotal'} header={'Total_Item'} />
          <Column field={'itemNo'} header={'Item_No'} />
          <Column field={'totalPackage'} header={'Total_Package'} />
          <Column
            filter
            filterField="typeOfPackage"
            field={'typeOfPackage'}
            header={'Type Of Package'}
          />
          <Column
            filter
            filterField="itemGrossWeight"
            field={'itemGrossWeight'}
            header={'Item_Gross_Weight'}
          />
          <Column field={'itemNetWeight'} header={'Item_Net_Weight'} />
          <Column style={{ minWidth: '14rem' }} field={'hsCode'} header={'Hs_Code'} />
          <Column field={'pckMrk1Second'} header={'Good Description'} />
          <Column field={'pckMrk2Second'} header={'Comercial Description'} />
          <Column field={'pckMrk1First'} header={'Marks of Packages 1'} />
          <Column field={'pckMrk2First'} header={'Marks of Packages 2'} />
          <Column field={'typeofTransport'} header={'Type Of Transport'} />
          <Column field={'locGoods'} header={'Location_Of_Goods'} />
          <Column field={'licCod'} header={'lic_Cod'} />
          <Column field={'txtFre'} header={'txt_Fre'} />
          <Column field={'tarVmtFirst'} header={'Tar_Vmt'} />
          <Column field={'tarAtt'} header={'Tar_ATT'} />
          <Column field={'tarVdt'} header={'Tar_VDT'} />
          <Column field={'ideCuoCod'} header={'IDE Cuo Code'} />
          <Column field={'codeOfPackage'} header={'Code Of Package'} />
          <Column field={'bankNam'} header={'Bank Name'} />
          <Column style={{ minWidth: '14rem' }} field={'hs5'} header={'Hs5'} />
          <Column style={{ minWidth: '12rem' }} field={'dsc'} header={'Goods Category'} />
          <Column field={'gdsDs3'} header={'Goods Category3'} />
          <Column field={'countryDestCod'} header={'Destination Country Code'} />
          <Column field={'currencyCode'} header={'Currency Code'} />
          <Column field={'itemCifValue'} header={'Item Cif Value'} />
          <Column field={'licCodItem'} header={'Lic Cod Item'} />
          <Column style={{ minWidth: '12rem' }} field={'txtFreItem'} header={'Txt Fre Item'} />
          <Column
            filter
            filterField="gCategoryOfGoods1"
            field={'gCategoryOfGoods1'}
            header={'gcategory 2'}
          />
          <Column field={'gCategoryOfGoods2'} header={'gcategory 1'} />
          <Column
            filter
            filterField="tarVmtSecond"
            field={'tarVmtSecond'}
            header={'Tar VTM Second'}
          />


        </DataTable>
      </ Box>
    </SimpleCard>
  );
}

export default DPS_4551;