import { Box, LinearProgress } from '@mui/material';
import axios from 'axios';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { useEffect, useRef, useState } from 'react';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
import { SimpleCard } from '../../components';
import { ROWS_PER_PAGE } from '../../utils/constant';
import { useTranslation } from 'react-i18next';

const translationsForBasedOnError: string = "errors"
const translationsForBasedOn: string = "basedOn"
const translationsForReportValuation4652: string = "reports.valuation_4652"
const translationsForReportValuation4652Columns: string = "reports.valuation_4652.columns"

const Valuation_4652 = () => {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false);
  const tableRef: any = useRef(null);
  const { t } = useTranslation();

  useEffect(() => { }, []);

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true)
      const res = await axios.post('/reporting/ValuationReport4652', {
        startDate: data.startDate,
        endDate: data.endDate,
        customsCode: data.CustomsCode,
        type: data.customsProcedure,
        ...data
      });
      if (res.data.length === 0) {
        setReportData([]);
      } else {
        setReportData(res.data);
      }
    } catch (error) { }
    finally {
      setLoading(false)
    }
  };

  return (
    <SimpleCard title={t(`${translationsForReportValuation4652}.title`)}>
      <ReportHeaderInputs
        showStartDate
        showEndDate
        showRegDate
        showUserName
        ShowHsCode
        onSearch={handleSubmit}
        tabelRef={tableRef}
      />
      {loading && (
        <LinearProgress />
      )}
      <Box width="100%" overflow="auto">
        <DataTable
          exportFilename={`ValuationReport4652 ${new Date().toISOString()}`}
          ref={tableRef}
          value={reportData}
          rows={ROWS_PER_PAGE}
          rowsPerPageOptions={[5, 10, 25, 50, 100]}
          paginator
          stripedRows
          showGridlines
        >
          <Column style={{ minWidth: "12rem" }} field={'Date_Modefication'} header={t(`${translationsForReportValuation4652Columns}.Date_Modefication`)} />
          <Column field={'USERNAME'} header={t(`${translationsForReportValuation4652Columns}.USERNAME`)} />
          <Column field={'RNK'} header={t(`${translationsForReportValuation4652Columns}.RNK`)} />
          <Column field={'HS_CODE'} header={t(`${translationsForReportValuation4652Columns}.HS_CODE`)} />
          <Column field={'IDE_HSC_NB2'} header={t(`${translationsForReportValuation4652Columns}.IDE_HSC_NB2`)} />
          <Column field={'TSC_CODE'} header={t(`${translationsForReportValuation4652Columns}.TSC_CODE`)} />
          <Column field={'IDE_CODE'} header={t(`${translationsForReportValuation4652Columns}.IDE_CODE`)} />
          <Column field={'Country'} header={t(`${translationsForReportValuation4652Columns}.Country`)} />
          <Column field={'Max_price'} header={t(`${translationsForReportValuation4652Columns}.Max_price`)} />
          <Column field={'Min_price'} header={t(`${translationsForReportValuation4652Columns}.Min_price`)} />
          <Column field={'GDS_MRG'} header={t(`${translationsForReportValuation4652Columns}.GDS_MRG`)} />
          <Column field={'Country_name'} header={t(`${translationsForReportValuation4652Columns}.Country_name`)} />
          <Column field={'AVG_PER'} header={t(`${translationsForReportValuation4652Columns}.AVG_PER`)} />
          <Column style={{ minWidth: "12rem" }} field={'Brand'} header={t(`${translationsForReportValuation4652Columns}.Brand`)} />
          <Column style={{ minWidth: "25rem" }} field={'DSC'} header={t(`${translationsForReportValuation4652Columns}.DSC`)} />
          <Column field={'DSC1'} header={t(`${translationsForReportValuation4652Columns}.DSC1`)} />
          <Column style={{ minWidth: "25rem" }} field={'gds_dsc'} header={t(`${translationsForReportValuation4652Columns}.gds_dsc`)} />
          <Column field={'Formula'} header={t(`${translationsForReportValuation4652Columns}.Formula`)} />
          <Column style={{ minWidth: "15rem" }} field={'Formula_dsc'} header={t(`${translationsForReportValuation4652Columns}.Formula_dsc`)} />
          <Column style={{ minWidth: "12rem" }} field={'linked_value'} header={t(`${translationsForReportValuation4652Columns}.linked_value`)} />
          <Column field={'gds_rul'} header={t(`${translationsForReportValuation4652Columns}.gds_rul`)} />

        </DataTable>
      </Box>
    </SimpleCard>
  );
};

export default Valuation_4652;
