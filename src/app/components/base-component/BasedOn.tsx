import { TextField } from '@mui/material';
import { Dropdown, DropdownProps } from '../base-component';
import { ChangeEventHandler } from 'react';

type BasedOnTypes = {
    label: string;
    name: string;
};
export interface BasedOnAll {
    label?: string;
    basedOnValue?: string;
    onChangeValue?: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> | undefined;
}

export const BasedOn = ({
    label,
    basedOnValue,
    onChangeValue,
    ...res
}: BasedOnAll & DropdownProps) => {
    return (
        <div className='basedOnStyle'
            style={{ display: 'flex', maxWidth: '50%', minWidth: '25%', paddingLeft: '16px', paddingTop: '16px' }}
        >
            <Dropdown
                style={{ width: '100%' }}
                label={'BasedOn'}
                optionLabel="label"
                optionValue="name"
                {...res}
            />
            <TextField required={true} style={{ width: '100%', borderRadius: '40px' }} label={'basedOnValue'} type='text' onChange={onChangeValue} value={basedOnValue} />
        </div>
    );
};