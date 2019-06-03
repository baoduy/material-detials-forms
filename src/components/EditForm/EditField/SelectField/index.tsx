import {
  FieldWrapperProps,
  SelectGroupOption,
  SelectOption
} from '@src/components/TypeDefinitions';
import React, { CSSProperties, useMemo } from 'react';
import {
  Theme,
  createStyles,
  makeStyles,
  useTheme
} from '@material-ui/core/styles';

import NoSsr from '@material-ui/core/NoSsr';
import { Omit } from '@material-ui/types';
import Select from 'react-select';
import { StylesConfig } from 'react-select/lib/styles';
import { ValueType } from 'react-select/lib/types';
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
      margin: theme.spacing(0.5, 0.25),
      height: 25
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
): Array<SelectOption> | Array<SelectGroupOption> => {
  const query = linq.from(options);
  const hasGroup = query.any(i => i.group !== undefined);
  return hasGroup
    ? query
        .groupBy(i => i.group || '')
        .orderBy(g => g.key())
        .select(g => ({
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
  variant,
  required,
  multiSelection,
  options,
  ...rest
}: SelectFieldProps) {
  const classes = useStyles();
  const theme = useTheme();
  const [single, setSingle] = React.useState<ValueType<SelectOption>>(null);

  function handleChangeSingle(value: ValueType<SelectOption>) {
    setSingle(value);
  }

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
        isClearable
        isSearchable
        id={name}
        name={name}
        classes={classes}
        styles={selectStyles}
        options={getGroupOptions(options || [])}
        components={components}
        value={single}
        isMulti={multiSelection}
        closeMenuOnSelect={!multiSelection}
        onChange={handleChangeSingle}
        placeholder={placeholder || ''}
        TextFieldProps={{
          label: (variant as any) === 'labeled' ? undefined : label,
          variant: (variant as any) === 'labeled' ? 'outlined' : variant,
          required,

          InputLabelProps: {
            shrink: placeholder || single ? true : undefined
          }
        }}
      />
    </NoSsr>
  );
}

export default SelectField;
