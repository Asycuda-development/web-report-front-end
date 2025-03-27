import { Box, LinearProgress, styled } from '@mui/material';
import axios from 'axios';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { useEffect, useRef, useState } from 'react';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
import { SimpleCard } from '../../components';
import { ROWS_PER_PAGE } from '../../utils/constant';

function DPS_4591() {
    const [reportData, setReportData] = useState([]);
    const [loading, setLoading] = useState(false)
    const tableRef: any = useRef(null);

    const handleSubmit = async (data: SearchData) => {
        try {
            setLoading(true)
            const res = await axios.post('/reporting/DpsReport4591', {
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
        <SimpleCard title="DPS_4591">
            <ReportHeaderInputs
                showStartDate
                showEndDate
                showCustomsProcedure
                showRegDate
                showCustomsList
                showExemptionType
                ShowHsCode
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
                    <Column field={'type'} header={'SAD_TYPE'} />
                    <Column field={'bcp'} header={'BCP '} />
                    <Column field={'icd'} header={'ICD'} />
                    <Column field={'countryOrigen'} header={'COUNTRY_ORIGEN'} />
                    <Column field={'countryExport'} header={'COUNTRY_EXPORT'} />
                    <Column field={'countryDestination'} header={'COUNTRY_DESTINATION'} />
                    <Column field={'hsCode'} header={'HS_CODE'} />
                    <Column field={'hsDsc'} header={'HS_DSC'} />
                    <Column field={'netWeight'} header={'NET_WEIGHT'} />
                    <Column field={'valueAfs'} header={'VALUE_AFS'} />


                </DataTable>
            </Box>
        </SimpleCard>
    );
}

export default DPS_4591;