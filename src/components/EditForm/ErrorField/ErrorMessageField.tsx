import { FormikContext, connect, getIn } from 'formik';

import { ErrorFieldProps } from '@src/components/TypeDefinitions';
import ErrorMessage from '../../Core/ErrorMessage';
import { InputLabel } from '@material-ui/core';
import React from 'react';

export default connect<ErrorFieldProps>(
  ({
    name,
    formik,
    disabled
  }: ErrorFieldProps & {
    formik: FormikContext<any>;
  }) => {
    if (disabled || !name || !formik) return null;

    const error = getIn(formik.errors, name);

    return error ? (
      <InputLabel htmlFor={name}>
        <ErrorMessage>{error}</ErrorMessage>
      </InputLabel>
    ) : null;
  }
);
