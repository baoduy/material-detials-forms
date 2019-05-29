import { MenuProps, NoticeProps } from 'react-select/lib/components/Menu';
import React, { HTMLAttributes } from 'react';

import { BaseTextFieldProps } from '@material-ui/core/TextField/TextField';
import CancelIcon from '@material-ui/icons/Cancel';
import Chip from '@material-ui/core/Chip';
import { ControlProps } from 'react-select/lib/components/Control';
import MenuItem from '@material-ui/core/MenuItem';
import { MultiValueProps } from 'react-select/lib/components/MultiValue';
import { OptionProps } from 'react-select/lib/components/Option';
import Paper from '@material-ui/core/Paper';
import { PlaceholderProps } from 'react-select/lib/components/Placeholder';
import { SelectOption } from '@src/components/TypeDefinitions';
import { SingleValueProps } from 'react-select/lib/components/SingleValue';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { ValueContainerProps } from 'react-select/lib/components/containers';
import clsx from 'clsx';

type InputComponentProps = Pick<BaseTextFieldProps, 'inputRef'> &
  HTMLAttributes<HTMLDivElement>;

export default {
  Control: (props: ControlProps<SelectOption>) => (
    <TextField
      fullWidth
      InputProps={{
        inputComponent: ({ inputRef, ...props }: InputComponentProps) => (
          <div ref={inputRef} {...props} />
        ),
        inputProps: {
          className: props.selectProps.classes.input,
          inputRef: props.innerRef,
          children: props.children,
          ...props.innerProps
        }
      }}
      {...props.selectProps.TextFieldProps}
    />
  ),
  Menu: (props: MenuProps<SelectOption>) => (
    <Paper
      square
      className={props.selectProps.classes.paper}
      {...props.innerProps}
    >
      {props.children}
    </Paper>
  ),
  MultiValue: (props: MultiValueProps<SelectOption>) => (
    <Chip
      tabIndex={-1}
      label={props.children}
      className={clsx(props.selectProps.classes.chip, {
        [props.selectProps.classes.chipFocused]: props.isFocused
      })}
      onDelete={props.removeProps.onClick}
      deleteIcon={<CancelIcon {...props.removeProps} />}
    />
  ),
  NoOptionsMessage: (props: NoticeProps<SelectOption>) => (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.noOptionsMessage}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  ),
  Option: (props: OptionProps<SelectOption>) => (
    <MenuItem
      ref={props.innerRef}
      selected={props.isFocused}
      component="div"
      style={{
        fontWeight: props.isSelected ? 500 : 400
      }}
      {...props.innerProps}
    >
      {props.children}
    </MenuItem>
  ),
  Placeholder: (props: PlaceholderProps<SelectOption>) => (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.placeholder}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  ),
  SingleValue: (props: SingleValueProps<SelectOption>) => (
    <Typography
      className={props.selectProps.classes.singleValue}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  ),
  ValueContainer: (props: ValueContainerProps<SelectOption>) => (
    <div className={props.selectProps.classes.valueContainer}>
      {props.children}
    </div>
  )
};
