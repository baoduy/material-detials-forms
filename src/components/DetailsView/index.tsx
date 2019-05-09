import Card from '@material-ui/core/Card';
import CardrdContent from '@material-ui/core/CardContent';
import DetailsBody from './DetailsBody';
import DetailsFooter from './DetailsFooter';
import { DetailsFormProps } from '../TypeDefinitions';
import DetailsHeader from './DetailsHeader';
import React from 'react';

function DetailsForm<TData>({
  flat,
  header,
  footer,
  ...rest
}: DetailsFormProps<TData>) {
  const content = (
    <>
      {header ? (
        typeof header === 'string' ? (
          <DetailsHeader title={header} />
        ) : (
          <DetailsHeader {...header} />
        )
      ) : null}
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
