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
const translationsForReportTransit4264: string = "reports.transit_4264"
const translationsForReportTransit4264Columns: string = "reports.transit_4264.columns"

const Transit_4264 = () => {
  const [reportData, setReportData] = useState([]);
  const tableRef: any = useRef(null);
  const { t } = useTranslation();

  const handleSubmit = async (data: SearchData) => {
    try {
      const res = await axios.post('/reporting/TransitReport4264', {
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
    } catch (error) { }
  };

  return (
    <SimpleCard title={t(`${translationsForReportTransit4264}.title`)}>
      <ReportHeaderInputs
        showStartDate
        showEndDate
        showDepartureCustomsList
        showOperationDate
        showUserName
        onSearch={handleSubmit}
        tabelRef={tableRef}
      />

      <Box width="100%" overflow="auto">
        <DataTable
          exportFilename={`Transit Report 4264 ${new Date().toISOString()}`}
          ref={tableRef}
          value={reportData}
          rows={ROWS_PER_PAGE}
          rowsPerPageOptions={[5, 10, 25, 50, 100]}
          paginator
          stripedRows
          showGridlines
        >
          <Column field={'Transit_Type'} header={t(`${translationsForReportTransit4264Columns}.Transit_Type`)} />
          <Column field={'Reg_No'} header={t(`${translationsForReportTransit4264Columns}.Reg_No`)} />
          <Column field={'Reg_Date'} header={t(`${translationsForReportTransit4264Columns}.Reg_Date`)} />
          <Column field={'User_Name'} header={t(`${translationsForReportTransit4264Columns}.User_Name`)} />
          <Column field={'Dep_Office'} header={t(`${translationsForReportTransit4264Columns}.Dep_Office`)} />
          <Column field={'Dest_Office'} header={t(`${translationsForReportTransit4264Columns}.Dest_Office`)} />
          <Column field={'Operation_Name'} header={t(`${translationsForReportTransit4264Columns}.Operation_Name`)} />
          <Column field={'Status'} header={t(`${translationsForReportTransit4264Columns}.Status`)} />
          <Column field={'Operation_Date'} header={t(`${translationsForReportTransit4264Columns}.Operation_Date`)} />
          <Column field={'CMP_Cod'} header={t(`${translationsForReportTransit4264Columns}.CMP_Cod`)} />
          <Column field={'CMP_Name'} header={t(`${translationsForReportTransit4264Columns}.CMP_Name`)} />
          <Column field={'DEC_Name'} header={t(`${translationsForReportTransit4264Columns}.DEC_Name`)} />
          <Column field={'dec_Cod'} header={t(`${translationsForReportTransit4264Columns}.dec_Cod`)} />
          <Column field={'del_Cod'} header={t(`${translationsForReportTransit4264Columns}.del_Cod`)} />
          <Column field={'del_Nam'} header={t(`${translationsForReportTransit4264Columns}.del_Nam`)} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
};

export default Transit_4264;
