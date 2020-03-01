import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native'
import Swiper from 'react-native-swiper'

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const Component = ({ navigation }) => (
  <Swiper>
    <View style={styles.centered}>
      <Text>React Native</Text>
    </View>
    <View style={styles.centered}>
      <Text>React Native</Text>
      <TouchableOpacity onPress={() => navigation.push('Login')}>
        <Text>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.push('Register')}>
        <Text>Register</Text>
      </TouchableOpacity>
    </View>
  </Swiper>
)

export default Component
