import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { LoginCredentials } from '../../pages/Login/interfaces'
import { RegisterCredentials } from '../../pages/Register/interfaces'
import { login, register } from '../async/auth'
import { AuthSliceInterface } from '../interfaces/redux-types'
import { AxiosError } from 'axios'

const initialState: AuthSliceInterface = {
  token: '',
  loading: false,
  error: null,
  loginStatus: false,
}

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (credentials: LoginCredentials) => {
    const response = await login(credentials)
    return response.data
  }
)

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (credentials: RegisterCredentials) => {
    return await register(credentials)
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginThunk.pending, (state) => {
      state.loading = true
      state.error = null
    })

    builder.addCase(loginThunk.fulfilled, (state, action) => {
      state.loading = false
      state.token = action.payload.data
      state.loginStatus = true
    })

    builder.addCase(loginThunk.rejected, (state, action) => {
      state.loading = false
      state.error = 'Login failed. Please try again'
    })

    builder.addCase(registerThunk.fulfilled, (state, action) => {
      state.loading = false
      state.token = action.payload.data
    })

    builder.addCase(registerThunk.pending, (state) => {
      state.loading = true
    })

    builder.addCase(registerThunk.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message
    })
  },
})

export default authSlice.reducer
