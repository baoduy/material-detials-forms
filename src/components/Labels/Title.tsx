import Label from './LabelField';
import React from 'react';
import { ReactNode } from 'react';

export interface TitleProps {
  className?: string;
  icon?: ReactNode;
  caption?: string;
  subtitle?: string;
  text: string;
  color?: string;
  hr?: boolean;
}

const Title = ({
  className,
  icon,
  text,
  caption,
  subtitle,
  color,
  hr
}: TitleProps) => {
  return (
    <span className={className}>
      {caption && <Label variant="caption">{caption}</Label>}
      {text && (
        <Label color={color} icon={icon} bold>
          {text}
        </Label>
      )}
      {subtitle && <Label variant="subtitle">{subtitle}</Label>}
      {hr && <hr />}
    </span>
  );
};

Title.defaultProps = { hr: true };

export default Title;
