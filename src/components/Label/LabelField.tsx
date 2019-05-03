import React, { ReactNode } from 'react';
import Typography, { TypographyProps } from '@material-ui/core/Typography';

import { Omit } from '@material-ui/core';
import { ThemeStyle } from '@material-ui/core/styles/createTypography';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/styles';

export type LabelVariant = 'title' | 'subtitle' | 'caption';

export interface LabelFieldProps extends Omit<TypographyProps, 'variant'> {
  icon?: ReactNode;
  as?: React.ComponentType<any>;
  variant?: LabelVariant;
}

const getVariant = (type?: LabelVariant): ThemeStyle => {
  switch (type) {
    case 'title':
      return 'h5';
    case 'subtitle':
      return 'subtitle1';
    case 'caption':
      return 'caption';
    default:
      return 'h5';
  }
};

const useStyle = makeStyles({
  content: { display: 'flex', alignItems: 'center' },
  icon: { marginRight: 5 },
  captionIcon: { width: '14px !important' },
  subtitleIcon: { width: '16px !important' }
});

const Label = ({ icon, children, as, variant, ...rest }: LabelFieldProps) => {
  if (as) {
    const Com = as;
    return (
      <Com {...rest} icon={icon} variant={variant}>
        {children}
      </Com>
    );
  }

  const classes = useStyle();
  const Icon: any = icon;

  const typo = (
    <Typography
      color={variant === 'title' ? 'secondary' : 'textSecondary'}
      {...rest}
      variant={getVariant(variant)}
    >
      {children}
    </Typography>
  );

  if (icon === null) return typo;

  return (
    <div className={classes.content}>
      {Icon === undefined ? null : React.isValidElement(Icon) ? (
        Icon
      ) : (
        <Icon
          className={classNames({
            [classes.icon]: true,
            [classes.captionIcon]: variant === 'caption',
            [classes.subtitleIcon]: variant === 'subtitle'
          })}
        />
      )}
      {typo}
    </div>
  );
};

Label.defaultProps = {
  variant: 'title'
} as Partial<LabelFieldProps>;

export default Label;
