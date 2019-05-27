import React, { ReactNode } from 'react';

import DayjsUtils from '@date-io/dayjs';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import ThemeProvider from '@material-ui/styles/ThemeProvider';

export interface MuiFormProviderProps<Theme> {
  children: ReactNode;
  /** The utils library from @date-io. Default is @date-io/dayjs. Refer here https://github.com/mui-org/material-ui-pickers */
  utils?: any;
  /** The theme of Material UI. ThemeProvider won't be added if theme property is undefined. */
  theme?: Theme | ((outerTheme: Theme) => Theme);
}

function MuiFormProvider<Theme>({
  children,
  utils,
  theme
}: MuiFormProviderProps<Theme>): React.ReactElement<
  MuiFormProviderProps<Theme>
> {
  const content = (
    <MuiPickersUtilsProvider utils={utils || DayjsUtils}>
      {children}
    </MuiPickersUtilsProvider>
  );

  return theme ? (
    <ThemeProvider theme={theme}>{content}</ThemeProvider>
  ) : (
    content
  );
}

export default MuiFormProvider;
