import { SimpleCard } from '../../components';
import { Box, styled, LinearProgress } from '@mui/material';
import { useEffect, useState, useRef } from 'react';
import { ROWS_PER_PAGE } from '../../utils/constant';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
import { useTranslation } from 'react-i18next';

const translationsForBasedOnError: string = "errors"
const translationsForBasedOn: string = "basedOn"
const translationsForReportDPS4593: string = "reports.dps_4593"
const translationsForReportDPS4593Columns: string = "reports.dps_4593.columns"

function DPS_4593() {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false)
  const tableRef: any = useRef(null);
  const { t } = useTranslation();

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true);
      const res = await axios.post('/reporting/DpsReport4593', {
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
    <SimpleCard title={t(`${translationsForReportDPS4593}.title`)}>
      <ReportHeaderInputs
        report='DPS_4593'
        showCustomsList
        showStartDate
        showEndDate
        showAssesDate
        showPayDate
        showcontainerNumber
        onSearch={handleSubmit}
        tabelRef={tableRef}
      />
      {loading && (
        <LinearProgress />
      )}
      <Box width="100%" overflow="auto">
        <DataTable
          exportFilename={`DPS_4593 ${new Date().toISOString()}`}
          ref={tableRef}
          value={reportData}
          rows={ROWS_PER_PAGE}
          rowsPerPageOptions={[3, 10, 25, 50, 100]}
          paginator
          stripedRows
          showGridlines
        >
          <Column field={'container_no'} header={t(`${translationsForReportDPS4593Columns}.container_no`)} />
          <Column field={'tpt_cuo_nam'} header={t(`${translationsForReportDPS4593Columns}.tpt_cuo_nam`)} />
          <Column field={'ide_cuo_nam'} header={t(`${translationsForReportDPS4593Columns}.ide_cuo_nam`)} />
          <Column field={'Item_total'} header={t(`${translationsForReportDPS4593Columns}.Item_total`)} />
          <Column field={'Item_No'} header={t(`${translationsForReportDPS4593Columns}.Item_No`)} />
          <Column field={'Total_Package'} header={t(`${translationsForReportDPS4593Columns}.Total_Package`)} />
          <Column field={'Type_of_Package'} header={t(`${translationsForReportDPS4593Columns}.Type_of_Package`)} />
          <Column field={'Reg_No'} header={t(`${translationsForReportDPS4593Columns}.Reg_No`)} />
          <Column field={'Reg_Date'} header={t(`${translationsForReportDPS4593Columns}.Reg_Date`)} />
          <Column field={'ASMT_No'} header={t(`${translationsForReportDPS4593Columns}.ASMT_No`)} />
          <Column field={'AST_Date'} header={t(`${translationsForReportDPS4593Columns}.AST_Date`)} />
          <Column field={'RCPT_No'} header={t(`${translationsForReportDPS4593Columns}.RCPT_No`)} />
          <Column field={'RCPT_Date'} header={t(`${translationsForReportDPS4593Columns}.RCPT_Date`)} />
          <Column field={'status'} header={t(`${translationsForReportDPS4593Columns}.status`)} />
          <Column field={'hs_code'} header={t(`${translationsForReportDPS4593Columns}.hs_code`)} />
          <Column field={'dsc'} header={t(`${translationsForReportDPS4593Columns}.dsc`)} />
          <Column field={'gds_ds3'} header={t(`${translationsForReportDPS4593Columns}.gds_ds3`)} />
          <Column field={'pck_mrk1'} header={t(`${translationsForReportDPS4593Columns}.pck_mrk1`)} />
          <Column field={'pck_mrk2'} header={t(`${translationsForReportDPS4593Columns}.pck_mrk2`)} />
          <Column field={'typeoftransport'} header={t(`${translationsForReportDPS4593Columns}.typeoftransport`)} />
          <Column field={'Item_Gross_Weight'} header={t(`${translationsForReportDPS4593Columns}.Item_Gross_Weight`)} />
          <Column field={'Item_Net_Weight'} header={t(`${translationsForReportDPS4593Columns}.Item_Net_Weight`)} />
          <Column field={'Broker_TIN'} header={t(`${translationsForReportDPS4593Columns}.Broker_TIN`)} />
          <Column field={'dec_nam'} header={t(`${translationsForReportDPS4593Columns}.dec_nam`)} />
          <Column field={'Company_TIN'} header={t(`${translationsForReportDPS4593Columns}.Company_TIN`)} />
          <Column field={'fin_nam'} header={t(`${translationsForReportDPS4593Columns}.fin_nam`)} />
          <Column field={'fis_cod'} header={t(`${translationsForReportDPS4593Columns}.fis_cod`)} />
          <Column field={'Country_Org'} header={t(`${translationsForReportDPS4593Columns}.Country_Org`)} />
          <Column field={'Country_Dest'} header={t(`${translationsForReportDPS4593Columns}.Country_Dest`)} />
          <Column field={'Country_Export'} header={t(`${translationsForReportDPS4593Columns}.Country_Export`)} />
          <Column field={'Lorry_Total'} header={t(`${translationsForReportDPS4593Columns}.Lorry_Total`)} />
          <Column field={'Customs_Proc'} header={t(`${translationsForReportDPS4593Columns}.Customs_Proc`)} />
          <Column field={'Currecny_Rate'} header={t(`${translationsForReportDPS4593Columns}.Currecny_Rate`)} />
          <Column field={'Declaration_Value_currency'} header={t(`${translationsForReportDPS4593Columns}.Declaration_Value_currency`)} />
          <Column field={'Declaration_Value_Afs'} header={t(`${translationsForReportDPS4593Columns}.Declaration_Value_Afs`)} />
          <Column field={'Declaration_Taxes'} header={t(`${translationsForReportDPS4593Columns}.Declaration_Taxes`)} />
          <Column field={'Item_Value_currency'} header={t(`${translationsForReportDPS4593Columns}.Item_Value_currency`)} />
          <Column field={'Item_Value_Afs'} header={t(`${translationsForReportDPS4593Columns}.Item_Value_Afs`)} />
          <Column field={'loc_goods'} header={t(`${translationsForReportDPS4593Columns}.loc_goods`)} />
          <Column field={'lic_cod'} header={t(`${translationsForReportDPS4593Columns}.lic_cod`)} />
          <Column field={'txt_fre'} header={t(`${translationsForReportDPS4593Columns}.txt_fre`)} />
          <Column field={'pck_mrk_1'} header={t(`${translationsForReportDPS4593Columns}.pck_mrk_1`)} />
          <Column field={'pck_mrk_2'} header={t(`${translationsForReportDPS4593Columns}.pck_mrk_2`)} />
          <Column field={'tar_vmt'} header={t(`${translationsForReportDPS4593Columns}.tar_vmt`)} />
          <Column field={'tar_att'} header={t(`${translationsForReportDPS4593Columns}.tar_att`)} />
          <Column field={'tar_vdt'} header={t(`${translationsForReportDPS4593Columns}.tar_vdt`)} />
          <Column field={'tar_vmt_1'} header={t(`${translationsForReportDPS4593Columns}.tar_vmt_1`)} />
          <Column field={'gcategory_of_goods1'} header={t(`${translationsForReportDPS4593Columns}.gcategory_of_goods1`)} />
          <Column field={'gcategory_of_goods2'} header={t(`${translationsForReportDPS4593Columns}.gcategory_of_goods2`)} />
          <Column field={'FUELLITERS'} header={t(`${translationsForReportDPS4593Columns}.FUELLITERS`)} />
          <Column field={'ide_typ_sad'} header={t(`${translationsForReportDPS4593Columns}.ide_typ_sad`)} />
          <Column field={'ide_cuo_cod'} header={t(`${translationsForReportDPS4593Columns}.ide_cuo_cod`)} />
          <Column field={'Code_of_package'} header={t(`${translationsForReportDPS4593Columns}.Code_of_package`)} />
          <Column field={'bank_nam'} header={t(`${translationsForReportDPS4593Columns}.bank_nam`)} />
          <Column field={'liccod'} header={t(`${translationsForReportDPS4593Columns}.liccod`)} />
          <Column field={'txtfre'} header={t(`${translationsForReportDPS4593Columns}.txtfre`)} />
          <Column field={'hs5'} header={t(`${translationsForReportDPS4593Columns}.hs5`)} />
          <Column field={'cpc'} header={t(`${translationsForReportDPS4593Columns}.cpc`)} />
          <Column field={'cmp_nam'} header={t(`${translationsForReportDPS4593Columns}.cmp_nam`)} />
          <Column field={'Country_Dest_cod'} header={t(`${translationsForReportDPS4593Columns}.Country_Dest_cod`)} />
          <Column field={'Currrency_code'} header={t(`${translationsForReportDPS4593Columns}.Currrency_code`)} />
          <Column field={'Item_CIF_Value'} header={t(`${translationsForReportDPS4593Columns}.Item_CIF_Value`)} />
          <Column field={'Item_Taxes'} header={t(`${translationsForReportDPS4593Columns}.Item_Taxes`)} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
}

export default DPS_4593;
