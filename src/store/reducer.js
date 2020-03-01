import AsyncStorage from '@react-native-community/async-storage'
import initialState from './initialState'

const setUser = (state, { user }) => ({ ...state, user })
const setToken = (state, { token }) => ({
  ...state,
  token,
  isLogged: true
})
const setLogout = (state) => ({
  ...state,
  ...initialState,
  isLoading: false
})
const setLocalState = (state, { localState }) => ({
  ...state,
  ...localState,
  isLoading: false
})

const reducers = {
  setUser,
  setToken,
  setLogout,
  setLocalState
}

export default (state, { type, ...action }) => {
  const reducer = reducers[type]
  const updatedState = reducer(state, action)

  AsyncStorage.setItem('state', JSON.stringify(updatedState))

  return updatedState
}
