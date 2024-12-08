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

function DPS_4576() {
    const [reportData, setReportData] = useState([]);
    const tableRef: any = useRef(null);

    useEffect(() => { }, []);

    const handleSubmit = async (data: SearchData) => {
        console.log(data);
        try {
            const res = await axios.post('/reporting/DpsReport4576', {
                ...data,
                type: data.customsProcedure,
                customsCode: data.CustomsCode
            });

            setReportData(res.data);
        } catch (error) { }
    };

    return (
        <Container>
            <SimpleCard title="DPS_4576">
                <ReportHeaderInputs
                     showStartDate 
                     showEndDate
                   // ShowTinNumber
                    //showOperationDate
                    showCustomsProcedure
                    showRegDate
                   // showAssesDate
                   // showPayDate
                    showCustomsList
                    ShowRegisterNo
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
                        <Column  style={{ minWidth: '10rem' }} field={'customsNam'} header={'CUSTOMS_NAM'} />
                        <Column style={{ minWidth: '15rem' }}  field={'exsec1'} header={'EXSEC1'} />
                        <Column style={{ minWidth: '15rem' }} field={'exsec2'} header={'EXSEC2'} />
                        <Column style={{ minWidth: '10rem' }} field={'lastCheifExCode'} header={'LASTCHEIFEXCODE'} />
                        <Column   field={'lastCheifExName'} header={'LASTCHEIFEXNAME'} />
                        <Column field={'lastExCodes'} header={'LASTEXCODES'} />
                        <Column style={{ minWidth: '20rem' }}field={'lastExName'} header={'LASTEXNAME'} />
                        <Column field={'RegNbr'} header={'REG_NBR'} />
                        <Column  field={'regDate'} header={'REG_DATE'} />
                        <Column field={'brokerTin'} header={'BROKER_TIN'} />
                        <Column style={{ minWidth: '15rem' }} field={'decNam'} header={'DEC_NAM'} />
                        <Column style={{ minWidth: '20rem' }} field={'companyTin'} header={'COMPANY_TIN'} />
                        <Column style={{ minWidth: '20rem' }}field={'cmpNam'} header={'CMP_NAM'} />
                        <Column style={{ minWidth: '25rem' }} field={'fisCod'} header={'FIS_COD'} />
                        <Column style={{ minWidth: '20rem' }} field={'finNam'} header={'FIN_NAM'} />
                        <Column field={'countryOrg'} header={'COUNTRY_ORG'} />
                        <Column style={{ minWidth: '15rem' }} field={'countryExport'} header={'COUNTRY_EXPORT'} />
                        <Column style={{ minWidth: '15rem' }} field={'countryDest'} header={'COUNTRY_DEST'} />
                        <Column style={{ minWidth: '12rem' }} field={'declarationValueAfs'} header={'DECLARATION_VALUE_AFS'} />
                        <Column style={{minWidth: "12rem"}} field={'declarationTaxes'} header={'DECLARATION_TAXES'} />
                        <Column style={{ minWidth: '14rem' }} field={'status'} header={'STATUS'} />
                        <Column style={{ minWidth: '20rem' }}field={'cmpExpCod'} header={'CMP_EXP_COD'} />
                        <Column style={{ minWidth: '20rem' }}field={'locGoods'} header={'LOC_GOODS'} />
                        <Column style={{ minWidth: '20rem' }}field={'txtFre'} header={'TXT_FRE'} />
                    </DataTable>
                </Box>
            </SimpleCard>
        </Container>
    );
}

export default DPS_4576;