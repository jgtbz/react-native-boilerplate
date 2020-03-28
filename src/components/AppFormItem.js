import React from 'react'
import { View } from 'react-native'
import AppLabel from './AppLabel'
import AppFormInputError from './AppFormInputError'

const Component = ({ label, placeholder, name, type, value, error, touched, Input, setFieldValue, setFieldTouched }) => {
  const isSecureTextEntry = type === 'password'
  return (
    <View>
      <AppLabel error={error} touched={touched}>{label}</AppLabel>
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChangeText={(value) => setFieldValue(name, value)}
        onBlur={() => setFieldTouched(name)}
        secureTextEntry={isSecureTextEntry}
      />
      <AppFormInputError
        error={error}
        touched={touched}
      />
    </View>
  )
}

export default Component
