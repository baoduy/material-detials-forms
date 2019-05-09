import { DetaislBodyProps } from '../TypeDefinitions';
import React from 'react';

const DetailsBody = ({ As, ...rest }: DetaislBodyProps) => {
  if (As) {
    if (React.isValidElement(As)) return As;
    const Com: any = As;
    return <Com {...rest} />;
  }

  return <div />;
};

export default DetailsBody;
