import React from 'react';
import { Dropdown, DropdownProps } from './base-component';

const ModOfPy = [
  { label: '10|Cash', name: 'cash' },
  { label: '20|Bank Check', name: 'bankCheck' },
  { label: '30|Bank Transfer', name: 'bankTransfer' },
  { label: '40|Electronic Payment', name: 'electronicPayment' },
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