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
const translationsForReportTransit4273: string = "reports.transit_4273"
const translationsForReportTransit4273Columns: string = "reports.transit_4273.columns"

const Transit_4273 = () => {
  const [reportData, setReportData] = useState([]);
  const tableRef: any = useRef(null);
  const { t } = useTranslation();

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
    <SimpleCard title={t(`${translationsForReportTransit4273}.title`)}>
      <ReportHeaderInputs 
      showStartDate 
      showEndDate
       onSearch={handleSubmit} 
       tabelRef={tableRef} />
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
          <Column field={'IDENTIFIED_DATE_TIME'} header={t(`${translationsForReportTransit4273Columns}.IDENTIFIED_DATE_TIME`)} />
          <Column field={'EXPORTED_TO_XML_DATE_TIME'} header={t(`${translationsForReportTransit4273Columns}.EXPORTED_TO_XML_DATE_TIME`)} />
          <Column field={'IMPORTED_FROM_XML_DATE_TIME'} header={t(`${translationsForReportTransit4273Columns}.IMPORTED_FROM_XML_DATE_TIME`)} />
          <Column field={'DOCUMENT_ID'} header={t(`${translationsForReportTransit4273Columns}.DOCUMENT_ID`)} />
          <Column field={'REF_NO'} header={t(`${translationsForReportTransit4273Columns}.REF_NO`)} />
          <Column field={'TOTAL_NUMBER_OF_PACKAGES'} header={t(`${translationsForReportTransit4273Columns}.TOTAL_NUMBER_OF_PACKAGES`)} />
          <Column field={'COUNTRY_OF_DESTINATION'} header={t(`${translationsForReportTransit4273Columns}.COUNTRY_OF_DESTINATION`)} />
          <Column field={'COUNTRY_OF_ORIGIN'} header={t(`${translationsForReportTransit4273Columns}.COUNTRY_OF_ORIGIN`)} />
          <Column field={'DATE_OF_DECLARATION'} header={t(`${translationsForReportTransit4273Columns}.DATE_OF_DECLARATION`)} />
          <Column field={'TYPE_OF_TRANSIT'} header={t(`${translationsForReportTransit4273Columns}.TYPE_OF_TRANSIT`)} />
          <Column field={'CONTAINER_FLAG'} header={t(`${translationsForReportTransit4273Columns}.CONTAINER_FLAG`)} />
          <Column field={'TRANSPORT_MODE_AT_BORDER'} header={t(`${translationsForReportTransit4273Columns}.TRANSPORT_MODE_AT_BORDER`)} />
          <Column field={'TIN_DECLARANT'} header={t(`${translationsForReportTransit4273Columns}.TIN_DECLARANT`)} />
          <Column field={'TIN_CONSIGNEE'} header={t(`${translationsForReportTransit4273Columns}.TIN_CONSIGNEE`)} />
          <Column field={'TIN_FIN'} header={t(`${translationsForReportTransit4273Columns}.TIN_FIN`)} />
          <Column field={'IDENTITY_ATDEPARTURE'} header={t(`${translationsForReportTransit4273Columns}.IDENTITY_ATDEPARTURE`)} />
          <Column field={'IDENTITY_CROSSINGBORDER'} header={t(`${translationsForReportTransit4273Columns}.IDENTITY_CROSSINGBORDER`)} />
          <Column field={'CUO_PLACEOFPRESENTATION'} header={t(`${translationsForReportTransit4273Columns}.CUO_PLACEOFPRESENTATION`)} />
          <Column field={'CUO_OFFICEOFDESTINATION'} header={t(`${translationsForReportTransit4273Columns}.CUO_OFFICEOFDESTINATION`)} />
          <Column field={'FINANCIAL_VALUE'} header={t(`${translationsForReportTransit4273Columns}.FINANCIAL_VALUE`)} />
          <Column field={'CURRENCY'} header={t(`${translationsForReportTransit4273Columns}.CURRENCY`)} />
          <Column field={'ITEM_NUMBER'} header={t(`${translationsForReportTransit4273Columns}.ITEM_NUMBER`)} />
          <Column field={'COMBINED_NOMENCLATURE'} header={t(`${translationsForReportTransit4273Columns}.COMBINED_NOMENCLATURE`)} />
          <Column field={'GOODS_DESCRIPTION'} header={t(`${translationsForReportTransit4273Columns}.GOODS_DESCRIPTION`)} />
          <Column field={'GROSS_MASS'} header={t(`${translationsForReportTransit4273Columns}.GROSS_MASS`)} />
          <Column field={'SSD_MRN'} header={t(`${translationsForReportTransit4273Columns}.SSD_MRN`)} />
          <Column field={'SSD_REG_DAT'} header={t(`${translationsForReportTransit4273Columns}.SSD_REG_DAT`)} />
          <Column field={'SSD_DEL_DAT'} header={t(`${translationsForReportTransit4273Columns}.SSD_DEL_DAT`)} />
          <Column field={'SSD_ARR_DAT'} header={t(`${translationsForReportTransit4273Columns}.SSD_ARR_DAT`)} />
          <Column field={'SSD_RET_DAT'} header={t(`${translationsForReportTransit4273Columns}.SSD_RET_DAT`)} />
          <Column field={'SSD_STA'} header={t(`${translationsForReportTransit4273Columns}.SSD_STA`)} />
          <Column field={'SSD_FLG'} header={t(`${translationsForReportTransit4273Columns}.SSD_FLG`)} />
          <Column field={'LAST_CONF_DEP_DATE_TIME'} header={t(`${translationsForReportTransit4273Columns}.LAST_CONF_DEP_DATE_TIME`)} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
};

export default Transit_4273;
