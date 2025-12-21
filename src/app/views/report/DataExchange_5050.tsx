import { SimpleCard } from '../../components';
import { Box, styled, LinearProgress } from '@mui/material';
import { useEffect, useState, useRef } from 'react';
import { ROWS_PER_PAGE } from '../../utils/constant';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
import { useTranslation } from 'react-i18next';

const translationsForBasedOnError: string = "errors"
const translationsForBasedOn: string = "basedOn"
const translationsForReportDataExchange5050: string = "reports.dataexchange_5050"
const translationsForReportDataExchange5050Columns: string = "reports.dataexchange_5050.columns"

function DataExchange_5050() {
  const [reportData, setReportData] = useState([]);
  const tableRef: any = useRef(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true);
      const res = await axios.post('/reporting/DataExchangeReport5050', {
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

  return (
    <SimpleCard title={t(`${translationsForReportDataExchange5050}.title`)}>
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
        >
          <Column
            field={'DOCUID                           '}
            header={t(`${translationsForReportDataExchange5050Columns}.DOCUID                           `)}
          />
          <Column
            field={'IMPORTED_FROM_XML_DATE_TIME'}
            header={t(`${translationsForReportDataExchange5050Columns}.IMPORTED_FROM_XML_DATE_TIME`)}
          />
          <Column
            field={'CODEOFDECLAREDCUSTOMSPROCEDURE'}
            header={t(`${translationsForReportDataExchange5050Columns}.CODEOFDECLAREDCUSTOMSPROCEDURE`)}
          />
          <Column field={'UCR'} header={t(`${translationsForReportDataExchange5050Columns}.UCR`)} />
          <Column field={'COUNTRYOFDESTINATIONCODE'} header={t(`${translationsForReportDataExchange5050Columns}.COUNTRYOFDESTINATIONCODE`)} />
          <Column
            field={'COUNTRYOFDISPATCHEXPORTCODE'}
            header={t(`${translationsForReportDataExchange5050Columns}.COUNTRYOFDISPATCHEXPORTCODE`)}
          />
          <Column field={'date1'} header={t(`${translationsForReportDataExchange5050Columns}.date1`)} />
          <Column field={'CONSIGNEE_NAME'} header={t(`${translationsForReportDataExchange5050Columns}.CONSIGNEE_NAME`)} />
          <Column field={'CONSIGNEE_CODE'} header={t(`${translationsForReportDataExchange5050Columns}.CONSIGNEE_CODE`)} />
          <Column field={'TOTALPACKAGES'} header={t(`${translationsForReportDataExchange5050Columns}.TOTALPACKAGES`)} />
          <Column field={'TOTALINVOICEAMOUNT'} header={t(`${translationsForReportDataExchange5050Columns}.TOTALINVOICEAMOUNT`)} />
          <Column field={'STATISTICALVALUEINUSD'} header={t(`${translationsForReportDataExchange5050Columns}.STATISTICALVALUEINUSD`)} />
          <Column field={'ITEMNUMBER'} header={t(`${translationsForReportDataExchange5050Columns}.ITEMNUMBER`)} />
          <Column field={'DESCRIPTIONOFGOODS'} header={t(`${translationsForReportDataExchange5050Columns}.DESCRIPTIONOFGOODS`)} />
          <Column field={'TARRIFNUMBER'} header={t(`${translationsForReportDataExchange5050Columns}.TARRIFNUMBER`)} />
          <Column field={'GROSSMASS'} header={t(`${translationsForReportDataExchange5050Columns}.GROSSMASS`)} />
          <Column field={'NUMBEROFPACKAGES'} header={t(`${translationsForReportDataExchange5050Columns}.NUMBEROFPACKAGES`)} />
          <Column field={'PACKAGETYPECODE'} header={t(`${translationsForReportDataExchange5050Columns}.PACKAGETYPECODE`)} />
          <Column field={'INVOICEAMOUNT'} header={t(`${translationsForReportDataExchange5050Columns}.INVOICEAMOUNT`)} />
          <Column field={'CODEOFTHEVEHICBORDER'} header={t(`${translationsForReportDataExchange5050Columns}.CODEOFTHEVEHICBORDER`)} />
          <Column field={'WEIGHT'} header={t(`${translationsForReportDataExchange5050Columns}.WEIGHT`)} />
          <Column field={'CARGOCODE'} header={t(`${translationsForReportDataExchange5050Columns}.CARGOCODE`)} />
          <Column field={'CONTAINERNUMBER'} header={t(`${translationsForReportDataExchange5050Columns}.CONTAINERNUMBER`)} />
          <Column field={'GROSSWEIGHT'} header={t(`${translationsForReportDataExchange5050Columns}.GROSSWEIGHT`)} />
          <Column field={'DESCRIPTION'} header={t(`${translationsForReportDataExchange5050Columns}.DESCRIPTION`)} />
          <Column field={'STATUSCODE'} header={t(`${translationsForReportDataExchange5050Columns}.STATUSCODE`)} />
          <Column field={'customs_name'} header={t(`${translationsForReportDataExchange5050Columns}.customs_name`)} />
          <Column field={'CUSTOMS_NAME_AFG'} header={t(`${translationsForReportDataExchange5050Columns}.CUSTOMS_NAME_AFG`)} />
          <Column field={'BORDERCODE'} header={t(`${translationsForReportDataExchange5050Columns}.BORDERCODE`)} />
          <Column field={'PLACEOFINITIALARRIVAL'} header={t(`${translationsForReportDataExchange5050Columns}.PLACEOFINITIALARRIVAL`)} />
          <Column field={'PLACEOFLOADING'} header={t(`${translationsForReportDataExchange5050Columns}.PLACEOFLOADING`)} />
          <Column field={'PLACEOFDISCHARGE'} header={t(`${translationsForReportDataExchange5050Columns}.PLACEOFDISCHARGE`)} />
          <Column field={'PLACEOFDISTINATION'} header={t(`${translationsForReportDataExchange5050Columns}.PLACEOFDISTINATION`)} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
}

export default DataExchange_5050;
