import { DetailsBodyProps, OmitAs } from '../../TypeDefinitions';

import LabelField from '../../Labels/LabelField';
import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
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

function TableDetailsBody<TData>({
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
    <Table className={classes.root}>
      <TableBody>
        {values.map((row, i) => (
          <TableRow key={i} className={classes.alternateRow}>
            <TableCell
              className={classNames(classes.cell, classes.th)}
              align={labelAlign}
              scope="row"
            >
              {row.label && (
                <LabelField variant="caption" {...row.label}>
                  {row.label.text}
                </LabelField>
              )}
            </TableCell>
            <TableCell className={classes.cell}>
              <LabelField variant="label" {...row.value}>
                {row.value.text}
              </LabelField>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default TableDetailsBody;
