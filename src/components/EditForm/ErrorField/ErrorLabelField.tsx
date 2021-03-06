import { FormikContext, connect, getIn } from 'formik';
import { InputLabel, Theme } from '@material-ui/core';

import { ErrorFieldProps } from '@src/components/TypeDefinitions';
import ErrorMessage from '../../Core/ErrorMessage';
import React from 'react';
import Tooltip from '../../Core/Tooltip';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles((theme: Theme) => ({
  error: {
    color: theme.palette.error.main
  }
}));

export default connect<ErrorFieldProps>(
  ({
    className,
    name,
    formik,
    disabled,
    ...rest
  }: ErrorFieldProps & {
    formik: FormikContext<any>;
  }) => {
    const classes = useStyle();
    if (!name) return null;
    const error = getIn(formik.errors, name);

    const label = (
      <InputLabel
        className={clsx(className, error ? classes.error : undefined)}
        htmlFor={name}
        disabled={disabled}
        {...rest}
      />
    );

    return !disabled && error ? (
      <Tooltip title={<ErrorMessage>{error}</ErrorMessage>}>{label}</Tooltip>
    ) : (
      label
    );
  }
);
