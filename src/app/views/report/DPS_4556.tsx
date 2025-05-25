import { Box, LinearProgress, styled } from '@mui/material';
import axios from 'axios';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { useEffect, useRef, useState } from 'react';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
import { SimpleCard } from '../../components';
import { ROWS_PER_PAGE } from '../../utils/constant';

function DPS_4556() {
    const [reportData, setReportData] = useState([]);
    const [loading, setLoading] = useState(false)
    const tableRef: any = useRef(null);

    const handleSubmit = async (data: SearchData) => {
        try {
            setLoading(true)
            const res = await axios.post('/reporting/DpsReport4556', {
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
        <SimpleCard title="DPS Report Based on SAD Financial Code.">
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
                >
                    <Column filter filterField="ideTypSad" field={'ideTypSad'} header={'SAD Type'} />
                    <Column style={{ minWidth: '10rem' }} field={'tptCuoNam'} header={'Border office'} />
                    <Column field={'ideCuoNam'} header={'Customs Office'} />
                    <Column field={'itemTotal'} header={'Item_Total'} />
                    <Column filter filterField='regNo' field={'regNo'} header={'Reg_No'} />
                    <Column field={'regDate'} header={'Reg_Date'} />
                    <Column filter filterField='asmtNo' field={'asmtNo'} header={'AssessNo'} />
                    <Column field={'astDate'} header={'AssM_Date'} />
                    <Column filter filterField='rcptNo' field={'rcptNo'} header={'Recept_No'} />
                    <Column field={'rcptDate'} header={'Recept_Date'} />
                    <Column field={'status'} header={'Status'} />
                    <Column filter filterField='brokerTin' field={'brokerTin'} header={'Broker_Tin'} />
                    <Column style={{ minWidth: '20rem' }} field={'decNam'} header={'Broker_Name'} />
                    <Column filter filterField='companyTin' field={'companyTin'} header={'Company_Tin'} />
                    <Column style={{ minWidth: "20rem" }} field={'cmpNam'} header={'Company_Name'} />
                    <Column style={{ minWidth: '20rem' }} field={'finNam'} header={'Financial_Name'} />
                    <Column field={'countryOrg'} header={'Country_Orgin'} />
                    <Column filter filterField="countryExport" field={'countryExport'} header={'Country_Export'} />
                    <Column field={'lorryTotal'} header={'Lorry_Total'} />
                    <Column field={'declarationValueCurrency'} header={'Declaration_Value in Foriegn Currency'} />
                    <Column field={'declarationValueAfs'} header={'Declaration_Value_Afs'} />
                    <Column field={'declarationTaxes'} header={'Declaration_Taxes'} />
                    <Column field={'ideCuoCod'} header={'Custom Code'} />
                    <Column style={{ minWidth: '10rem' }} field={'bankNam'} header={'Bank Name'} />
                    <Column style={{ minWidth: '12rem' }} field={'countryDest'} header={'Destination Country Name'} />
                   
                    
             


                </DataTable>
            </Box>
        </SimpleCard>
    );
}

export default DPS_4556;