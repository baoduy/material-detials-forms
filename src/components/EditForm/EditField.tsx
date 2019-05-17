import { EditFieldProps } from '../TypeDefinitions';
import { Field } from 'formik';
import { Omit } from '@material-ui/core';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { renderAsComponent } from '../../commons/renderHelper';

function EditField(props: Omit<EditFieldProps, 'gridSize'>) {
  const asCom = renderAsComponent(props);
  if (asCom) return asCom;

  const { name, label, value } = props;

  return (
    <Field
      id={name}
      name={name}
      label={label}
      value={value}
      component={TextField}
    />
  );
}

export default EditField;
