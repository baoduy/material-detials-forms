import { DetailsFormProps, DetailsHeaderProps } from '../TypeDefinitions';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import DetailsFooter from '../DetailsView/DetailsFooter';
import DetailsHeader from '../DetailsView/DetailsHeader';
import EditFormBody from './EditFormBody';
import React from 'react';

function DetailsForm<TData>({
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
      <EditFormBody<TData> {...rest} />
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
