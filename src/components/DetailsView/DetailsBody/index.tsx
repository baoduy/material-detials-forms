import GridBody from './GridBody';
import { MultiDetailsBodyProps } from '../../TypeDefinitions';
import React from 'react';
import TableBody from './TableBody';
import { renderAsComponent } from '../../../commons/renderHelper';

function DetailsBody<TData>(props: MultiDetailsBodyProps<TData>): JSX.Element {
  const com = renderAsComponent(props);
  if (com) return com;

  const newProps: MultiDetailsBodyProps<TData> = {
    ...props,
    As: props.variant === 'table' ? TableBody : GridBody
  };
  return renderAsComponent(newProps) || <></>;
}

DetailsBody.defaultProps = {
  variant: 'gird',
  labelAlign: 'right'
};

export default DetailsBody;
