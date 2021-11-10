import { StyleSheet } from 'react-native'
import { useTheme } from '@react-navigation/native'

const LoginStyles = () => {
  const { colors } = useTheme()

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      justifyContent: 'center',
      alignItems: 'center'
    },

    text: {
      fontFamily: 'Inter-Medium',
      fontSize: 28,
      color: colors.black,
      textAlign: 'center',
      width: '85%'
    },

    termsAndPrivacy: {
      fontFamily: 'Inter-Regular',
      fontSize: 16,
      color: colors.gray,
      marginTop: '10%',
      marginBottom: '5%'
    }
  })
}

export default LoginStyles
