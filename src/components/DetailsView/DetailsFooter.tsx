import { DetailsFooterProps } from '../TypeDefinitions';
import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles({ root: { marginTop: 10 } });

const DetailsFooter = ({ hr, children, As, ...rest }: DetailsFooterProps) => {
  if (As) {
    if (React.isValidElement(As)) return As;
    const Com: any = As;
    return <Com hr={hr} {...rest} />;
  }

  const classes = useStyle();

  return (
    <div className={classes.root}>
      {hr && <hr />}
      {children}
    </div>
  );
};

DetailsFooter.defaultProps = {
  hr: false
};

export default DetailsFooter;
