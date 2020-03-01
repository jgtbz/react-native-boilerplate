import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

const publicStackScreenOptions = { headerTitle: '', headerTransparent: true }

const withTabs = ['Home', 'Page1', 'Page2', 'Page3', 'Page4']

const tabBarVisible = ({ route }) => {
  const { state } = route

  const currentRouteName = state && state.routeNames[state.index]

  return !state || withTabs.includes(currentRouteName)
}
const tabsScreenOptions = (props) => ({
  tabBarVisible: tabBarVisible(props)
})

const createStack = (screens) => {
  const Stack = createStackNavigator()

  const renderScreens = () => (
    screens.map(props => <Stack.Screen {...props}></Stack.Screen>)
  )

  return () => (
    <Stack.Navigator headerMode="screen">
      {renderScreens()}
    </Stack.Navigator>
  )
}

export {
  publicStackScreenOptions,
  tabsScreenOptions,
  createStack
}
