import { SimpleCard } from '../../components';
import { Box, styled, LinearProgress } from '@mui/material';
import React, { useEffect, useState, useRef } from 'react';
import { ROWS_PER_PAGE } from '../../utils/constant';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
import { Toast } from 'primereact/toast';

function Revenue_4152() {
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
      const res = await axios.post('/reporting/RevenueReport4152', {
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
    label: 'declarant',
    name: 'declarant'
  },{
    label: 'company',
    name: 'company'
},{
    label: 'O_no',
    name: 'O_no'
}]

  return (
    <SimpleCard title="Revenue_4152">
      <ReportHeaderInputs
        showStartDate
        showEndDate
        showBasedOn
        basedOnOptions={basedOnOptions}
        showRegDate
        showPayDate
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
<Column field={'ide_nam'} header={'ide_nam'}/>
<Column field={'tra_dec_cod'} header={'tra_dec_cod'}/>
<Column field={'tra_cmp_cod'} header={'tra_cmp_cod'}/>
<Column field={'tra_nam'} header={'tra_nam'}/>
<Column field={'O_NO'} header={'O_NO'}/>
<Column field={'o_dat'} header={'o_dat'}/>
<Column field={'REG_dat'} header={'REG_dat'}/>
<Column field={'reg_nbr'} header={'reg_nbr'}/>
<Column field={'RCP_NBR'} header={'RCP_NBR'}/>
<Column field={'Des'} header={'Des'}/>
<Column field={'amt_total'} header={'amt_total'}/>
<Column field={'amt_028'} header={'amt_028'}/>
<Column field={'amt_026'} header={'amt_026'}/>
<Column field={'amt_022'} header={'amt_022'}/>
<Column field={'amt_21'} header={'amt_21'}/>
<Column field={'amt_45'} header={'amt_45'}/>
<Column field={'amt_41'} header={'amt_41'}/>
<Column field={'amt_43'} header={'amt_43'}/>
<Column field={'amt_46'} header={'amt_46'}/>
<Column field={'amt_47'} header={'amt_47'}/>
<Column field={'amt_047'} header={'amt_047'}/>
<Column field={'amt_42'} header={'amt_42'}/>
<Column field={'amt_64'} header={'amt_64'}/>
<Column field={'amt_25'} header={'amt_25'}/>
<Column field={'amt_68'} header={'amt_68'}/>
<Column field={'amt_66'} header={'amt_66'}/>
<Column field={'amt_029'} header={'amt_029'}/>
<Column field={'amt_039'} header={'amt_039'}/>
<Column field={'amt_038'} header={'amt_038'}/>
<Column field={'amt_11'} header={'amt_11'}/>
<Column field={'amt_12'} header={'amt_12'}/>
<Column field={'amt_14'} header={'amt_14'}/>
<Column field={'amt_015'} header={'amt_015'}/>
<Column field={'amt_016'} header={'amt_016'}/>
<Column field={'amt_017'} header={'amt_017'}/>
<Column field={'amt_20'} header={'amt_20'}/>
<Column field={'amt_32'} header={'amt_32'}/>
<Column field={'amt_49'} header={'amt_49'}/>
<Column field={'amt_51'} header={'amt_51'}/>
<Column field={'amt_52'} header={'amt_52'}/>
<Column field={'amt_53'} header={'amt_53'}/>
<Column field={'amt_58'} header={'amt_58'}/>
<Column field={'amt_65'} header={'amt_65'}/>
<Column field={'amt_70'} header={'amt_70'}/>
<Column field={'amt_75'} header={'amt_75'}/>
<Column field={'amt_025'} header={'amt_025'}/>
<Column field={'amt_040'} header={'amt_040'}/>
<Column field={'amt_044'} header={'amt_044'}/>
<Column field={'amt_076'} header={'amt_076'}/>
<Column field={'amt_13'} header={'amt_13'}/>
<Column field={'amt_15'} header={'amt_15'}/>
<Column field={'amt_16'} header={'amt_16'}/>
<Column field={'amt_17'} header={'amt_17'}/>
<Column field={'amt_19'} header={'amt_19'}/>
<Column field={'amt_55'} header={'amt_55'}/>
<Column field={'amt_57'} header={'amt_57'}/>
<Column field={'amt_60'} header={'amt_60'}/>
<Column field={'amt_67'} header={'amt_67'}/>
<Column field={'amt_72'} header={'amt_72'}/>
<Column field={'amt_73'} header={'amt_73'}/>
<Column field={'amt_74'} header={'amt_74'}/>
<Column field={'amt_77'} header={'amt_77'}/>
<Column field={'amt_78'} header={'amt_78'}/>
<Column field={'amt_79'} header={'amt_79'}/>
<Column field={'amt_80'} header={'amt_80'}/>
<Column field={'amt_021'} header={'amt_021'}/>
<Column field={'amt_63'} header={'amt_63'}/>
<Column field={'amt_080'} header={'amt_080'}/>
<Column field={'amt_81'} header={'amt_81'}/>
<Column field={'amt_82'} header={'amt_82'}/>
<Column field={'amt_83'} header={'amt_83'}/>
<Column field={'amt_84'} header={'amt_84'}/>
<Column field={'amt_85'} header={'amt_85'}/>
<Column field={'amt_86'} header={'amt_86'}/>
<Column field={'amt_87'} header={'amt_87'}/>
<Column field={'amt_88'} header={'amt_88'}/>
<Column field={'amt_89'} header={'amt_89'}/>
<Column field={'amt_90'} header={'amt_90'}/>
<Column field={'amt_71'} header={'amt_71'}/>
<Column field={'amt_94'} header={'amt_94'}/>
<Column field={'amt_96'} header={'amt_96'}/>
<Column field={'amt_97'} header={'amt_97'}/>
<Column field={'amt_33'} header={'amt_33'}/>
<Column field={'amt_61'} header={'amt_61'}/>
<Column field={'amt_62'} header={'amt_62'}/>
<Column field={'amt_019'} header={'amt_019'}/>
<Column field={'amt_099'} header={'amt_099'}/>
<Column field={'amt_100'} header={'amt_100'}/>
<Column field={'amt_098'} header={'amt_098'}/>
        </DataTable>
      </ Box>
       <Toast ref={toastRef} />
    </SimpleCard>
  );
}

export default Revenue_4152