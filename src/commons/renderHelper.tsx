import { DetailsField, FieldOption } from '@src/components/TypeDefinitions';

import React from 'react';

export function render<TProps>(Component: any, props?: TProps) {
  if (!Component) return null;
  if (typeof Component === 'string') return Component;
  return React.isValidElement(Comment) ? Component : <Component {...props} />;
}

export function generateDataFields<TData>(
  data: TData,
  fields: Array<FieldOption<TData>>
): Array<DetailsField> {}
