import { useEffect, useState } from 'react';
import {
  Row,
  Col,
  Condition,
  DatePicker,
  NumberInput,
  Dropdown,
  TextInput
} from './base-component';
import { LoadingButton } from '@mui/lab';
import { CustomsProcedure } from './customs-procedure';
import { BasedOn } from './based_On';
import axios from 'axios';
import { RadioButton } from 'primereact/radiobutton';
import { ExemptedType } from './Exemptiontype';
import { TransitType } from './TransitType';
import { StatusExemption } from './StatusExemption';
import { InputText } from 'primereact/inputtext';
import { string } from 'prop-types';
import { BasedOnTransit } from './BasedOnTransit';
import { BasedOnExemption } from './BasedOnExemption';
import { BasedOnExemption2 } from './BasedOnExemption2';
interface CustomsInterface {
  CustomsName: string;
  CustomsCode: string;
}

export interface SearchData {
  dateType?: string;
  startDate?: string;
  endDate?: string;
  companyTin?: number;
  serPrt?: number;
  customsProcedure?: string | null;
  basedOn?: string;
  basedOnTransit?: string;
  basedOnTransitValue?: string;
  basedOnExemption?: string;
  basedOnExemptionValue?: string;
  basedOnExemption2?: string;
  CustomsCode?: string;
  exemptionType?: string;
  hsCode?: number;
  userName?: string;
  basedOnvalue?: number;
  containerNumber?: string;
  taxCode?: string;
  transitType?: string;
  statusExemption?: string;
  cmpContractorCode?: string;
  i_number?: number;
}
interface ReportHeaderInputsProps {
  onChage?: (e: SearchData) => void;
  onSearch?: (e: SearchData) => void;
  showRegDate?: boolean;
  showAssesDate?: boolean;
  showUserDate?: boolean;
  showDeclarationDate?: boolean;
  showArrivalDate?: boolean;
  showValidationDate?: boolean;
  showPayDate?: boolean;
  showStartDate?: boolean;
  showEndDate?: boolean;
  ShowTinNumber?: boolean;
  showCustomsProcedure?: boolean;
  showbasedon?: boolean;
  showBasedOnTransit?: boolean;
  showBasedOnTransitvalue?: boolean;
  showBasedOnExemption?: boolean;
  showBasedOnExemption2?: boolean;
  showBasedOnExemptionValue?: boolean;
  showCustomsList?: boolean;
  showExemptionType?: boolean;
  showHsCode?: boolean;
  showTaxCode?: boolean;
  showUserName?: boolean;
  showbasedonvalue?: boolean;
  showserPrt?: boolean;
  showcontainerNumber?: boolean;
  showDestinationCustomsList?: boolean;
  showDepartureCustomsList?: boolean;
  showTransitType?: boolean;
  showStatusExemption?: boolean;
  showI_Number?: boolean;
  showCompanyContractorCode?: boolean;
  tabelRef: any;
}

export const ReportHeaderInputs = ({
  tabelRef,
  onChage = () => {},
  onSearch = () => {},
  showRegDate,
  showAssesDate,
  showUserDate,
  showDeclarationDate,
  showArrivalDate,
  showValidationDate,
  showPayDate,
  showStartDate,
  showEndDate,
  ShowTinNumber,
  showCustomsProcedure,
  showExemptionType,
  showHsCode,
  showTaxCode,
  showUserName,
  showbasedon,
  showbasedonvalue,
  showBasedOnTransit,
  showBasedOnTransitvalue,
  showBasedOnExemption,
  showBasedOnExemptionValue,
  showBasedOnExemption2,
  showserPrt,
  showcontainerNumber,
  showCustomsList,
  showDestinationCustomsList,
  showTransitType,
  showStatusExemption,
  showDepartureCustomsList,
  showCompanyContractorCode,
  showI_Number
}: ReportHeaderInputsProps) => {
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [companyTin, setCompanyTin] = useState<string>('');
  const [customsProcedure, setCustomsProcedure] = useState<string>('');
  const [exemptedStatus, setExemptedStatus] = useState<string>('');
  const [customsList, setCustomsList] = useState<Array<CustomsInterface>>([]);
  const [destinationCustomsList, setDestinationCustomsList] = useState<Array<CustomsInterface>>([]);
  const [customsDestCode, setCustomsDestCode] = useState<string>('');
  const [departureCustomsList, setDepartureCustomsList] = useState<Array<CustomsInterface>>([]);
  const [customsDpaCode, setCustomsDpaCode] = useState<string>('');
  const [customsCode, setCustomsCode] = useState<string>('');
  const [dateType, setDateType] = useState<string>('RegDate');
  const [hsCode, setHsCode] = useState<string>('');
  const [taxCode, setTaxtCode] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  const [basedon, setBasedOn] = useState<string>('');
  const [basedOnTransit, setBasedOnTransit] = useState<string>('');
  const [basedOnTransitvalue, setBasedOnTransitValue] = useState<string>('');
  const [basedOnExemption, setBasedOnExemption] = useState<string>('');
  const [basedOnExemptionValuem, setBasedOnExemptionValue] = useState<string>('');
  const [basedOnExemption2, setBasedOnExemption2] = useState<string>('');
  const [serPrt, setserPrt] = useState<string>('');
  const [containerNumber, setContainerNumber] = useState<string>('');
  const [basedonvalue, setBasedOnValue] = useState<string>('');
  const [transitType, setTransitType] = useState<string>('');
  const [statusExemption, setStatusExemption] = useState<string>('');
  const [cmpContractorCode, setCompanyContractorCode] = useState<string>('');
  const [i_number, setI_Number] = useState<string>('');
  useEffect(() => {
    if (
      showCustomsList === true ||
      showDestinationCustomsList === true ||
      showDepartureCustomsList === true
    ) {
      axios.get('reporting/customs-list').then(({ data }: { data: Array<CustomsInterface> }) => {
        const tmp: Array<CustomsInterface> = [];
        data.forEach((item) => {
          tmp.push({ ...item, CustomsName: ` ${item.CustomsCode}|${item.CustomsName}` });
        });
        setDestinationCustomsList([...tmp, { CustomsCode: '', CustomsName: 'All' }]);
        setCustomsList([...tmp, { CustomsCode: '', CustomsName: 'All' }]);
        setDepartureCustomsList([...tmp, { CustomsCode: '', CustomsName: 'All' }]);
      });
    }
  }, [showCustomsList, showDestinationCustomsList, showDepartureCustomsList]);

  const handleSearch = () => {
    if (basedon && !basedonvalue) {
      alert('Please Insert a value for the selected Based_On Option.');
      return;
    }
    if (basedOnTransit && !basedOnTransitvalue) {
      alert('Please Insert a value for the selected Based_On Option.');
      return;
    }
    const formattedData = formatData();

    console.log('searching with', formatData);
    onSearch(formattedData);
    console.log('searching with', formatData);
  };
  useEffect(() => {
    if (
      startDate ||
      endDate ||
      companyTin ||
      customsProcedure ||
      dateType ||
      exemptedStatus ||
      hsCode ||
      taxCode ||
      userName ||
      basedon ||
      basedonvalue ||
      basedOnTransit ||
      basedOnTransitvalue ||
      basedOnExemption ||
      basedOnExemptionValuem ||
      basedOnExemption2 ||
      containerNumber ||
      serPrt ||
      transitType ||
      statusExemption ||
      i_number ||
      cmpContractorCode
    ) {
      const formattedData = formatData();
      onChage(formattedData);
    }
  }, [
    startDate,
    endDate,
    companyTin,
    customsProcedure,
    dateType,
    exemptedStatus,
    hsCode,
    taxCode,
    userName,
    basedon,
    basedonvalue,
    basedOnTransit,
    basedOnTransitvalue,
    basedOnExemption,
    basedOnExemptionValuem,
    basedOnExemption2,
    containerNumber,
    serPrt,
    transitType,
    statusExemption,
    i_number,
    cmpContractorCode
  ]);

  const formatData = () => {
    return {
      ...(dateType && { dateType }),
      ...(showStartDate && { startDate }),
      ...(showEndDate && { endDate }),
      ...(ShowTinNumber && { companyTin: parseInt(companyTin) }),
      ...(showHsCode && { hsCode: parseInt(hsCode) }),
      ...(showTaxCode && { taxCode }),
      ...(showUserName && { userName }),
      ...(showbasedon && { basedon }),
      ...(showserPrt && { serPrt: parseInt(serPrt) }),
      ...(showcontainerNumber && { containerNumber }),
      ...(showbasedonvalue && basedon && { [basedon]: parseInt(basedonvalue) }),
      ...(showBasedOnTransit && basedOnTransit && { basedOn: basedOnTransit }),
      ...(showBasedOnTransitvalue && { basedOnValue: parseInt(basedOnTransitvalue) }),
      ...(showBasedOnExemption && { basedOn: basedOnExemption }),
      ...(showBasedOnExemptionValue && { basedOnValue: parseInt(basedOnExemptionValuem) }),
      ...(showBasedOnExemption2 && { basedOn: basedOnExemption2 }),
      ...(showCompanyContractorCode && { cmpContractorCode }),
      ...(showI_Number && { i_number: parseInt(i_number) }),
      ...(showCustomsProcedure && {
        customsProcedure: customsProcedure === 'all' ? null : customsProcedure
      }),
      ...(showExemptionType && {
        exemptedStatus: exemptedStatus === 'all' ? null : exemptedStatus
      }),
      ...(showCustomsList && { CustomsCode: customsCode }),
      ...(showDestinationCustomsList && { customsDestCode: customsDestCode }),
      ...(showDepartureCustomsList && { customsDpaCode: customsDpaCode }),
      ...(showTransitType && { transitType: transitType }),
      ...(showStatusExemption && { status: statusExemption })
    };
  };

  return (
    <Col lg={12}>
      <Row>
        <Condition condition={showRegDate}>
          <Col xs={6} md={4} lg={2} xl={2}>
            <RadioButton
              inputId="dateType1"
              value="RegDate"
              onChange={(e) => setDateType(e.value)}
              checked={dateType === 'RegDate'}
            />
            <label htmlFor="dateType1" style={{ marginLeft: '0.3em' }}>
              Registration Date
            </label>
          </Col>
        </Condition>
        <Condition condition={showAssesDate}>
          <Col xs={6} md={4} lg={2} xl={2}>
            <RadioButton
              inputId="dateType2"
              value="AssessDate"
              onChange={(e) => setDateType(e.value)}
              checked={dateType === 'AssessDate'}
            />
            <label htmlFor="dateType2" style={{ marginLeft: '0.3em' }}>
              Assessement Date
            </label>
          </Col>
        </Condition>
        <Condition condition={showUserDate}>
          <Col xs={6} md={4} lg={2} xl={2}>
            <RadioButton
              inputId="dateType4"
              value="UserDate"
              onChange={(e) => setDateType(e.value)}
              checked={dateType === 'UserDate'}
            />
            <label htmlFor="dateType4" style={{ marginLeft: '0.3em' }}>
              User Date
            </label>
          </Col>
        </Condition>
        <Condition condition={showDeclarationDate}>
          <Col xs={6} md={4} lg={2} xl={2}>
            <RadioButton
              inputId="dateType2"
              value="DecDate"
              onChange={(e) => setDateType(e.value)}
              checked={dateType === 'DecDate'}
            />
            <label htmlFor="dateType2" style={{ marginLeft: '0.3em' }}>
              Declaration Date
            </label>
          </Col>
        </Condition>
        <Condition condition={showArrivalDate}>
          <Col xs={6} md={4} lg={2} xl={2}>
            <RadioButton
              inputId="dateType"
              value="ArrivalDate"
              onChange={(e) => setDateType(e.value)}
              checked={dateType === 'ArrivalDate'}
            />
            <label htmlFor="dateType2" style={{ marginLeft: '0.3em' }}>
              Arrival Date
            </label>
          </Col>
        </Condition>
        <Condition condition={showValidationDate}>
          <Col xs={6} md={4} lg={2} xl={2}>
            <RadioButton
              inputId="dateType"
              value="ValidationDate"
              onChange={(e) => setDateType(e.value)}
              checked={dateType === 'ValidationDate'}
            />
            <label htmlFor="dateType2" style={{ marginLeft: '0.3em' }}>
              Validation Date
            </label>
          </Col>
        </Condition>
        <Condition condition={showPayDate}>
          <Col xs={6} md={4} lg={2} xl={2}>
            <RadioButton
              inputId="dateType3"
              value="PaymentDate"
              onChange={(e) => setDateType(e.value)}
              checked={dateType === 'PaymentDate'}
            />
            <label htmlFor="dateType3" style={{ marginLeft: '0.3em' }}>
              Payment Date
            </label>
          </Col>
        </Condition>
      </Row>

      <Row>
        <Condition condition={showStartDate}>
          <DatePicker
            label="Start Date"
            xs={6}
            md={4}
            lg={4}
            xl={3}
            value={startDate}
            onChange={(e) => {
              setStartDate(e.target.value);
            }}
          />
        </Condition>
        <Condition condition={showEndDate}>
          <DatePicker
            label="End Date"
            xs={6}
            md={4}
            lg={4}
            xl={3}
            value={endDate}
            onChange={(e) => {
              setEndDate(e.target.value);
            }}
          />
        </Condition>

        <Condition condition={ShowTinNumber}>
          <NumberInput
            label="Tin Number"
            xs={6}
            md={4}
            lg={4}
            xl={3}
            value={companyTin}
            onChange={(e) => {
              setCompanyTin(e.target.value);
            }}
          />
        </Condition>
        <Condition condition={showCompanyContractorCode}>
          <NumberInput
            label="Company_Contractor "
            xs={6}
            md={4}
            lg={4}
            xl={3}
            value={cmpContractorCode}
            onChange={(e) => {
              setCompanyContractorCode(e.target.value);
            }}
          />
        </Condition>
        <Condition condition={showserPrt}>
          <NumberInput
            label="serPrt"
            xs={6}
            md={4}
            lg={4}
            xl={3}
            value={serPrt}
            onChange={(e) => {
              setserPrt(e.target.value);
            }}
          />
        </Condition>
        <Condition condition={showI_Number}>
          <NumberInput
            label="I_Number"
            xs={6}
            md={4}
            lg={4}
            xl={3}
            value={i_number}
            onChange={(e) => {
              setI_Number(e.target.value);
            }}
          />
        </Condition>

        <Condition condition={showHsCode}>
          <NumberInput
            label="HS_Code"
            xs={6}
            md={4}
            lg={4}
            xl={3}
            value={hsCode}
            onChange={(e) => {
              setHsCode(e.target.value);
            }}
          />
        </Condition>
        <Condition condition={showTaxCode}>
          <TextInput
            label="taxCode"
            xs={6}
            md={4}
            lg={4}
            xl={3}
            value={taxCode}
            onChange={(e) => {
              setTaxtCode(e.target.value);
            }}
          />
        </Condition>

        <Condition condition={showUserName}>
          <TextInput
            label="userName"
            xs={6}
            md={4}
            lg={4}
            xl={3}
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </Condition>

        <Condition condition={showcontainerNumber}>
          <TextInput
            label="Container_NO"
            xs={6}
            md={4}
            lg={4}
            xl={3}
            value={containerNumber}
            onChange={(e) => {
              setContainerNumber(e.target.value);
            }}
          />
        </Condition>
        <Condition condition={showCustomsProcedure}>
          <CustomsProcedure
            id="CustomsProcedure"
            xs={6}
            md={4}
            lg={4}
            xl={3}
            value={customsProcedure}
            onChange={(e) => {
              setCustomsProcedure(e.target.value);
            }}
          />
        </Condition>

        <Condition condition={showbasedon}>
          <BasedOn
            id="BasedOn"
            xs={6}
            md={4}
            lg={4}
            xl={3}
            value={basedon}
            onChange={(e: any) => {
              setBasedOn(e.target.value);
              setBasedOnValue('');
            }}
          />
        </Condition>
        <Condition condition={showbasedonvalue}>
          <Col xs={6} md={4} lg={4} xl={3}>
            <NumberInput
              label="Based On Value"
              value={basedonvalue}
              onChange={(e) => {
                setBasedOnValue(e.target.value);
              }}
            />
          </Col>
        </Condition>
        <Condition condition={showBasedOnTransit}>
          <BasedOnTransit
            id="BasedOn"
            xs={6}
            md={4}
            lg={4}
            xl={3}
            value={basedOnTransit}
            onChange={(e: any) => {
              setBasedOnTransit(e.target.value);
              setBasedOnValue('');
            }}
          />
        </Condition>
        <Condition condition={showBasedOnTransitvalue}>
          <Col xs={6} md={4} lg={4} xl={3}>
            <TextInput
              label="Based On Value"
              value={basedOnTransitvalue}
              onChange={(e) => {
                setBasedOnTransitValue(e.target.value);
              }}
            />
          </Col>
        </Condition>
        <Condition condition={showBasedOnExemption}>
          <BasedOnExemption
            id="BasedOn"
            xs={6}
            md={4}
            lg={4}
            xl={3}
            value={basedOnExemption}
            onChange={(e: any) => {
              setBasedOnExemption(e.target.value);
              setBasedOnExemptionValue('');
            }}
          />
        </Condition>
        <Condition condition={showBasedOnExemption2}>
          <BasedOnExemption2
            id="BasedOn"
            xs={6}
            md={4}
            lg={4}
            xl={3}
            value={basedOnExemption2}
            onChange={(e: any) => {
              setBasedOnExemption2(e.target.value);
              setBasedOnExemptionValue('');
            }}
          />
        </Condition>
        <Condition condition={showBasedOnExemptionValue}>
          <Col xs={6} md={4} lg={4} xl={3}>
            <TextInput
              label="Based On Value"
              value={basedOnExemptionValuem}
              onChange={(e) => {
                setBasedOnExemptionValue(e.target.value);
              }}
            />
          </Col>
        </Condition>
        <Condition condition={showTransitType}>
          <TransitType
            id="transitType"
            xs={6}
            md={4}
            lg={4}
            xl={3}
            value={transitType}
            onChange={(e: any) => {
              setTransitType(e.target.value);
            }}
          />
        </Condition>
        <Condition condition={showStatusExemption}>
          <StatusExemption
            id="Status Based On"
            xs={6}
            md={4}
            lg={4}
            xl={3}
            value={statusExemption}
            onChange={(e: any) => {
              setStatusExemption(e.target.value);
            }}
          />
        </Condition>
        <Condition condition={showExemptionType}>
          <ExemptedType
            id="Exemption Type"
            xs={6}
            md={4}
            lg={4}
            xl={3}
            value={exemptedStatus}
            onChange={(e) => {
              setExemptedStatus(e.target.value);
            }}
          />
        </Condition>

        <Condition condition={showCustomsList}>
          <Dropdown
            id="CustomsLis"
            label="Customs List"
            xs={6}
            md={4}
            lg={4}
            xl={3}
            optionLabel="CustomsName"
            optionValue="CustomsCode"
            value={customsCode}
            options={customsList}
            onChange={(e) => {
              setCustomsCode(e.target.value);
            }}
          />
        </Condition>
        <Condition condition={showDestinationCustomsList}>
          <Dropdown
            id="CustomsList"
            label="Destination Customs List"
            xs={6}
            md={4}
            lg={4}
            xl={3}
            optionLabel="CustomsName"
            optionValue="CustomsCode"
            value={customsDestCode}
            options={destinationCustomsList}
            onChange={(e) => {
              setCustomsDestCode(e.target.value);
            }}
          />
        </Condition>
        <Condition condition={showDepartureCustomsList}>
          <Dropdown
            id="CustomsList"
            label="Departure Customs List"
            xs={6}
            md={4}
            lg={4}
            xl={3}
            optionLabel="CustomsName"
            optionValue="CustomsCode"
            value={customsDpaCode}
            options={departureCustomsList}
            onChange={(e) => {
              setCustomsDpaCode(e.target.value);
            }}
          />
        </Condition>
        <Col xs={6} md={4} lg={4} xl={3}>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ marginInline: '2px' }}>
              <LoadingButton
                onClick={handleSearch}
                type="submit"
                color="primary"
                variant="contained"
              >
                Search
              </LoadingButton>
            </div>
            <div style={{ marginInline: '2px' }}>
              <LoadingButton
                onClick={() => tabelRef?.current?.exportCSV()}
                type="submit"
                color="primary"
                variant="contained"
              >
                Export
              </LoadingButton>
            </div>
          </div>
        </Col>
      </Row>
    </Col>
  );
};
