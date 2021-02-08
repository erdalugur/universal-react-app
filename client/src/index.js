import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { configureTheme } from './theme';
import App from './App'
import { AppThemeProvider, useAppTheme } from './hooks'

const Main = () => {
  const { type } = useAppTheme()
  const prefersDarkMode = type == 'dark'
  const theme = React.useMemo(
    () =>
      configureTheme({ type: prefersDarkMode ? 'dark' : 'light' }),
    [prefersDarkMode],
  );
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </MuiThemeProvider>
  )
}

ReactDOM.render(
  <AppThemeProvider>
    <Main />
  </AppThemeProvider>,
  document.getElementById('root')
);
