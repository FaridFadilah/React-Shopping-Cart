import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import useDarkMode from '../Hooks/useDarkMode'

export default function DarkMode() {
    const [setTheme, colorTheme] = useDarkMode()
  return (
    <button className='text-2xl pr-6 dark:text-blue-300 text-gray-100' onClick={() => setTheme(colorTheme)}>{colorTheme === "light" ? <FontAwesomeIcon icon={faMoon}/> : <FontAwesomeIcon icon={faSun}/>}</button>
  )
}