import {
  DetailsHeaderProps,
  SectionDetailsBodyProps
} from '../TypeDefinitions';

import Grid from '@material-ui/core/Grid';
import React from 'react';
import SingleDetailsView from './SingleDetailsView';
import { makeStyles } from '@material-ui/core/styles';
import { renderAsComponent } from '../../commons/renderHelper';

const useStyles = makeStyles({
  root: { marginTop: 20 },
  item: { padding: 10, marginBottom: 10 }
});

function SectionDetailsBody<TData>(
  props: SectionDetailsBodyProps<TData>
): JSX.Element {
  const com = renderAsComponent(props);
  if (com) return com;

  const classes = useStyles();
  const { fields, sectionPerRow, ...rest } = props;

  return (
    <Grid
      className={classes.root}
      container
      alignItems="baseline"
      justify="space-around"
    >
      {fields.map((f, i) => {
        const header: DetailsHeaderProps =
          typeof f.title === 'string'
            ? { title: { subtitle: f.title } }
            : f.title;

        return (
          <Grid
            className={classes.item}
            key={i}
            item
            md={(sectionPerRow ? 12 / sectionPerRow : 6) as any}
            sm={12}
            xs={12}
          >
            <SingleDetailsView {...rest} fields={f.fields} header={header} />
          </Grid>
        );
      })}
    </Grid>
  );
}

SectionDetailsBody.defaultProps = {
  variant: 'gird',
  labelAlign: 'right',
  sectionPerRow: 2
};

export default SectionDetailsBody;
