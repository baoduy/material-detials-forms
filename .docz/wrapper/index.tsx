import '../asset/style.less';

import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({});

export default ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
