import { SimpleCard } from '../../components';
import { Box, styled } from '@mui/material';
import React, { useEffect, useState, useRef } from 'react';
import { ROWS_PER_PAGE } from '../../utils/constant';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';
import { ReportHeaderInputs, SearchData } from 'src/app/components/report-header-inputs';
import { useTranslation } from 'react-i18next';

const translationsForBasedOnError: string = "errors"
const translationsForBasedOn: string = "basedOn"
const translationsForReportsigtasreport: string = "reports.sigtas_report"
const translationsForReportsigtasreportColumns: string = "reports.sigtas_report.columns"


const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' }
  }
}));

const OverallReport = () => {
  const [reportData, setReportData] = useState([]);
  const tableRef: any = useRef(null);
  const { t } = useTranslation();

  useEffect(() => { }, []);

  const handleSubmit = async (data: SearchData) => {
    try {
      const res = await axios.post('/reporting/find-by-criteria', {
        ...data,
        type: data.customsProcedure,
        customsCode: data.CustomsCode
      });

      setReportData(res.data);
    } catch (error) { }
  };

  return (
    <Container>
      <SimpleCard title={t(`${translationsForReportsigtasreport}.title`)}>
        <ReportHeaderInputs
          report='findBy Creteria'
          showStartDate
          showEndDate
          ShowTinNumber
          showCustomsProcedure
          showCustomsList
          onSearch={handleSubmit}
          tabelRef={tableRef}
        />
        <Box width="100%" overflow="auto">
          <DataTable
            exportFilename={`Sigtas Report ${new Date().toISOString()}`}
            ref={tableRef}
            value={reportData}
            rows={ROWS_PER_PAGE}
            rowsPerPageOptions={[5, 10, 25, 50, 100]}
            paginator
            stripedRows
            showGridlines
          >
            <Column filter filterField="finName" field={'finName'} header={t(`${translationsForReportsigtasreportColumns}.finName`)} />
            <Column field={'status'} header={t(`${translationsForReportsigtasreportColumns}.status`)} />
            <Column field={'borderCustoms'} header={t(`${translationsForReportsigtasreportColumns}.borderCustoms`)} />
            <Column filter filterField="brokerName" field={'brokerName'} header={t(`${translationsForReportsigtasreportColumns}.brokerName`)} />
            <Column filter filterField="brokerTIN" field={'brokerTIN'} header={t(`${translationsForReportsigtasreportColumns}.brokerTIN`)} />
            <Column field={'cmpFisCod'} header={t(`${translationsForReportsigtasreportColumns}.cmpFisCod`)} />
            <Column field={'cmpName'} header={t(`${translationsForReportsigtasreportColumns}.cmpName`)} />
            <Column filter filterField="companyTin" field={'companyTin'} header={t(`${translationsForReportsigtasreportColumns}.companyTin`)} />
            <Column field={'countryOrg'} header={t(`${translationsForReportsigtasreportColumns}.countryOrg`)} />
            <Column field={'currencyRate'} header={t(`${translationsForReportsigtasreportColumns}.currencyRate`)} />
            <Column field={'currrencyCode'} header={t(`${translationsForReportsigtasreportColumns}.currrencyCode`)} />
            <Column field={'customsProc'} header={t(`${translationsForReportsigtasreportColumns}.customsProc`)} />
            <Column field={'destCustoms'} header={t(`${translationsForReportsigtasreportColumns}.destCustoms`)} />
            <Column field={'dsc1'} header={t(`${translationsForReportsigtasreportColumns}.dsc1`)} />
            <Column field={'dsc2'} header={t(`${translationsForReportsigtasreportColumns}.dsc2`)} />
            <Column field={'gdsOrgCty'} header={t(`${translationsForReportsigtasreportColumns}.gdsOrgCty`)} />
            <Column field={'hsCode'} header={t(`${translationsForReportsigtasreportColumns}.hsCode`)} />
            <Column field={'ideCuoCod'} header={t(`${translationsForReportsigtasreportColumns}.ideCuoCod`)} />
            <Column field={'itemGrossWeight'} header={t(`${translationsForReportsigtasreportColumns}.itemGrossWeight`)} />
            <Column field={'itemNetWeight'} header={t(`${translationsForReportsigtasreportColumns}.itemNetWeight`)} />
            <Column field={'itemNo'} header={t(`${translationsForReportsigtasreportColumns}.itemNo`)} />
            <Column field={'itemTaxes'} header={t(`${translationsForReportsigtasreportColumns}.itemTaxes`)} />
            <Column field={'itemTotal'} header={t(`${translationsForReportsigtasreportColumns}.itemTotal`)} />
            <Column field={'itemValueAfs'} header={t(`${translationsForReportsigtasreportColumns}.itemValueAfs`)} />
            <Column field={'itemValueCurrency'} header={t(`${translationsForReportsigtasreportColumns}.itemValueCurrency`)} />
            <Column field={'locGoods'} header={t(`${translationsForReportsigtasreportColumns}.locGoods`)} />
            <Column field={'pkgNbr'} header={t(`${translationsForReportsigtasreportColumns}.pkgNbr`)} />
            <Column field={'procExt'} header={t(`${translationsForReportsigtasreportColumns}.procExt`)} />
            <Column field={'refYear'} header={t(`${translationsForReportsigtasreportColumns}.refYear`)} />
            <Column field={'regDate'} header={t(`${translationsForReportsigtasreportColumns}.regDate`)} />
            <Column field={'regNo'} header={t(`${translationsForReportsigtasreportColumns}.regNo`)} />
            <Column field={'sadFlw'} header={t(`${translationsForReportsigtasreportColumns}.sadFlw`)} />
            <Column filter field={'taxCode'} header={t(`${translationsForReportsigtasreportColumns}.taxCode`)} />
            <Column field={'taxDecription'} header={t(`${translationsForReportsigtasreportColumns}.taxDecription`)} />
            <Column field={'taxRate'} header={t(`${translationsForReportsigtasreportColumns}.taxRate`)} />
            <Column field={'tptCuoCod'} header={t(`${translationsForReportsigtasreportColumns}.tptCuoCod`)} />
            <Column field={'truck1'} header={t(`${translationsForReportsigtasreportColumns}.truck1`)} />
            <Column field={'typeOfPack'} header={t(`${translationsForReportsigtasreportColumns}.typeOfPack`)} />
            <Column field={'typeSad'} header={t(`${translationsForReportsigtasreportColumns}.typeSad`)} />
          </DataTable>
        </Box>
      </SimpleCard>
    </Container>
  );
};

export default OverallReport;
