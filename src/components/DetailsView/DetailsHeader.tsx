import { DetaislHeaderProps, TitleProps } from '../TypeDefinitions';

import React from 'react';
import Title from '../Labels/Title';

const DetailsHeader = ({ hr, title, As, ...rest }: DetaislHeaderProps) => {
  if (As) {
    if (React.isValidElement(As)) return As;
    const Com: any = As;
    return <Com hr={hr} title={title} {...rest} />;
  }

  const finalTitle: TitleProps =
    typeof title === 'string' ? { text: title } : title;

  return (
    <>
      <Title {...finalTitle} />
      {hr && <hr />}
    </>
  );
};

DetailsHeader.defaultProps = {
  hr: true
};

export default DetailsHeader;
