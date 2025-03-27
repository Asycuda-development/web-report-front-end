import { Box, LinearProgress, styled } from '@mui/material';
import axios from 'axios';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { useEffect, useRef, useState } from 'react';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
import { SimpleCard } from '../../components';
import { ROWS_PER_PAGE } from '../../utils/constant';

const Revenue_4162 = () => {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true)
      const res = await axios.post('/reporting/RevenueReport4162', {
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
    <SimpleCard title="Revenue Report 4162">
      <ReportHeaderInputs
        showStartDate
        showEndDate
        showCustomsList
        ShowModOfPayment
        showRegDate
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

          <Column field={'idenam'} header={'IDENAM'} />
          <Column field={'ideyea'} header={'IDEYEA'} />
          <Column field={'ideser'} header={'IDESER'} />
          <Column field={'idenbr'} header={'IDENBR'} />
          <Column field={'rcpDat'} header={'RCP_DAT'} />
          <Column field={'tarcmpcod'} header={'TARCMPCOD'} />
          <Column style={{ minWidth: "20rem" }} field={'tranam'} header={'TRANAM'} />
          <Column field={'regdat'} header={'REGDAT'} />
          <Column field={'rcpnbr'} header={'RCPNBR'} />
          <Column field={'ref'} header={'REF'} />
          <Column field={'bnkNbr'} header={'BNK_NBR'} />
          <Column field={'bnkDat'} header={'BNK_DAT'} />
          <Column field={'assNbr'} header={'ASS_NBR'} />
          <Column field={'assSer'} header={'ASS_SER'} />
          <Column field={'modTyp'} header={'MOD_TYP'} />
          <Column style={{ minWidth: "15rem" }} field={'nam'} header={'NAM'} />
          <Column field={'saremiasht'} header={'SAREMIASHT'} />
          <Column field={'sharwali'} header={'SHARWALI'} />
          <Column field={'municipalityPlusRedCrescent'} header={'MUNICIPALITYPLUSRED_CRESCENT'} />
          <Column field={'customsDuty'} header={'CUSTOMS_DUTY'} />
          <Column field={'userid'} header={'USERID'} />
          <Column field={'userName'} header={'USERNAME'} />
          <Column style={{ minWidth: "20rem" }} field={'operationTime'} header={'OPERATION_TIME'} />
          <Column field={'amttot'} header={'AMTTOT'} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
};

export default Revenue_4162;
