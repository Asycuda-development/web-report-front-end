import React from 'react';
import { Dropdown, DropdownProps } from './base-component';

const ModOfPy = [
  { label: 'cash', name: 'cash' },
  { label: 'bankCheck', name: 'bankCheck' },
  { label: 'bankTransfer', name: 'bankTransfer' },
  { label: 'electronicPayment', name: 'electronicPayment' },
  { label: 'All', name: 'All' },
  
];
export const ModOfPayment = ({
  label,
  options,
  optionLabel,
  optionValue,
  ...res
}: DropdownProps) => {
  return (
    <Dropdown
      label={'Mod_of_payment'}
      options={ModOfPy}
      optionLabel="label"
      optionValue="name"
      {...res}
    />
  );
};