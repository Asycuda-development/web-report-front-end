import { Dropdown, DropdownProps } from './base-component';

const basedOnTransit = [
  {
    label: 'Delarant_Cod',
    name: 'declarant'
  },
  {
    label: 'Copany_Cod',
    name: 'Company'
  },
  {
    label: 'Exporter',
    name: 'exporter'
  },
  {
    label: 'Forwarder',
    name: 'forwarder'
  }
];
export const BasedOnTransit = ({
  label,
  options,
  optionLabel,
  optionValue,
  ...res
}: DropdownProps) => {
  return (
    <Dropdown
      label="Based_On"
      options={basedOnTransit}
      optionLabel="label"
      optionValue="name"
      {...res}
    />
  );
};
