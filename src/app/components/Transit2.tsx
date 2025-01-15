import React from 'react';
import { Dropdown, DropdownProps } from './base-component';

const transit2 = [

  { label: 'T1', name: 'T1' },
  { label: 'T2', name: 'T2' },
  { label: 'All', name: 'all' },
  
];
export const TransitType2 = ({
  label,
  options,
  optionLabel,
  optionValue,
  ...res
}: DropdownProps) => {
  return (
    <Dropdown
      label={'Transit Type'}
      options={transit2}
      optionLabel="label"
      optionValue="name"
      {...res}
    />
  );
};