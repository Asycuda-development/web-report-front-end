import { SimpleCard } from '../../components';
import { Box, styled, LinearProgress } from '@mui/material';
import { useEffect, useState, useRef } from 'react';
import { ROWS_PER_PAGE } from '../../utils/constant';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';





function DPS_4557() {
  const [reportData, setReportData] = useState([]);
  const tableRef: any = useRef(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => { });

  const handleSubmit = async (data: SearchData) => {
    try {
      setLoading(true);

      const res = await axios.post('/reporting/DpsReport4557', {
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
    
      <SimpleCard title="DPS_4557">
        <ReportHeaderInputs
          showStartDate
          showEndDate
          ShowTinNumber
          showCustomsProcedure
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
              <Column
                filter
                filterField="ide_typ_sad"
                style={{ textAlign: 'center' }}
                field={'ide_typ_sad'}
                header={'Identification Type SAD'}
              />
              <Column field={'tpt_cuo_nam'} header={'Border Cusutom Name'} />
              <Column field={'ide_cuo_nam'} header={'IDE Custom Name'} />
              <Column field={'ide_cuo_cod'} header={'IDE Custom Code'} />
              <Column field={'Item_total'} header={'Total Item'} />
              <Column
                filter
                filterField="Reg_No"
                style={{ minWidth: '4rem', textAlign: 'center' }}
                field={'Reg_No'}
                header={'Register No'}
              />
              <Column field={'Reg_Date'} header={'Register Date'} />
              <Column field={'ASMT_No'} header={'ASMT No'} />
              <Column field={'AST_Date'} header={'AST Date'} />
              <Column field={'RCPT_No'} header={'RCPT No'} />
              <Column field={'RCPT_Date'} header={'RCPT Date '} />
              <Column
                filter
                filterField="bank_nam"
                style={{ minWidth: '8rem', textAlign: 'center' }}
                field={'bank_nam'}
                header={'Bank Name'}
              />
              <Column filter filterField="Broker_TIN" field={'Broker_TIN'} header={'Broker TIN'} />
              <Column field={'dec_nam'} header={'DEC Name'} />
              <Column
                filter
                filterField="Company_TIN"
                style={{ textAlign: 'center' }}
                field={'Company_TIN'}
                header={'Company TIN'}
              />
              <Column style={{ minWidth: '12rem' }} field={'cmp_nam'} header={'Company Name'} />
              <Column field={'CMP_EXP_TIN'} header={'CMP EXP TIN'} />
              <Column style={{ minWidth: '10rem' }} field={'cmp_exp_nam'} header={'cmp exp Name'} />
              <Column
                style={{ minWidth: '10rem', textAlign: 'center' }}
                field={'fin_nam'}
                header={'Finantial Name'}
              />
              <Column field={'fis_cod'} header={'Fisical Code'} />
              <Column field={'Country_Dest'} header={'Destination Country'} />
              <Column field={'Country_Export'} header={'Country Export'} />
              <Column field={'Country_Org'} header={'Country Orgine'} />
              <Column
                style={{ textAlign: 'center' }}
                field={'Lorry_Total'}
                header={'Total Lorry'}
              />
              <Column field={'Item_Value_currency'} header={'Item Value Currency'} />
              <Column field={'Item_Value_Afs'} header={'Item Value Afs'} />
              <Column style={{ textAlign: 'center' }} field={'Item_Taxes'} header={'Item Tax'} />
              <Column filter filterField="status" field={'status'} header={'Status'} />
              <Column style={{ textAlign: 'center' }} field={'pk1'} header={'packing1'} />
              <Column field={'pk2'} header={'packing2'} />
              <Column field={'cap'} header={'CAP'} />
              <Column field={'hscode'} header={'H_S Code'} />
              <Column field={'netwgt'} header={'netwgt'} />
              <Column field={'grswgt'} header={'grswgt'} />
            </DataTable>
          
        </Box>
      </SimpleCard>
   
  );
}

export default DPS_4557;
