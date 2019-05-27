import {
  EditFieldTypes,
  FieldWrapperProps
} from '@src/components/TypeDefinitions';

import React from 'react';
import TextField from '@material-ui/core/TextField';
import { renderAsComponent } from '../../../commons/renderHelper';

function getFieldByType(type: EditFieldTypes) {
  switch (type) {
    default:
      return TextField;
  }
}

function FieldWrapper<TValue = number | string | undefined>(
  props: FieldWrapperProps<TValue>
) {
  const asCom = renderAsComponent(props);
  if (asCom) return asCom;

  const { field, type, placeholder, variant, ...rest } = props;
  const Field = getFieldByType(type as EditFieldTypes);
  const finalPlaceholder =
    type === 'email' && !placeholder
      ? 'Please enter a valid email'
      : placeholder;

  return (
    <Field
      fullWidth
      {...field}
      {...rest}
      type={type}
      variant={variant as any}
      inputProps={{
        pattern:
          type === 'email'
            ? '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$'
            : undefined,
        title:
          type === 'email'
            ? 'The entered value is not a valid email.'
            : undefined
      }}
      placeholder={finalPlaceholder}
    />
  );
}

export default FieldWrapper;
