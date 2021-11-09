import React from 'react'
import { useColorScheme } from 'react-native'
import Navigation from './src/navigation'

export default function App () {
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <Navigation />
  )
}
