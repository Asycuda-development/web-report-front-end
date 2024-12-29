import { Box, styled } from '@mui/material';
import axios from 'axios';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { useEffect, useRef, useState } from 'react';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
import { SimpleCard } from '../../components';
import { ROWS_PER_PAGE } from '../../utils/constant';

const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' }
  }
}));

const RevenueReport4158 = () => {
  const [reportData, setReportData] = useState([]);
  const tableRef: any = useRef(null);

  useEffect(() => {}, []);

  const handleSubmit = async (data: SearchData) => {
    try {
        console.log(data)
      const res = await axios.post('/reporting/RevenueReport4158', {
        startDate: data.startDate,
        endDate: data.endDate,
        customsCode: data.CustomsCode,
        type: data.customsProcedure,
        ...data
      });

      setReportData(res.data);
    } catch (error) {}
  };

  return (
    <Container>
      <SimpleCard title="RevenueReport4158">
        <ReportHeaderInputs
          showStartDate
          showEndDate
          showCustomsList
          // ShowTinNumber
           //showCustomsProcedure
          showRegDate
          showPayDate
          //showCustomsProcedure
          //ShowTinNumber
          onSearch={handleSubmit}
          tabelRef={tableRef}
        />
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
            <Column style={{minWidth: "20rem"}} field={'office'} header={'OFFICE '} />
            <Column style={{minWidth: "12rem"}} field={'amt_total'} header={'amt_total'} />
            <Column field={'amt_028'} header={'amt_028'} />
            <Column  field={'amt_026'} header={'amt_026'} />
            <Column field={'amt_022'} header={'amt_022'} />
            <Column field={'amt_21'} header={'amt_21'} />
            <Column field={'amt_45'} header={'amt_45'} />
            <Column field={'amt_41'} header={'amt_41'} />
            <Column field={'amt_43'} header={'amt_43'} />
            <Column field={'amt_46'} header={'amt_46'} />
            <Column field={'amt_47'} header={'amt_47'} />
            <Column field={'amt_047'} header={'amt_047'} />
            <Column field={'amt_42'} header={'amt_42'} />
            <Column field={'amt_64'} header={'amt_64'} />
            <Column field={'amt_25'} header={'amt_25'} />
            <Column field={'amt_68'} header={'amt_68'} />
            <Column field={'amt_66'} header={'amt_66'} />
            <Column field={'amt_029'} header={'amt_029'} />
            <Column field={'amt_039'} header={'amt_039'} />
            <Column field={'amt_038'} header={'amt_038'} />
            <Column field={'amt_11'} header={'amt_11'} />
            <Column field={'amt_12'} header={'amt_12'} />
            <Column field={'amt_14'} header={'amt_14'} />
            <Column field={'amt_015'} header={'amt_015'} />
            <Column field={'amt_016'} header={'amt_016'} />
            <Column field={'amt_017'} header={'amt_017'} />
            <Column field={'amt_20'} header={'amt_20'} />
            <Column field={'amt_32'} header={'amt_32'} />
            <Column field={'amt_49'} header={'amt_49'} />
            <Column field={'amt_51'} header={'amt_51'} />
            <Column field={'amt_52'} header={'amt_52'} />
            <Column field={'amt_53'} header={'amt_53'} />
            <Column field={'amt_58'} header={'amt_58'} />
            <Column field={'amt_65'} header={'amt_65'} />
            <Column field={'amt_70'} header={'amt_70'} />
            <Column field={'amt_75'} header={'amt_75'} />
            <Column field={'amt_025'} header={'amt_025'} />
            <Column field={'amt_040'} header={'amt_040'} />
            <Column field={'amt_044'} header={'amt_044'} />
            <Column field={'amt_076'} header={'amt_076'} />
            <Column field={'amt_13'} header={'amt_13'} />
            <Column field={'amt_15'} header={'amt_15'} />
            <Column field={'amt_16'} header={'amt_16'} />
            <Column field={'amt_17'} header={'amt_17'} />
            <Column field={'amt_19'} header={'amt_19'} />
            <Column field={'amt_55'} header={'amt_55'} />
            <Column field={'amt_57'} header={'amt_57'} />
            <Column field={'amt_60'} header={'amt_60'} />
            <Column field={'amt_67'} header={'amt_67'} />
            <Column field={'amt_72'} header={'amt_72'} />
            <Column field={'amt_73'} header={'amt_73'} />
            <Column field={'amt_74'} header={'amt_74'} />
            <Column field={'amt_77'} header={'amt_77'} />
            <Column field={'amt_78'} header={'amt_78'} />
            <Column field={'amt_79'} header={'amt_79'} />
            <Column field={'amt_80'} header={'amt_80'} />
            <Column field={'amt_021'} header={'amt_021'} />
            <Column field={'amt_63'} header={'amt_63'} />
            <Column field={'amt_080'} header={'amt_080'} />
            <Column field={'amt_81'} header={'amt_81'} />
            <Column field={'amt_82'} header={'amt_82'} />
            <Column field={'amt_83'} header={'amt_83'} />
            <Column field={'amt_84'} header={'amt_84'} />
            <Column field={'amt_85'} header={'amt_85'} />
            <Column field={'amt_86'} header={'amt_86'} />
            <Column field={'amt_87'} header={'amt_87'} />
            <Column field={'amt_88'} header={'amt_88'} />
            <Column field={'amt_89'} header={'amt_89'} />
            <Column field={'amt_90'} header={'amt_90'} />
            <Column field={'amt_92'} header={'amt_92'} />
            <Column field={'amt_93'} header={'amt_93'} />
            <Column field={'amt_94'} header={'amt_94'} />
            <Column field={'amt_96'} header={'amt_96'} />
            <Column field={'amt_97'} header={'amt_97'} />
            <Column field={'amt_33'} header={'amt_33'} />
            <Column field={'amt_61'} header={'amt_61'} />
            <Column field={'amt_62'} header={'amt_62'} />
            <Column field={'amt_71'} header={'amt_71'} />
            <Column field={'amt_098'} header={'amt_098'} />
            <Column field={'amt_099'} header={'amt_099'} />
            <Column field={'amt_100'} header={'amt_100'} />
            <Column field={'amt_019'} header={'amt_019'} />
            {/* <Column field={'tad_tot'} header={'Customs Value'} /> */}
          </DataTable>
        </Box>
      </SimpleCard>
    </Container>
  );
};

export default RevenueReport4158;
