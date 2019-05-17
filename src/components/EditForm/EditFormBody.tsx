import { DetailsBodyProps } from '../TypeDefinitions';
import LabelField from '../Labels/LabelField';
import React from 'react';
import { Theme } from '@material-ui/core/styles';
import classNames from 'classnames';
import { generateDataFields } from '../../commons/renderHelper';
import { makeStyles } from '@material-ui/styles';

const useStyles = (
  alternateRowColor?: boolean | string | React.CSSProperties
) =>
  makeStyles((theme: Theme) => ({
    root: {
      flexShrink: 0
    },
    alternateRow: {
      '&:nth-of-type(odd)': (typeof alternateRowColor === 'object'
        ? alternateRowColor
        : {
            backgroundColor:
              typeof alternateRowColor === 'string'
                ? alternateRowColor
                : theme.palette.background.default
          }) as any
    },
    th: { width: '30%' },
    cell: { padding: '10px 30px 10px 10px' }
  }))();

function EditFormBody<TData>({
  data,
  fields,
  alternateRowColor,
  As,
  ...rest
}: DetailsBodyProps<TData>) {
  if (As) {
    if (React.isValidElement(As)) return As;
    const Com: any = As;
    return <Com {...rest} />;
  }

  const classes = useStyles(alternateRowColor);

  const values = React.useMemo(() => generateDataFields(data, fields), [
    data,
    fields
  ]);

  return <div />;
}

export default EditFormBody;
