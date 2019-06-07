import { AsComponent, ErrorFieldProps } from '@src/components/TypeDefinitions';

import ErrorIconField from './ErrorIconField';
import ErrorLabelField from './ErrorLabelField';
import ErrorMessageField from './ErrorMessageField';
import React from 'react';
import { renderAsComponent } from '@src/commons/renderHelper';

interface Props extends AsComponent<ErrorFieldProps> {
  variant?: 'label' | 'message' | 'icon';
}

const ErrorField = ({ variant, As, ...rest }: Props) => {
  const com = renderAsComponent({ As, ...rest });
  if (com) return com;

  switch (variant) {
    case 'icon':
      return <ErrorIconField {...rest} />;
    case 'label':
      return <ErrorLabelField {...rest} />;
    case 'message':
    default:
      return <ErrorMessageField {...rest} />;
  }
};

ErrorField.defaultProps = {
  variant: 'message'
};
export default ErrorField;
