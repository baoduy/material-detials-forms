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

  const { field, type, ...rest } = props;
  const Field = getFieldByType(type as EditFieldTypes);
  return <Field fullWidth {...field} {...rest} type={type} />;
}

export default FieldWrapper;
