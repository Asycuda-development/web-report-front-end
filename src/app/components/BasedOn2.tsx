import React from 'react';
import { Dropdown, DropdownProps } from './base-component';

const based2 = [
  { label: 'declarant', name: 'declarant' },
  { label: 'company', name: 'company' },
  { label: 'Financial', name: 'Financial' },
];
export const BasedOn2 = ({
  label,
  options,
  optionLabel,
  optionValue,
  ...res
}: DropdownProps) => {
  return (
    <Dropdown
      label={'Based On'}
      options={based2}
      optionLabel="label"
      optionValue="name"
      {...res}
    />
  );
};