import {
  FieldWrapperProps,
  SelectGroupOption,
  SelectOption
} from '@src/components/TypeDefinitions';
import React, { useCallback, useState } from 'react';

import FilledInput from '@material-ui/core/FilledInput';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem/MenuItem';
import { Omit } from '@material-ui/types';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Select from '@material-ui/core/Select/Select';
import Typography from '@material-ui/core/Typography';
import linq from 'linq';
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

const renderGroup = (options: Array<SelectOption>, classes: any) => {
  const groups = linq
    .from(options)
    .groupBy(i => i.group || ' ')
    .select<SelectGroupOption>(g => ({ label: g.key(), options: g.toArray() }))
    .orderBy(i => i.label)
    .toArray();

  return groups.map((g, i) => [
    <Typography
      key={`g_${i}`}
      className={classes.group}
      variant="caption"
      color="textSecondary"
    >
      {g.label}
    </Typography>,
    ...renderOptions(g.options, classes, `g_${i}`)
  ]);
};

const renderOptions = (
  options: Array<SelectOption>,
  classes: any,
  prefixKey?: string
) =>
  options.map((o, i) =>
    o.divide === true ? (
      <hr key={`${prefixKey}_op_${i}`} className={classes.hr} />
    ) : (
      <MenuItem key={`${prefixKey}_op_${i}`} value={o.value as any}>
        {o.label}
      </MenuItem>
    )
  );

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
  const [finalValue, setValue] = useState(value || defaultValue);

  React.useEffect(() => {
    const { current } = inputLabel;
    if (current) setLabelWidth(current.offsetWidth);
  }, []);

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
  const hasGroup = options.findIndex(o => o.group !== undefined) >= 0;

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
        {hasGroup
          ? renderGroup(options, classes)
          : renderOptions(options, classes)}
      </Select>
    </FormControl>
  );
}

export default SelectField;
