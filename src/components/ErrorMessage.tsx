import ErrorIcon from '@material-ui/icons/error';
import React from 'react';
import { Typography } from '@material-ui/core';

export default ({ children, ...rest }: Typo) => {
  return <Typography color="error" {...rest}>
    <ErrorIcon>
    {children}
  </Typography>;
};
