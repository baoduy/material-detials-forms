import { ReactChild, ReactNode } from 'react';

import { Omit } from '@material-ui/core';

export interface TitleProps {
  className?: string;
  icon?: ReactNode;
  caption?: string;
  subtitle?: string;
  text: string;
  tooltip?: string;
  color?: string;
}

type OmitAs<T> = Omit<T, 'As'>;
type AsType<T> = React.ComponentType<OmitAs<T>> | JSX.Element;

interface AsComponent<TProps> {
  As?: AsType<TProps>;
}

export interface DetaislHeaderProps extends AsComponent<DetaislHeaderProps> {
  hr?: boolean;
  title: TitleProps | string;
}

export interface DetaislFooterProps extends AsComponent<DetaislFooterProps> {
  hr?: boolean;
  children: ReactChild;
}

export interface DetaislBodyProps<TData = any>
  extends AsComponent<DetaislBodyProps> {
  data: TData;
  fields: Array<DetailsField>;
}

export interface DetailsField {
  label: Omit<LabelFieldProps, 'children'> | string;
  value: Omit<LabelFieldProps, 'children'> | string;
}

export interface DetailsFormProps<TData> extends DetaislBodyProps<TData> {
  header?: DetaislHeaderProps | string;
  footer?: DetaislFooterProps;
  flat?: boolean;
}

/** The variant of LabelField */
export type LabelVariant = 'title' | 'subtitle' | 'caption' | 'body' | 'label';

/**
 * The Prop definition of LabelField.
 */
export interface LabelFieldProps {
  /** The addition css for LabelField component */
  className?: string;
  /** The Icon of Label */
  icon?: ReactNode;
  /** The display style of Label */
  variant?: LabelVariant;
  /** Make forntweight as Bold */
  bold?: boolean;
  /** Custom color of LabelField it should be a hex color value ex: #e91e63 */
  color?: string;
  /** The child of Label normally it is a string */
  children: ReactNode;
}
