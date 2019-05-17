import { DetailsFormProps, DetailsHeaderProps } from '../TypeDefinitions';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import DetailsBody from './DetailsBody';
import DetailsFooter from './DetailsFooter';
import DetailsHeader from './DetailsHeader';
import React from 'react';

function DetailsForm<TData = any>({
  flat,
  header,
  footer,
  ...rest
}: DetailsFormProps<TData>) {
  const finalHeader: DetailsHeaderProps | undefined = header
    ? typeof header === 'string'
      ? { title: header }
      : header
    : undefined;

  const content = (
    <>
      {finalHeader && <DetailsHeader {...finalHeader} />}
      <DetailsBody<TData> {...rest} />
      {footer &&
        (React.isValidElement(footer) ? (
          <DetailsFooter>{footer}</DetailsFooter>
        ) : (
          <DetailsFooter {...footer} />
        ))}
    </>
  );

  return flat ? (
    content
  ) : (
    <Card>
      <CardContent>{content}</CardContent>
    </Card>
  );
}

export default DetailsForm;
