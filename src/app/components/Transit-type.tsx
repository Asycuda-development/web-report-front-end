import { Dropdown, DropdownProps } from './base-component';

const transitT = [
  { label: 'Import', name: 'I' },
  { label: 'Export', name: 'E' },
  { label: 'T1', name: 'T1' },
  { label: 'T2', name: 'T2' },
  { label: 'TIR', name: 'TIR' },
  { label: 'All', name: 'All' },

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
      label={'Transit Type'}
      options={transitT}
      optionLabel="label"
      optionValue="name"
      {...res}
    />
  );
};