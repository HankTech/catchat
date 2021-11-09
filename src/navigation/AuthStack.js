import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

//  screens
import Login from '../screens/Login'

const Stack = createNativeStackNavigator()

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='login' component={Login} />
    </Stack.Navigator>
  )
}
export default AuthStack
