import React, { useEffect, useState } from 'react';
import { Row, Col, Condition, DatePicker, NumberInput, Dropdown } from './base-component';
import { LoadingButton } from '@mui/lab';
import { CustomsProcedure } from './customs-procedure';
import axios from 'axios';
import { RadioButton } from 'primereact/radiobutton';
import { useEffect, useState } from 'react';
import { Col, Condition, DatePicker, Dropdown, NumberInput, Row, TextInput, BasedOn } from './base-component';
import { Stautes } from './base-component/status';
import { CustomsProcedure } from './customs-procedure';
import { ExemptedType } from './Exemptiontype';

interface CustomsInterface {
  CustomsName: string;
  CustomsCode: string;
}
export interface SearchData {
  dateType?: string;
  startDate?: string;
  endDate?: string;
  companyTin?: number;
  customsProcedure?: string | null;
  basedOn?: string;
  basedOnTransit?: string;
  basedOnTransitValue?: string;
  basedOnExemption?: string;
  basedOnExemptionValue?: string;
  basedOnExemption2?: string;
  CustomsCode?: string;
  exemptionType?: string;
}
interface ReportHeaderInputsProps {
  onChage?: (e: SearchData) => void;
  onSearch?: (e: SearchData) => void;
  showRegDate?: boolean,
  showAssesDate?: boolean,
  showPayDate?: boolean,
  showStartDate?: boolean;
  showEndDate?: boolean;
  ShowTinNumber?: boolean;
  showTirepdNum?: boolean;
  ShowRegisterNo?: boolean;
  showCustomsProcedure?: boolean;
  showCustomsList?: boolean;
  ShowHsCode?: boolean;
  showLocationCode?: boolean;
  showExemptionRepNo?: boolean;
  showfarwarCode?: boolean;
  showNumPalate?: boolean;
  showForeignRegNo?: boolean;
  showExemptionType?: boolean;
  tabelRef: any;
}

export const ReportHeaderInputs = ({
  tabelRef,
  onChage = () => { },
  onSearch = () => { },
  showRegDate,
  showAssesDate,
  showUserDate,
  showDeclarationDate,
  showArrivalDate,
  showValidationDate,
  showPayDate,
  showOperationDate,
  showExitDate,
  showLinkedDate,
  showCreationDate,
  showArrivalDate,
  showValidationDate,
  showDepartureDate,
  showFinalExitDate,
  showStartDate,
  showEndDate,
  ShowTinNumber,
  showTirepdNum,
  ShowRegisterNo,
  showForeignRegNo,
  showCustomsProcedure,
  showTransitType,
  showTransitType2,
  showStatus1,
  showOpreationOptionValuation,
  showOpreationOptionValuationValue,
  showbased1,
  showBasedOnExemption,
  showBasedOnExemptionValue,
  showAcceptR,
  showBasedOn2,
  ShowModOfPayment,
  showExemptionType,
  showCustomsList
}: ReportHeaderInputsProps) => {
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [companyTin, setCompanyTin] = useState<string>('');
  const [customsProcedure, setCustomsProcedure] = useState<string>('');
  const [transitType, setTransitType] = useState<string>('');
  const [transitType2, setTransitType2] = useState<string>('');
  const [exemptedStatus, setExemptedStatus] = useState<string>('');
  const [customsList, setCustomsList] = useState<Array<CustomsInterface>>([]);
  const [customsCode, setCustomsCode] = useState<string>('');
  const [destinationCustomsCode, setDestinationCustomsCode] = useState<string>('');
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
      });
    }
  }, [showCustomsList]);

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
    if (startDate || endDate || companyTin || customsProcedure || dateType || exemptedStatus) {
      const formattedData = formatData();
      onChage(formattedData);
    }
    console.log(dateType)
  }, [startDate, endDate, companyTin, customsProcedure, dateType, exemptedStatus]);

  const formatData = () => {
    return {
      ...(dateType && { dateType }),
      ...(showStartDate && { startDate }),
      ...(showEndDate && { endDate }),
      ...(ShowTinNumber && { companyTin: parseInt(companyTin) }),
      ...(showCustomsProcedure && {
        customsProcedure: customsProcedure === 'all' ? null : customsProcedure
      }),
      ...(showExemptionType && {
        exemptedStatus: exemptedStatus === 'all' ? null : exemptedStatus
      }),
      ...(showCustomsList && { CustomsCode: customsCode })
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
        <Condition condition={showExitDate}>
          <Col xs={6} md={4} lg={2} xl={2}>
            <RadioButton inputId="dateType4" value="ExitDate" onChange={(e) => setDateType(e.value)} checked={dateType === 'ExitDate'} />
            <label htmlFor="dateType4" style={{ marginLeft: "0.3em" }}>ExitDate</label>
          </Col>
        </Condition>
        <Condition condition={showArrivalDate}>
          <Col xs={6} md={4} lg={2} xl={2}>
            <RadioButton inputId="dateType5" value="ArrDate" onChange={(e) => setDateType(e.value)} checked={dateType === 'ArrDate'} />
            <label htmlFor="dateType5" style={{ marginLeft: "0.3em" }}>ArrivalDate</label>
          </Col>
        </Condition>
        <Condition condition={showValidationDate}>
          <Col xs={6} md={4} lg={2} xl={2}>
            <RadioButton inputId="dateType6" value="ValidDate" onChange={(e) => setDateType(e.value)} checked={dateType === 'ValidDate'} />
            <label htmlFor="dateType6" style={{ marginLeft: "0.3em" }}>ValidationDate</label>
          </Col>
        </Condition>
        <Condition condition={showFinalExitDate}>
          <Col xs={6} md={4} lg={2} xl={2}>
            <RadioButton inputId="dateType7" value="FinExitDate" onChange={(e) => setDateType(e.value)} checked={dateType === 'FinExitDate'} />
            <label htmlFor="dateType7" style={{ marginLeft: "0.3em" }}>FinalExitDate</label>
          </Col>
        </Condition>
        <Condition condition={showDepartureDate}>
          <Col xs={6} md={4} lg={2} xl={2}>
            <RadioButton inputId="dateType8" value="DepDate" onChange={(e) => setDateType(e.value)} checked={dateType === 'DepDate'} />
            <label htmlFor="dateType8" style={{ marginLeft: "0.3em" }}>DepartureDate</label>
          </Col>
        </Condition>
        <Condition condition={showLinkedDate}>
          <Col xs={6} md={4} lg={2} xl={2}>
            <RadioButton inputId="dateType9" value="LinkedDate" onChange={(e) => setDateType(e.value)} checked={dateType === 'LinkedDate'} />
            <label htmlFor="dateType9" style={{ marginLeft: "0.3em" }}>LinkedDate</label>
          </Col>
        </Condition>
        <Condition condition={showCreationDate}>
          <Col xs={6} md={4} lg={2} xl={2}>
            <RadioButton inputId="dateType10" value="CreationDate" onChange={(e) => setDateType(e.value)} checked={dateType === 'CreationDate'} />
            <label htmlFor="dateType10" style={{ marginLeft: "0.3em" }}>CreationDate</label>
          </Col>
        </Condition>
        <Condition condition={showOperationDate}>
          <Col xs={6} md={4} lg={2} xl={2}>
            <RadioButton inputId="dateType4" value="OperationDate" onChange={(e) => setDateType(e.value)} checked={dateType === 'OperationDate'} />
            <label htmlFor="dateType4" style={{ marginLeft: "0.3em" }}>OperationDate</label>
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
        <Condition condition={showGoods}>
          <NumberInput
            label="Goods"
            xs={6}
            md={4}
            lg={4}
            xl={3}
            value={goods}
            onChange={(e) => {
              setgoods(e.target.value);
            }}
          />

        </Condition>
        <Condition condition={showUserName}>
          <TextInput
            label="Username"
            xs={6}
            md={4}
            lg={4}
            xl={3}
            value={username}
            onChange={(e) => {
              setUserName(e.target.value);
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
        <Condition condition={showStatus}>
          <Stautes
            id="CMP_Status"
            xs={6}
            md={4}
            lg={4}
            xl={3}
            value={status}
            onChange={(e) => {
              setStatus(e.target.value);
            }}
          />

        </Condition>

        <Condition condition={showBasedOn}>
          <BasedOn
            id='BasedOn'
            xs={6}
            md={4}
            lg={4}
            xl={3}
            options={basedOnOptions}
            basedOnValue={basedOnValue}
            value={basedOn}
            onChange={(e) => {
              setbasedOn(e.target.value);
            }}
            onChangeValue={(e) => { setBasedOnValue(e.target.value) }}
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
            options={destinationCustomsList}
            onChange={(e) => {
              setCustomsCode(e.target.value);
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
