import React from 'react'
import { StyleSheet, Text } from 'react-native'

const styles = StyleSheet.create({
  default: {
    color: 'black'
  },
  error: {
    color: 'red'
  }
})

const Component = ({ error, touched, children }) => {
  const hasError = error && touched
  
  return (
    <Text style={hasError ? styles.error : styles.default}>
      {children}
    </Text>
  )
}

export default Component
