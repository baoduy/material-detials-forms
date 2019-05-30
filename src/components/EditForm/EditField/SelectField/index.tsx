import {
  FieldWrapperProps,
  SelectOption
} from '@src/components/TypeDefinitions';
import React, { CSSProperties } from 'react';
import {
  Theme,
  createStyles,
  makeStyles,
  useTheme
} from '@material-ui/core/styles';

import Components from './SelectComponents';
import NoSsr from '@material-ui/core/NoSsr';
import { Omit } from '@material-ui/core';
import Select from 'react-select';
import { ValueType } from 'react-select/lib/types';
import { emphasize } from '@material-ui/core/styles/colorManipulator';

const suggestions: SelectOption[] = [
  { label: 'Afghanistan' },
  { label: 'Aland Islands' },
  { label: 'Albania' },
  { label: 'Algeria' },
  { label: 'American Samoa' },
  { label: 'Andorra' },
  { label: 'Angola' },
  { label: 'Anguilla' },
  { label: 'Antarctica' },
  { label: 'Antigua and Barbuda' },
  { label: 'Argentina' },
  { label: 'Armenia' },
  { label: 'Aruba' },
  { label: 'Australia' },
  { label: 'Austria' },
  { label: 'Azerbaijan' },
  { label: 'Bahamas' },
  { label: 'Bahrain' },
  { label: 'Bangladesh' },
  { label: 'Barbados' },
  { label: 'Belarus' },
  { label: 'Belgium' },
  { label: 'Belize' },
  { label: 'Benin' },
  { label: 'Bermuda' },
  { label: 'Bhutan' },
  { label: 'Bolivia, Plurinational State of' },
  { label: 'Bonaire, Sint Eustatius and Saba' },
  { label: 'Bosnia and Herzegovina' },
  { label: 'Botswana' },
  { label: 'Bouvet Island' },
  { label: 'Brazil' },
  { label: 'British Indian Ocean Territory' },
  { label: 'Brunei Darussalam' }
].map(suggestion => ({
  value: suggestion.label,
  label: suggestion.label
}));

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    input: {
      display: 'flex',
      padding: 0,
      height: 'auto',
      cursor: 'point'
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
      height: theme.spacing(1)
    }
  })
);

type VariantType = 'standard' | 'filled' | 'outlined';

interface SelectFieldProps extends Omit<FieldWrapperProps, 'variant'> {
  variant?: VariantType;
}

function SelectField({
  label,
  placeholder,
  field,
  form,
  variant,
  ...rest
}: SelectFieldProps) {
  const classes = useStyles();
  const theme = useTheme();
  const [single, setSingle] = React.useState<ValueType<SelectOption>>(null);
  const [multi, setMulti] = React.useState<ValueType<SelectOption>>(null);

  function handleChangeSingle(value: ValueType<SelectOption>) {
    setSingle(value);
  }

  function handleChangeMulti(value: ValueType<SelectOption>) {
    setMulti(value);
  }

  const selectStyles = {
    input: (base: CSSProperties) => ({
      ...base,
      color: theme.palette.text.primary,
      '& input': {
        font: 'inherit'
      }
    })
  };

  return (
    <NoSsr>
      <Select
        isSearchable
        isClearable
        classes={classes}
        styles={selectStyles}
        options={suggestions}
        components={Components}
        value={single}
        TextFieldProps={{
          label: (variant as any) === 'labeled' ? undefined : label,
          variant: (variant as any) === 'labeled' ? 'outlined' : variant,
          InputLabelProps: {
            shrink: true
          }
        }}
        onChange={handleChangeSingle}
        placeholder={placeholder}
      />
    </NoSsr>
  );
}

export default SelectField;
