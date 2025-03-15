import { Dropdown, DropdownProps } from './base-component';

const transitType = [
  {
    label: 'T1',
    name: 'T1'
  },
  {
    label: 'T2',
    name: 'T2'
  },
  {
    label: 'TIR',
    name: 'TIR'
  },
  {
    label: 'All',
    name: 'all'
  }
];
export const TransitType = ({
  label,
  options,
  optionLabel,
  optionValue,
  ...res
}: DropdownProps) => {
  return (
    <Dropdown
      label="TransitType"
      options={transitType}
      optionLabel="label"
      optionValue="name"
      {...res}
    />
  );
};
