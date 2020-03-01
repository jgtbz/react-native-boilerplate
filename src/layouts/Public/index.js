import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {
  Presentation,
  Login,
  Register,
  ForgotPassword
} from '../../pages/Public'
import { createStack, publicStackScreenOptions } from '../../modules/navigation'

const Stack = createStack([
  { name: 'Presentation', component: Presentation, options: publicStackScreenOptions },
  { name: 'Login', component: Login, options: publicStackScreenOptions },
  { name: 'Register', component: Register, options: publicStackScreenOptions },
  { name: 'ForgotPassword', component: ForgotPassword, options: publicStackScreenOptions }
])

const Component = () => (
  <NavigationContainer>
    <Stack></Stack>
  </NavigationContainer>
)

export default Component
