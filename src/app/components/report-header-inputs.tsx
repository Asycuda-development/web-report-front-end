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
  hsCode?: number;
  goodsCategory?:String;
  UserName?:String;
  transitType?:String;
  transitType2?:String;
  status1?:String,
  modeOfPay?:String;
  based1?:String;
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
  showExitDate?: boolean,
  showArrivalDate?:boolean,
  showValidationDate?:boolean,
  showDepartureDate?:boolean,
  showFinalExitDate?:boolean,
  showOperationDate?: boolean,
  showStartDate?: boolean;
  showEndDate?: boolean;
  ShowTinNumber?: boolean;
  ShowRegisterNo?: boolean;
  showCustomsProcedure?: boolean;
  showDestinationCustomsList?:boolean,
  showTransitType?:boolean,
  showTransitType2?:boolean,
  showStatus1?:boolean,
  ShowModOfPayment?:boolean,
  showbased1?:boolean,
  showBasedOn2?:boolean,
  showCustomsList?: boolean;
  ShowHsCode?: boolean;
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
  showArrivalDate,
  showValidationDate,
  showDepartureDate,
  showFinalExitDate,
  showStartDate,
  showEndDate,
  ShowTinNumber,
  ShowRegisterNo,
  showCustomsProcedure,
  showTransitType,
  showTransitType2,
  showStatus1,
  showbased1,
  showBasedOn2,
  ShowModOfPayment,
  showExemptionType,
  showStatus,
  showGoods,
  showUserName,
  showCustomsList,
  showDestinationCustomsList,
  ShowHsCode,
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
  const [based2, setBased2] = useState<string>('');
  const [modofpayment, setModOfPayment] = useState<string>('');
  const [status1, setStatus1] = useState<string>('');
  const [hsCode, setHsCode] = useState<string>('');
  const [registerNo, setRegisterNo] = useState<string>('');
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
    if (startDate || endDate || companyTin || customsProcedure || dateType || exemptedStatus ||hsCode||goods||username||status||registerNo||transitType||status1||based1||modofpayment||transitType2||based2
    ) {
      const formattedData = formatData();
      onChage(formattedData);
    }
    console.log(dateType)
  }, [startDate, endDate, companyTin, customsProcedure, dateType, exemptedStatus,hsCode,goods,username,status,registerNo,transitType,status1,based1,modofpayment,transitType2,based2
  ]);

  const formatData = () => {
    return {
      ...(dateType && { dateType }),
      ...(showStartDate && { startDate }),
      ...(showEndDate && { endDate }),
      ...(ShowTinNumber && { companyTin: parseInt(companyTin) }),
      ...(ShowHsCode && { hsCode:parseInt(hsCode)}),
      ...(ShowRegisterNo && { registerNo:parseInt(registerNo)}),
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
      ...(showTransitType2 && {
        transitType:transitType2
    
      }),
      ...(showStatus1 && {
        truckStatus:status1
      

      }),
      ...(showbased1 && {
       basedOn: based1
      }),
      ...(showBasedOn2 && {
       basedOn: based2
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
