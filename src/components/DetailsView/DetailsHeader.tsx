import { DetaislHeaderProps } from '../TypeDefinitions';
import React from 'react';
import Title from '../Labels/Title';

const DetailsHeader = ({ hr, title, As, ...rest }: DetaislHeaderProps) => {
  if (As) {
    if (React.isValidElement(As)) return As;
    const Com: any = As;
    return <Com hr={hr} title={title} {...rest} />;
  }

  return (
    <>
      {typeof title === 'string' ? (
        <Title text={title} />
      ) : (
        <Title {...title} />
      )}
      {hr && <hr />}
    </>
  );
};

DetailsHeader.defaultProps = {
  hr: true
};

export default DetailsHeader;
