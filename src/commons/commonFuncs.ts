export const isPrd = process.env.NODE_ENV === 'production';

export const isBrowser = typeof window !== 'undefined';

const isLowerCase = (char: string) => char === char.toLowerCase();
const isUpperCase = (char: string) => char === char.toUpperCase();
const isChanged = (preChar: string, char: string) =>
  isLowerCase(preChar) && isUpperCase(char);

/** Get Javascript field name
 * ex: input is FullName return fullName
 */
export const getJsName = (name: string) => {
  if (!name) return name;
  return name.charAt(0).toLowerCase() + name.substr(1);
};

/** Get Display Name from field name
 * ex: fullName return is Full Name
 */
export const getDisplayName = (field: string | undefined) => {
  if (!field) return field;

  let display: string = field.charAt(0).toUpperCase() + field.substr(1);
  let previousChar = display.charAt(0);

  let i: number = 1;
  while (i < display.length) {
    const char = display.charAt(i);
    if (isChanged(previousChar, char)) {
      display = display.substr(0, i) + ' ' + display.substr(i);
      i++;
    }
    previousChar = display.charAt(i);
    i++;
  }

  return display.replace(' Id', '');
};
