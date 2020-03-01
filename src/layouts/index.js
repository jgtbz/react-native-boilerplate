import React from 'react'
import Public from './Public'
import Secure from './Secure'
import Loading from './Loading'
import { useStore } from '../store'

const Component = () => {
  const [{ isLoading, isLogged }] = useStore()

  if (isLoading) {
    return <Loading />
  }

  const Layout = isLogged
    ? Secure
    : Public

  return <Layout />
}

export default Component
