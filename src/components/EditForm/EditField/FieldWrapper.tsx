import {
  EditFieldTypes,
  FieldWrapperProps
} from '@src/components/TypeDefinitions';

import Grid from '@material-ui/core/Grid/Grid';
import LabelField from '../../Labels/LabelField';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import classNames from 'classnames';
import makeStyles from '@material-ui/styles/makeStyles/makeStyles';
import { renderAsComponent } from '../../../commons/renderHelper';

const useStyles = makeStyles({
  label: { paddingRight: 30 },
  alignRight: {
    textAlign: 'right'
  }
});

function getFieldByType(type: EditFieldTypes) {
  switch (type) {
    default:
      return TextField;
  }
}

function FieldWrapper<TValue = number | string | undefined>(
  props: FieldWrapperProps<TValue>
) {
  const asCom = renderAsComponent(props);
  if (asCom) return asCom;

  const {
    field,
    label,
    labelAlign,
    type,
    placeholder,
    variant,
    ...rest
  } = props;
  const classes = useStyles();
  const Field = getFieldByType(type as EditFieldTypes);
  const pattern =
    type === 'email' ? '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$' : undefined;
  const title =
    type === 'email' ? 'The entered value is not a valid email.' : undefined;
  const finalPlaceholder =
    type === 'email' && !placeholder
      ? 'Please enter a valid email'
      : placeholder;

  if (variant === 'labeled') {
    return (
      <Grid container alignItems="center" justify="center">
        <Grid
          item
          md={4}
          sm={12}
          className={classNames({
            [classes.label]: true,
            [classes.alignRight]: labelAlign === 'right'
          })}
        >
          {label && <LabelField variant="caption">{label}</LabelField>}
        </Grid>
        <Grid item md={8} sm={12}>
          <Field
            fullWidth
            {...field}
            {...rest}
            type={type}
            variant="outlined"
            inputProps={{
              pattern,
              title
            }}
            placeholder={finalPlaceholder}
          />
        </Grid>
      </Grid>
    );
  } else
    return (
      <Field
        fullWidth
        {...field}
        {...rest}
        label={label}
        type={type}
        variant={variant as any}
        inputProps={{
          pattern,
          title
        }}
        placeholder={finalPlaceholder}
      />
    );
}

FieldWrapper.defaultProps = { labelAlign: 'right' };

export default FieldWrapper;
