import { SimpleCard } from '../../components';
import { Box, LinearProgress } from '@mui/material';
import { useState, useRef } from 'react';
import { ROWS_PER_PAGE } from '../../utils/constant';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
import { useTranslation } from 'react-i18next';

const translationsForBasedOnError: string = "errors"
const translationsForBasedOn: string = "basedOn"
const translationsForReportTransit4270: string = "reports.transit_4270"
const translationsForReportTransit4270Columns: string = "reports.transit_4270.columns"

const Transit_4270 = () => {
    const [reportData, setReportData] = useState([]);
    const tableRef: any = useRef(null);
    const [loading, setLoading] = useState(false);
    const { t } = useTranslation();

    const handleSubmit = async (data: SearchData) => {
        try {
            setLoading(true);
            const res = await axios.post('/reporting/TransitReport4270', {
                type: data.customsProcedure,
                customsCode: data.CustomsCode,
                ...data
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
        <SimpleCard title={t(`${translationsForReportTransit4270}.title`)}>
            <ReportHeaderInputs
                report='Transit_4270'
                showStartDate
                showEndDate
                showRegDate
                showTransitType
                showcontainerNumber
                showDestinationCustomsList
                showDepartureCustomsList
                onSearch={handleSubmit}
                tabelRef={tableRef}

            />
            {loading && (
                <LinearProgress />
            )}
            <Box width="100%" overflow="auto">
                <DataTable
                    exportFilename={`Transit Report 4270 ${new Date().toISOString()}`}
                    ref={tableRef}
                    value={reportData}
                    rows={ROWS_PER_PAGE}
                    rowsPerPageOptions={[5, 10, 25, 50, 100]}
                    paginator
                    stripedRows
                    showGridlines
                >
                    <Column field={'dept_Off_Name'} header={t(`${translationsForReportTransit4270Columns}.dept_Off_Name`)} />
                    <Column field={'destn_Name'} header={t(`${translationsForReportTransit4270Columns}.destn_Name`)} />
                    <Column field={'status'} header={t(`${translationsForReportTransit4270Columns}.status`)} />
                    <Column field={'reg_No'} header={t(`${translationsForReportTransit4270Columns}.reg_No`)} />
                    <Column field={'reg_Date'} header={t(`${translationsForReportTransit4270Columns}.reg_Date`)} />
                    <Column field={'arr_Date'} header={t(`${translationsForReportTransit4270Columns}.arr_Date`)} />
                    <Column field={'transit_Officer'} header={t(`${translationsForReportTransit4270Columns}.transit_Officer`)} />
                    <Column field={'t1_Declarant_Code'} header={t(`${translationsForReportTransit4270Columns}.t1_Declarant_Code`)} />
                    <Column field={'T1_Declarant_Name'} header={t(`${translationsForReportTransit4270Columns}.T1_Declarant_Name`)} />
                    <Column field={'cns_Code'} header={t(`${translationsForReportTransit4270Columns}.cns_Code`)} />
                    <Column field={'cns_Name'} header={t(`${translationsForReportTransit4270Columns}.cns_Name`)} />
                    <Column field={'principal_Code'} header={t(`${translationsForReportTransit4270Columns}.principal_Code`)} />
                    <Column field={'principal_Name'} header={t(`${translationsForReportTransit4270Columns}.principal_Name`)} />
                    <Column field={'cty_Export_name'} header={t(`${translationsForReportTransit4270Columns}.cty_Export_name`)} />
                    <Column field={'cty_Destn_Nam'} header={t(`${translationsForReportTransit4270Columns}.cty_Destn_Nam`)} />
                    <Column field={'mod_of_Transport'} header={t(`${translationsForReportTransit4270Columns}.mod_of_Transport`)} />
                    <Column field={'gross_Mass'} header={t(`${translationsForReportTransit4270Columns}.gross_Mass`)} />
                    <Column field={'Net_Mass'} header={t(`${translationsForReportTransit4270Columns}.Net_Mass`)} />
                    <Column field={'hscode'} header={t(`${translationsForReportTransit4270Columns}.hscode`)} />
                    <Column field={'Good_Description2'} header={t(`${translationsForReportTransit4270Columns}.Good_Description2`)} />
                    <Column field={'Nationality_Of_Transpor'} header={t(`${translationsForReportTransit4270Columns}.Nationality_Of_Transpor`)} />
                    <Column field={'Package_Mark'} header={t(`${translationsForReportTransit4270Columns}.Package_Mark`)} />
                    <Column field={'cont_Flg'} header={t(`${translationsForReportTransit4270Columns}.cont_Flg`)} />
                    <Column field={'seal_affixed_No'} header={t(`${translationsForReportTransit4270Columns}.seal_affixed_No`)} />
                    <Column field={'seal_Identity'} header={t(`${translationsForReportTransit4270Columns}.seal_Identity`)} />
                    <Column field={'dec_Ref'} header={t(`${translationsForReportTransit4270Columns}.dec_Ref`)} />
                    <Column field={'destn_City'} header={t(`${translationsForReportTransit4270Columns}.destn_City`)} />
                    <Column field={'transit_Type'} header={t(`${translationsForReportTransit4270Columns}.transit_Type`)} />
                </DataTable>
            </Box>
        </SimpleCard>
    );
};

export default Transit_4270;
