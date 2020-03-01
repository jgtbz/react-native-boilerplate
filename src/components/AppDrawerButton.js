import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native'

const styles = StyleSheet.create({
  icon: {
    color: 'black',
    padding: 10,
    marginLeft: 10,
    fontSize: 20
  }
})

const Component = () => {
  const navigation = useNavigation()
  return (
    <View>
      <TouchableOpacity onPress={navigation.toggleDrawer}>
        <Icon name="bars" style={styles.icon} />
      </TouchableOpacity>
    </View>
  )
}

export default Component
