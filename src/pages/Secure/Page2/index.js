import React from 'react'
import {
  StyleSheet,
  View,
  Text
} from 'react-native'

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const Component = () => (
  <View style={styles.centered}>
    <Text>Page 2</Text>
  </View>
)

export default Component
