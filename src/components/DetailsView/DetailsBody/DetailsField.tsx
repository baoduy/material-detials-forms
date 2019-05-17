import { DetailsFieldProps } from '../../TypeDefinitions';
import Grid from '@material-ui/core/Grid';
import LabelField from '../../Labels/LabelField';
import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/styles';
import { renderAsComponent } from '../../../commons/renderHelper';

const useStyles = makeStyles({
  label: { paddingRight: 30 },
  alignRight: {
    textAlign: 'right'
  }
});

function DetailsField(props: DetailsFieldProps) {
  const asCom = renderAsComponent(props);
  if (asCom) return asCom;

  const classes = useStyles();
  const { label, value, labelAlign } = props;

  return (
    <Grid container>
      <Grid
        className={classNames({
          [classes.label]: true,
          [classes.alignRight]: labelAlign === 'right'
        })}
        item
        md={4}
        sm={12}
      >
        <LabelField variant="caption" {...label}>
          {label.text}
        </LabelField>
      </Grid>
      <Grid item md={8} sm={12}>
        <LabelField variant="label" {...value}>
          {value.text}
        </LabelField>
      </Grid>
    </Grid>
  );
}

export default DetailsField;
