import { cloneElement } from "react";

type BasedOnTypes = {
    label: string;
    name: string;
};
export interface ICondition {
    basedOnTypes?: BasedOnTypes[];
    condition?: boolean;
    children?: any;
    conditionNotTrue?: any;
}

export const ConditionForBasedOn = ({ condition, children = <></>, conditionNotTrue, basedOnTypes }: ICondition) => {
    // eslint-disable-next-line no-extra-boolean-cast
    // if (!!condition) return children
    // if (!!condition) return Children.map(children, child => {
    //     cloneElement(child, { basedOnTypes })
    // });
    if (!!condition) return cloneElement(children, { basedOnTypes })
    else {
        if (conditionNotTrue) return conditionNotTrue;
        return <></>;
    }
};