import { Grow, Theme, Typography } from '@material-ui/core';

import ErrorIcon from '@material-ui/icons/ErrorOutline';
import React from 'react';
import { TypographyProps } from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles((theme: Theme) => ({
  root: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyItems: 'center'
  },
  icon: {
    marginRight: 3,
    animation: '$color_change 1s infinite alternate'
  },
  '@keyframes color_change': {
    from: { color: theme.palette.error.main },
    to: { color: theme.palette.error.dark }
  }
}));

export interface ErrorMessageProps extends Omit<TypographyProps, 'color'> {
  messageOnly?: boolean;
}
export default ({ children, messageOnly, ...rest }: ErrorMessageProps) => {
  const classes = useStyle();

  return (
    <Grow in={true}>
      <Typography
        className={classes.root}
        color="error"
        {...rest}
        component="div"
      >
        {messageOnly !== true && (
          <ErrorIcon
            className={classes.icon}
            color="error"
            fontSize="inherit"
          />
        )}
        <span>{children}</span>
      </Typography>
    </Grow>
  );
};
