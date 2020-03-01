import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native'
import { useStore } from '../../../store'

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const Component = ({ navigation }) => {
  const [{ user }] = useStore()
  return (
    <View style={styles.centered}>
      <Text>{JSON.stringify(user)}</Text>
      <TouchableOpacity onPress={() => navigation.push('UpdatePassword')}>
        <Text>Alterar Senha</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Component
