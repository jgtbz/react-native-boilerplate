import React from 'react'
import { Formik } from 'formik'

const AppForm = ({ model, schema, handleSubmit, Form }) => (
  <Formik
    initialValues={model}
    validationSchema={schema}
    onSubmit={handleSubmit}>
      {props => <Form {...props} />}
  </Formik>
)

export default AppForm
