import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.

const themes = {
    'dark': createMuiTheme({
        palette: {
            type: 'dark',
            // primary: {
            //   main: '#556cd6',
            // },
            // secondary: {
            //   main: '#19857b',
            // },
            // error: {
            //   main: red.A400,
            // },
            // background: {
            //   default: '#fff',
            // },
        },
    }),
    'light': createMuiTheme({
        palette: {
            type: 'light',
        },
    }),
}
export const configureTheme = ({ type = 'dark' }) => themes[type]