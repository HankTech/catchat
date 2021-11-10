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

    image: {
      width: '100%',
      height: '40%',
      marginBottom: 20
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
      color: colors.gray400,
      marginTop: '10%',
      marginBottom: '5%'
    },

    buttonNext: {
      marginBottom: 16
    },

    restoreButton: {
      fontSize: 14
    }
  })
}

export default LoginStyles
