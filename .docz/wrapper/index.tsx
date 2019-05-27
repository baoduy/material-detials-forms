import '../asset/style.less';

import { MuiFormProvider } from '../../src';
import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({});

export default ({ children }) => (
  <MuiFormProvider theme={theme}>{children}</MuiFormProvider>
);
