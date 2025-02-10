import { Box, styled } from '@mui/material';
import axios from 'axios';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { useEffect, useRef, useState } from 'react';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
import { SimpleCard } from '../../components';
import { ROWS_PER_PAGE } from '../../utils/constant';
//checked

const Container = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: { margin: '16px' },
    '& .breadcrumb': {
        marginBottom: '30px',
        [theme.breakpoints.down('sm')]: { marginBottom: '16px' }
    }
}));

function DataExchangeReport5053() {
    const [reportData, setReportData] = useState([]);
    const tableRef: any = useRef(null);

    useEffect(() => { }, []);

    const handleSubmit = async (data: SearchData) => {
        console.log(data);
        try {
            const res = await axios.post('/reporting/DataExchangeReport5053', {
                ...data,
                type: data.customsProcedure,
                customsCode: data.CustomsCode
            });

            setReportData(res.data);
        } catch (error) { }
    };

    return (
        <Container>
            <SimpleCard title="DataExchangeReport5053">
                <ReportHeaderInputs
                    showStartDate 
                    showEndDate
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
     <Column field={'Country_of_export'}header={'Country_of_export'} />
	 <Column field={'electronic_ref_number'}header={'electronic_ref_number'}/>
	 <Column field={'electronic_ref_date'}header={'electronic_ref_date'}/>
	 <Column field={'electronic_document_ref_nber'}header={'electronic_document_ref_nber'}/>
	 <Column field={'Country_sender'}header={'Country_sender'}/>
	 <Column field={'Country_reciver'}header={'Country_reciver'}/>
	 <Column field={'Languge'}header={'Languge'}/>
	 <Column field={'Items'}header={'Items'}/>
	 <Column field={'COUNTRYDESTINATION'}header={'COUNTRYDESTINATION'}/>
	 <Column field={'COUNTRYORIGIN'}header={'COUNTRYORIGIN'}/>
	 <Column field={'TOTAL_DEPARTURE_TRANSPORT'}header={'TOTAL_DEPARTURE_TRANSPORT'}/>
	 <Column field={'CURRENCY1'}header={'CURRENCY1'}/>
	 <Column field={'EXCHANGERATE1'}header={'EXCHANGERATE1'}/>
	 <Column field={'USDRATE'}header={'USDRATE'}/>
	 <Column field={'TOTAL_AMOUNT_INVOICED'}header={'TOTAL_AMOUNT_INVOICED'}/>
	 <Column field={'STAMP_OFFICE'}header={'STAMP_OFFICE'}/>
	 <Column field={'TOTAL_TRANSPORT_CROSS_BORDER'}header={'TOTAL_TRANSPORT_CROSS_BORDER'}/>
	 <Column field={'OFFICE_ON_BORDER'}header={'OFFICE_ON_BORDER'}/>
	 <Column field={'ISSUE_DATE'}header={'ISSUE_DATE'}/>
	 <Column field={'DOC_NUMBER'}header={'DOC_NUMBER'}/>
	 <Column field={'customs_code'}header={'customs_code'}/>
	 <Column field={'proceduer'}header={'proceduer'}/>
	 <Column field={'Type_of_document'}header={'Type_of_document'}/>
	 <Column field={'CONTAINER_INDICATOR'}header={' CONTAINER_INDICATOR'}/>
	 <Column field={'DELIVERY_TERMS_STRING_CODE'}header={'DELIVERY_TERMS_STRING_CODE'}/>
	 <Column field={'UTKINDICATOR'}header={'UTKINDICATOR'}/>
	 <Column field={'CONSIGNOR_ORG'}header={'CONSIGNOR_ORG'}/>
	 <Column field={'Tax_payer_individual_nber'}header={'Tax_payer_individual_nber'}/>
	 <Column field={'Address'}header={'Address'}/>
	 <Column field={'DECLARANT_ORG'}header={'DECLARANT_ORG'}/>
	 <Column field={'DECLARANT_TIN'}header={'DECLARANT_TIN'}/>
	 <Column field={'CONSIGNEE_ORG'}header={'CONSIGNEE_ORG'}/>
	 <Column field={'CONSIGNEE_Address'}header={'CONSIGNEE_Address'}/>
	 <Column field={'TRANSPORT_TRADITIONAL_NAME'}header={'TRANSPORT_TRADITIONAL_NAME'}/>
	 <Column field={'TRANSPORT_IDENTIFIER'}header={'TRANSPORT_IDENTIFIER'}/>
	 <Column field={'TRANSPORTMODE_CODE'}header={'TRANSPORTMODE_CODE'}/>
	 <Column field={'ITTM_NO'}header={'ITTM_NO'}/>
	 <Column field={'NET_MASS'}header={'NET_MASS'}/>
	 <Column field={'GROSS_MASS'}header={'GROSS_MASS'}/>
	 <Column field={'CURRENCY'}header={'CURRENCY'}/>
	 <Column field={'EXCHANGERATE'}header={'EXCHANGERATE'}/>
	 <Column field={'INVOICE_VALUE'}header={'INVOICE_VALUE'}/>
	 <Column field={'Customs_VALUE'}header={'Customs_VALUE'}/>
	 <Column field={'GOODS_TNVE_DCODE'}header={'GOODS_TNVE_DCODE'}/>
	 <Column field={'GOODS_DESCRIPTION'}header={'GOODS_DESCRIPTION'}/>
	 <Column field={'DOCNUMBER'}header={'DOCNUMBER'}/>
	 <Column field={'DOCKIND'}header={'DOCKIND'}/>

                       

                    </DataTable>
                </Box>
            </SimpleCard>
        </Container>
    );
}

export default DataExchangeReport5053;