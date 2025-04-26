import { Box, LinearProgress } from '@mui/material';
import axios from 'axios';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { useRef, useState } from 'react';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
import { SimpleCard } from '../../components';
import { ROWS_PER_PAGE } from '../../utils/constant';

function DPS_4553() {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);


  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true);
      const res = await axios.post('/reporting/DpsReport4553', {
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
  }


  return (
    <SimpleCard title="DPS_4553">
      <ReportHeaderInputs
        showStartDate
        showEndDate
        //  ShowTinNumber
        //  showExemptionType
        showCustomsProcedure
        // showHsCode
        showRegDate
        //    showAssesDate
        //   showPayDate
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
          rowsPerPageOptions={[3, 10, 25, 50, 100]}
          paginator
          stripedRows
          showGridlines
          emptyMessage={'No Data Available'}
        >
          <Column
            filter
            filterField="ideTyp_sad"
            field={'ideTyp_sad'}
            header={'Identification SAD Type'}
          />
          <Column field={'tptCuoNam'} header={'Border office'} />
          <Column field={' ideCuoNam'} header={'Customs Office'} />
          <Column field={'itemTotal'} header={'Item_total'} />
          <Column field={'itemNo'} header={'Item_No'} />
          <Column field={'iotalPackage'} header={'Total_Package'} />
          <Column field={'typeOfPackage'} header={'Type_of_Package'} />
          <Column filter filterField="regNo" field={'regNo'} header={'Reg_No'} />
          <Column field={'regDate'} header={'Reg_Date'} />
          <Column field={'astDate'} header={'Assmt_Date'} />
          <Column field={'rcptDate'} header={'RCPT_Date'} />
          <Column filter filterField="status" field={'status'} header={'Status'} />
          <Column field={'cpc'} header={'Customs_Proc'} />
          <Column field={'customs_Proc'} header={'Extended Proc Code '} />
          <Column field={'hsCode'} header={'HSCODE'} />
          <Column style={{ minWidth: '15rem' }} field={'dsc'} header={'Good Description'} />
          <Column style={{ minWidth: '15rem' }} field={'gdsDs3'} header={'Comercial Description'} />
          <Column field={'pckMrk1'} header={'Marks of Packages 1'} />
          <Column field={'pckMrk2'} header={'Marks of Packages 2'} />
          <Column field={'itemGrossWeight'} header={'Item_Gross_Weight'} />
          <Column field={'itemNetWeight'} header={'Item_Net_Weight'} />
          <Column filter filterField="brokerTIN" field={'brokerTIN'} header={'Broker_TIN'} />
          <Column field={'decNam'} header={'Broker_Name'} />
          <Column field={'companyTin'} header={'Company_TIN'} />
          <Column field={'cmpNam'} header={'Company_Name'} />
          <Column field={'finNam'} header={'Individual_Name'} />
          <Column field={'countryOrg'} header={'Country_Orgin'} />
          <Column field={'countryDest'} header={'Contry_Destination'} />
          <Column
            filter
            filterField="countryExport"
            field={'countryExport'}
            header={'Country_Export'}
          />
          <Column field={'lorryTotal'} header={'Total_Lorry'} />
          <Column field={'currencyRate'} header={'Currency_Rate'} />
          <Column field={'declarationValue_currency'} header={'Declaration_Value in Foriegn Currency'} />
          <Column field={'declarationValue_Afs'} header={'Declaration_Value_Afs'} />
          <Column field={'declarationTaxes'} header={'Declaration_Taxes'} />
          <Column field={'itemValueCurrency'} header={'Item_Value_currency'} />
          <Column field={'itemValue_Afs'} header={'Item_Value_Afs'} />
          <Column field={'itemTaxes'} header={'Item_Taxes_Amount'} />

          <Column field={'ideCuoCod'} header={'IDE Custom Code'} />

          <Column field={'codeOfPackage'} header={'Package Code'} />

          <Column field={'asmtNo'} header={'Assmt_No'} />

          <Column field={'rcptNo'} header={'RCPT No'} />


          <Column filter filterField="bankNam" field={'bankNam'} header={'Bank Name'} />

          <Column field={'finCod'} header={'SAD_Financial_Code'} />

          <Column field={'currencyCode'} header={'Currency Code'} />

          <Column field={'totalTaxes'} header={'Total Taxes '} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
}

export default DPS_4553;
