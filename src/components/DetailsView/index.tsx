import {
  DetailsViewProps,
  FieldOption,
  SectionFieldOption,
  SingleDetailsViewProps
} from '../TypeDefinitions';

import React from 'react';
import SectionDetailsView from './SectionDetailsView';
import SingleDetailsView from './SingleDetailsView';

function isSectionConfig<TData>(
  fields: Array<SectionFieldOption<TData>> | Array<FieldOption<TData>>
): boolean {
  return fields.findIndex((f: any) => f.hasOwnProperty('fields')) >= 0;
}

function DetailsView<TData>({
  fields,
  ...rest
}: DetailsViewProps<TData> | SingleDetailsViewProps<TData>) {
  return isSectionConfig(fields) ? (
    <SectionDetailsView
      {...rest}
      fields={fields as Array<SectionFieldOption<TData>>}
    />
  ) : (
    <SingleDetailsView {...rest} fields={fields as Array<FieldOption<TData>>} />
  );
}

export { SingleDetailsView, SectionDetailsView };

export default DetailsView;
