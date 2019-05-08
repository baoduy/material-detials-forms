import { ReactNode } from 'react';

export interface DetailsFormProps {
  header?: React.ReactNode;
  body?: React.ReactNode;
  footer?: React.ReactNode;
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
