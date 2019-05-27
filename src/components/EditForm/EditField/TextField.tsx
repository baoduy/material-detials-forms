import { FieldWrapperProps } from '@src/components/TypeDefinitions';
import { Omit } from '@material-ui/types';
import React from 'react';
import TextField from '@material-ui/core/TextField';

interface CustomTextFieldProps<TValue>
  extends Omit<FieldWrapperProps<TValue>, 'variant'> {
  variant?: 'standard' | 'filled' | 'outlined';
}

function CustomTextField<TValue = number | string | undefined>({
  name,
  type,
  placeholder,
  field,
  variant,
  ...rest
}: CustomTextFieldProps<TValue>) {
  const pattern =
    type === 'email' ? '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$' : undefined;
  const title =
    type === 'email' ? 'The entered value is not a valid email.' : undefined;
  const finalPlaceholder =
    type === 'email' && !placeholder
      ? 'Please enter a valid email'
      : placeholder;

  return (
    <TextField
      fullWidth
      id={name}
      name={name}
      {...field}
      {...rest}
      variant={variant as any}
      type={type}
      inputProps={{
        pattern,
        title
      }}
      placeholder={finalPlaceholder}
    />
  );
}

export default CustomTextField;
