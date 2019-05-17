import { DetailsFormProps, DetailsHeaderProps } from '../TypeDefinitions';
import {
  Field,
  FieldProps,
  Form,
  Formik,
  FormikActions,
  FormikProps
} from 'formik';
import React, { useCallback } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import DetailsFooter from '../DetailsView/DetailsFooter';
import DetailsHeader from '../DetailsView/DetailsHeader';
import EditFormBody from './EditFormBody';

function DetailsForm<TData>({
  flat,
  header,
  footer,
  data,
  ...rest
}: DetailsFormProps<TData>) {
  const content = React.useMemo(() => {
    const finalHeader: DetailsHeaderProps | undefined = header
      ? typeof header === 'string'
        ? { title: header }
        : header
      : undefined;

    return (
      <>
        {finalHeader && <DetailsHeader {...finalHeader} />}
        <EditFormBody<TData> data={data} {...rest} />
        {footer &&
          (React.isValidElement(footer) ? (
            <DetailsFooter>{footer}</DetailsFooter>
          ) : (
            <DetailsFooter {...footer} />
          ))}
      </>
    );
  }, [header, footer, data]);

  const Render = (formikBag: FormikProps<TData>) =>
    flat ? (
      content
    ) : (
      <Card>
        <CardContent>{content}</CardContent>
      </Card>
    );

  const onSubmit = useCallback(
    (values: TData, actions: FormikActions<TData>) => {
      console.log('Edit Form onSubmit', values, actions);
    },
    []
  );

  return <Formik initialValues={data} onSubmit={onSubmit} render={Render} />;
}

export default DetailsForm;
