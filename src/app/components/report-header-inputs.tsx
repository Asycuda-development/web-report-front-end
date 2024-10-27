import React, { useEffect, useState } from 'react';
import { Row, Col, Condition, DatePicker, NumberInput, Dropdown } from './base-component';
import { LoadingButton } from '@mui/lab';
import { CustomsProcedure } from './customs-procedure';
import axios from 'axios';

interface CustomsInterface {
  CustomsName: string;
  CustomsCode: string;
}
export interface SearchData {
  startDate?: string;
  endDate?: string;
  companyTin?: number;
  customsProcedure?: string | null;
  CustomsCode?: string;
}
interface ReportHeaderInputsProps {
  onChage?: (e: SearchData) => void;
  onSearch?: (e: SearchData) => void;
  showStartDate?: boolean;
  showEndDate?: boolean;
  ShowTinNumber?: boolean;
  showCustomsProcedure?: boolean;
  showCustomsList?: boolean;
  tabelRef: any;
}
export const ReportHeaderInputs = ({
  tabelRef,
  onChage = () => {},
  onSearch = () => {},
  showStartDate,
  showEndDate,
  ShowTinNumber,
  showCustomsProcedure,
  showCustomsList
}: ReportHeaderInputsProps) => {
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [companyTin, setCompanyTin] = useState<string>('');
  const [customsProcedure, setCustomsProcedure] = useState<string>('');
  const [customsList, setCustomsList] = useState<Array<CustomsInterface>>([]);
  const [customsCode, setCustomsCode] = useState<string>('');

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
    if (startDate || endDate || companyTin || customsProcedure) {
      const formattedData = formatData();
      onChage(formattedData);
    }
  }, [startDate, endDate, companyTin, customsProcedure]);

  const formatData = () => {
    return {
      ...(showStartDate && { startDate }),
      ...(showEndDate && { endDate }),
      ...(ShowTinNumber && { companyTin: parseInt(companyTin) }),
      ...(showCustomsProcedure && {
        customsProcedure: customsProcedure === 'all' ? null : customsProcedure
      }),
      ...(showCustomsList && { CustomsCode: customsCode })
    };
  };

  return (
    <Col lg={12}>
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
