import React from 'react';

export function render<TProps>(Component: any, props?: TProps) {
  if (!Component) return null;
  if (typeof Component === 'string') return Component;
  return React.isValidElement(Comment) ? Component : <Component {...props} />;
}
