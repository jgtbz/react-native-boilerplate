import http from '../http'

const useApi = false

const login = (payload) => useApi
  ? http.post('/users/login', payload)
  : new Promise((resolve) => resolve({
    token: 'Token'
  }))

const forgotPasswordSendPin = (payload) => useApi
  ? http.patch('/users/forgot-password/send-pin', payload)
  : new Promise((resolve) => resolve({
    message: 'Enviamos um código para o seu email'
  }))

const forgotPasswordValidatePin = (payload) => useApi
  ? http.patch('/users/forgot-password/validate-pin', payload)
  : new Promise((resolve) => resolve({
    message: 'Código válido'
  }))

const forgotPassword = (payload) => useApi
  ? http.patch('/users/forgot-password', payload)
  : new Promise((resolve) => resolve({
    message: 'Senha alterada com sucesso'
  }))

const profile = () => useApi
  ? http.get('/users/profile')
  : new Promise((resolve) => resolve({
    data: {
      name: 'User Name'
    }
  }))

const createUsers = (payload) => useApi
  ? http.post('/users', payload)
  : new Promise((resolve) => resolve({
    message: 'Cadastro realizado com sucesso'
  }))

const updateUsers = (id, payload) => useApi
  ? http.patch(`/users/${id}`, payload)
  : new Promise((resolve) => resolve({
    message: 'Dados atualizados com sucesso'
  }))

const updatePassword = (payload) => useApi
  ? http.patch(`/users/password`, payload)
  : new Promise((resolve) => resolve({
    message: 'Senha alterada com sucesso'
  }))

export {
  login,
  forgotPasswordSendPin,
  forgotPasswordValidatePin,
  forgotPassword,
  profile,
  createUsers,
  updateUsers,
  updatePassword
}
