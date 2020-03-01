import React from 'react'
import { Formik } from 'formik'

const handleChange = ({ setFieldValue, setFieldTouched }) => (name) => (value) => {
  setFieldValue(name, value)
  setFieldTouched(name, true)
}

const AppForm = ({ model, schema, handleSubmit, Form }) => (
  <Formik
    initialValues={model}
    validationSchema={schema}
    onSubmit={handleSubmit}>
      {props => <Form {...props} />}
  </Formik>
)

export default AppForm
