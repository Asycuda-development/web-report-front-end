import { Box, LinearProgress,styled } from '@mui/material';
import axios from 'axios';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { useEffect, useRef, useState } from 'react';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
import { SimpleCard } from '../../components';
import { ROWS_PER_PAGE } from '../../utils/constant';
//checked



function DPS_4559() {
    const [reportData, setReportData] = useState([]);
    const tableRef: any = useRef(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => { }, []);

    const handleSubmit = async (data: SearchData) => {
        setLoading(true);
        try {
            const res = await axios.post('/reporting/DpsReport4559', {
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
            <SimpleCard title="DPS_4559">
                <ReportHeaderInputs
                    showStartDate 
                    showEndDate
                    //ShowTinNumber
                    //showOperationDate
                    //showCustomsProcedure
                    showRegDate
                   // showAssesDate
                   // showPayDate
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
                        <Column  field={'typSad'} header={'SAD_TYPE'} />
                        <Column  field={'typProc'} header={'TYP_PROC'} />
                        <Column  field={'office'} header={'OFFICE_NAME'} />
                        <Column  field={'status'} header={'STATUS'} />
                        <Column field={'sadCnt'} header={'SAD_CNT'} />
                        <Column field={'type'} header={'TYPE_E/I'} />
                       

                    </DataTable>
                </Box>
            </SimpleCard>
    );
}

export default DPS_4559;