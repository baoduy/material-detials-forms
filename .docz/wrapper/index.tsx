import '../asset/style.less';

import { MuiFormProvider } from '../../src';
import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: { fontSize: 12 },
  overrides: { MuiOutlinedInput: { input: { padding: '12px' } } }
});

export default ({ children }) => (
  <MuiFormProvider theme={theme}>{children}</MuiFormProvider>
);
