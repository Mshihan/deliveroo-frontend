import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ThunkDispatch } from 'redux-thunk'
import * as Yup from 'yup'
import CustomBackdrop from '../../components/CustomBackdrop/CustomBackdrop'
import CustomSnackbar from '../../components/CustomSnackbar/CustomSnackbar'
import {
  AppleLogo,
  EmailIcon,
  Facebook,
  GoogleLogo,
} from '../../components/Icons/Icons'
import { isTokenExpired } from '../../helpers/checkToken'
import { AuthSliceInterface } from '../../redux/interfaces/redux-types'
import { loginThunk } from '../../redux/slices/authSlice'
import './Login.css'
import { initialLoginValues } from './data/initialLoginValues'
import { LoginCredentials, LoginStateInterface } from './interfaces'

const loginState: LoginStateInterface = {
  loginSocial: 1,
  loginLocal: 2,
  loginPassword: 3,
}

const Login = () => {
  // Routing hooks
  const navigate = useNavigate()

  // State handlers
  const [loginLocal, setLoginLocal] = useState<number>(loginState.loginSocial)
  const toggleLoginLocal = () => setLoginLocal(loginState.loginLocal)
  const [showNotification, setShowNotification] = useState<boolean>(false)
  const [showLoader, setShowLoader] = useState<boolean>(false)
  const handleClose = () => setShowNotification(false)

  // State hooks
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
  const { loginStatus, loading, error, token } = useSelector(
    (state: { auth: AuthSliceInterface }) => state?.auth
  )

  // Form Validation
  const loginValidationSchema = Yup.object({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().label('Password'),
  })

  // Handle Submit
  const handleSubmit = (values: LoginCredentials) => {
    dispatch(loginThunk(values))
    setShowNotification(true)
  }

  useEffect(() => {
    if (token) {
      if (!isTokenExpired(token) && loginState) {
        setShowLoader(true)
        setTimeout(() => {
          setShowLoader(false)
          navigate(-1)
        }, 1500)
      }
    }
  }, [token, navigate])

  const handleGoogle = () =>
    window.open('http://localhost:4000/api/auth/google', '_self')

  return (
    <div className="login__container">
      <CustomBackdrop show={showLoader} />
      <div className="login__content">
        <h4 className="login__content--header">Sign up or log in </h4>
        {loginLocal === loginState.loginSocial && (
          <div>
            <div className="login__social">
              <button className="login__social--facebook" type="button">
                <Facebook className="login--icons" />{' '}
                <p>Continue with Facebook</p>
              </button>
              <button
                className="login__social--google"
                type="button"
                onClick={handleGoogle}
              >
                <GoogleLogo className="login--icons" />{' '}
                <p>Continue with Google</p>
              </button>
              <button className="login__social--apple" type="button">
                <AppleLogo className="login--icons" />{' '}
                <p>Continue with Apple</p>
              </button>
            </div>

            <div className="or__divider">
              <div className="divider"></div>
              <p>or</p>
              <div className="divider"></div>
            </div>

            <button
              type="button"
              className="login__local"
              onClick={toggleLoginLocal}
            >
              <EmailIcon className="login--icons" /> <p>Continue with email</p>
            </button>

            <p className="login__description">
              By continuing you agree to our <a href="">T&Cs</a> . Please also
              check out our <a href="">Privacy Policy </a> . We use your data to
              offer you a personalised experience and to better understand and
              improve our services.
              <br />
              <a href="">For more information see here.</a>
            </p>
          </div>
        )}
        {loginLocal === loginState.loginLocal && (
          <Formik
            initialValues={initialLoginValues}
            validationSchema={loginValidationSchema}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form>
                <div className="login__local--container">
                  <div className="text-field">
                    <label htmlFor="" className="text-field__label">
                      Email address
                    </label>
                    <Field
                      id="email"
                      name="email"
                      type="text"
                      className="text-field__input"
                      placeholder="e.g. name@exmple.com"
                    />
                    <ErrorMessage
                      className="error__text"
                      name="email"
                      component="span"
                    />
                  </div>

                  <div className="text-field">
                    <label htmlFor="" className="text-field__label">
                      Password
                    </label>
                    <Field
                      id="password"
                      name="password"
                      type="password"
                      className="text-field__input"
                      placeholder="Password"
                    />
                    <ErrorMessage
                      className="error__text"
                      name="password"
                      component="span"
                    />
                  </div>

                  <button className="login__local--button" type="submit">
                    Login
                  </button>
                  <button
                    className="login__local--forgot-password"
                    type="button"
                  >
                    <p>Forgot password</p>
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        )}

        <CustomSnackbar
          background="#00b8a9"
          message="Login Successful"
          onClose={handleClose}
          open={showNotification && !loading && !!loginStatus}
          severity="success"
        />

        <CustomSnackbar
          background=""
          message="Login Failed. Please Try again"
          onClose={handleClose}
          open={showNotification && !loading && !!error}
          severity="error"
        />
      </div>
    </div>
  )
}
export default Login
