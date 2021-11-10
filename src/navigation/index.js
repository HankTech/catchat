import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar, useColorScheme } from 'react-native'
import { DarkTheme, LightTheme } from '../theme'

//  routes
import AuthStack from './AuthStack'

const Navigation = () => {
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <NavigationContainer theme={isDarkMode ? DarkTheme : LightTheme}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AuthStack />
    </NavigationContainer>
  )
}

export default Navigation
