import React, { useState } from 'react'
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
import {
  forgotPasswordSendPin,
  forgotPasswordValidatePin,
  forgotPassword
} from '../../../services/users'
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
  const [currentStep, setCurrentStep] = useState('sendPin')

  const model = {
    email: '',
    code: '',
    password: '',
    confirmPassword: ''
  }

  const emailSchema = yup
    .string()
    .email(errorsMessages.email)
    .required(errorsMessages.required)
  
  const codeSchema = yup
    .string()
    .required(errorsMessages.required)

  const passwordSchema = yup
    .string()
    .required(errorsMessages.required)
    .min(4, errorsMessages.minLength(4))
    .max(12, errorsMessages.maxLength(12))

  const confirmPasswordSchema = yup
    .string()
    .required(errorsMessages.required)
    .min(4, errorsMessages.minLength(4))
    .max(12, errorsMessages.maxLength(12))
    .oneOf([yup.ref('password'), null], errorsMessages.sameAsPassword)

  const schemaSteps = {
    sendPin: {
      email: emailSchema
    },
    validatePin: {
      code: codeSchema
    },
    forgotPassword: {
      password: passwordSchema,
      confirmPassword: confirmPasswordSchema
    }
  }
  const schemaStep = schemaSteps[currentStep]

  const schema = yup.object().shape(schemaStep)

  const changeCurrentStep = (value) => () => setCurrentStep(value)

  const changeCurrentStepToSendPin = changeCurrentStep('sendPin')
  const changeCurrentStepToValidatePin = changeCurrentStep('validatePin')
  const changeCurrentStepToForgotPassword = changeCurrentStep('forgotPassword')

  const handleAlert = ({ message }) => Alert.alert(message)
  const handleRedirect = () => navigation.goBack()
  
  const handleForgotPasswordSendPin = (values) => forgotPasswordSendPin(values)
    .then(handleAlert)
    .then(changeCurrentStepToValidatePin)
    .catch(handleAlert)

  const handleForgotPasswordValidatePin = (values) => forgotPasswordValidatePin(values)
    .then(handleAlert)
    .then(changeCurrentStepToForgotPassword)
    .catch(handleAlert)

  const handleForgotPassword = (values, { resetForm }) => forgotPassword(values)
    .then(handleAlert)
    .then(changeCurrentStepToSendPin)
    .then(resetForm)
    .then(handleRedirect)
    .catch(handleAlert)

  const steps = {
    sendPin: handleForgotPasswordSendPin,
    validatePin: handleForgotPasswordValidatePin,
    forgotPassword: handleForgotPassword
  }
  const step = steps[currentStep]

  const handleSubmit = (values, actions) => {
    actions.setSubmitting(true)
    step(values, actions).finally(() => actions.setSubmitting(false))
  }

  const Form = ({ handleSubmit, values, errors, touched, isValid, ...props }) => {
    const emailField = {
      label: 'Email',
      placeholder: 'Entre com o seu email',
      name: 'email',
      value: values.email,
      error: errors.email,
      touched: touched.email,
      Input: TextInput
    }
    const codeField = {
      label: 'Code',
      placeholder: 'Entre com o código',
      name: 'code',
      value: values.code,
      error: errors.code,
      touched: touched.code,
      Input: TextInput
    }
    const passwordField = {
      label: 'Password',
      placeholder: 'Entre com a sua senha',
      name: 'password',
      type: 'password',
      value: values.password,
      error: errors.password,
      touched: touched.password,
      Input: TextInput
    }
    const confirmPasswordField = {
      label: 'Confirm Password',
      placeholder: 'Confirme a sua senha',
      name: 'confirmPassword',
      type: 'password',
      value: values.confirmPassword,
      error: errors.confirmPassword,
      touched: touched.confirmPassword,
      Input: TextInput
    }

    const stepsFields = {
      sendPin: [
        emailField
      ],
      validatePin: [
        codeField
      ],
      forgotPassword: [
        passwordField,
        confirmPasswordField
      ]
    }
    const fields = stepsFields[currentStep]

    return (
      <View>
        {fields.map((field, index) => (
          <AppFormItem
            key={index}
            {...field}
            {...props} />
        ))}
        <TouchableOpacity disabled={!isValid} onPress={handleSubmit}>
          <Text>Enviar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleRedirect}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={styles.centered}>
      <Text>Redefina sua senha</Text>
      <AppForm
        model={model}
        schema={schema}
        handleSubmit={handleSubmit}
        Form={Form} />
    </View>
  )
}

export default Component
