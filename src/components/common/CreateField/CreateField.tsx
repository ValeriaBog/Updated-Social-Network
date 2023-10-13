import React, {ChangeEvent, cloneElement, FC, FocusEvent, ReactElement, ReactNode} from 'react';
import styles from "./CreateField.module.css";
import {Field} from "formik";
import {WrappedFieldProps} from "redux-form/lib/Field";

const FormControl = ({
                         input,
                         meta: { touched, error },
                         children,
                         ...props
                     }: FormControlPropsType) => {
    const hasError = touched && error
    return (
        <div className={`${styles.formControl} ${hasError ? styles.error : ''}`}>
            {cloneElement(children as ReactElement<ReactNode>, { ...input, ...props })}
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const CustomInput = (props: FormControlPropsType) => (
    <FormControl {...props}>
        <input />
    </FormControl>
)

export function createField<FormKeyType extends string>(
    type: string,
    name: FormKeyType,
    validators: FieldValidatorType[],
    component: FC<FormControlPropsType>,
    props = {},
) {
    return <Field type={type} name={name} validate={validators} component={component} {...props} />
}

export type FieldValidatorType = (value: string) => string | undefined
type FormControlPropsType = WrappedFieldProps & {
    children: ReactNode
}
