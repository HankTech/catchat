import React from 'react'
import { Text, StatusBar, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import ImageLogin from '../assets/images/svg/ImageLogin'
import { useNavigation } from '@react-navigation/native'

//  components
import Button from '../components/Button'

const Login = () => {
  const navigation = useNavigation()

  const goToRegister = () => navigation.navigate('Register')

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='#ffffff' barStyle='dark-content' />
      <View style={{ width: '100%', height: '40%' }}>
        <ImageLogin />
      </View>
      <Text style={styles.text}>Lleva la privacidad contigo.</Text>
      <Text style={styles.text}>Sé tu mism@ en todos tus mensajes.</Text>

      <Text style={styles.termsAndPrivacy}>Términos de politica y privacidad</Text>

      <Button text='Adelante' stylesButton={{ marginBottom: 16 }} onPress={goToRegister} />
      <Button text='Transferir o restaurar cuenta' type='light' stylesButtonText={{ fontSize: 14 }} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },

  text: {
    fontFamily: 'Inter-Medium',
    fontSize: 28,
    color: '#000',
    textAlign: 'center',
    width: '85%'
  },

  termsAndPrivacy: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    marginTop: '10%',
    marginBottom: '5%'
  }
})

export default Login
