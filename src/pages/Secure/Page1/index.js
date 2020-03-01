import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native'

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const Component = ({ navigation }) => (
  <View style={styles.centered}>
    <Text>Page 1</Text>
    <TouchableOpacity onPress={() => navigation.navigate('Page1Details')}>
      <Text>Page 1 - Details</Text>
    </TouchableOpacity>
  </View>
)

export default Component
