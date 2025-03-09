import { Dropdown, DropdownProps } from './base-component';

const basedOnExemption = [
  {
    label: 'Company Cod',
    name: 'Company'
  },
  {
    label: 'Contractor Cod',
    name: 'Contractor'
  },
  {
    label: 'Sub contractor Cod',
    name: 'Subc_cod'
  },
  {
    label: 'Type Of Apllication Cod',
    name: 'type_of_appln'
  },
  {
    label: 'Reference Number',
    name: 'ref_no'
  },
  {
    label: 'All',
    name: 'all'
  }
];
export const BasedOnExemption2 = ({
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
