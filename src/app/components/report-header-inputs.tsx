import { LoadingButton } from '@mui/lab';
import axios from 'axios';
import { RadioButton } from 'primereact/radiobutton';
import { useEffect, useState } from 'react';
import { Col, Condition, DatePicker, Dropdown, NumberInput, Row, TextInput } from './base-component';
import { Stautes } from './base-component/status';
import { CustomsProcedure } from './customs-procedure';
import { ExemptedType } from './Exemptiontype';
import{TransitType}from './Transit-type';
import{Status2} from './status1'
import { BasedOn } from './based';
import { ModOfPayment } from './ModOfPayment';
import { TransitType2 } from './Transit2';
import { BasedOn2 } from './BasedOn2';
import { AcceptRv } from './A_R_Value';
import { OpreationName } from './OpreationName';
import { BasedOnCondation } from './BasedOnCondation';
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from 'primereact/inputtext';
//checked

interface CustomsInterface {
  CustomsName: string;
  CustomsCode: string;
}
export interface SearchData {
  dateType?: string;
  startDate?: string;
  endDate?: string;
  companyTin?: number;
  RegisterNo?: number;
  TirepdNum?:number;
  hsCode?: number;
  LocationCode?:number;
  ExemptionRepNo?:number;
  farwardCod?:number;
  ForeignRegNo?:number;
  NumPalate?:number;
  goodsCategory?:String;
  UserName?:String;
  transitType?:String;
  transitType2?:String;
  status1?:String,
  OpreationOptionValuation?:boolean,
  OpreationOptionValuationValue?:boolean,
  modeOfPay?:String;
  based1?:String;
  basedOnExemption?:String;
  basedOnExemptionValue?:String;
  AcceptR?:String;
  basedOn2?:String;
  customsProcedure?: string | null;
  CustomsCode?: string;
  exemptionType?: string;
  status?: string;
}
interface ReportHeaderInputsProps {
  onChage?: (e: SearchData) => void;
  onSearch?: (e: SearchData) => void;
  showRegDate?: boolean,
  showAssesDate?: boolean,
  showPayDate?: boolean,
  showLinkedDate?:boolean,
  showCreationDate?:boolean,
  showExitDate?: boolean,
  showArrivalDate?:boolean,
  showValidationDate?:boolean,
  showDepartureDate?:boolean,
  showFinalExitDate?:boolean,
  showOperationDate?: boolean,
  showStartDate?: boolean;
  showEndDate?: boolean;
  ShowTinNumber?: boolean;
  showTirepdNum?:boolean;
  ShowRegisterNo?: boolean;
  showCustomsProcedure?: boolean;
  showDestinationCustomsList?:boolean,
  showTransitType?:boolean,
  showTransitType2?:boolean,
  showStatus1?:boolean,
  showOpreationOptionValuation?:boolean,
  showOpreationOptionValuationValue?:boolean,
  ShowModOfPayment?:boolean,
  showbased1?:boolean,
  showAcceptR?:boolean,
  showBasedOn2?:boolean,
  showBasedOnExemption?:boolean,
  showBasedOnExemptionValue?:boolean,
  showCustomsList?: boolean;
  ShowHsCode?: boolean;
  showLocationCode?:boolean;
  showExemptionRepNo?:boolean;
  showfarwarCode?:boolean;
  showNumPalate?:boolean;
  showForeignRegNo?:boolean;
  showExemptionType?: boolean;
  showStatus?: boolean;
  showGoods?: boolean;
  showUserName?:boolean;
  tabelRef: any;
}
export const ReportHeaderInputs = ({
  tabelRef,
  onChage = () => { },
  onSearch = () => { },
  showRegDate,
  showAssesDate,
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
  showStatus,
  showGoods,
  showUserName,
  showCustomsList,
  showDestinationCustomsList,
  ShowHsCode,
  showLocationCode,
  showExemptionRepNo,
  showfarwarCode,
  showNumPalate,
}: ReportHeaderInputsProps) => {
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [companyTin, setCompanyTin] = useState<string>('');
  const [customsProcedure, setCustomsProcedure] = useState<string>('');
  const [transitType, setTransitType] = useState<string>('');
  const [transitType2, setTransitType2] = useState<string>('');
  const [exemptedStatus, setExemptedStatus] = useState<string>('');
  const [customsList, setCustomsList] = useState<Array<CustomsInterface>>([]);
  const [destinationCustomsList, setDestinationCustomsList] = useState<Array<CustomsInterface>>([]);
  const [status, setStatus] = useState<string>('');
  const [based1, setBased1] = useState<string>('');
  const [basedOnExemption, setBasedOnExemption] = useState<string>('');
  const [basedOnExemptionValue, setBasedOnExemptionValue] = useState<string>('');
  const [acceptR, setAcceptR] = useState<string>('');
  const [based2, setBased2] = useState<string>('');
  const [modofpayment, setModOfPayment] = useState<string>('');
  const [status1, setStatus1] = useState<string>('');
  const [opreationOptionValuation, setOpreationOptionValuation] = useState<string>('');
  const [opreationOptionValuationValue, setOpreationOptionValuationValue] = useState<string>('');
  const [hsCode, setHsCode] = useState<string>('');
  const [tirepdNum, setTirepdNum] = useState<string>('');
  const [locationCode, setLocationCode] = useState<string>('');
  const [exemptionRepNo, setExemptionRepNo] = useState<string>('');
  const [farwardCod, setFarwardCode] = useState<string>('');
  const [registerNo, setRegisterNo] = useState<string>('');
  const [foreignRegNo, setForeignRegNo] = useState<string>('');
  const [numPalate, setNumPalate] = useState<string>('');
  const [goods, setgoods] = useState<string>('');
  const [username, setUserName] = useState<string>('');
  const [customsCode, setCustomsCode] = useState<string>('');
  const [destinationCustomsCode, setDestinationCustomsCode] = useState<string>('');
  const [dateType, setDateType] = useState<string>('RegDate');

  useEffect(() => {
    if (showCustomsList === true) {
      axios.get('reporting/customs-list').then(({ data }: { data: Array<CustomsInterface> }) => {
        const tmp: Array<CustomsInterface> = [];
        data.forEach((item) => {
          tmp.push({ ...item, CustomsName: ` ${item.CustomsCode}|${item.CustomsName}` });
        });
        setCustomsList([...tmp, { CustomsCode: '', CustomsName: 'All' }]);
        setDestinationCustomsList([...tmp, { CustomsCode: '', CustomsName: 'All' }]);
      });
    }
  }, [showCustomsList,showDestinationCustomsList]);

  const handleSearch = () => {
    const formattedData = formatData();

    onSearch(formattedData);
  };
  useEffect(() => {
    if (startDate || endDate || companyTin ||acceptR ||tirepdNum||locationCode||customsProcedure ||exemptionRepNo||basedOnExemption||opreationOptionValuation||opreationOptionValuationValue|| dateType ||numPalate||farwardCod|| exemptedStatus ||hsCode||goods||username||status||registerNo||foreignRegNo||transitType||status1||based1||modofpayment||transitType2||based2
    ) {
      const formattedData = formatData();
      onChage(formattedData);
    }
    console.log(dateType)
  }, [startDate, endDate, companyTin, customsProcedure,acceptR,tirepdNum,locationCode,exemptionRepNo, dateType,opreationOptionValuation,basedOnExemption,opreationOptionValuationValue, exemptedStatus,numPalate,farwardCod,hsCode,goods,username,status,registerNo,foreignRegNo,transitType,status1,based1,modofpayment,transitType2,based2
  ]);

  const formatData = () => {
    return {
      ...(dateType && { dateType }),
      ...(showStartDate && { startDate }),
      ...(showEndDate && { endDate }),
      ...(ShowTinNumber && { companyTin: parseInt(companyTin) }),
      ...(ShowHsCode && { hsCode:parseInt(hsCode)}),
      ...(showfarwarCode && { forwarderCode:parseInt(farwardCod)}),
      ...(ShowRegisterNo && { registerNo:parseInt(registerNo)}),
      ...(showTirepdNum && { tirepdNum:parseInt(tirepdNum)}),
      ...(showForeignRegNo && { foreignRegNo:parseInt(foreignRegNo)}),
      ...(showNumPalate && { numPalate:parseInt(numPalate)}),
      ...(showGoods && {goodsCategory:goods}),
      ...(showUserName && {userName:username}),
      ...(showCustomsProcedure && {
        customsProcedure: customsProcedure === 'all' ? null : customsProcedure
      }),
      ...(showExemptionType && {
        exemptedStatus
      

      }),
      ...(showStatus && {
        status
      

      }),
      ...(showTransitType && {
        transitType:transitType
      

      }),
      ...(showAcceptR && {
        acceptR:acceptR
      

      }),
      ...(showTransitType2 && {
        transitType:transitType2
    
      }),
      ...(showStatus1 && {
        truckStatus:status1
      

      }),
      ...(showOpreationOptionValuation && {
        BasedOn:opreationOptionValuation
      

      }),
      ...(showOpreationOptionValuationValue && {
        basedOnValue:opreationOptionValuationValue
      

      }),
      ...(showbased1 && {
       basedOn: based1
      }),
      ...(showBasedOn2 && {
       basedOn: based2
      }),
      ...(showBasedOnExemption && { basedOn: basedOnExemption
      }),
      ...(showBasedOnExemptionValue && { basedOnValue: basedOnExemptionValue
      }),
      ...(ShowModOfPayment && {
        modeOfPay: modofpayment
      

      }),
      ...(showCustomsList && { CustomsCode: customsCode }),
      ...(showDestinationCustomsList && { desCusCode: destinationCustomsCode })
    };
  };

  return (
    <Col lg={12}>
      <Row>
        <Condition condition={showRegDate}>
          <Col xs={6} md={4} lg={2} xl={2}>
            <RadioButton inputId="dateType1" value="RegDate" onChange={(e) => setDateType(e.value)} checked={dateType === 'RegDate'} />
            <label htmlFor="dateType1" style={{ marginLeft: "0.3em" }}>Registration Date</label>
          </Col>
        </Condition>
        <Condition condition={showAssesDate}>
          <Col xs={6} md={4} lg={2} xl={2}>
            <RadioButton inputId="dateType2" value="AssessDate" onChange={(e) => setDateType(e.value)} checked={dateType === 'AssessDate'} />
            <label htmlFor="dateType2" style={{ marginLeft: "0.3em" }}>Assessement Date</label>
          </Col>
        </Condition>
        <Condition condition={showPayDate}>
          <Col xs={6} md={4} lg={2} xl={2}>
            <RadioButton inputId="dateType3" value="PaymentDate" onChange={(e) => setDateType(e.value)} checked={dateType === 'PaymentDate'} />
            <label htmlFor="dateType3" style={{ marginLeft: "0.3em" }}>Payment Date</label>
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
        <Condition condition={showTirepdNum}>
          <NumberInput
            label="TirepdNum"
            xs={6}
            md={4}
            lg={4}
            xl={3}
            value={tirepdNum}
            onChange={(e) => {
              setTirepdNum(e.target.value);
              setCompanyTin(e.target.value);
            }}
          />
        </Condition>
        <Condition condition={ShowRegisterNo}>
          <NumberInput
            label="Register No"
            xs={6}
            md={4}
            lg={4}
            xl={3}
            value={registerNo}
            onChange={(e) => {
              setRegisterNo(e.target.value);
            }}
          />
        </Condition>
        <Condition condition={showForeignRegNo}>
          <NumberInput
            label="ForeignRegNo"
            xs={6}
            md={4}
            lg={4}
            xl={3}
            value={foreignRegNo}
            onChange={(e) => {
              setForeignRegNo(e.target.value);
            }}
          />
        </Condition>
        <Condition condition={showNumPalate}>
          <NumberInput
            label="NumPalate"
            xs={6}
            md={4}
            lg={4}
            xl={3}
            value={numPalate}
            onChange={(e) => {
              setNumPalate(e.target.value);
            }}
          />
        </Condition>
        <Condition condition={showfarwarCode}>
          <NumberInput
            label="FarwardCode"
            xs={6}
            md={4}
            lg={4}
            xl={3}
            value={farwardCod}
            onChange={(e) => {
              setFarwardCode(e.target.value);
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
        <Condition condition={showTransitType}>
          <TransitType
            id="TransitType"
            xs={6}
            md={4}
            lg={4}
            xl={3}
            value={transitType}
            onChange={(e) => {
              setTransitType(e.target.value);
            }}
          />
        </Condition>
        <Condition condition={showAcceptR}>
          <AcceptRv
            id="Accept Roufes value"
            xs={6}
            md={4}
            lg={4}
            xl={3}
            value={acceptR}
            onChange={(e) => {
              setAcceptR(e.target.value);
            }}
          />
        </Condition>
        <Condition condition={showTransitType2}>
          <TransitType2
            id="TransitType"
            xs={6}
            md={4}
            lg={4}
            xl={3}
            value={transitType2}
            onChange={(e) => {
              setTransitType2(e.target.value);
            }}
          />
        </Condition>
        <Condition condition={showStatus1}>
          <Status2
            id="Status"
            xs={6}
            md={4}
            lg={4}
            xl={3}
            value={status1}
            onChange={(e) => {
              setStatus1(e.target.value);
            }}
          />
        </Condition>
        <Condition condition={showOpreationOptionValuation}>
          <OpreationName
            id="Opreation Name"
            xs={6}
            md={4}
            lg={4}
            xl={3}
            value={opreationOptionValuation}
            onChange={(e) => {
              setOpreationOptionValuation(e.target.value);
            }}
          />
        </Condition>
        <Condition condition={showOpreationOptionValuationValue}>
          <NumberInput
            id="Opreation Name value"
            xs={6}
            md={4}
            lg={4}
            xl={3}
            value={opreationOptionValuationValue}
            onChange={(e) => {
              setOpreationOptionValuationValue(e.target.value);
            }}
          />
        </Condition>
        <Condition condition={showbased1}>
          <BasedOn
            id="Based On"
            xs={6}
            md={4}
            lg={4}
            xl={3}
            value={based1}
            onChange={(e) => {
              setBased1(e.target.value);
            }}
          />
        </Condition>
        <Condition condition={showBasedOn2}>
          <BasedOn
            id="Based On"
            xs={6}
            md={4}
            lg={4}
            xl={3}
            value={based2}
            onChange={(e) => {
              setBased2(e.target.value);
            }}
          />
        </Condition>
        <Condition condition={showBasedOnExemption}>
          <BasedOnCondation
            id="Based On Cndation"
            xs={6}
            md={4}
            lg={4}
            xl={3}
            value={basedOnExemption}
            onChange={(e) => {
              setBasedOnExemption(e.target.value);
            }}
          />
        </Condition>
        <Condition condition={showBasedOnExemptionValue}>
          <NumberInput
            id="BasedOn Value"
            xs={6}
            md={4}
            lg={4}
            xl={3}
            value={basedOnExemptionValue}
            onChange={(e) => {
              setBasedOnExemptionValue(e.target.value);
            }}
          />
        </Condition>
        <Condition condition={ShowModOfPayment}>
          <ModOfPayment
            id="Mod Of payments"
            xs={6}
            md={4}
            lg={4}
            xl={3}
            value={modofpayment}
            onChange={(e) => {
              setModOfPayment(e.target.value);
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
        <Condition condition={showDestinationCustomsList}>
          <Dropdown
            id="CustomsLisD"
            label="Destination Customs List"
            xs={6}
            md={4}
            lg={4}
            xl={3}
            optionLabel="CustomsName"
            optionValue="CustomsCode"
            value={destinationCustomsCode}
            options={customsList}
            onChange={(e) => {
              setDestinationCustomsCode(e.target.value);
            }}
          />
          </Condition>
          
          <Condition condition={ShowHsCode}>
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
          <Condition condition={showLocationCode}>
          <TextInput
            label="Transit Shed Code"
            xs={6}
            md={4}
            lg={4}
            xl={3}
            value={locationCode}
            onChange={(e) => {
              setLocationCode(e.target.value);
            }}
          />
        </Condition>
          <Condition condition={showExemptionRepNo}>
          <NumberInput
            label="Exemption RepNo"
            xs={6}
            md={4}
            lg={4}
            xl={3}
            value={exemptionRepNo}
            onChange={(e) => {
              setExemptionRepNo(e.target.value);
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
