import { ReactChild, ReactNode } from 'react';

import { BaseTextFieldProps } from '@material-ui/core/TextField/TextField';
import { FieldProps } from 'formik/dist/Field';
import { GridSize } from '@material-ui/core/Grid';
import { Omit } from '@material-ui/core';

export interface TitleProps {
  className?: string;
  icon?: ReactNode;
  caption?: string;
  subtitle?: string;
  text?: string;
  tooltip?: string;
  color?: string;
}

export type OmitAs<T> = Omit<T, 'As'>;
type AsType<T> = React.ComponentType<OmitAs<T>> | JSX.Element;

export interface AsComponent<TProps> {
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

type CellLabelAlign = 'left' | 'right';

export interface DetailsBodyProps<TData>
  extends AsComponent<DetailsBodyProps<TData>> {
  data: TData;
  fields: Array<FieldOption<TData>>;
  /** Flat theme without Card border and shadow */
  flat?: boolean;
  /** Label alignment apply to all Cell */
  labelAlign?: CellLabelAlign;
  /** High-light color or True to use the default color for the odd row. Set false to disable the highlight */
  alternateRowColor?: boolean | string | React.CSSProperties;
}

export interface SectionDetailsBodyProps<TData>
  extends Omit<DetailsBodyProps<TData>, 'fields'> {
  sectionPerRow?: 1 | 2 | 3 | 4;
  fields: Array<SectionFieldOption<TData>>;
}

export interface MultiDetailsBodyProps<TData>
  extends SectionDetailsBodyProps<TData> {
  variant?: 'table' | 'grid';
}

/** The variant of LabelField */
export type LabelVariant =
  | 'title'
  | 'subtitle'
  | 'caption'
  | 'body'
  | 'label'
  | 'chip';

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

export interface DisplayFieldProps extends Omit<LabelFieldProps, 'children'> {
  text: ReactNode;
}

export interface DetailsFieldProps extends AsComponent<DetailsFieldProps> {
  label: DisplayFieldProps;
  value: DisplayFieldProps;
  labelAlign?: CellLabelAlign;
  /** This only apply to the GridBody */
  gridSize: { sm?: GridSize; md?: GridSize; xs?: GridSize };
}

/** Input Type if not provided the input type will be decided automatically based on value type
 * https://www.w3schools.com/tags/att_input_type.asp
 */
export type EditFieldTypes =
  | 'url'
  | 'password'
  | 'image'
  | 'file'
  | 'email'
  | 'color'
  | 'radio'
  | 'checkbox'
  | 'date'
  | 'datetime'
  | 'time'
  | 'week'
  | 'number'
  | 'text'
  | string;

export interface EditFieldProps extends AsComponent<DetailsFieldProps> {
  name: string;
  label: string;
  value: string | number;
  variant?: 'standard' | 'filled' | 'outlined';
  /** Input Type if not provided the input type will be decided automatically based on value type   */
  type?: EditFieldTypes;
  /** This only apply to the GridBody */
  gridSize: { sm?: GridSize; md?: GridSize; xs?: GridSize };
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
  valueOptions: DisplayFieldProps | EditFieldProps;
  /** This only apply to the GridBody */
  gridSize: { sm?: GridSize; md?: GridSize; xs?: GridSize };
}

export interface SectionFieldOption<TData> {
  title: DetailsHeaderProps | string;
  fields: Array<FieldOption<TData>>;
}
/**
 * The Props of Single Details View
 */
export interface SingleDetailsViewProps<TData> extends DetailsBodyProps<TData> {
  header?: DetailsHeaderProps | string;
  footer?: DetailsFooterProps;
}

/**
 * The Props of Single Details View
 */
export interface DetailsViewProps<TData>
  extends Omit<SingleDetailsViewProps<TData>, 'fields'> {
  fields: Array<SectionFieldOption<TData>>;
}

/**
 * The Props of Single Edit Form
 */
export interface EditFormProps<TData> extends DetailsBodyProps<TData> {
  header?: DetailsHeaderProps | string;
  footer?: DetailsFooterProps;
}

export interface FieldWrapperProps<TValue>
  extends FieldProps<TValue>,
    BaseTextFieldProps,
    AsComponent<FieldProps<TValue>> {
  variant?: 'standard' | 'filled' | 'outlined';
  /** Input Type if not provided the input type will be decided automatically based on value type   */
  type?: EditFieldTypes;
}
