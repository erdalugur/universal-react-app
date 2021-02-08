import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { useTheme } from '@material-ui/core';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import { useAppTheme } from '../hooks'

export const ThemeSwitcher = () => {
    const { changeTheme } = useAppTheme()
    const theme = useTheme();
    return (
        <IconButton color="inherit" onClick={() => {
            changeTheme()
        }}>
            {theme.palette.type === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
    )
}