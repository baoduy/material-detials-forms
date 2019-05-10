import { DetailsFormProps, DetaislHeaderProps } from '../TypeDefinitions';

import Card from '@material-ui/core/Card';
import CardrdContent from '@material-ui/core/CardContent';
import DetailsBody from './DetailsBody';
import DetailsFooter from './DetailsFooter';
import DetailsHeader from './DetailsHeader';
import React from 'react';

function DetailsForm<TData>({
  flat,
  header,
  footer,
  ...rest
}: DetailsFormProps<TData>) {
  const finalHeader: DetaislHeaderProps | undefined = header
    ? typeof header === 'string'
      ? { title: header }
      : header
    : undefined;

  const content = (
    <>
      {finalHeader && <DetailsHeader {...finalHeader} />}
      <DetailsBody {...rest} />
      {footer && <DetailsFooter {...footer} />}
    </>
  );

  return flat ? (
    content
  ) : (
    <Card>
      <CardrdContent>{content}</CardrdContent>
    </Card>
  );
}

export default DetailsForm;
