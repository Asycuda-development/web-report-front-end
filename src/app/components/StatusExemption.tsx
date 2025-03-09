import { Dropdown, DropdownProps } from './base-component';

const statusExemption = [
  {
    label: 'Partially closed',
    name: 'Partially closed'
  },
  {
    label: 'Issued',
    name: 'Issued'
  },
  {
    label: 'Issued but Revoked',
    name: 'Issued but Revoked'
  }
];
export const StatusExemption = ({
  label,
  options,
  optionLabel,
  optionValue,
  ...res
}: DropdownProps) => {
  return (
    <Dropdown
      label="StatusExemption"
      options={statusExemption}
      optionLabel="label"
      optionValue="name"
      {...res}
    />
  );
};
