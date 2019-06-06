import { FormikContext, connect, getIn } from 'formik';
import { InputLabel, Typography } from '@material-ui/core';

import React from 'react';

/** The Error field will display the message for a input Field automatically based on the Field name */
export interface ErrorFieldProps {
  name?: string;
}

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
