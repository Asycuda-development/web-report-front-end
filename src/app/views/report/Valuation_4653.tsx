import { Box, LinearProgress } from '@mui/material';
import axios from 'axios';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { useEffect, useRef, useState } from 'react';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
import { SimpleCard } from '../../components';
import { ROWS_PER_PAGE } from '../../utils/constant';


const Valuation_4653 = () => {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false);
  const tableRef: any = useRef(null);

  useEffect(() => { }, []);

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true)
      const res = await axios.post('/reporting/ValuationReport4653', {
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
    finally { setLoading(false) }
  };

  return (
    <SimpleCard title="ValuationReport4653">
      <ReportHeaderInputs
        showStartDate
        showEndDate
        showCreationDate
        showLinkedDate
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
          <Column style={{ minWidth: "12rem" }} field={'Date_Modefication'} header={'Date_Modefication '} />
          <Column style={{ minWidth: "12rem" }} field={'USERNAME'} header={'USERNAME'} />
          <Column field={'RNK'} header={'RNK'} />
          <Column field={'HS_CODE'} header={'HS_CODE'} />
          <Column field={'IDE_HSC_NB2'} header={'IDE_HSC_NB2'} />
          <Column field={'TSC_CODE'} header={'TSC_CODE'} />
          <Column field={'IDE_CODE'} header={'IDE_CODE'} />
          <Column field={'Country'} header={'Country'} />
          <Column field={'Max_price'} header={'Max_price'} />
          <Column field={'Min_price'} header={'Min_price'} />
          <Column field={'GDS_MRG'} header={'GDS_MRG'} />
          <Column field={'Country_name'} header={'Country_name'} />
          <Column style={{ minWidth: "15rem" }} field={'AVG_PER'} header={'AVG_PER'} />
          <Column style={{ minWidth: "12rem" }} field={'Brand'} header={'Brand'} />
          <Column style={{ minWidth: "25rem" }} field={'DSC'} header={'DSC'} />
          <Column style={{ minWidth: "35rem" }} field={'DSC1'} header={'DSC1'} />
          <Column style={{ minWidth: "25rem" }} field={'gds_dsc'} header={'gds_dsc'} />
          <Column style={{ minWidth: "rem" }} field={'Formula'} header={'Formula'} />
          <Column field={'Formula_dsc'} header={'Formula_dsc'} />
          <Column style={{ minWidth: "20rem" }} field={'linked_value'} header={'linked_value'} />
          <Column style={{ minWidth: "15rem" }} field={'gds_rul'} header={'gds_rul'} />

        </DataTable>
      </Box>
    </SimpleCard>
  );
};

export default Valuation_4653;
