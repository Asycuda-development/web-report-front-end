import { TextField } from '@mui/material';
import { Dropdown, DropdownProps } from '../base-component';
import { ChangeEventHandler } from 'react';

const BoxOptions = [
    { label: 'All', name: '' },
    { label: 'Box number 18 part 1', name: 'Box number 18 part 1' },
    { label: 'Box number 18 part 2', name: 'Box number 18 part 2' },
    { label: 'Box number 21 part 1', name: 'Box number 21 part 1' },
    { label: 'Box number 21 part 2', name: 'Box number 21 part 2' }
];
export interface BasedOnAll {
    label?: string;
    basedOnBoxValue?: string;
    onChangeValue?: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> | undefined;
}

export const BasedOnBox = ({
    label,
    basedOnBoxValue,
    onChangeValue,
    ...res
}: BasedOnAll & DropdownProps) => {
    return (
        <div className='basedOnStyle'
            style={{ display: 'flex', maxWidth: '50%', minWidth: '25%', paddingLeft: '16px', paddingTop: '16px' }}
        >
            <Dropdown
                style={{ width: '100%' }}
                label={'BasedOnBox'}
                optionLabel="label"
                optionValue="name"
                options={BoxOptions}
                {...res}
            />
            <TextField style={{ width: '100%', borderRadius: '40px' }} label={'basedOnBoxValue'} type='text' onChange={onChangeValue} value={basedOnBoxValue} />
        </div>
    );
};