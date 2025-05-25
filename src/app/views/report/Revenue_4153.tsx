import { Box, LinearProgress, styled } from '@mui/material';
import axios from 'axios';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { useEffect, useRef, useState } from 'react';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
import { SimpleCard } from '../../components';
import { ROWS_PER_PAGE } from '../../utils/constant';

const Revenue_4153 = () => {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);


  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true)
      const res = await axios.post('/reporting/RevenueReport4153', {
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
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <SimpleCard title="Revenue Report 4153">
      <ReportHeaderInputs
        showStartDate
        showEndDate
        showCustomsList
        showRegDate
        showCustomsProcedure
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
          <Column field={'office'} header={'Office'} />
          <Column field={'rcp_dat'} header={'Rcpt_date'} />
          <Column field={'tax_total_IM'} header={'Amount_Total_Import'} />
          <Column field={'amt_011'} header={'011_محصول صادرات'} />
          <Column field={'amt_012'} header={'012_ماليه صادرات'} />
          <Column field={'amt_013'} header={'013_سره مياشت صادرات'} />
          <Column field={'amt_015'} header={'013_سره مياشت صادرات'} />
          <Column field={'amt_017'} header={'017_مالیه انتفاعی صادرات'} />
          <Column field={'amt_018'} header={'018_جریمه صادرات'} />
          <Column field={'amt_040'} header={'040_خاک پولي'} />
          <Column field={'amt_041'} header={'041_محصول'} />
          <Column field={'amt_042'} header={'042_مالیه واردات'} />
          <Column field={'amt_043'} header={'043_سره مياشت'} />
          <Column field={'amt_044'} header={'044_خدمات شاروالی'} />
          <Column field={'amt_045'} header={'045_ساير وصوليهاي متفرقه'} />
          <Column field={'amt_046'} header={'046_جريمه'} />
          <Column field={'amt_047'} header={'047_ماليه انتفاعي 4% بر واردات'} />
          <Column field={'amt_048'} header={'048_فیس تی یک وسرغج درسرحد'} />
          <Column field={'amt_75'} header={'075 حق الوزن'} />
          <Column field={'amt_88'} header={'088 Transport fees'} />
          <Column field={'amt_80'} header={'080 اعانه معارف'} />
          <Column field={'amt_049'} header={'049_فيس الكترونيك واردات'} />
          <Column field={'amt_019'} header={'019 صکوک صادرات و واردات'} />
          <Column field={'amt_099'} header={'099'} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
};

export default Revenue_4153;
