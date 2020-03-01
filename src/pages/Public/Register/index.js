import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native'
import {
  AppForm,
  AppFormItem
} from '../../../components'
import { createUsers } from '../../../services/users'
import { errorsMessages } from '../../../support/validators'
import * as yup from 'yup'

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const Component = ({ navigation }) => {
  const model = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  const schema = yup.object().shape({
    name: yup
      .string()
      .required(errorsMessages.required),
    email: yup
      .string()
      .email(errorsMessages.email)
      .required(errorsMessages.required),
    password: yup
      .string()
      .required(errorsMessages.required)
      .min(4, errorsMessages.minLength(4))
      .max(12, errorsMessages.maxLength(12)),
    confirmPassword: yup
      .string()
      .required(errorsMessages.required)
      .min(4, errorsMessages.minLength(4))
      .max(12, errorsMessages.maxLength(12))
      .oneOf([yup.ref('password'), null], errorsMessages.sameAsPassword)
  })

  const handleAlert = ({ message }) => Alert.alert(message)
  const handleRedirect = () => navigation.push('Login')
  
  const handleSubmit = (values, actions) => {
    actions.setSubmitting(true)
    createUsers(values)
      .then(handleAlert)
      .then(actions.resetForm)
      .catch(handleAlert)
      .finally(() => actions.setSubmitting(false))
  }

  const Form = ({ handleSubmit, values, errors, touched, isValid, ...props }) => (
    <View>
      <AppFormItem
        label="Nome"
        placeholder="Entre com o seu nome"
        name="name"
        value={values.name}
        error={errors.name}
        touched={touched.name}
        Input={TextInput}
        {...props} />
      <AppFormItem
        label="Email"
        placeholder="Entre com o seu email"
        name="email"
        value={values.email}
        error={errors.email}
        touched={touched.email}
        Input={TextInput}
        {...props} />
      <AppFormItem
        label="Senha"
        placeholder="Entre com a sua senha"
        name="password"
        type="password"
        value={values.password}
        error={errors.password}
        touched={touched.password}
        Input={TextInput}
        {...props} />
      <AppFormItem
        label="Confirme a senha"
        placeholder="Confirme a sua senha"
        name="confirmPassword"
        type="password"
        value={values.confirmPassword}
        error={errors.confirmPassword}
        touched={touched.confirmPassword}
        Input={TextInput}
        {...props} />
      <TouchableOpacity disabled={!isValid} onPress={handleSubmit}>
        <Text>Enviar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleRedirect}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  )

  return (
    <View style={styles.centered}>
      <Text>Cadastro</Text>
      <AppForm
        model={model}
        schema={schema}
        handleSubmit={handleSubmit}
        Form={Form} />
    </View>
  )
}

export default Component
