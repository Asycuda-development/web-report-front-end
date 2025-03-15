import { Dropdown, DropdownProps } from './base-component';

const basedOnExemption = [
  {
    label: 'Company',
    name: 'Company'
  },
  {
    label: 'Contractor',
    name: 'Contractor'
  },
  {
    label: 'ExemptionNo',
    name: 'ExemptionNo'
  },
  {
    label: 'HSCODE',
    name: 'HSCODE'
  }
];
export const BasedOnExemption = ({
  label,
  options,
  optionLabel,
  optionValue,
  ...res
}: DropdownProps) => {
  return (
    <Dropdown
      label="Based_On"
      options={basedOnExemption}
      optionLabel="label"
      optionValue="name"
      {...res}
    />
  );
};
