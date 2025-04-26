import { SimpleCard } from '../../components';
import { Box, styled, LinearProgress } from '@mui/material';
import React, { useEffect, useState, useRef } from 'react';
import { ROWS_PER_PAGE } from '../../utils/constant';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
import { Toast } from 'primereact/toast';

function DPS_4570() {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false);
  const tableRef: any = useRef(null);
  const toastRef: any = useRef(null);
  const handleSubmit = async (data: SearchData) => {
    try {
      if (data.basedOn && !data.basedOnValue) {
        toastRef.current.show({
          severity: 'error',
          summary: 'Based On Value',
          detail: 'Based On Value is required when Based On is selected, please try again.'
        });
        return
      }
      setLoading(true);
      const res = await axios.post('/reporting/DpsReport4552', {
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
  const basedOnOptions = [{
    label: 'Engin_Number',
    name: 'Engin_Number'
  },{
    label: 'VIN_Number',
    name: 'VIN_Number'
}]

  return (
    <SimpleCard title="DPS_4570">
      <ReportHeaderInputs
        showStartDate
        showEndDate
        showExemptionType
        showCustomsProcedure
        showBasedOn
        basedOnOptions={basedOnOptions}
        showRegDate
        showAssesDate
        showPayDate
        showCustomsList
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
 <Column field={' IDE_TYP_SAD'} header={' IDE_TYP_SAD'} />
 <Column field={' TPT_CUO_NAM'} header={' TPT_CUO_NAM'}/>
 <Column field={' IDE_CUO_NAM'} header={' IDE_CUO_NAM'}/>
 <Column field={' IDE_CUO_COD'} header={' IDE_CUO_COD'}/>
 <Column field={' DEC_COD'}header={' DEC_COD'}/>
 <Column field={' DEC_NAM'}header={' DEC_NAM'}/>
 <Column field={' ITEM_TOTAL'}header={' ITEM_TOT'}/>
 <Column field={' ITEM_NO'}header={' ITEM_NO'}/>
 <Column field={' TOTAL_PACKAGE'}header={' TOTAL_PACKAGE'}/>
 <Column field={' CODE_OF_PACKAGE'}header={' CODE_OF_PACKAGE'}/>
 <Column field={' TYPE_OF_PACKAGE'}header={' TYPE_OF_PACKAGE'}/>
 <Column field={' REG_NO'}header={' REG_NO'}/>
 <Column field={' REG_DATE'}header={' REG_DATE'}/>
 <Column field={' ASMT_NO'}header={' ASMT_NO'}/>
 <Column field={' AST_DATE'}header={' AST_DADTE'}/>
 <Column field={' RCPT_NO'}header={' RCPT_NO'}/>
 <Column field={' RCPT_DATE'}header={' RCPT_DATE'}/>
 <Column field={' BANK_NAM'}header={' BANK_N'}/>
 <Column field={' HS_CODE'}header={' HS_CODE'}/>
 <Column field={' CPC'}header={' CPC'}/>
 <Column field={' DSC'}header={' DSC'}/>
 <Column field={' GDS_DS3'}header={' GDS_DS3'}/>
 <Column field={' PCK_MRK1'}header={' PCK_MR'}/>
 <Column field={' PCK_MRK2'}header={' PCK_MR'}/>
 <Column field={' CUSTOMS_PROC'}header={' CUSTOMS_PR'}/>
 <Column field={' ITEM_GROSS_WEIGHT'}header={' ITEM_GROSS_WEIGHT'}/>
 <Column field={' ITEM_NET_WEIGHT'}header={' ITEM_NET_WEIGHT'}/>
 <Column field={' BROKER_TIN'}header={' BROKER_T'}/>
 <Column field={' COMPANY_TIN'}header={' COMPANY_TIN'}/>
 <Column field={' CMP_NAM'}header={' CMP_NAM'}/>
 <Column field={' FIN_NAM'}header={' FIN_NAM'}/>
 <Column field={' COUNTRY_DEST'}header={' COUNTRY_DE'}/>
 <Column field={' COUNTRY_DEST_COD'}header={' COUNTRY_DEST_C'}/>
 <Column field={' COUNTRY_EXPORT'}header={' COUNTRY_EXPO'}/>
 <Column field={' COUNTRY_ORG'}header={' COUNTRY_ORG'}/>
 <Column field={' LORRY_TOTAL'}header={' LORRY_TOTAL'}/>
 <Column field={' CURRENCY_RATE'}header={' CURRENCY_RATE'}/>
 <Column field={' DECLARATION_VALUE_CURRENCY'}header={' DECLARATION_VALUE_CURREN'}/>
 <Column field={' DECLARATION_VALUE_AFS'}header={' DECLARATION_VALUE_AFS'}/>
 <Column field={' ITEM_VALUE_CURRENCY'}header={' ITEM_VALUE_CURRENCY'}/>
 <Column field={' ITEM_VALUE_AFS'}header={' ITEM_VALUE_A'}/>
 <Column field={' ITEM_TAXES'}header={' ITEM_TAX'}/>
 <Column field={' STATUS'}header={' STAT'}/>
 <Column field={' ENG_NBR'}header={' ENG_NBR'}/>
 <Column field={' ENG_VIN'}header={' ENG_VIN'}/>
 <Column field={' VH1_DSC'}header={' VH1_DSC'}/>
 <Column field={' VH2_DSC'}header={' VH2_DSC'}/>
        </DataTable>
      </ Box>
      <Toast ref={toastRef} />
    </SimpleCard>
  );
}

export default DPS_4570