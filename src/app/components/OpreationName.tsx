import React from 'react';
import { Dropdown, DropdownProps } from './base-component';

const Opreation = [
  { label: 'Assign Officer', name: 'Assign Officer' },
  { label: 'Create TSC', name: 'Create TSC' },
  { label: 'HQ Analysis Manager Approve', name: 'HQ Analysis Manager Approve' },
  { label: 'HQ Analysis Officer Accept', name: 'HQ Analysis Officer Accept' },
  { label: 'HQ Final Approve', name: 'HQ Final Approve' },
  { label: 'HQ Reject', name: 'HQ Reject' },
  { label: 'HSCODE Verification', name: 'HSCODE Verification' },
  { label: 'Province Manager Approve', name: 'Province Manager Approve' },
  { label: 'Provincial Officer Accept', name: 'Provincial Officer Accept' },
  { label: 'Provincial Officer Reject', name: 'Provincial Officer Reject' },
  { label: 'Send to HQ Analysis Officer', name: 'Send to HQ Analysis Officer' },
  { label: 'Send to HSCODE Verification', name: 'Send to HSCODE Verification' },
  { label: 'Store', name: 'Store' },
  { label: 'all', name: 'all' },
  
];
export const OpreationName = ({
  label,
  options,
  optionLabel,
  optionValue,
  ...res
}: DropdownProps) => {
  return (
    <Dropdown
      label={'Opreation Name'}
      options={Opreation}
      optionLabel="label"
      optionValue="name"
      {...res}
    />
  );
};