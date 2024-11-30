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
  CustomsCode?: string;
  exemptionType?: string;
  hsCode?: number;
  userName?: string;
  basedonvalue?: number;
}
interface ReportHeaderInputsProps {
  onChage?: (e: SearchData) => void;
  onSearch?: (e: SearchData) => void;
  showRegDate?: boolean;
  showAssesDate?: boolean;
  showPayDate?: boolean;
  showStartDate?: boolean;
  showEndDate?: boolean;
  ShowTinNumber?: boolean;
  showCustomsProcedure?: boolean;
  showbasedon?: boolean;
  showCustomsList?: boolean;
  showExemptionType?: boolean;
  showHsCode?: boolean;
  showUserName?: boolean;
  showbasedonvalue?: boolean;
  tabelRef: any;
}

export const ReportHeaderInputs = ({
  tabelRef,
  onChage = () => {},
  onSearch = () => {},
  showRegDate,
  showAssesDate,
  showPayDate,
  showStartDate,
  showEndDate,
  ShowTinNumber,
  showCustomsProcedure,
  showExemptionType,
  showHsCode,
  showUserName,
  showbasedon,
  showbasedonvalue,
  showCustomsList
}: ReportHeaderInputsProps) => {
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [companyTin, setCompanyTin] = useState<string>('');
  const [customsProcedure, setCustomsProcedure] = useState<string>('');
  const [exemptedStatus, setExemptedStatus] = useState<string>('');
  const [customsList, setCustomsList] = useState<Array<CustomsInterface>>([]);
  const [customsCode, setCustomsCode] = useState<string>('');
  const [dateType, setDateType] = useState<string>('RegDate');
  const [hsCode, setHsCode] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  const [basedon, setBasedOn] = useState<string>('');
  const [basedonvalue, setBasedOnValue] = useState<string>('');
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
    console.log('basedon : ', basedon);
    console.log('basedonvalue: ', basedonvalue);
    if (basedon && !basedonvalue) {
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
      userName ||
      basedon ||
      basedonvalue
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
    userName,
    basedon,
    basedonvalue
  ]);

  const formatData = () => {
    return {
      ...(dateType && { dateType }),
      ...(showStartDate && { startDate }),
      ...(showEndDate && { endDate }),
      ...(ShowTinNumber && { companyTin: parseInt(companyTin) }),
      ...(showHsCode && { hsCode: parseInt(hsCode) }),
      ...(showUserName && { userName }),
      ...(showbasedon && { basedon }),
      ...(showbasedonvalue && basedon && { [basedon]: parseInt(basedonvalue) }),
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

        <Condition condition={showHsCode}>
          <NumberInput
            label="HS Number"
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
