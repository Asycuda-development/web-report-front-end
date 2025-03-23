import { Box, LinearProgress } from '@mui/material';
import axios from 'axios';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { useRef, useState } from 'react';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
import { SimpleCard } from '../../components';
import { ROWS_PER_PAGE } from '../../utils/constant';

function DPS_4579() {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false);
  const tableRef: any = useRef(null);

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true);
      const res = await axios.post('/reporting/DpsReport4579', {
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

  return (
    <SimpleCard title="DPS_4579">
      <ReportHeaderInputs
        showStartDate
        showEndDate
        showDeclarationDate
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
<Column field={'IDENTIFIED_DATE_TIME'} header={'IDENTIFIED_DATE_TIME'}/>
<Column field={'EXPORTED_TO_XML_DATE_TIME'} header={'EXPORTED_TO_XML_DATE_TIME'}/>
<Column field={'IMPORTED_FROM_XML_DATE_TIME'} header={'IMPORTED_FROM_XML_DATE_TIME'}/>
<Column field={'DOCUMENT_ID'} header={'DOCUMENT_ID'}/>
<Column field={'REF_NO'} header={'REF_NO'}/>
<Column field={'TOTAL_NUMBER_OF_PACKAGES'} header={'TOTAL_NUMBER_OF_PACKAGES'}/>
<Column field={'COUNTRY_OF_DESTINATION'} header={'COUNTRY_OF_DESTINATION'}/>
<Column field={'COUNTRY_OF_ORIGIN'} header={'COUNTRY_OF_ORIGIN'}/>
<Column field={'DATE_OF_DECLARATION'} header={'DATE_OF_DECLARATION'}/>
<Column field={'TYPE_OF_DECLARATION'} header={'TYPE_OF_DECLARATION'}/>
<Column field={'CONTAINER_FLAG'} header={'CONTAINER_FLAG'}/>
<Column field={'TRANSPORT_MODE_AT_BORDER'} header={'TRANSPORT_MODE_AT_BORDER'}/>
<Column field={'TIN_DECLARANT'} header={'TIN_DECLARANT'}/>
<Column field={'TIN_CONSIGNEE'} header={'TIN_CONSIGNEE'}/>
<Column field={'TIN_FIN'} header={'TIN_FIN'}/>
<Column field={'IDENTITY_ATDEPARTURE'} header={'IDENTITY_ATDEPARTURE'}/>
<Column field={'IDENTITY_CROSSINGBORDER'} header={'IDENTITY_CROSSINGBORDER'}/>
<Column field={'cuo_officeofexport'} header={'cuo_officeofexport'}/>
<Column field={'cuo_officeofexit'} header={'cuo_officeofexit'}/>
<Column field={'FINANCIAL_VALUE'} header={'FINANCIAL_VALUE'}/>
<Column field={'CURRENCY'} header={'CURRENCY'}/>
<Column field={'ITEM_NUMBER'} header={'ITEM_NUMBER'}/>
<Column field={'COMBINED_NOMENCLATURE'} header={'COMBINED_NOMENCLATURE'}/>
<Column field={'GOODS_DESCRIPTION'} header={'GOODS_DESCRIPTION'}/>
<Column field={'GROSS_MASS'} header={'GROSS_MASS'}/>
        </DataTable>
      </ Box>
    </SimpleCard>
  );
}

export default DPS_4579