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

export interface DetailsHeaderProps extends AsComponent<DetailsHeaderProps> {
  hr?: boolean;
  title: TitleProps | string;
}

export interface DetailsFooterProps extends AsComponent<DetailsFooterProps> {
  hr?: boolean;
  children: ReactChild;
}

export interface DetailsBodyProps<TData = any>
  extends AsComponent<DetailsBodyProps> {
  data: TData;
  fields: Array<FieldOption<TData>>;
  /** Flat theme without Card border and shadow */
  flat?: boolean;
  /** High-light color or True to use the default color for the odd row. Set false to disable the highlight */
  alternateRowColor?: boolean | string | React.CSSProperties;
}

export interface DisplayFieldProps extends Omit<LabelFieldProps, 'children'> {
  text: any;
}
export interface DetailsField {
  label: DisplayFieldProps;
  value: DisplayFieldProps;
}

export interface FieldOption<TData> {
  /** The name of property in data object */
  name?: string;
  /** If the value is combined from multi properties using this accessor to transform them into a string or number */
  accessor?: (data: TData) => string | number;
  /** The formation string to be applied to the Date or number value */
  format?: string;
  /** Label of file will be transformed automatically from the file name. However you can customize here */
  label?: DisplayFieldProps | string;
  /** The other option for Value field */
  displayOptions: DisplayFieldProps;
}

export interface DetailsFormProps<TData> extends DetailsBodyProps<TData> {
  header?: DetailsHeaderProps | string;
  footer?: DetailsFooterProps;
}

export interface EditFormProps<TData> extends DetailsBodyProps<TData> {
  header?: DetailsHeaderProps | string;
  footer?: DetailsFooterProps;
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
  /** Make font-weight as Bold */
  bold?: boolean;
  /** Custom color of LabelField it should be a hex color value ex: #e91e63 */
  color?: string;
  /** The child of Label normally it is a string */
  children: ReactNode;
}
