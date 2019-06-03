import { MenuProps, NoticeProps } from 'react-select/lib/components/Menu';
import React, { HTMLAttributes } from 'react';
import TextField, { BaseTextFieldProps } from '@material-ui/core/TextField';

import CancelIcon from '@material-ui/icons/Cancel';
import Chip from '@material-ui/core/Chip';
import { ControlProps } from 'react-select/lib/components/Control';
import Divider from '@material-ui/core/Divider';
import MenuItem from '@material-ui/core/MenuItem';
import { MultiValueProps } from 'react-select/lib/components/MultiValue';
import { OptionProps } from 'react-select/lib/components/Option';
import Paper from '@material-ui/core/Paper';
import { PlaceholderProps } from 'react-select/lib/components/Placeholder';
import { SelectComponentsConfig } from 'react-select/lib/components';
import { SelectOption } from '@src/components/TypeDefinitions';
import { SingleValueProps } from 'react-select/lib/components/SingleValue';
import Typography from '@material-ui/core/Typography';
import { ValueContainerProps } from 'react-select/lib/components/containers';
import clsx from 'clsx';

const NoOptionsMessage = ({
  selectProps,
  innerProps,
  children
}: NoticeProps<SelectOption>) => (
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
}: ControlProps<SelectOption>) => (
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
}: OptionProps<SelectOption>) => {
  if (children === undefined) return <Divider />;

  return (
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
};

const Placeholder = ({
  children,
  selectProps,
  innerProps
}: PlaceholderProps<SelectOption>) => (
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
}: SingleValueProps<SelectOption>) => (
  <Typography className={selectProps.classes.singleValue} {...innerProps}>
    {children}
  </Typography>
);

const ValueContainer = ({
  selectProps,
  children
}: ValueContainerProps<SelectOption>) => (
  <div className={selectProps.classes.valueContainer}>{children}</div>
);

const MultiValue = ({
  children,
  selectProps,
  removeProps,
  isFocused,
  options
}: MultiValueProps<SelectOption>) => {
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

const Menu = ({
  selectProps,
  innerProps,
  children
}: MenuProps<SelectOption>) => (
  <Paper square className={selectProps.classes.paper} {...innerProps}>
    {children}
  </Paper>
);

// const GroupHeading = (props: MenuProps<SelectOption>) => (
//   <Typography variant="caption" {...props} />
// );

export default {
  Control,
  Menu,
  MultiValue,
  NoOptionsMessage,
  Option,
  Placeholder,
  SingleValue,
  ValueContainer
  //GroupHeading
} as SelectComponentsConfig<SelectOption>;
