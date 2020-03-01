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
} from '../../../../components'
import { updatePassword } from '../../../../services/users'
import { errorsMessages } from '../../../../support/validators'
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
    currentPassword: '',
    password: '',
    confirmPassword: ''
  }

  const schema = yup.object().shape({
    currentPassword: yup
      .string()
      .required(errorsMessages.required)
      .min(4, errorsMessages.minLength(4))
      .max(12, errorsMessages.maxLength(12)),
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

  const handleSuccess = ({ message }) => Alert.alert(message, null, [{ text: 'Ok', onPress: handleRedirect }])
  const handleError = ({ message }) => Alert.alert(message, options)
  const handleRedirect = () => navigation.goBack()
  
  const handleSubmit = (values, actions) => {
    actions.setSubmitting(true)
    updatePassword(values)
      .then(handleSuccess)
      .then(actions.resetForm)
      .catch(handleError)
      .finally(() => actions.setSubmitting(false))
  }

  const Form = ({ handleSubmit, values, errors, touched, isValid, ...props }) => (
    <View>
      <AppFormItem
        label="Senha atual"
        placeholder="Entre com a sua senha atual"
        name="currentPassword"
        type="password"
        value={values.currentPassword}
        error={errors.currentPassword}
        touched={touched.password}
        Input={TextInput}
        {...props} />
      <AppFormItem
        label="Nova senha"
        placeholder="Entre com a sua nova senha"
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
    </View>
  )

  return (
    <View style={styles.centered}>
      <AppForm
        model={model}
        schema={schema}
        handleSubmit={handleSubmit}
        Form={Form} />
    </View>
  )
}

export default Component
