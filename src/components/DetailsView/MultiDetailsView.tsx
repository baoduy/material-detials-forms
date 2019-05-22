import { DetailsHeaderProps, DetailsViewProps } from '../TypeDefinitions';

import DetailsBody from './SectionDetailsBody';
import DetailsFooter from './DetailsFooter';
import DetailsHeader from './DetailsHeader';
import React from 'react';

function SectionDetailsView<TData = any>({
  header,
  footer,
  ...rest
}: DetailsViewProps<TData>) {
  const finalHeader: DetailsHeaderProps | undefined = header
    ? typeof header === 'string'
      ? { title: header }
      : header
    : undefined;

  return (
    <>
      {finalHeader && <DetailsHeader hr={false} {...finalHeader} />}
      <DetailsBody<TData> {...rest} />
      {footer &&
        (React.isValidElement(footer) ? (
          <DetailsFooter>{footer}</DetailsFooter>
        ) : (
          <DetailsFooter {...footer} />
        ))}
    </>
  );
}

export default SectionDetailsView;
