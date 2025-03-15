import React from 'react';
import { Dropdown, DropdownProps } from './base-component';

const AcceptR = [
  { label: 'Accepted', name: 'Accepted' },
  { label: 'Refused', name: 'Refused' },
 
  
];
export const AcceptRv = ({
  label,
  options,
  optionLabel,
  optionValue,
  ...res
}: DropdownProps) => {
  return (
    <Dropdown
      label={'Accept/Roufes value'}
      options={AcceptR}
      optionLabel="label"
      optionValue="name"
      {...res}
    />
  );
};