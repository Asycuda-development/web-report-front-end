import { Box, LinearProgress } from '@mui/material';
import axios from 'axios';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { useRef, useState } from 'react';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
import { SimpleCard } from '../../components';
import { ROWS_PER_PAGE } from '../../utils/constant';
import { useTranslation } from 'react-i18next';

const translationsForBasedOnError: string = "errors"
const translationsForBasedOn: string = "basedOn"
const translationsForReportDPS4579: string = "reports.dps_4579"
const translationsForReportDPS4579Columns: string = "reports.dps_4579.columns"

function DPS_4579() {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false);
  const tableRef: any = useRef(null);
  const { t } = useTranslation();

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true);
      const res = await axios.post('/reporting/DpsReport4579', {
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
    <SimpleCard title={t(`${translationsForReportDPS4579}.title`)}>
      <ReportHeaderInputs
        report='DPS_4579'
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
          exportFilename={`DPS_4579 ${new Date().toISOString()}`}
          ref={tableRef}
          value={reportData}
          rows={ROWS_PER_PAGE}
          rowsPerPageOptions={[5, 10, 25, 50, 100]}
          paginator
          stripedRows
          showGridlines
          emptyMessage={'No Data Available'}
        >
          <Column field={'IDENTIFIED_DATE_TIME'} header={t(`${translationsForReportDPS4579Columns}.IDENTIFIED_DATE_TIME`)} />
          <Column field={'EXPORTED_TO_XML_DATE_TIME'} header={t(`${translationsForReportDPS4579Columns}.EXPORTED_TO_XML_DATE_TIME`)} />
          <Column field={'IMPORTED_FROM_XML_DATE_TIME'} header={t(`${translationsForReportDPS4579Columns}.IMPORTED_FROM_XML_DATE_TIME`)} />
          <Column field={'DOCUMENT_ID'} header={t(`${translationsForReportDPS4579Columns}.DOCUMENT_ID`)} />
          <Column field={'REF_NO'} header={t(`${translationsForReportDPS4579Columns}.REF_NO`)} />
          <Column field={'TOTAL_NUMBER_OF_PACKAGES'} header={t(`${translationsForReportDPS4579Columns}.TOTAL_NUMBER_OF_PACKAGES`)} />
          <Column field={'COUNTRY_OF_DESTINATION'} header={t(`${translationsForReportDPS4579Columns}.COUNTRY_OF_DESTINATION`)} />
          <Column field={'COUNTRY_OF_ORIGIN'} header={t(`${translationsForReportDPS4579Columns}.COUNTRY_OF_ORIGIN`)} />
          <Column field={'DATE_OF_DECLARATION'} header={t(`${translationsForReportDPS4579Columns}.DATE_OF_DECLARATION`)} />
          <Column field={'TYPE_OF_DECLARATION'} header={t(`${translationsForReportDPS4579Columns}.TYPE_OF_DECLARATION`)} />
          <Column field={'CONTAINER_FLAG'} header={t(`${translationsForReportDPS4579Columns}.CONTAINER_FLAG`)} />
          <Column field={'TRANSPORT_MODE_AT_BORDER'} header={t(`${translationsForReportDPS4579Columns}.TRANSPORT_MODE_AT_BORDER`)} />
          <Column field={'TIN_DECLARANT'} header={t(`${translationsForReportDPS4579Columns}.TIN_DECLARANT`)} />
          <Column field={'TIN_CONSIGNEE'} header={t(`${translationsForReportDPS4579Columns}.TIN_CONSIGNEE`)} />
          <Column field={'TIN_FIN'} header={t(`${translationsForReportDPS4579Columns}.TIN_FIN`)} />
          <Column field={'IDENTITY_ATDEPARTURE'} header={t(`${translationsForReportDPS4579Columns}.IDENTITY_ATDEPARTURE`)} />
          <Column field={'IDENTITY_CROSSINGBORDER'} header={t(`${translationsForReportDPS4579Columns}.IDENTITY_CROSSINGBORDER`)} />
          <Column field={'cuo_officeofexport'} header={t(`${translationsForReportDPS4579Columns}.cuo_officeofexport`)} />
          <Column field={'cuo_officeofexit'} header={t(`${translationsForReportDPS4579Columns}.cuo_officeofexit`)} />
          <Column field={'FINANCIAL_VALUE'} header={t(`${translationsForReportDPS4579Columns}.FINANCIAL_VALUE`)} />
          <Column field={'CURRENCY'} header={t(`${translationsForReportDPS4579Columns}.CURRENCY`)} />
          <Column field={'ITEM_NUMBER'} header={t(`${translationsForReportDPS4579Columns}.ITEM_NUMBER`)} />
          <Column field={'COMBINED_NOMENCLATURE'} header={t(`${translationsForReportDPS4579Columns}.COMBINED_NOMENCLATURE`)} />
          <Column field={'GOODS_DESCRIPTION'} header={t(`${translationsForReportDPS4579Columns}.GOODS_DESCRIPTION`)} />
          <Column field={'GROSS_MASS'} header={t(`${translationsForReportDPS4579Columns}.GROSS_MASS`)} />
        </DataTable>
      </ Box>
    </SimpleCard>
  );
}

export default DPS_4579