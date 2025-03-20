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
  const tableRef: any = useRef(null);
  const [loading, setLoading] = useState(false)


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
    }}


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
              <Column field={'tptCuoNam'} header={'Border Cusutom Name'} />
              <Column field={' ideCuoNam'} header={'IDE Custom Name'} />
              <Column field={'ideCuoCod'} header={'IDE Custom Code'} />
              <Column field={'itemTotal'} header={'Totao Item'} />
              <Column field={'itemNo'} header={'Item No'} />
              <Column field={'iotalPackage'} header={'Total Package'} />
              <Column field={'codeOfPackage'} header={'Package Code'} />
              <Column field={'typeOfPackage'} header={'Package Type'} />
              <Column filter filterField="regNo" field={'regNo'} header={'Register No'} />
              <Column field={'regDate'} header={'Register Date'} />
              <Column field={'asmtNo'} header={'Assmt No'} />
              <Column field={'astDate'} header={'Assmt Date'} />
              <Column field={'rcptNo'} header={'RCPT No'} />
              <Column filter filterField="status" field={'status'} header={'status'} />
              <Column field={'rcptDate'} header={'RCPT Date'} />
              <Column filter filterField="bankNam" field={'bankNam'} header={'Bank Name'} />
              <Column field={'hsCode'} header={'HS Code'} />
              <Column field={'cpc'} header={'CPC'} />
              <Column style={{ minWidth: '15rem' }} field={'dsc'} header={'DSC'} />
              <Column style={{ minWidth: '15rem' }} field={'gdsDs3'} header={'GDS DS3'} />
              <Column field={'pckMrk1'} header={'Packing Marks1'} />
              <Column field={'pckMrk2'} header={'Packing Marks2'} />
              <Column field={'customs_Proc'} header={'Custom Procedure '} />
              <Column field={'itemGrossWeight'} header={'Item_Gross_Weight'} />
              <Column field={'itemNetWeight'} header={'Item_Net_Weight'} />
              <Column filter filterField="brokerTIN" field={'brokerTIN'} header={'Broker TIN'} />
              <Column field={'decNam'} header={'DEC Name'} />
              <Column field={'companyTin'} header={'Company TIN'} />
              <Column field={'cmpNam'} header={'Company Name'} />
              <Column field={'finNam'} header={'SAD_Financial_Name'} />
              <Column field={'finCod'} header={'SAD_Financial_Code'} />
              <Column field={'countryDest'} header={'Destination Country'} />
              <Column
                filter
                filterField="countryExport"
                field={'countryExport'}
                header={'country Export'}
              />
              <Column field={'countryOrg'} header={'country Oregin'} />
              <Column field={'lorryTotal'} header={'Total Lorry'} />
              <Column field={'currencyCode'} header={'Currency Code'} />
              <Column field={'currencyRate'} header={'Currency Rate'} />
              <Column field={'declarationValue_currency'} header={'declarationValue currency'} />
              <Column field={'declarationValue_Afs'} header={'declarationValue Afs'} />
              <Column field={'declarationTaxes'} header={'declaration Taxes'} />
              <Column field={'itemValueCurrency'} header={'Item Value Currency'} />
              <Column field={'itemValue_Afs'} header={'ItemValue Afs'} />
              <Column field={'itemTaxes'} header={'Item Taxes'} />
              <Column field={'totalTaxes'} header={'Total Taxes '} />
            </DataTable>
        </Box>
      </SimpleCard>
  );
}

export default DPS_4553;
