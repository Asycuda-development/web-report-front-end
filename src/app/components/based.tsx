import React from 'react';
import { Dropdown, DropdownProps } from './base-component';

const based1 = [
  { label: 'I-no', name: 'I-no' },
  { label: 'Reg_No_Yearly', name: 'Reg_No_Yearly' },
  { label: 'Reg_No_Daily', name: 'Reg_No_Daily' },
  { label: 'T1D_NUMBER', name: 'T1D_NUMBER' },
  { label: 'I_no', name: 'I_no' },
  { label: 'CMP_COD', name: 'CMP_COD' },
  { label: 'All', name: 'All' },
  
];
export const BasedOn = ({
  label,
  options,
  optionLabel,
  optionValue,
  ...res
}: DropdownProps) => {
  return (
    <Dropdown
      label={'Based On'}
      options={based1}
      optionLabel="label"
      optionValue="name"
      {...res}
    />
  );
};