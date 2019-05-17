import { DetailsBodyProps, OmitAs } from '../../TypeDefinitions';

import DetailsField from './DetailsField';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import { Theme } from '@material-ui/core/styles';
import { generateDataFields } from '../../../commons/renderHelper';
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
    cell: { padding: '10px 30px 10px 10px' }
  }))();

function GridDetailsBody<TData>({
  data,
  fields,
  alternateRowColor,
  labelAlign
}: OmitAs<DetailsBodyProps<TData>>) {
  const classes = useStyles(alternateRowColor);

  const values = React.useMemo(() => generateDataFields(data, fields), [
    data,
    fields
  ]);

  return (
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
            <DetailsField labelAlign={labelAlign} {...rest} />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default GridDetailsBody;
