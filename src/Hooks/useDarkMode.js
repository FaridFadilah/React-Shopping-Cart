import React from 'react'

export default function useDarkMode() {
  const [theme, setTheme] = React.useState("light")
  const colorTheme = theme === "light" ? "dark" : "light"
  React.useEffect(() => {
    const root = window.document.documentElement

    root.classList.add(theme)
    root.classList.remove(colorTheme)
  }, [setTheme, colorTheme])
  return [setTheme, colorTheme]
}