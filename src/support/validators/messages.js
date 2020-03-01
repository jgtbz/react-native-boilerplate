const required = 'Campo obrigatório'

const email = 'Email inválido'

const minLength = (value) => `Mínimo de ${value} caracteres`

const maxLength = (value) => `Máximo de ${value} caracteres`

const sameAsPassword = 'As senhas não conferem'

export default {
  required,
  email,
  minLength,
  maxLength,
  sameAsPassword
}
