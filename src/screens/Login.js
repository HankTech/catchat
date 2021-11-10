import React from 'react'
import { Text, StatusBar, View } from 'react-native'
import ImageLogin from '../assets/images/svg/ImageLogin'
import { useNavigation, useTheme } from '@react-navigation/native'
import LoginStyles from '../styles/LoginStyles'

//  components
import Button from '../components/Button'

const Login = () => {
  const navigation = useNavigation()
  const goToRegister = () => navigation.navigate('Register')

  const { colors } = useTheme()
  const styles = LoginStyles()

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.statusBarBackgroundColor} />
      <View style={styles.image}>
        <ImageLogin />
      </View>
      <Text style={styles.text}>Lleva la privacidad contigo.</Text>
      <Text style={styles.text}>Sé tu mism@ en todos tus mensajes.</Text>

      <Text style={styles.termsAndPrivacy}>Términos de politica y privacidad</Text>

      <Button text='Adelante' stylesButton={styles.buttonNext} onPress={goToRegister} />
      <Button text='Transferir o restaurar cuenta' type='light' stylesButtonText={styles.restoreButton} />
    </View>
  )
}

export default Login
