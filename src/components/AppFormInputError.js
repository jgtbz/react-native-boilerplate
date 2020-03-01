import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const styles = StyleSheet.create({
  error: {
    color: 'red'
  }
})

const Component = ({ error, touched }) => (
  <View>
    {error && touched ? (
      <Text style={styles.error}>{error}</Text>
    ) : (
      null
    )}
  </View>
)

export default Component
