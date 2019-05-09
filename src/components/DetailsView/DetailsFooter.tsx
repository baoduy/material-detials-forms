import { DetaislFooterProps } from '../TypeDefinitions';
import React from 'react';

const DetailsFooter = ({ hr, children, As, ...rest }: DetaislFooterProps) => {
  if (As) {
    if (React.isValidElement(As)) return As;
    const Com: any = As;
    return <Com hr={hr} {...rest} />;
  }

  return (
    <>
      {hr && <hr />}
      {children}
    </>
  );
};

DetailsFooter.defaultProps = {
  hr: false
};

export default DetailsFooter;
