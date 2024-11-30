import React from 'react';
import { Dropdown, DropdownProps } from './base-component';

const basedOn = [
  {
    label: 'Delarant_Cod',
    name: 'declarant'
  },
  {
    label: 'Copany_Cod',
    name: 'company'
  },
  {
    label: 'I_NO',
    name: 'I_no'
  },
  {
    label: 'Manifest_NO',
    name: 'manifest'
  },
  {
    label: 'Wherehouse',
    name: 'Warehouse'
  }
];
export const BasedOn = ({ label, options, optionLabel, optionValue, ...res }: DropdownProps) => {
  return (
    <Dropdown label="Based_On" options={basedOn} optionLabel="label" optionValue="name" {...res} />
  );
};
