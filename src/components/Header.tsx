'use client'
import React, {useState, useEffect} from "react"
import { EThemeCode } from "../types/enum/theme"
import { Sun, Moon } from "react-feather"
import '../styles/header.css'

const GlobalHeader = () => {
  const recentlyTheme =  typeof window !== 'undefined' ? 
  window.localStorage.getItem('theme') : null
  const [theme, setTheme] = useState<string>(EThemeCode.DARK )
  const themeModeHandle = () => {
    setTheme(theme === EThemeCode.DARK ? EThemeCode.LIGHT : EThemeCode.DARK)
    window.localStorage.setItem('theme', theme)
  }

  const recentlyThemeSetting = () => {
    const theme = recentlyTheme === EThemeCode.DARK ?  EThemeCode.LIGHT : EThemeCode.DARK
    if(recentlyTheme) {
      setTheme(theme)
    }
  }
  
  useEffect(() => {
    document.body.dataset.theme = theme
  }, [theme])
  
  useEffect(() => {
    recentlyThemeSetting()
  }, [])

  return (
    <div className="header-area">
      <div onClick={themeModeHandle} className="header-mode-button">
        {theme === EThemeCode.DARK?
          (
            <Sun />
          ) : 
          (
            <Moon />
          )
        }
      </div>
    </div>
  )
}

export default GlobalHeader