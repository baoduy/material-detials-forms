import { EditFieldProps } from '../../TypeDefinitions';
import { Field } from 'formik';
import FieldWrapper from './FieldWrapper';
import { Omit } from '@material-ui/core';
import React from 'react';

function EditField({
  name,
  label,
  value,
  ...rest
}: Omit<EditFieldProps, 'gridSize'>) {
  return (
    <Field
      {...rest}
      id={name}
      name={name}
      label={label}
      value={value}
      component={FieldWrapper}
    />
  );
}

export default EditField;
