import { SimpleCard } from '../../components';
import { Box, styled, LinearProgress } from '@mui/material';
import React, { useEffect, useState, useRef } from 'react';
import { ROWS_PER_PAGE } from '../../utils/constant';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';

const Transit_4273 = () => {
  const [reportData, setReportData] = useState([]);
  const tableRef: any = useRef(null);

  const handleSubmit = async (data: SearchData) => {
    try {
      const res = await axios.post('/reporting/TransitReport4273', {
        type: data.customsProcedure,
        customsCode: data.CustomsCode,
        ...data
      });
      console.log(res);
      if (res.data.length === 0) {
        setReportData([]);
      } else {
        setReportData(res.data);
      }
    } catch (error) {}
  };

  return (
    <SimpleCard title="4273- Transit">
      <ReportHeaderInputs showStartDate showEndDate onSearch={handleSubmit} tabelRef={tableRef} />
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
          <Column field={'IDENTIFIED_DATE_TIME'} header={'IDENTIFIED_DATE_TIME'} />
          <Column field={'EXPORTED_TO_XML_DATE_TIME'} header={'EXPORTED_TO_XML_DATE_TIME'} />
          <Column field={'IMPORTED_FROM_XML_DATE_TIME'} header={'IMPORTED_FROM_XML_DATE_TIME'} />
          <Column field={'DOCUMENT_ID'} header={'DOCUMENT_ID'} />
          <Column field={'REF_NO'} header={'REF_NO'} />
          <Column field={'TOTAL_NUMBER_OF_PACKAGES'} header={'TOTAL_NUMBER_OF_PACKAGES'} />
          <Column field={'COUNTRY_OF_DESTINATION'} header={'COUNTRY_OF_DESTINATION'} />
          <Column field={'COUNTRY_OF_ORIGIN'} header={'COUNTRY_OF_ORIGIN'} />
          <Column field={'DATE_OF_DECLARATION'} header={'DATE_OF_DECLARATION'} />
          <Column field={'TYPE_OF_TRANSIT'} header={'TYPE_OF_TRANSIT'} />
          <Column field={'CONTAINER_FLAG'} header={'CONTAINER_FLAG'} />
          <Column field={'TRANSPORT_MODE_AT_BORDER'} header={'TRANSPORT_MODE_AT_BORDER'} />
          <Column field={'TIN_DECLARANT'} header={'TIN_DECLARANT'} />
          <Column field={'TIN_CONSIGNEE'} header={'TIN_CONSIGNEE'} />
          <Column field={'TIN_FIN'} header={'TIN_FIN'} />
          <Column field={'IDENTITY_ATDEPARTURE'} header={'IDENTITY_ATDEPARTURE'} />
          <Column field={'IDENTITY_CROSSINGBORDER'} header={'IDENTITY_CROSSINGBORDER'} />
          <Column field={'CUO_PLACEOFPRESENTATION'} header={'CUO_PLACEOFPRESENTATION'} />
          <Column field={'CUO_OFFICEOFDESTINATION'} header={'CUO_OFFICEOFDESTINATION'} />
          <Column field={'FINANCIAL_VALUE'} header={'FINANCIAL_VALUE'} />
          <Column field={'CURRENCY'} header={'CURRENCY'} />
          <Column field={'ITEM_NUMBER'} header={'ITEM_NUMBER'} />
          <Column field={'COMBINED_NOMENCLATURE'} header={'COMBINED_NOMENCLATURE'} />
          <Column field={'GOODS_DESCRIPTION'} header={'GOODS_DESCRIPTION'} />
          <Column field={'GROSS_MASS'} header={'GROSS_MASS'} />
          <Column field={'SSD_MRN'} header={'SSD_MRN'} />
          <Column field={'SSD_REG_DAT'} header={'SSD_REG_DAT'} />
          <Column field={'SSD_DEL_DAT'} header={'SSD_DEL_DAT'} />
          <Column field={'SSD_ARR_DAT'} header={'SSD_ARR_DAT'} />
          <Column field={'SSD_RET_DAT'} header={'SSD_RET_DAT'} />
          <Column field={'SSD_STA'} header={'SSD_STA'} />
          <Column field={'SSD_FLG'} header={'SSD_FLG'} />
          <Column field={'LAST_CONF_DEP_DATE_TIME'} header={'LAST_CONF_DEP_DATE_TIME'} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
};

export default Transit_4273;
