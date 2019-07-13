import { ActionMeta, GroupType, ValueType } from 'react-select/src/types';
import {
  FieldWrapperProps,
  SelectOption
} from '@src/components/TypeDefinitions';
import React, { CSSProperties, useCallback, useMemo } from 'react';
import {
  Theme,
  createStyles,
  makeStyles,
  useTheme
} from '@material-ui/core/styles';

import NoSsr from '@material-ui/core/NoSsr';
import { Omit } from '@material-ui/types';
import Select from 'react-select';
import { StylesConfig } from 'react-select/src/styles';
import components from './CustomComponents';
import { emphasize } from '@material-ui/core/styles/colorManipulator';
import linq from 'linq';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      height: 250
    },
    input: {
      display: 'flex',
      padding: 0,
      height: 'auto'
    },
    outlined: {
      marginTop: 5,
      marginLeft: 12,
      marginRight: 5,
      marginBottom: 5
    },
    filled: {
      marginTop: 20,
      marginLeft: 12,
      marginRight: 5,
      marginBottom: 0
    },
    valueContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      flex: 1,
      alignItems: 'center',
      overflow: 'hidden'
    },
    chip: {
      margin: theme.spacing(0.5, 0.25)
    },
    chipFocused: {
      backgroundColor: emphasize(
        theme.palette.type === 'light'
          ? theme.palette.grey[300]
          : theme.palette.grey[700],
        0.08
      )
    },
    noOptionsMessage: {
      padding: theme.spacing(1, 2)
    },
    singleValue: {
      //fontSize: 16
    },
    placeholder: {
      position: 'absolute'
      //left: 2,
      //bottom: 6,
      //fontSize: 16
    },
    paper: {
      position: 'absolute',
      zIndex: 10000,
      marginTop: theme.spacing(1),
      left: 0,
      right: 0
    },
    divider: {
      height: theme.spacing(2)
    }
  })
);

type VariantType = 'standard' | 'filled' | 'outlined';

const getGroupOptions = (
  options: Array<SelectOption>
): GroupType<SelectOption>[] | SelectOption[] => {
  const query = linq.from(options);
  const hasGroup = query.any(i => i.group !== undefined);
  return hasGroup
    ? query
        .groupBy(i => i.group || '')
        .orderBy(g => g.key())
        .select<GroupType<SelectOption>>(g => ({
          label: g.key(),
          options: g.toArray()
        }))
        .toArray()
    : options;
};

interface SelectFieldProps extends Omit<FieldWrapperProps, 'variant'> {
  variant?: VariantType;
}

function SelectField({
  label,
  placeholder,
  field,
  form,
  name,
  value,
  variant,
  required,
  multiSelection,
  options,
  ...rest
}: SelectFieldProps) {
  const classes = useStyles();
  const theme = useTheme();

  const handleChange = useCallback(
    (value: ValueType<SelectOption>, _action: ActionMeta) => {
      if (field.onChange)
        field.onChange({ target: { name: field.name, value } });
    },
    []
  );

  const selectStyles = useMemo(
    (): StylesConfig => ({
      indicatorsContainer: (base: CSSProperties) => ({
        ...base,
        cursor: 'pointer'
      }),
      input: (base: CSSProperties) => ({
        ...base,
        color: theme.palette.text.primary,
        '& input': {
          font: 'inherit'
        }
      })
    }),
    [theme.palette.text.primary]
  );

  return (
    <NoSsr>
      <Select
        {...rest}
        {...field}
        onChange={handleChange}
        isClearable
        isSearchable
        classes={classes}
        styles={selectStyles}
        options={getGroupOptions(options || [])}
        components={components}
        isMulti={multiSelection}
        closeMenuOnSelect={!multiSelection}
        placeholder={placeholder || ''}
        TextFieldProps={{
          label: (variant as any) === 'labeled' ? undefined : label,
          variant: (variant as any) === 'labeled' ? 'outlined' : variant,
          required,
          InputLabelProps: {
            shrink: placeholder || field.value ? true : undefined
          }
        }}
      />
    </NoSsr>
  );
}

export default SelectField;
