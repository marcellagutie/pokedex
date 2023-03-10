import { ThemeProvider } from "styled-components"
import React, {useState} from 'react'

import { Outlet, Link } from "react-router-dom";
import { FaSun, FaMoon } from 'react-icons/fa'

import { light, dark } from './utils/styles/themes/Theme.styled'
import { GlobalStyles } from './utils/styles/global'
import {
    Title,
    ThemeSwitcher,
    Wrapper,
    Header
} from './App.styled'
import Logo from './assets/images/logo.png'


export default function App() {
    const [theme, setTheme] = useState(() => {
        const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
        return isDarkMode ? dark : light 
    })
    const toggleTheme = () => {
        document.body.style.transition = "linear .2s";
        (theme === light) ? setTheme(dark) : setTheme(light)
    }
    return (
        <ThemeProvider theme={theme}>
            <Wrapper>
                <GlobalStyles />
                <Header>
                    <Link to="/"><img src={Logo}/></Link>
                    <ThemeSwitcher onClick={() => toggleTheme()}>
                        {theme.title === "dark" ? (
                            <FaSun color={theme.colors.primary} fontSize={30} />
                        ) : (
                            <FaMoon color={theme.colors.text} fontSize={30} />
                        )}
                    </ThemeSwitcher>
                </Header>
     
                <Outlet/>
            </Wrapper>
        </ThemeProvider>
    )
}