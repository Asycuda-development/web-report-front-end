import { Box, LinearProgress, styled } from '@mui/material';
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
const translationsForReportTransit4275: string = "reports.transit_4275"
const translationsForReportTransit4275Columns: string = "reports.transit_4275.columns"

const Transit_4275 = () => {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);
  const { t } = useTranslation();

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true)
      const res = await axios.post('/reporting/TransitReport4275', {
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
      setLoading(false);
    }
  };

  return (
    <SimpleCard title={t(`${translationsForReportTransit4275}.title`)}>
      <ReportHeaderInputs
        showStartDate
        showEndDate
        showRegDate
        showCustomsList
        showDestinationCustomsList
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
          <Column field={'VOU'} header={t(`${translationsForReportTransit4275Columns}.VOU`)} />
          <Column field={'nbr'} header={t(`${translationsForReportTransit4275Columns}.nbr`)} />
          <Column field={'dat'} header={t(`${translationsForReportTransit4275Columns}.dat`)} />
          <Column field={'ASS_CTY_COD'} header={t(`${translationsForReportTransit4275Columns}.ASS_CTY_COD`)} />
          <Column style={{ minWidth: "15rem" }} field={'ASS_CTY_NAM'} header={t(`${translationsForReportTransit4275Columns}.ASS_CTY_NAM`)} />
          <Column style={{ minWidth: "20rem" }} field={'ASS_NAM'} header={t(`${translationsForReportTransit4275Columns}.ASS_NAM`)} />
          <Column style={{ minWidth: "12rem" }} field={'HLD_CTY_COD'} header={t(`${translationsForReportTransit4275Columns}.HLD_CTY_COD`)} />
          <Column field={'HLD_CTY_NAM'} header={t(`${translationsForReportTransit4275Columns}.HLD_CTY_NAM`)} />
          <Column style={{ minWidth: "15rem" }} field={'HLD_NAM'} header={t(`${translationsForReportTransit4275Columns}.HLD_NAM`)} />
          <Column field={'DEP_CTY_COD1'} header={t(`${translationsForReportTransit4275Columns}.DEP_CTY_COD1`)} />
          <Column field={'DEP_CTY_NAM1'} header={t(`${translationsForReportTransit4275Columns}.DEP_CTY_NAM1`)} />
          <Column field={'DST_CTY_COD1'} header={t(`${translationsForReportTransit4275Columns}.DST_CTY_COD1`)} />
          <Column field={'DST_CTY_NAM1'} header={t(`${translationsForReportTransit4275Columns}.DST_CTY_NAM1`)} />
          <Column field={'TRS_REG_IDT'} header={t(`${translationsForReportTransit4275Columns}.TRS_REG_IDT`)} />
          <Column field={'TRS_REG_CTY_COD'} header={t(`${translationsForReportTransit4275Columns}.TRS_REG_CTY_COD`)} />
          <Column field={'TRS_REG_CTY_NAM'} header={t(`${translationsForReportTransit4275Columns}.TRS_REG_CTY_NAM`)} />
          <Column field={'TRS_AGR_IDT'} header={t(`${translationsForReportTransit4275Columns}.TRS_AGR_IDT`)} />
          <Column field={'TRS_AGR_DAT'} header={t(`${translationsForReportTransit4275Columns}.TRS_AGR_DAT`)} />
          <Column field={'CTN_NBR1'} header={t(`${translationsForReportTransit4275Columns}.CTN_NBR1`)} />
          <Column field={'CRE_DAT'} header={t(`${translationsForReportTransit4275Columns}.CRE_DAT`)} />
          <Column field={'DIS_DSC'} header={t(`${translationsForReportTransit4275Columns}.DIS_DSC`)} />
          <Column field={'TMP_REG_CUO_COD'} header={t(`${translationsForReportTransit4275Columns}.TMP_REG_CUO_COD`)} />
          <Column field={'TMP_REG_CUO_NAM'} header={t(`${translationsForReportTransit4275Columns}.TMP_REG_CUO_NAM`)} />
          <Column field={'TMP_ARR_CUO_COD'} header={t(`${translationsForReportTransit4275Columns}.TMP_ARR_CUO_COD`)} />
          <Column field={'TMP_ARR_CUO_NAM'} header={t(`${translationsForReportTransit4275Columns}.TMP_ARR_CUO_NAM`)} />
          <Column field={'ITM_PGE'} header={t(`${translationsForReportTransit4275Columns}.ITM_PGE`)} />
          <Column field={'ITM_ATD_COD1'} header={t(`${translationsForReportTransit4275Columns}.ITM_ATD_COD1`)} />
          <Column field={'ITM_ATD_REF1'} header={t(`${translationsForReportTransit4275Columns}.ITM_ATD_REF1`)} />
          <Column field={'ITM_ATD_DAT1'} header={t(`${translationsForReportTransit4275Columns}.ITM_ATD_DAT1`)} />
          <Column field={'ITM_ATD_COD2'} header={t(`${translationsForReportTransit4275Columns}.ITM_ATD_COD2`)} />
          <Column field={'ITM_ATD_REF2'} header={t(`${translationsForReportTransit4275Columns}.ITM_ATD_REF2`)} />
          <Column field={'ITM_ATD_DAT2'} header={t(`${translationsForReportTransit4275Columns}.ITM_ATD_DAT2`)} />
          <Column field={'ITM_SEN_FLAG'} header={t(`${translationsForReportTransit4275Columns}.ITM_SEN_FLAG`)} />
          <Column field={'ITM_TOT_PKG'} header={t(`${translationsForReportTransit4275Columns}.ITM_TOT_PKG`)} />
          <Column field={'ITM_SIG_DAT'} header={t(`${translationsForReportTransit4275Columns}.ITM_SIG_DAT`)} />
          <Column field={'ITM_OFF_DAT'} header={t(`${translationsForReportTransit4275Columns}.ITM_OFF_DAT`)} />
          <Column field={'ITM_REG_SEA_FLG'} header={t(`${translationsForReportTransit4275Columns}.ITM_REG_SEA_FLG`)} />
          <Column style={{ minWidth: "15rem" }} field={'ITM_REG_TIM'} header={t(`${translationsForReportTransit4275Columns}.ITM_REG_TIM`)} />
          <Column style={{ minWidth: "20rem" }} field={'ITM_REG_CUO_COD'} header={t(`${translationsForReportTransit4275Columns}.ITM_REG_CUO_COD`)} />
          <Column field={'ITM_REG_CUO_NAM'} header={t(`${translationsForReportTransit4275Columns}.ITM_REG_CUO_NAM`)} />
          <Column field={'ITM_REG_YEA'} header={t(`${translationsForReportTransit4275Columns}.ITM_REG_YEA`)} />
          <Column field={'ITM_REG_DAT'} header={t(`${translationsForReportTransit4275Columns}.ITM_REG_DAT`)} />
          <Column style={{ minWidth: "30rem" }} field={'ITM_REG_USR_NAM'} header={t(`${translationsForReportTransit4275Columns}.ITM_REG_USR_NAM`)} />
          <Column style={{ minWidth: "30rem" }} field={'ITM_REG_USR_IDT'} header={t(`${translationsForReportTransit4275Columns}.ITM_REG_USR_IDT`)} />
          <Column field={'ITM_ARR_SEA_FLG'} header={t(`${translationsForReportTransit4275Columns}.ITM_ARR_SEA_FLG`)} />
          <Column style={{ minWidth: "15rem" }} field={'ITM_ARR_PKG_NBR'} header={t(`${translationsForReportTransit4275Columns}.ITM_ARR_PKG_NBR`)} />
          <Column style={{ minWidth: "20rem" }} field={'ITM_ARR_PKG_TXT'} header={t(`${translationsForReportTransit4275Columns}.ITM_ARR_PKG_TXT`)} />
          <Column style={{ minWidth: "20rem" }} field={'ITM_ARR_CUO_COD'} header={t(`${translationsForReportTransit4275Columns}.ITM_ARR_CUO_COD`)} />
          <Column field={'ITM_ARR_CUO_NAM'} header={t(`${translationsForReportTransit4275Columns}.ITM_ARR_CUO_NAM`)} />
          <Column style={{ minWidth: "20rem" }} field={'ITM_ARR_DEL_HRS'} header={t(`${translationsForReportTransit4275Columns}.ITM_ARR_DEL_HRS`)} />
          <Column field={'ITM_ARR_DEL_DAY'} header={t(`${translationsForReportTransit4275Columns}.ITM_ARR_DEL_DAY`)} />
          <Column style={{ minWidth: "20rem" }} field={'ITM_ARR_RES_FLG'} header={t(`${translationsForReportTransit4275Columns}.ITM_ARR_RES_FLG`)} />
          <Column field={'ITM_ARR_YEA'} header={t(`${translationsForReportTransit4275Columns}.ITM_ARR_YEA`)} />
          <Column style={{ minWidth: "20rem" }} field={'ITM_ARR_DAT'} header={t(`${translationsForReportTransit4275Columns}.ITM_ARR_DAT`)} />
          <Column field={'ITM_ARR_USR_NAM'} header={t(`${translationsForReportTransit4275Columns}.ITM_ARR_USR_NAM`)} />
          <Column field={'ITM_ARR_USR_IDT'} header={t(`${translationsForReportTransit4275Columns}.ITM_ARR_USR_IDT`)} />
          <Column style={{ minWidth: "15rem" }} field={'ITM_ARR_SIG_CUO_NAM'} header={t(`${translationsForReportTransit4275Columns}.ITM_ARR_SIG_CUO_NAM`)} />
          <Column field={'ITM_ARR_SIG_CUO_COD'} header={t(`${translationsForReportTransit4275Columns}.ITM_ARR_SIG_CUO_COD`)} />
          <Column field={'ITM_STO_USR_NAM'} header={t(`${translationsForReportTransit4275Columns}.ITM_STO_USR_NAM`)} />
          <Column field={'ITM_STO_USR_IDT'} header={t(`${translationsForReportTransit4275Columns}.ITM_STO_USR_IDT`)} />
          <Column field={'ITM_REG_NBR'} header={t(`${translationsForReportTransit4275Columns}.ITM_REG_NBR`)} />
          <Column field={'ITM_ARR_NBR'} header={t(`${translationsForReportTransit4275Columns}.ITM_ARR_NBR`)} />
          <Column field={'ITM_GDS_PKG_NBR'} header={t(`${translationsForReportTransit4275Columns}.ITM_GDS_PKG_NBR`)} />
          <Column field={'ITM_GDS_PKG_COD'} header={t(`${translationsForReportTransit4275Columns}.ITM_GDS_PKG_COD`)} />
          <Column field={'ITM_GDS_WGT'} header={t(`${translationsForReportTransit4275Columns}.ITM_GDS_WGT`)} />
          <Column field={'ITM_GDS_DIS'} header={t(`${translationsForReportTransit4275Columns}.ITM_GDS_DIS`)} />
          <Column style={{ minWidth: "20rem" }} field={'gds_dsc'} header={t(`${translationsForReportTransit4275Columns}.gds_dsc`)} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
};

export default Transit_4275;
