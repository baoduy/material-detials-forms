import { FormikContext, connect, getIn } from 'formik';
import { InputLabel, Typography } from '@material-ui/core';

import { ErrorFieldProps } from '@src/components/TypeDefinitions';
import React from 'react';

export default connect<ErrorFieldProps>(
  ({
    name,
    formik
  }: ErrorFieldProps & {
    formik: FormikContext<any>;
  }) => {
    if (!name) return null;

    const error = getIn(formik.errors, name);

    return error ? (
      <InputLabel htmlFor={name}>
        <Typography variant="caption" color="error">
          {error}
        </Typography>
      </InputLabel>
    ) : null;
  }
);
