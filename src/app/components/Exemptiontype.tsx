import React from 'react';
import { Dropdown, DropdownProps } from './base-component';

const exemptedTypes = [
    { label: 'Exempted', name: 'Exempted' },
    { label: 'Non Exempted', name: 'NotExempted' },
    { label: 'All', name: '' }
];
export const ExemptedType = ({
    label,
    options,
    optionLabel,
    optionValue,
    ...res
}: DropdownProps) => {
    return (
        <Dropdown
            label={'Exempted Type'}
            options={exemptedTypes}
            optionLabel="label"
            optionValue="name"
            {...res}
        />
    );
};