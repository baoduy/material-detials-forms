import { ReactNode } from 'react';

export interface LabelProps {
  icon?: ReactNode;
  text: string;
  variant?: 'title' | 'body' | 'label';
  bold?: boolean;
  color?: string;
}
