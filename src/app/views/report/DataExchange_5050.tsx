import { SimpleCard } from '../../components';
import { Box, styled, LinearProgress } from '@mui/material';
import { useEffect, useState, useRef } from 'react';
import { ROWS_PER_PAGE } from '../../utils/constant';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';

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
    <SimpleCard title="DataExchange5050">
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
            header={'DOCUID                           '}
          />
          <Column
            field={'IMPORTED_FROM_XML_DATE_TIME'}
            header={'IMPORTED_FROM_XML_DATE_TIME'}
          />
          <Column
            field={'CODEOFDECLAREDCUSTOMSPROCEDURE'}
            header={'CODEOFDECLAREDCUSTOMSPROCEDURE'}
          />
          <Column field={'UCR'} header={'UCR'} />
          <Column field={'COUNTRYOFDESTINATIONCODE'} header={'COUNTRYOFDESTINATIONCODE'} />
          <Column
            field={'COUNTRYOFDISPATCHEXPORTCODE'}
            header={'COUNTRYOFDISPATCHEXPORTCODE'}
          />
          <Column field={'date1'} header={'date1'} />
          <Column field={'CONSIGNEE_NAME'} header={'CONSIGNEE_NAME'} />
          <Column field={'CONSIGNEE_CODE'} header={'CONSIGNEE_CODE'} />
          <Column field={'TOTALPACKAGES'} header={'TOTALPACKAGES'} />
          <Column field={'TOTALINVOICEAMOUNT'} header={'TOTALINVOICEAMOUNT'} />
          <Column field={'STATISTICALVALUEINUSD'} header={'STATISTICALVALUEINUSD'} />
          <Column field={'ITEMNUMBER'} header={'ITEMNUMBER'} />
          <Column field={'DESCRIPTIONOFGOODS'} header={'DESCRIPTIONOFGOODS'} />
          <Column field={'TARRIFNUMBER'} header={'TARRIFNUMBER'} />
          <Column field={'GROSSMASS'} header={'GROSSMASS'} />
          <Column field={'NUMBEROFPACKAGES'} header={'NUMBEROFPACKAGES'} />
          <Column field={'PACKAGETYPECODE'} header={'PACKAGETYPECODE'} />
          <Column field={'INVOICEAMOUNT'} header={'INVOICEAMOUNT'} />
          <Column field={'CODEOFTHEVEHICBORDER'} header={'CODEOFTHEVEHICBORDER'} />
          <Column field={'WEIGHT'} header={'WEIGHT'} />
          <Column field={'CARGOCODE'} header={'CARGOCODE'} />
          <Column field={'CONTAINERNUMBER'} header={'CONTAINERNUMBER'} />
          <Column field={'GROSSWEIGHT'} header={'GROSSWEIGHT'} />
          <Column field={'DESCRIPTION'} header={'DESCRIPTION'} />
          <Column field={'STATUSCODE'} header={'STATUSCODE'} />
          <Column field={'customs_name'} header={'customs_name'} />
          <Column field={'CUSTOMS_NAME_AFG'} header={'CUSTOMS_NAME_AFG'} />
          <Column field={'BORDERCODE'} header={'BORDERCODE'} />
          <Column field={'PLACEOFINITIALARRIVAL'} header={'PLACEOFINITIALARRIVAL'} />
          <Column field={'PLACEOFLOADING'} header={'PLACEOFLOADING'} />
          <Column field={'PLACEOFDISCHARGE'} header={'PLACEOFDISCHARGE'} />
          <Column field={'PLACEOFDISTINATION'} header={'PLACEOFDISTINATION'} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
}

export default DataExchange_5050;
