import { Dropdown, DropdownProps } from '../base-component';

const Status = [
    { label: 'Active', name: 'active' },
    { label: 'Suspend', name: 'suspend' },
    { label: 'All', name: 'all' }
];
export const Stautes = ({
    label,
    options,
    optionLabel,
    optionValue,
    ...res
}: DropdownProps) => {
    return (
        <Dropdown
            label={'Status'}
            options={Status}
            optionLabel="label"
            optionValue="name"
            {...res}
        />
    );
};