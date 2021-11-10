import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useTheme } from '@react-navigation/native'

const Button = ({ text, onPress, type = 'primary', stylesButton, stylesButtonText }) => {
  const { colors } = useTheme()

  const buttonBackgroundColors = {
    primary: colors.primary,
    light: colors.white
  }

  const textColor = {
    primary: colors.white,
    light: colors.gray400
  }

  const backgroundColor = buttonBackgroundColors[type]
  const color = textColor[type]

  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: backgroundColor },
        type === 'light' && { borderWidth: 1, borderColor: '#B8B8B2' },
        stylesButton
      ]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, { color: color }, stylesButtonText]}>
        {text}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    width: '75%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },

  buttonText: {
    fontFamily: 'Inter-Medium',
    fontSize: 22
  }
})

export default Button
