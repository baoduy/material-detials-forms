import Label from './LabelField';
import React from 'react';
import { TitleProps } from '../TypeDefinitions';
import Tooltip from '@material-ui/core/Tooltip';

const Title = ({
  className,
  icon,
  text,
  caption,
  subtitle,
  tooltip,
  color
}: TitleProps) => {
  const content = (
    <span className={className}>
      {caption && (
        <Label
          variant="caption"
          color={!text && !subtitle ? color : undefined}
          icon={!text && !subtitle ? icon : undefined}
          bold={!text && !subtitle ? true : false}
        >
          {caption}
        </Label>
      )}

      {text && (
        <Label color={color} icon={icon} bold>
          {text}
        </Label>
      )}

      {subtitle && (
        <Label
          variant="subtitle"
          color={!text && !caption ? color : undefined}
          icon={!text && !caption ? icon : undefined}
          bold={!text && !caption ? true : false}
        >
          {subtitle}
        </Label>
      )}
    </span>
  );

  if (!tooltip) return content;

  return (
    <Tooltip title={tooltip} placement="bottom-start">
      {content}
    </Tooltip>
  );
};

Title.defaultProps = { hr: true };

export default Title;
