import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  Home,
  Profile,
  UpdatePassword,
  Page1,
  Page1Details,
  Page2,
  Page3,
  Page4,
  Page5
} from '../../pages/Secure'
import { AppDrawer, AppDrawerButton } from '../../components'
import { createStack, tabsScreenOptions } from '../../modules/navigation'

const HomeStack = createStack([
  { name: 'Home', component: Home, options: { title: 'Home', headerLeft: () => <AppDrawerButton /> } }
])
const Page1Stack = createStack([
  { name: 'Page1', component: Page1, options: { title: 'Page 1', headerLeft: () => <AppDrawerButton /> } },
  { name: 'Page1Details', component: Page1Details, options: { title: 'Page 1 - Details' } }
])  
const Page2Stack = createStack([
  { name: 'Page2', component: Page2, options: { title: 'Page 2', headerLeft: () => <AppDrawerButton /> } }
])
const Page3Stack = createStack([
  { name: 'Page3', component: Page3, options: { title: 'Page 3', headerLeft: () => <AppDrawerButton /> } }
])
const Page4Stack = createStack([
  { name: 'Page4', component: Page4, options: { title: 'Page 4', headerLeft: () => <AppDrawerButton /> } }
])
const Page5Stack = createStack([
  { name: 'Page5', component: Page5, options: { title: 'Page 5', headerLeft: () => <AppDrawerButton /> } }
])
const ProfileStack = createStack([
  { name: 'Profile', component: Profile, options: { title: 'Minha Conta', headerLeft: () => <AppDrawerButton /> } },
  { name: 'UpdatePassword', component: UpdatePassword, options: { title: 'Redefina a sua senha' } }
])

const Tabs = createBottomTabNavigator()
const TabsStack = () => (
  <Tabs.Navigator screenOptions={tabsScreenOptions}>
    <Tabs.Screen name="Home" component={HomeStack} />
    <Tabs.Screen name="Page1" component={Page1Stack} />
    <Tabs.Screen name="Page2" component={Page2Stack} />
    <Tabs.Screen name="Page3" component={Page3Stack} />
    <Tabs.Screen name="Page4" component={Page4Stack} />
  </Tabs.Navigator>
)

const Drawer = createDrawerNavigator()
const DrawerStack = () => (
  <Drawer.Navigator drawerContent={(props) => <AppDrawer {...props} />}>
    <Drawer.Screen name="Main" component={TabsStack}></Drawer.Screen>
    <Drawer.Screen name="Page5" component={Page5Stack}></Drawer.Screen>
    <Drawer.Screen name="Profile" component={ProfileStack}></Drawer.Screen>
  </Drawer.Navigator>
)

const Component = () => (
  <NavigationContainer>
    <DrawerStack />
  </NavigationContainer>
)

export default Component
