import React, { createContext, useContext, useReducer, useEffect } from 'react'
import AsyncStorage from '@react-native-community/async-storage'

const StateContext = createContext()

const StateProvider = ({ reducer, initialState, children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const syncLocalState = async () => {
    AsyncStorage.getItem('state').then(localState => {
      dispatch({ type: 'setLocalState', localState: { ...JSON.parse(localState), isLoading: false } })
    })
  }

  useEffect(() => {
    syncLocalState()
  }, [])

  return (
    <StateContext.Provider value={[state, dispatch]}>
      {children}
    </StateContext.Provider>
  )
}

const useStore = () => useContext(StateContext)

export {
  StateProvider,
  useStore
}
