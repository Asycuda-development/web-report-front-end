import React from 'react';
import { Dropdown, DropdownProps } from './base-component';

const BasedOnCondation1 = [
  { label: 'ref_no', name: 'ref_no' },
  { label: 'company', name: 'company' },
  { label: 'type_of_appln', name: 'type_of_appln' },
  { label: 'contractor', name: 'contractor' },
  { label: 'Subc_cod', name: 'Subc_cod' },
 
];
export const BasedOnCondation = ({
  label,
  options,
  optionLabel,
  optionValue,
  ...res
}: DropdownProps) => {
  return (
    <Dropdown
      label={'Based On Condation'}
      options={BasedOnCondation1}
      optionLabel="label"
      optionValue="name"
      {...res}
    />
  );
};