import {
  KeyboardDatePicker,
  KeyboardDateTimePicker,
  KeyboardTimePicker
} from '@material-ui/pickers';

import { FieldWrapperProps } from '@src/components/TypeDefinitions';
import { Omit } from '@material-ui/types';
import { ParsableDate } from '@material-ui/pickers/constants/prop-types';
import React from 'react';

type FieldType = 'date' | 'datetime' | 'time';

interface CustomTextFieldProps
  extends Omit<Omit<FieldWrapperProps, 'variant'>, 'type'> {
  variant?: 'standard' | 'filled' | 'outlined';
  type: FieldType;
}

function getField(type: FieldType) {
  switch (type) {
    case 'date':
      return KeyboardDatePicker;
    case 'time':
      return KeyboardTimePicker;
    default:
      return KeyboardDateTimePicker;
  }
}

function getDefaultDateFormat(type: FieldType) {
  switch (type) {
    case 'date':
      return 'DD-MM-YYYY';
    case 'time':
      return 'hh:mm A';
    default:
      return 'DD-MM-YYYY hh:mm A';
  }
}

/**
 * Date, DateTime and Time picker. Default dateformat is  'DD/MM/YYYY'.
 * Refer here for Date format convention: https://github.com/iamkun/dayjs/blob/dev/docs/en/API-reference.md#displaying
 * @param param0 Date Value
 */
function DateTimeField({
  name,
  type,
  field,
  variant,
  dateFormat,
  defaultValue,
  value,
  ...rest
}: CustomTextFieldProps) {
  const handleDateChange = React.useCallback(() => {}, []);
  const Field = getField(type);

  return (
    <Field
      id={name}
      name={name}
      {...field}
      {...rest}
      initialFocusedDate={(value || defaultValue) as ParsableDate}
      value={value as ParsableDate}
      autoOk
      ampm
      variant="inline"
      inputVariant={variant}
      format={dateFormat || getDefaultDateFormat(type)}
      InputAdornmentProps={{ position: 'end' }}
      onChange={handleDateChange}
    />
  );
}

export default DateTimeField;
