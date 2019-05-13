import { DetailsField, FieldOption } from '@src/components/TypeDefinitions';
import { getDisplayName, isPrd } from './commonFuncs';

import React from 'react';
import { applyFormat } from './formatHelper';

export function render<TProps>(Component: any, props?: TProps) {
  if (!Component) return null;
  if (typeof Component === 'string') return Component;
  return React.isValidElement(Comment) ? Component : <Component {...props} />;
}

export function generateDataFields<TData>(
  data: TData,
  fields: Array<FieldOption<TData>>
): Array<DetailsField> {
  if (!data) return [];

  const fieldOptions: Array<FieldOption<TData> | string> = !fields
    ? Object.keys(data)
    : fields;

  return fieldOptions.map((f: string | FieldOption<TData>) => {
    let { accessor, displayOptions, format, label, name } =
      typeof f === 'string' ? ({ name: f } as FieldOption<TData>) : f;

    //Only validate in DEV mode
    if (!name && !accessor && !isPrd)
      throw `Either name or accessor of FieldOption should be privided ${f}`;

    if (!label) {
      if (!name && !isPrd)
        throw `Either name or label of FieldOption should be privided ${f}`;
      label = getDisplayName(name);
    }

    let value = accessor ? accessor(data) : name && data[name];
    if (format) value = applyFormat(value, format);

    return {
      label:
        typeof label === 'string' ? { text: label, variant: 'caption' } : label,
      value: { variant: 'subtitle', ...displayOptions, text: value }
    } as DetailsField;
  });
}
