import { DetailsBodyProps, OmitAs } from '../../TypeDefinitions';

import DetailsField from './DetailsField';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import { Theme } from '@material-ui/core/styles';
import classNames from 'classnames';
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
      ...(typeof alternateRowColor === 'object'
        ? alternateRowColor
        : {
            backgroundColor:
              typeof alternateRowColor === 'string'
                ? alternateRowColor
                : theme.palette.background.default
          })
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

  let current = 0;
  let count = 0;

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

        count += typeof gridSize.md === 'number' ? gridSize.md : 0;
        if (count >= 12) {
          current += 1;
          count = 0;
        }

        return (
          <Grid
            className={classNames({
              [classes.cell]: true,
              [classes.alternateRow]: current > 0 && current % 2 === 0
            })}
            key={i}
            item
            {...gridSize}
          >
            <DetailsField labelAlign={labelAlign} {...rest} />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default GridDetailsBody;
