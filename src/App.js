import React from 'react'
import { StatusBar } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { StateProvider, initialState, reducer } from './store'
import Layout from './layouts'

Icon.loadFont()

const App = () => (
  <StateProvider initialState={initialState} reducer={reducer}>
    <StatusBar barStyle="dark-content" />
    <Layout />
  </StateProvider>
)

export default App
