import {
  DetailsFieldProps,
  EditFieldProps,
  FieldOption
} from '@src/components/TypeDefinitions';
import { getDisplayName, isPrd } from './commonFuncs';

import { AsComponent } from '../components/TypeDefinitions';
import React from 'react';
import { applyFormat } from './formatHelper';

export function render<TProps>(Component: any, props?: TProps) {
  if (!Component) return null;
  if (typeof Component === 'string') return Component;
  return React.isValidElement(Comment) ? Component : <Component {...props} />;
}

/**
 * Render AsComponent or return undefined if As prop is not defined.
 * @param Component The instance of AsComponent
 * @param props The Props
 */
export function renderAsComponent<TProps>(
  Component: AsComponent<TProps>,
  props?: TProps
): JSX.Element | undefined {
  if (Component.As) {
    if (React.isValidElement(Component.As)) return Component.As;
    const { As, ...rest } = Component;
    return <As {...rest} {...props} />;
  }
  return React.isValidElement(Component) ? Component : undefined;
}

/** Generate the DetailsFieldProps from FieldOption and Data */
export function generateDataFields<TData>(
  data: TData,
  fields: Array<FieldOption<TData>>
): Array<DetailsFieldProps> {
  if (!data) return [];

  const fieldOptions: Array<FieldOption<TData> | string> = !fields
    ? Object.keys(data)
    : fields;

  return fieldOptions.map((f: string | FieldOption<TData>) => {
    let { accessor, valueOptions, format, label, name, ...rest } =
      typeof f === 'string' ? ({ name: f } as FieldOption<TData>) : f;

    //Only validate in DEV mode
    if (!name && !accessor && !isPrd)
      throw `Either name or accessor of FieldOption should be provided ${f}`;

    if (!label) {
      if (!name && !isPrd)
        throw `Either name or label of FieldOption should be provided ${f}`;
      label = getDisplayName(name);
    }

    let value = accessor ? accessor(data) : name && data[name];
    if (format) value = applyFormat(value, format);

    return {
      ...rest,
      label: typeof label === 'string' ? { text: label } : label,
      value: { ...valueOptions, text: value }
    } as DetailsFieldProps;
  });
}

/** Generate the EditFieldProps from FieldOption and Data */
export function generateEditFields<TData>(
  data: TData,
  fields: Array<FieldOption<TData>>
): Array<EditFieldProps> {
  if (!data) return [];

  const fieldOptions: Array<FieldOption<TData> | string> = !fields
    ? Object.keys(data)
    : fields;

  return fieldOptions.map((f: string | FieldOption<TData>) => {
    let { accessor, valueOptions, format, label, name, ...rest } =
      typeof f === 'string' ? ({ name: f } as FieldOption<TData>) : f;

    //Only validate in DEV mode
    if (!name && !accessor && !isPrd)
      throw `Either name or accessor of FieldOption should be provided ${f}`;

    if (!label) {
      if (!name && !isPrd)
        throw `Either name or label of FieldOption should be provided ${f}`;
      label = getDisplayName(name);
    }

    let value = accessor ? accessor(data) : name && data[name];
    if (format) value = applyFormat(value, format);

    return {
      ...rest,
      name: name,
      label: label,
      value: value
    } as EditFieldProps;
  });
}
