import * as dayjs from 'dayjs';
import * as numeral from 'numeral';

const DefaultDateFormat = 'DD/MM/YYYY HH:mm:ss';
const DefaultNumberFormat = '0,0.00';

/**
 * Apply the format to date and number
 * @param value the number or date
 * @param format for formation string
 *  DefaultDateFormat = 'DD/MM/YYYY HH:mm:ss'
 *  DefaultNumberFormat = '0,0.00'
 */
export const applyFormat = (value: any, format?: string): string => {
  if (typeof value === 'number')
    return numeral(value).format(format || DefaultNumberFormat);

  //Try with Date
  const d = dayjs(value);
  if (d.isValid()) return d.format(format || DefaultDateFormat);

  //try with number
  const n = numeral(value);
  if (n.isNumeral) return n.format(format || DefaultNumberFormat);

  return value.toString();
};
