import { Box, LinearProgress } from '@mui/material';
import axios from 'axios';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { useEffect, useRef, useState } from 'react';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
import { SimpleCard } from '../../components';
import { ROWS_PER_PAGE } from '../../utils/constant';
import { useTranslation } from 'react-i18next';

const translationsForBasedOnError: string = "errors"
const translationsForBasedOn: string = "basedOn"
const translationsForReportDataExchange5053: string = "reports.dataexchange_5053"
const translationsForReportDataExchange5053Columns: string = "reports.dataexchange_5053.columns"

function DataExchange_5053() {
	const [reportData, setReportData] = useState([]);
	const [loading, setLoading] = useState(false);
	const tableRef: any = useRef(null);
  const { t } = useTranslation();

	useEffect(() => { }, []);

	const handleSubmit = async (data: SearchData) => {
		setLoading(true)
		try {
			const res = await axios.post('/reporting/DataExchangeReport5053', {
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
		<SimpleCard title={t(`${translationsForReportDataExchange5053}.title`)}>
			<ReportHeaderInputs
				showStartDate
				showEndDate
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
					<Column field={'Country_of_export'} header={t(`${translationsForReportDataExchange5053Columns}.Country_of_export`)} />
					<Column field={'electronic_ref_number'} header={t(`${translationsForReportDataExchange5053Columns}.electronic_ref_number`)} />
					<Column field={'electronic_ref_date'} header={t(`${translationsForReportDataExchange5053Columns}.electronic_ref_date`)} />
					<Column field={'electronic_document_ref_nber'} header={t(`${translationsForReportDataExchange5053Columns}.electronic_document_ref_nber`)} />
					<Column field={'Country_sender'} header={t(`${translationsForReportDataExchange5053Columns}.Country_sender`)} />
					<Column field={'Country_reciver'} header={t(`${translationsForReportDataExchange5053Columns}.Country_reciver`)} />
					<Column field={'Languge'} header={t(`${translationsForReportDataExchange5053Columns}.Languge`)} />
					<Column field={'Items'} header={t(`${translationsForReportDataExchange5053Columns}.Items`)} />
					<Column field={'COUNTRYDESTINATION'} header={t(`${translationsForReportDataExchange5053Columns}.COUNTRYDESTINATION`)} />
					<Column field={'COUNTRYORIGIN'} header={t(`${translationsForReportDataExchange5053Columns}.COUNTRYORIGIN`)} />
					<Column field={'TOTAL_DEPARTURE_TRANSPORT'} header={t(`${translationsForReportDataExchange5053Columns}.TOTAL_DEPARTURE_TRANSPORT`)} />
					<Column field={'CURRENCY1'} header={t(`${translationsForReportDataExchange5053Columns}.CURRENCY1`)} />
					<Column field={'EXCHANGERATE1'} header={t(`${translationsForReportDataExchange5053Columns}.EXCHANGERATE1`)} />
					<Column field={'USDRATE'} header={t(`${translationsForReportDataExchange5053Columns}.USDRATE`)} />
					<Column field={'TOTAL_AMOUNT_INVOICED'} header={t(`${translationsForReportDataExchange5053Columns}.TOTAL_AMOUNT_INVOICED`)} />
					<Column field={'STAMP_OFFICE'} header={t(`${translationsForReportDataExchange5053Columns}.STAMP_OFFICE`)} />
					<Column field={'TOTAL_TRANSPORT_CROSS_BORDER'} header={t(`${translationsForReportDataExchange5053Columns}.TOTAL_TRANSPORT_CROSS_BORDER`)} />
					<Column field={'OFFICE_ON_BORDER'} header={t(`${translationsForReportDataExchange5053Columns}.OFFICE_ON_BORDER`)} />
					<Column field={'ISSUE_DATE'} header={t(`${translationsForReportDataExchange5053Columns}.ISSUE_DATE`)} />
					<Column field={'DOC_NUMBER'} header={t(`${translationsForReportDataExchange5053Columns}.DOC_NUMBER`)} />
					<Column field={'customs_code'} header={t(`${translationsForReportDataExchange5053Columns}.customs_code`)} />
					<Column field={'proceduer'} header={t(`${translationsForReportDataExchange5053Columns}.proceduer`)} />
					<Column field={'Type_of_document'} header={t(`${translationsForReportDataExchange5053Columns}.Type_of_document`)} />
					<Column field={'CONTAINER_INDICATOR'} header={t(`${translationsForReportDataExchange5053Columns}.CONTAINER_INDICATOR`)} />
					<Column field={'DELIVERY_TERMS_STRING_CODE'} header={t(`${translationsForReportDataExchange5053Columns}.DELIVERY_TERMS_STRING_CODE`)} />
					<Column field={'UTKINDICATOR'} header={t(`${translationsForReportDataExchange5053Columns}.UTKINDICATOR`)} />
					<Column field={'CONSIGNOR_ORG'} header={t(`${translationsForReportDataExchange5053Columns}.CONSIGNOR_ORG`)} />
					<Column field={'Tax_payer_individual_nber'} header={t(`${translationsForReportDataExchange5053Columns}.Tax_payer_individual_nber`)} />
					<Column field={'Address'} header={t(`${translationsForReportDataExchange5053Columns}.Address`)} />
					<Column field={'DECLARANT_ORG'} header={t(`${translationsForReportDataExchange5053Columns}.DECLARANT_ORG`)} />
					<Column field={'DECLARANT_TIN'} header={t(`${translationsForReportDataExchange5053Columns}.DECLARANT_TIN`)} />
					<Column field={'CONSIGNEE_ORG'} header={t(`${translationsForReportDataExchange5053Columns}.CONSIGNEE_ORG`)} />
					<Column field={'CONSIGNEE_Address'} header={t(`${translationsForReportDataExchange5053Columns}.CONSIGNEE_Address`)} />
					<Column field={'TRANSPORT_TRADITIONAL_NAME'} header={t(`${translationsForReportDataExchange5053Columns}.TRANSPORT_TRADITIONAL_NAME`)} />
					<Column field={'TRANSPORT_IDENTIFIER'} header={t(`${translationsForReportDataExchange5053Columns}.TRANSPORT_IDENTIFIER`)} />
					<Column field={'TRANSPORTMODE_CODE'} header={t(`${translationsForReportDataExchange5053Columns}.TRANSPORTMODE_CODE`)} />
					<Column field={'ITTM_NO'} header={t(`${translationsForReportDataExchange5053Columns}.ITTM_NO`)} />
					<Column field={'NET_MASS'} header={t(`${translationsForReportDataExchange5053Columns}.NET_MASS`)} />
					<Column field={'GROSS_MASS'} header={t(`${translationsForReportDataExchange5053Columns}.GROSS_MASS`)} />
					<Column field={'CURRENCY'} header={t(`${translationsForReportDataExchange5053Columns}.CURRENCY`)} />
					<Column field={'EXCHANGERATE'} header={t(`${translationsForReportDataExchange5053Columns}.EXCHANGERATE`)} />
					<Column field={'INVOICE_VALUE'} header={t(`${translationsForReportDataExchange5053Columns}.INVOICE_VALUE`)} />
					<Column field={'Customs_VALUE'} header={t(`${translationsForReportDataExchange5053Columns}.Customs_VALUE`)} />
					<Column field={'GOODS_TNVE_DCODE'} header={t(`${translationsForReportDataExchange5053Columns}.GOODS_TNVE_DCODE`)} />
					<Column field={'GOODS_DESCRIPTION'} header={t(`${translationsForReportDataExchange5053Columns}.GOODS_DESCRIPTION`)} />
					<Column field={'DOCNUMBER'} header={t(`${translationsForReportDataExchange5053Columns}.DOCNUMBER`)} />
					<Column field={'DOCKIND'} header={t(`${translationsForReportDataExchange5053Columns}.DOCKIND`)} />



				</DataTable>
			</Box>
		</SimpleCard>
	);
}

export default DataExchange_5053;