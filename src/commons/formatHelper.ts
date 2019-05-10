import dayjs, { Dayjs } from 'dayjs';

import numeral from 'numeral';

export const applyFormat = (
  value: number | Date | Numeral | Dayjs,
  format: string
): string => {
  let finalValue: any = undefined;

  if (typeof value === 'number') finalValue = numeral(value);
  if (value instanceof Date) finalValue = dayjs(value);

  //If it is NumberJs
  if (finalValue.isNumeral) return (finalValue as Numeral).format(format);
  //If it is DayJs
  if (finalValue.isValid && finalValue.isValid())
    return (finalValue as Dayjs).format(format);

  return value.toString();
};
