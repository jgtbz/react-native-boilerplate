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
import { login, profile } from '../../../services/users'
import { useStore } from '../../../store'
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
  const [_, dispatch] = useStore()

  const model = {
    email: '',
    password: ''
  }

  const schema = yup.object().shape({
    email: yup
      .string()
      .email(errorsMessages.email)
      .required(errorsMessages.required),
    password: yup
      .string()
      .required(errorsMessages.required)
      .min(4, errorsMessages.minLength(4))
      .max(12, errorsMessages.maxLength(12))
  })

  const handleToken = ({ token }) => dispatch({ type: 'setToken', token })
  const handleUser = () => profile().then(({ data }) => dispatch({ type: 'setUser', user: data }))
  const handleAlert = ({ message }) => Alert.alert(message)

  const handleSubmit = (values, actions) => {
    actions.setSubmitting(true)
    login(values)
      .then(handleToken)
      .then(handleUser)
      .then(actions.resetForm)
      .catch(handleAlert)
      .finally(() => actions.setSubmitting(false))
  }

  const Form = ({ handleSubmit, values, errors, touched, isValid, ...props }) => (
    <View>
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
      <TouchableOpacity disabled={!isValid} onPress={handleSubmit}>
        <Text>Enviar</Text>
      </TouchableOpacity>
      <View>
        <TouchableOpacity onPress={() => navigation.push('Register')}>
          <Text>Cadastro</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.push('ForgotPassword')}>
          <Text>Esqueceu a senha ?</Text>
        </TouchableOpacity>
      </View>
    </View>
  )

  return (
    <View style={styles.centered}>
      <Text>Login</Text>
      <AppForm
        model={model}
        schema={schema}
        handleSubmit={handleSubmit}
        Form={Form} />
    </View>
  )
}

export default Component
