import { Box, LinearProgress, styled } from '@mui/material';
import axios from 'axios';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { useEffect, useRef, useState } from 'react';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
import { SimpleCard } from '../../components';
import { ROWS_PER_PAGE } from '../../utils/constant';

function DPS_4590() {
    const [reportData, setReportData] = useState([]);
    const [loading, setLoading] = useState(false)
    const tableRef: any = useRef(null);

    const handleSubmit = async (data: SearchData) => {
        try {
            setLoading(true)
            const res = await axios.post('/reporting/DpsReport4590', {
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
        <SimpleCard title="DPS_4590">
            <ReportHeaderInputs
                showStartDate
                showEndDate
                showCustomsProcedure
                showRegDate
                showCustomsList
                showExemptionType
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
                    <Column field={'icd'} header={'	Customs Name'} />
                    <Column field={'types'} header={'SAD_TYPE I/E'} />
                    <Column field={'orgCountry'} header={'COUNTRY_ORG'} />
                    <Column field={'destCountry'} header={'DEST_COUNTERY'} />
                    <Column field={'hscode'} header={'HS_CODE'} />
                    <Column field={'hsdsc'} header={'HS_COD_D'} />
                    <Column field={'valueUsd'} header={'VALUE_CURANCY'} />
                    <Column field={'valueAfs'} header={'VALUE_AF'} />
                    <Column field={'taxAmt'} header={'TEXT_AMOUNT'} />
                </DataTable>
            </Box>
        </SimpleCard>
    );
}

export default DPS_4590;