import { LabelFieldProps, LabelVariant } from '../TypeDefinitions';

import Chip from '@material-ui/core/Chip';
import React from 'react';
import { ThemeStyle } from '@material-ui/core/styles/createTypography';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/styles';

const getTypoVariant = (type?: LabelVariant): ThemeStyle => {
  switch (type) {
    case 'title':
      return 'h5';
    case 'subtitle':
      return 'subtitle1';
    case 'caption':
      return 'caption';
    case 'body':
      return 'body2';
    case 'label':
    default:
      return 'overline';
  }
};

type TypoColors =
  | 'initial'
  | 'inherit'
  | 'primary'
  | 'secondary'
  | 'textPrimary'
  | 'textSecondary'
  | 'error';

const getTypoColor = (type?: LabelVariant): TypoColors | undefined => {
  switch (type) {
    case 'title':
      return 'primary';
    case 'subtitle':
      return 'initial';
    case 'caption':
    case 'body':
      return 'textSecondary';
    default:
      return undefined;
  }
};

const useStyle = makeStyles({
  content: { display: 'flex', alignItems: 'center' },
  bold: { fontWeight: 600 },
  icon: { marginRight: 5 },
  captionIcon: { width: '14px !important' },
  subtitleIcon: { width: '16px !important' }
});

const Label = ({
  icon,
  children,
  variant,
  bold,
  color,
  className,
  ...rest
}: LabelFieldProps) => {
  const classes = useStyle();
  const Icon: any = icon;

  if (variant === 'chip')
    return (
      <Chip
        color="secondary"
        style={color ? { color } : undefined}
        {...rest}
        className={classNames(
          {
            [classes.bold]: bold
          },
          className
        )}
        icon={icon ? React.isValidElement(icon) ? icon : <Icon /> : undefined}
        label={children}
      />
    );

  return (
    <Typography
      style={color ? { color } : undefined}
      {...rest}
      className={classNames(
        {
          [classes.content]: Icon,
          [classes.bold]: bold
        },
        className
      )}
      color={getTypoColor(variant)}
      variant={getTypoVariant(variant)}
    >
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
      {children}
    </Typography>
  );
};

Label.defaultProps = {
  variant: 'title'
} as Partial<LabelFieldProps>;

export default Label;
