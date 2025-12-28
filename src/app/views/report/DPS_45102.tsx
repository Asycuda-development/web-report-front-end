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
const translationsForReportDPS45102: string = "reports.dps_45102"
const translationsForReportDPS45102Columns: string = "reports.dps_45102.columns"

function DPS_45102() {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false);
  const tableRef: any = useRef(null);
  const { t } = useTranslation();

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true);
      const res = await axios.post('/reporting/DpsReport45102', {
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
    <SimpleCard title={t(`${translationsForReportDPS45102}.title`)}>
      <ReportHeaderInputs
        report='DPS_45102'
        showStartDate
        showEndDate
        showRegDate
        showCustomsList
        onSearch={handleSubmit}
        tabelRef={tableRef}
      />
      {loading && (
        <LinearProgress />
      )}
      <Box width="100%" overflow="auto">
        <DataTable
          exportFilename={`DPS_45102 ${new Date().toISOString()}`}
          ref={tableRef}
          value={reportData}
          rows={ROWS_PER_PAGE}
          rowsPerPageOptions={[5, 10, 25, 50, 100]}
          paginator
          stripedRows
          showGridlines
          emptyMessage={'No Data Available'}
        >
          <Column field={'New_Customs'} header={t(`${translationsForReportDPS45102Columns}.New_Customs`)} />
          <Column field={'newSadType'} header={t(`${translationsForReportDPS45102Columns}.newSadType`)} />
          <Column field={'newSer'} header={t(`${translationsForReportDPS45102Columns}.newSer`)} />
          <Column field={'newSer1'} header={t(`${translationsForReportDPS45102Columns}.newSer1`)} />
          <Column field={'new_I'} header={t(`${translationsForReportDPS45102Columns}.new_I`)} />
          <Column field={'new_I_Date'} header={t(`${translationsForReportDPS45102Columns}.new_I_Date`)} />
          <Column field={' other_I'} header={t(`${translationsForReportDPS45102Columns}. other_I`)} />
          <Column field={' new_I_Date_1'} header={t(`${translationsForReportDPS45102Columns}. new_I_Date_1`)} />
        </DataTable>
      </ Box>
    </SimpleCard>
  );
}

export default DPS_45102