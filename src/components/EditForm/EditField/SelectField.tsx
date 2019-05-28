import React, { useCallback } from 'react';

import { FieldWrapperProps } from '@src/components/TypeDefinitions';
import InputLabel from '@material-ui/core/InputLabel/InputLabel';
import MenuItem from '@material-ui/core/MenuItem/MenuItem';
import { Omit } from '@material-ui/types';
import Select from '@material-ui/core/Select/Select';

interface CustomTextFieldProps extends Omit<FieldWrapperProps, 'variant'> {
  variant?: 'standard' | 'filled' | 'outlined';
}

function SelectField({
  name,
  field,
  type,
  label,
  defaultValue,
  value,
  options,
  ...rest
}: CustomTextFieldProps) {
  const handleChange = useCallback(event => {
    console.log(event.target.value);
  }, []);

  if (!options) options = [];

  const hasgroup = options.findIndex(o => o.group !== undefined) >= 0;

  return (
    <div>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <Select
        {...field}
        {...rest}
        id={name}
        name={name}
        value={value || defaultValue || ''}
        onChange={handleChange}
        inputProps={{
          id: name,
          name
        }}
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
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </div>
  );
}

export default SelectField;
