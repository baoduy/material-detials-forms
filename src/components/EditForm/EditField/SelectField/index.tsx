import { MenuProps, NoticeProps } from 'react-select/lib/components/Menu';
import React, { CSSProperties, HTMLAttributes, useMemo } from 'react';
import TextField, { BaseTextFieldProps } from '@material-ui/core/TextField';
import {
  Theme,
  createStyles,
  makeStyles,
  useTheme
} from '@material-ui/core/styles';

import CancelIcon from '@material-ui/icons/Cancel';
import Chip from '@material-ui/core/Chip';
import { ControlProps } from 'react-select/lib/components/Control';
import { FieldWrapperProps } from '@src/components/TypeDefinitions';
import MenuItem from '@material-ui/core/MenuItem';
import { MultiValueProps } from 'react-select/lib/components/MultiValue';
import NoSsr from '@material-ui/core/NoSsr';
import { Omit } from '@material-ui/types';
import { OptionProps } from 'react-select/lib/components/Option';
import Paper from '@material-ui/core/Paper';
import { PlaceholderProps } from 'react-select/lib/components/Placeholder';
import Select from 'react-select';
import { SingleValueProps } from 'react-select/lib/components/SingleValue';
import Typography from '@material-ui/core/Typography';
import { ValueContainerProps } from 'react-select/lib/components/containers';
import { ValueType } from 'react-select/lib/types';
import clsx from 'clsx';
import { emphasize } from '@material-ui/core/styles/colorManipulator';

interface OptionType {
  label: string;
  value: string;
}

const suggestions: OptionType[] = [
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

const NoOptionsMessage = ({
  selectProps,
  innerProps,
  children
}: NoticeProps<OptionType>) => (
  <Typography
    color="textSecondary"
    className={selectProps.classes.noOptionsMessage}
    {...innerProps}
  >
    {children}
  </Typography>
);

type InputComponentProps = Pick<BaseTextFieldProps, 'inputRef'> &
  HTMLAttributes<HTMLDivElement>;

const inputComponent = ({ inputRef, ...props }: InputComponentProps) => (
  <div ref={inputRef} {...props} />
);

const Control = ({
  selectProps,
  innerRef,
  children,
  innerProps
}: ControlProps<OptionType>) => (
  <TextField
    fullWidth
    InputProps={{
      inputComponent,
      inputProps: {
        className: clsx({
          [selectProps.classes.input]: true,
          [selectProps.classes[selectProps.TextFieldProps.variant]]: true
        }),
        inputRef: innerRef,
        children: children,
        ...innerProps
      }
    }}
    {...selectProps.TextFieldProps}
  />
);

const Option = ({
  innerRef,
  isFocused,
  isSelected,
  innerProps,
  children
}: OptionProps<OptionType>) => (
  <MenuItem
    ref={innerRef}
    selected={isFocused}
    component="div"
    style={{
      fontWeight: isSelected ? 500 : 400
    }}
    {...innerProps}
  >
    {children}
  </MenuItem>
);

const Placeholder = ({
  children,
  selectProps,
  innerProps
}: PlaceholderProps<OptionType>) => (
  <Typography
    color="textSecondary"
    className={selectProps.classes.placeholder}
    {...innerProps}
  >
    {children}
  </Typography>
);

const SingleValue = ({
  children,
  selectProps,
  innerProps
}: SingleValueProps<OptionType>) => (
  <Typography className={selectProps.classes.singleValue} {...innerProps}>
    {children}
  </Typography>
);

const ValueContainer = ({
  selectProps,
  children
}: ValueContainerProps<OptionType>) => (
  <div className={selectProps.classes.valueContainer}>{children}</div>
);

const MultiValue = ({
  children,
  selectProps,
  removeProps,
  isFocused,
  options
}: MultiValueProps<OptionType>) => {
  const index = options.findIndex(o => o.value === children) % 3;
  return (
    <Chip
      color={index === 0 ? 'primary' : index === 1 ? 'secondary' : 'default'}
      tabIndex={-1}
      label={children}
      className={clsx(selectProps.classes.chip, {
        [selectProps.classes.chipFocused]: isFocused
      })}
      onDelete={removeProps.onClick}
      deleteIcon={<CancelIcon {...removeProps} />}
    />
  );
};

const Menu = ({ selectProps, innerProps, children }: MenuProps<OptionType>) => (
  <Paper square className={selectProps.classes.paper} {...innerProps}>
    {children}
  </Paper>
);

const components = {
  Control,
  Menu,
  MultiValue,
  NoOptionsMessage,
  Option,
  Placeholder,
  SingleValue,
  ValueContainer
};

type VariantType = 'standard' | 'filled' | 'outlined';

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
  ...rest
}: SelectFieldProps) {
  const classes = useStyles();
  const theme = useTheme();
  const [single, setSingle] = React.useState<ValueType<OptionType>>(null);

  function handleChangeSingle(value: ValueType<OptionType>) {
    setSingle(value);
  }

  const selectStyles = useMemo(
    () => ({
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
        isClearable
        isSearchable
        id={name}
        name={name}
        classes={classes}
        styles={selectStyles}
        options={suggestions}
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
