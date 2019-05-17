import { DetailsHeaderProps, TitleProps } from '../TypeDefinitions';

import React from 'react';
import Title from '../Labels/Title';

const DetailsHeader = ({ hr, title, As, ...rest }: DetailsHeaderProps) => {
  if (As) {
    if (React.isValidElement(As)) return As;
    const Com: any = As;
    return <Com hr={hr} title={title} {...rest} />;
  }

  const finalTitle: TitleProps =
    typeof title === 'string' ? { text: title } : title;

  return (
    <>
      <Title {...rest} {...finalTitle} />
      {hr && <hr />}
    </>
  );
};

DetailsHeader.defaultProps = {
  hr: true
};

export default DetailsHeader;
