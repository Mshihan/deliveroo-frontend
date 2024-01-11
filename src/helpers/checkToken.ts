import { jwtDecode, JwtPayload } from 'jwt-decode'

export const isTokenExpired = (token: string): boolean => {
  try {
    const decodedToken = jwtDecode<JwtPayload>(token)
    if (decodedToken.exp && decodedToken.exp * 1000 < Date.now()) {
      return true
    } else {
      return false
    }
  } catch (error) {
    return true
  }
}
