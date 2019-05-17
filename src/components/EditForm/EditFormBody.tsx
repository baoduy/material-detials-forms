import {
  generateDataFields,
  generateEditFields
} from '../../commons/renderHelper';

import { DetailsBodyProps } from '../TypeDefinitions';
import EditField from './EditField';
import { Form } from 'formik';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import { Theme } from '@material-ui/core/styles';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/styles';

const useStyles = (
  alternateRowColor?: boolean | string | React.CSSProperties
) =>
  makeStyles((theme: Theme) => ({
    root: {
      flexShrink: 0
    },
    alternateRow: {
      ...(typeof alternateRowColor === 'object'
        ? alternateRowColor
        : {
            backgroundColor:
              typeof alternateRowColor === 'string'
                ? alternateRowColor
                : theme.palette.background.default
          })
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

  const values = React.useMemo(() => generateEditFields(data, fields), [
    data,
    fields
  ]);

  return (
    <Form>
      <Grid container className={classes.root}>
        {values.map((v, i) => {
          let { gridSize, ...rest } = v;
          if (!gridSize)
            gridSize = {
              sm: 12,
              md: 12,
              xs: 12
            };

          return (
            <Grid className={classes.cell} key={i} item {...gridSize}>
              <EditField {...rest} />
            </Grid>
          );
        })}
      </Grid>
    </Form>
  );
}

export default EditFormBody;
