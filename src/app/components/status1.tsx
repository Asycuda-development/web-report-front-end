import React from 'react';
import { Dropdown, DropdownProps } from './base-component';

const status1 = [
  { label: 'Truck_Exited', name: 'Truck_Exited' },
  { label: 'Arrived_at_Destination', name: 'Arrived_at_Destination' },
  { label: 'Registered', name: 'Registered' },
  { label: 'Post_Entry_Modified', name: 'Post_Entry_Modified' },
  { label: 'Exited_at_Destination', name: 'Exited_at_Destination' },
  { label: 'All', name: 'All' },
  
];
export const Status2 = ({
  label,
  options,
  optionLabel,
  optionValue,
  ...res
}: DropdownProps) => {
  return (
    <Dropdown
      label={'Truck Status'}
      options={status1}
      optionLabel="label"
      optionValue="name"
      {...res}
    />
  );
};