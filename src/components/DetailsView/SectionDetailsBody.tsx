import {
  DetailsHeaderProps,
  SectionDetailsBodyProps
} from '../TypeDefinitions';

import Grid from '@material-ui/core/Grid';
import React from 'react';
import SingleDetailsView from './SingleDetailsView';
import { renderAsComponent } from '../../commons/renderHelper';

function SectionDetailsBody<TData>(
  props: SectionDetailsBodyProps<TData>
): JSX.Element {
  const com = renderAsComponent(props);
  if (com) return com;

  const { fields, sectionPerRow, ...rest } = props;

  return (
    <Grid container alignItems="baseline" justify="space-around">
      {fields.map((f, i) => {
        const header: DetailsHeaderProps =
          typeof f.title === 'string'
            ? { title: { subtitle: f.title } }
            : f.title;

        return (
          <Grid
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
