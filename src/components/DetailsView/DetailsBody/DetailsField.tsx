import { DetailsFieldProps } from '../../TypeDefinitions';
import Grid from '@material-ui/core/Grid';
import LabelField from '../../Labels/LabelField';
import { Omit } from '@material-ui/core';
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

function DetailsField(props: Omit<DetailsFieldProps, 'gridSize'>) {
  const asCom = renderAsComponent(props);
  if (asCom) return asCom;

  const classes = useStyles();
  const { label, value, labelAlign } = props;

  return (
    <Grid container alignItems="baseline" justify="center">
      <Grid
        className={classNames({
          [classes.label]: true,
          [classes.alignRight]: labelAlign === 'right'
        })}
        item
        md={4}
        sm={12}
      >
        {label && (
          <LabelField variant="caption" {...label}>
            {label.text}
          </LabelField>
        )}
      </Grid>
      <Grid item md={8} sm={12}>
        {value && (
          <LabelField variant="label" {...value}>
            {value.text}
          </LabelField>
        )}
      </Grid>
    </Grid>
  );
}

export default DetailsField;
