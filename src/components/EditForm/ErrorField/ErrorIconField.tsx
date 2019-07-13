import { FormikContext, connect, getIn } from 'formik';

import { ErrorFieldProps } from '@src/components/TypeDefinitions';
import ErrorIcon from '@material-ui/icons/Error';
import ErrorMessage from '../../Core/ErrorMessage';
import React from 'react';
import Tooltip from '../../Core/Tooltip';
import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles({
  root: {
    margin: 5
  }
});

export default connect<ErrorFieldProps>(
  ({
    name,
    formik,
    disabled,
    ...rest
  }: ErrorFieldProps & {
    formik: FormikContext<any>;
  }) => {
    const classes = useStyle();
    if (disabled || !name || !formik) return null;
    const error = getIn(formik.errors, name);

    return error ? (
      <Tooltip
        className={classes.root}
        {...rest}
        title={<ErrorMessage>{error}</ErrorMessage>}
      >
        <ErrorIcon fontSize="default" color="error" />
      </Tooltip>
    ) : null;
  }
);
