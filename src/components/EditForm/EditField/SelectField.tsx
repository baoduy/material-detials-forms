import React, { useCallback, useState } from 'react';

import Divider from '@material-ui/core/Divider';
import { FieldWrapperProps } from '@src/components/TypeDefinitions';
import FilledInput from '@material-ui/core/FilledInput';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem/MenuItem';
import { Omit } from '@material-ui/types';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Select from '@material-ui/core/Select/Select';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';

type VariantType = 'standard' | 'filled' | 'outlined';

interface CustomTextFieldProps extends Omit<FieldWrapperProps, 'variant'> {
  variant?: VariantType;
}

const getInput = (variant?: VariantType) => {
  if (variant === 'filled') return FilledInput;
  if (variant === 'outlined') return OutlinedInput;
  return Input;
};

const useStyle = makeStyles({
  group: { paddingLeft: 5 },
  hr: {
    height: '1px !important',
    margin: 0,
    border: 'none',
    flexShrink: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.12)'
  }
});

function SelectField({
  name,
  field,
  form,
  type,
  label,
  defaultValue,
  value,
  required,
  disabled,
  variant,
  options,
  onChange,
  ...rest
}: CustomTextFieldProps) {
  const classes = useStyle();
  const inputLabel = React.useRef<any>();
  const [labelWidth, setLabelWidth] = React.useState(0);

  React.useEffect(() => {
    const { current } = inputLabel;
    if (current) setLabelWidth(current.offsetWidth);
  }, []);

  const [finalValue, setValue] = useState(value || defaultValue);

  const handleBlur = useCallback(() => {
    if (form) {
      form.setFieldTouched(name || '', true, false);
      form.setFieldError(name || '', 'shoot');
    }
  }, [name, form]);

  const handleChange = useCallback(
    event => {
      if (form) {
        form.setFieldValue(name || '', event.target.value, false);
        form.setFieldError(name || '', `field ${label || name} is required.`);
      }
      if (onChange) onChange(event);
      else setValue(event.target.value);
    },
    [name, form, onChange, setValue]
  );

  if (!options) options = [];

  const Input = getInput(variant);
  const hasgroup = options.findIndex(o => o.group !== undefined) >= 0;

  return (
    <FormControl
      fullWidth
      variant={variant}
      required={required}
      disabled={disabled}
    >
      {label && (
        <InputLabel
          ref={inputLabel}
          required={required}
          disabled={disabled}
          htmlFor={name}
        >
          {label}
        </InputLabel>
      )}
      <Select
        {...field}
        {...rest}
        disabled={disabled}
        required={required}
        id={name}
        name={name}
        value={finalValue || ''}
        onBlur={handleBlur}
        onChange={handleChange}
        input={
          <Input
            labelWidth={labelWidth}
            id={name}
            name={name}
            disabled={disabled}
            required={required}
          />
        }
        MenuProps={{
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'center'
          },
          transformOrigin: {
            vertical: 'top',
            horizontal: 'center'
          },
          getContentAnchorEl: null
        }}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <hr className={classes.hr} />
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <Typography
          className={classes.group}
          variant="caption"
          color="textSecondary"
        >
          Group Title
        </Typography>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
}

export default SelectField;
