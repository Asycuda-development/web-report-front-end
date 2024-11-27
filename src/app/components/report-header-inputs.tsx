import { LoadingButton } from '@mui/lab';
import axios from 'axios';
import { RadioButton } from 'primereact/radiobutton';
import { useEffect, useState } from 'react';
import { Col, Condition, DatePicker, Dropdown, NumberInput, Row, TextInput } from './base-component';
import { Stautes } from './base-component/status';
import { CustomsProcedure } from './customs-procedure';
import { ExemptedType } from './Exemptiontype';
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
  hsCode?: number;
  goodsCategory?:String;
  UserName?:String;
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
  showOperationDate?: boolean,
  showStartDate?: boolean;
  showEndDate?: boolean;
  ShowTinNumber?: boolean;
  showCustomsProcedure?: boolean;
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
  showStartDate,
  showEndDate,
  ShowTinNumber,
  showCustomsProcedure,
  showExemptionType,
  showStatus,
  showGoods,
  showUserName,
  showCustomsList,
  ShowHsCode,
}: ReportHeaderInputsProps) => {
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [companyTin, setCompanyTin] = useState<string>('');
  const [customsProcedure, setCustomsProcedure] = useState<string>('');
  const [exemptedStatus, setExemptedStatus] = useState<string>('');
  const [status, setStatus] = useState<string>('');
  const [customsList, setCustomsList] = useState<Array<CustomsInterface>>([]);
  const [hsCode, setHsCode] = useState<string>('');
  const [goods, setgoods] = useState<string>('');
  const [username, setUserName] = useState<string>('');
  const [customsCode, setCustomsCode] = useState<string>('');
  const [dateType, setDateType] = useState<string>('RegDate');

  useEffect(() => {
    if (showCustomsList === true) {
      axios.get('reporting/customs-list').then(({ data }: { data: Array<CustomsInterface> }) => {
        const tmp: Array<CustomsInterface> = [];
        data.forEach((item) => {
          tmp.push({ ...item, CustomsName: ` ${item.CustomsCode}|${item.CustomsName}` });
        });
        setCustomsList([...tmp, { CustomsCode: '', CustomsName: 'All' }]);
      });
    }
  }, [showCustomsList]);

  const handleSearch = () => {
    const formattedData = formatData();

    onSearch(formattedData);
  };
  useEffect(() => {
    if (startDate || endDate || companyTin || customsProcedure || dateType || exemptedStatus ||hsCode||goods||username||status
    ) {
      const formattedData = formatData();
      onChage(formattedData);
    }
    console.log(dateType)
  }, [startDate, endDate, companyTin, customsProcedure, dateType, exemptedStatus,hsCode,goods,username,status
  ]);

  const formatData = () => {
    return {
      ...(dateType && { dateType }),
      ...(showStartDate && { startDate }),
      ...(showEndDate && { endDate }),
      ...(ShowTinNumber && { companyTin: parseInt(companyTin) }),
      ...(ShowHsCode && { hsCode:parseInt(hsCode)}),
      ...(showGoods && {goodsCategory:goods}),
      ...(showUserName && {userName:username}),
      ...(showCustomsProcedure && {
        customsProcedure: customsProcedure === 'all' ? null : customsProcedure
      }),
      ...(showExemptionType && {
        exemptedStatus: exemptedStatus === 'all' ? null : exemptedStatus
      

      }),
      ...(showStatus && {
        status
      

      }),
      ...(showCustomsList && { CustomsCode: customsCode })
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
