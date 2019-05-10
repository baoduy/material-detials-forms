import * as dayjs from 'dayjs';
import * as numeral from 'numeral';

export const applyFormat = (value: any, format: string): string => {
  if (typeof value === 'number') return numeral(value).format(format);

  //Try with Date
  const d = dayjs(value);
  if (d.isValid()) return d.format(format);

  //try with number
  const n = numeral(value);
  if (n.isNumeral) return n.format(format);

  return value.toString();
};
