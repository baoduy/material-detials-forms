import { DetaislBodyProps } from '../TypeDefinitions';
import LabelField from '../Labels/LabelField';
import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { Theme } from '@material-ui/core/styles';
import { generateDataFields } from '../../commons/renderHelper';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexShrink: 0
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default
    }
  },
  th: { width: '30%' }
}));

const DetailsBody = ({ data, fields, As, ...rest }: DetaislBodyProps) => {
  const classes = useStyles();

  if (As) {
    if (React.isValidElement(As)) return As;
    const Com: any = As;
    return <Com {...rest} />;
  }

  const values = generateDataFields(data, fields);

  return (
    <Table className={classes.root}>
      <TableBody>
        {values.map((row, i) => (
          <TableRow key={i} className={classes.row}>
            <TableCell className={classes.th} align="right" scope="row">
              {row.label.text}
            </TableCell>
            <TableCell>{row.value.text}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default DetailsBody;
