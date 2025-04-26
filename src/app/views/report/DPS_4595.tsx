import { SimpleCard } from '../../components';
import { Box, styled, LinearProgress } from '@mui/material';
import { useEffect, useState, useRef } from 'react';
import { ROWS_PER_PAGE } from '../../utils/constant';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';

function DPS_4595() {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true);
      const res = await axios.post('/reporting/DpsReport4595', {
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
    <SimpleCard title="DPS_4595">
      <ReportHeaderInputs
        showStartDate
        showEndDate
        showCustomsProcedure
        showCustomsList
        showHsCode
        showExemptionType
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
        >
          <Column field={'sad_Type'} header={'Type'} />
          <Column filter filterField={'bcp'} field={'bcp'} header={'BCP'} />
          <Column field={'icd'} header={'ICD'} />
          <Column
            filter
            filterField="country_Export"
            field={'country_Export'}
            header={'Country_Export'}
          />
          <Column field={'country_Dest'} header={'country_Dest'} />
          <Column field={'hsCode'} header={'HS_Code'} />
          <Column field={'tsc'} header={'TSC'} />
          <Column
            style={{ minWidth: '16rem', textAlign: 'center' }}
            filter
            filterField={'dsc'}
            field={'dsc'}
            header={'DSC'}
          />
          <Column field={'item_Net_Weight'} header={'Item_Net_Weight'} />
          <Column field={'item_Value_currency'} header={'Item_Value_currency'} />
          <Column field={'item_Value_Afs'} header={'Item_Value_Afs'} />
          <Column field={'tax_Rate'} header={'Tax_Rate'} />
          <Column field={'tax_Code'} header={'Tax_Code'} />
          <Column field={'tax_Base'} header={'Tax_Base'} />
          <Column field={'code_Tax_Amount'} header={'Code_Tax_Amount'} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
}

export default DPS_4595;
