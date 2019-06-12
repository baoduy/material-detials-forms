import { FormikContext, connect, getIn } from 'formik';

import { ErrorFieldProps } from '@src/components/TypeDefinitions';
import ErrorIcon from '@material-ui/icons/Error';
import ErrorMessage from '../../ErrorMessage';
import { InputLabel } from '@material-ui/core';
import React from 'react';
import Tooltip from '../../Tooltip';

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
      <Tooltip title={<ErrorMessage>{error}</ErrorMessage>}>
        <InputLabel htmlFor={name}>
          <ErrorIcon fontSize="inherit" color="error" />
        </InputLabel>
      </Tooltip>
    ) : null;
  }
);
