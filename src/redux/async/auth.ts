import axios from 'axios'
import { LoginCredentials } from '../../pages/Login/interfaces'
import { RegisterCredentials } from '../../pages/Register/interfaces'

export const login = async (credentials: LoginCredentials) => {
  const response = await axios.post(
    'http://localhost:4000/api/auth/login',
    credentials
  )

  return response
}

export const register = async (credentials: RegisterCredentials) => {
  const response = await axios.post('http://localhost:4000/api/auth/register')
  return response
}
