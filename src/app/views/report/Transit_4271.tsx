import { Box, LinearProgress } from '@mui/material';
import axios from 'axios';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { useRef, useState } from 'react';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
import { SimpleCard } from '../../components';
import { ROWS_PER_PAGE } from '../../utils/constant';
import { useTranslation } from 'react-i18next';

const translationsForBasedOnError: string = "errors"
const translationsForBasedOn: string = "basedOn"
const translationsForReportTransit4271: string = "reports.transit_4271"
const translationsForReportTransit4271Columns: string = "reports.transit_4271.columns"

const Transit_4271 = () => {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false);
  const tableRef: any = useRef(null);
  const { t } = useTranslation();

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true);
      const res = await axios.post('/reporting/TransitReport4271', {
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
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <SimpleCard title={t(`${translationsForReportTransit4271}.title`)}>
      <ReportHeaderInputs
        showStartDate
        showRegDate

        showEndDate
        showPayDate
        ShowTinNumber
        showCustomsList
        showDepartureCustomsList
        showTransitType
        showCompanyContractorCode
        onSearch={handleSubmit}
        tabelRef={tableRef}
      />
      {loading && (
        <LinearProgress />
      )}
      <Box width="100%" overflow="auto">
        <DataTable
          exportFilename={`Transit Report 4271 ${new Date().toISOString()}`}
          ref={tableRef}
          value={reportData}
          rows={ROWS_PER_PAGE}
          rowsPerPageOptions={[5, 10, 25, 50, 100]}
          paginator
          stripedRows
          showGridlines
        >
          <Column field={'transit_Type'} header={t(`${translationsForReportTransit4271Columns}.transit_Type`)} />
          <Column field={'declaration_Ref_Yr'} header={t(`${translationsForReportTransit4271Columns}.declaration_Ref_Yr`)} />
          <Column field={'destn_Nam'} header={t(`${translationsForReportTransit4271Columns}.destn_Nam`)} />
          <Column field={'destn_Cty'} header={t(`${translationsForReportTransit4271Columns}.destn_Cty`)} />
          <Column field={'status'} header={t(`${translationsForReportTransit4271Columns}.status`)} />
          <Column field={'reg_No'} header={t(`${translationsForReportTransit4271Columns}.reg_No`)} />
          <Column field={'reg_Dat'} header={t(`${translationsForReportTransit4271Columns}.reg_Dat`)} />
          <Column field={'val_No'} header={t(`${translationsForReportTransit4271Columns}.val_No`)} />
          <Column field={'max_Date_Of_Arrival_Limit'} header={t(`${translationsForReportTransit4271Columns}.max_Date_Of_Arrival_Limit`)} />
          <Column field={'arr_Date'} header={t(`${translationsForReportTransit4271Columns}.arr_Date`)} />
          <Column field={'dept_Off_Nam'} header={t(`${translationsForReportTransit4271Columns}.dept_Off_Nam`)} />
          <Column field={'declarant_Code'} header={t(`${translationsForReportTransit4271Columns}.declarant_Code`)} />
          <Column field={'declarant_Name'} header={t(`${translationsForReportTransit4271Columns}.declarant_Name`)} />
          <Column field={'cns_Code'} header={t(`${translationsForReportTransit4271Columns}.cns_Code`)} />
          <Column field={'cns_Name'} header={t(`${translationsForReportTransit4271Columns}.cns_Name`)} />
          <Column field={'principal_Cod'} header={t(`${translationsForReportTransit4271Columns}.principal_Cod`)} />
          <Column field={'principal_Nam'} header={t(`${translationsForReportTransit4271Columns}.principal_Nam`)} />
          <Column field={'represented_By'} header={t(`${translationsForReportTransit4271Columns}.represented_By`)} />
          <Column field={'cty_Export_Name'} header={t(`${translationsForReportTransit4271Columns}.cty_Export_Name`)} />
          <Column field={'cty_Destn_Cod'} header={t(`${translationsForReportTransit4271Columns}.cty_Destn_Cod`)} />
          <Column field={'mod_Of_Transport'} header={t(`${translationsForReportTransit4271Columns}.mod_Of_Transport`)} />
          <Column field={'lorry_To_Border'} header={t(`${translationsForReportTransit4271Columns}.lorry_To_Border`)} />
          <Column field={'gross_Mass'} header={t(`${translationsForReportTransit4271Columns}.gross_Mass`)} />
          <Column field={'Net_Mass'} header={t(`${translationsForReportTransit4271Columns}.Net_Mass`)} />
          <Column field={'tot_Pkg'} header={t(`${translationsForReportTransit4271Columns}.tot_Pkg`)} />
          <Column field={'Package_Name'} header={t(`${translationsForReportTransit4271Columns}.Package_Name`)} />
          <Column field={'hscode'} header={t(`${translationsForReportTransit4271Columns}.hscode`)} />
          <Column field={'Good_Description2'} header={t(`${translationsForReportTransit4271Columns}.Good_Description2`)} />
          <Column field={'Good_Description3'} header={t(`${translationsForReportTransit4271Columns}.Good_Description3`)} />
          <Column field={'Package_Mark'} header={t(`${translationsForReportTransit4271Columns}.Package_Mark`)} />
          <Column field={'cont_Flg'} header={t(`${translationsForReportTransit4271Columns}.cont_Flg`)} />
          <Column field={'cont1'} header={t(`${translationsForReportTransit4271Columns}.cont1`)} />
          <Column field={'cont2'} header={t(`${translationsForReportTransit4271Columns}.cont2`)} />
          <Column field={'seal_Affixed_No'} header={t(`${translationsForReportTransit4271Columns}.seal_Affixed_No`)} />
          <Column field={'seal_Identity'} header={t(`${translationsForReportTransit4271Columns}.seal_Identity`)} />
          <Column field={'Garanty_Cod'} header={t(`${translationsForReportTransit4271Columns}.Garanty_Cod`)} />
          <Column field={'Garanty_Amnt'} header={t(`${translationsForReportTransit4271Columns}.Garanty_Amnt`)} />
          <Column field={'at1_Cod'} header={t(`${translationsForReportTransit4271Columns}.at1_Cod`)} />
          <Column field={'at1_Nbr'} header={t(`${translationsForReportTransit4271Columns}.at1_Nbr`)} />
          <Column field={'at2_Cod'} header={t(`${translationsForReportTransit4271Columns}.at2_Cod`)} />
          <Column field={'at2_Nbr'} header={t(`${translationsForReportTransit4271Columns}.at2_Nbr`)} />
          <Column field={'at3_Cod'} header={t(`${translationsForReportTransit4271Columns}.at3_Cod`)} />
          <Column field={'at3_Nbr'} header={t(`${translationsForReportTransit4271Columns}.at3_Nbr`)} />
          <Column field={'at4_Cod'} header={t(`${translationsForReportTransit4271Columns}.at4_Cod`)} />
          <Column field={'at4_Nbr'} header={t(`${translationsForReportTransit4271Columns}.at4_Nbr`)} />
          <Column field={'Itm_No'} header={t(`${translationsForReportTransit4271Columns}.Itm_No`)} />
          <Column field={'dec_Ref'} header={t(`${translationsForReportTransit4271Columns}.dec_Ref`)} />
          <Column field={'load_List'} header={t(`${translationsForReportTransit4271Columns}.load_List`)} />
          <Column field={'exp_Code'} header={t(`${translationsForReportTransit4271Columns}.exp_Code`)} />
          <Column field={'exp_Nam'} header={t(`${translationsForReportTransit4271Columns}.exp_Nam`)} />
          <Column field={'cty_Export'} header={t(`${translationsForReportTransit4271Columns}.cty_Export`)} />
          <Column field={'cty_Destn_Name'} header={t(`${translationsForReportTransit4271Columns}.cty_Destn_Name`)} />
          <Column field={'Max_Date_Allowed'} header={t(`${translationsForReportTransit4271Columns}.Max_Date_Allowed`)} />
          <Column field={'Nationality_Of_Transport'} header={t(`${translationsForReportTransit4271Columns}.Nationality_Of_Transport`)} />
          <Column field={'cty_Border'} header={t(`${translationsForReportTransit4271Columns}.cty_Border`)} />
          <Column field={'cty_Dep'} header={t(`${translationsForReportTransit4271Columns}.cty_Dep`)} />
          <Column field={'Pack_Nbr'} header={t(`${translationsForReportTransit4271Columns}.Pack_Nbr`)} />
          <Column field={'Package_Code'} header={t(`${translationsForReportTransit4271Columns}.Package_Code`)} />
          <Column field={'transit_Officer'} header={t(`${translationsForReportTransit4271Columns}.transit_Officer`)} />
          <Column field={'del_Cod'} header={t(`${translationsForReportTransit4271Columns}.del_Cod`)} />
          <Column field={'del_Nam'} header={t(`${translationsForReportTransit4271Columns}.del_Nam`)} />
        </DataTable>
      </Box>
    </SimpleCard>
  );
};

export default Transit_4271;
