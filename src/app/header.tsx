'use client'
import React, {useState} from "react"

const GlobalHeader = () => {
  const [theme, setTheme] = useState()
  const [themeButton, setButtonName] = useState('밝은 테마보기')

  const themeChange = () => {

  }

  const buttonNameChange = () => {
    setButtonName('어두운 테마보기')
  }

  return (
    <div>
      <button onClick={buttonNameChange}>{themeButton}</button>
    </div>
  )
}

export default GlobalHeader