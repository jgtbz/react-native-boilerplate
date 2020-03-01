import React from 'react'
import {
  DrawerContentScrollView,
  DrawerItem
} from '@react-navigation/drawer'
import { useStore } from '../store'

const Component = ({ navigation }) => {
  const [, dispatch] = useStore()

  const logout = () => {
    dispatch({ type: 'setLogout' })
  }

  return (
    <DrawerContentScrollView>
      <DrawerItem
        label="Home"
        onPress={() => navigation.navigate('Home')} />
      <DrawerItem
        label="Page 1"
        onPress={() => navigation.navigate('Main', { screen: 'Page1' })} />
      <DrawerItem
        label="Page 2"
        onPress={() => navigation.navigate('Main', { screen: 'Page2' })} />
      <DrawerItem
        label="Page 3"
        onPress={() => navigation.navigate('Main', { screen: 'Page3' })} />
      <DrawerItem
        label="Page 4"
        onPress={() => navigation.navigate('Main', { screen: 'Page4' })} />
      <DrawerItem
        label="Page 5"
        onPress={() => navigation.navigate('Page5')} />
      <DrawerItem
        label="Minha Conta"
        onPress={() => navigation.navigate('Profile')} />
      <DrawerItem
        label="Sair"
        onPress={logout} />
    </DrawerContentScrollView>
  )
}

export default Component
