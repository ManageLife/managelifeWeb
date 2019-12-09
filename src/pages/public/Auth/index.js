import React, { PureComponent } from 'react'
import { navigate } from '@reach/router'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { BounceLoader } from 'react-spinners'
import firebase from 'firebase'
import { connect } from 'react-redux'
import {
   createNewUserAPI,
   loginUserAPI,
   getAllUserDataAPI,
} from '../../../redux/API'
import { HeaderText, Text } from '../../../components/custom'
import { AlertPopup } from '../../../components/utility'
import './index.css'

class Auth extends PureComponent {
   state = {
      email: '',
      password: '',
      loading: false,
      alertVisible: false,
      forgotEmail: '',
   }

   _toggleAlert = () => {
      this.setState(prevState => ({ alertVisible: !prevState.alertVisible }))
   }

   _changeText = (event, type) => {
      this.setState({ [type]: event.target.value })
   }

   _loginValidation = () => {
      const { state } = this

      // Validate that all required fields are available
      const requiredInfo = [
         { value: 'email', display: 'Email' },
         { value: 'password', display: 'Password' },
      ]
      const errorArray = []

      requiredInfo.forEach(field => {
         if (!state[field.value] || !state[field.value].length) {
            errorArray.push(field.display)
         }
      })

      if (errorArray.length) {
         return `The following fields are required: ${errorArray.reduce(
            (accum, current) => accum + ', ' + current,
         )}`
      }

      return false
   }

   _submit = async () => {
      this.setState({ loading: true })
      const { loginUser, getAllUserData } = this.props
      const { email, password } = this.state

      const loginValidation = await this._loginValidation()

      if (loginValidation) {
         alert(`Login Error - ${loginValidation}.`)
      } else {
         await loginUser({ email, password })
            .then(async res => {
               let loginCheck = res
               if (res) {
                  loginCheck = await getAllUserData(email)
               }
               return loginCheck
            })
            .then(res => {
               if (res) {
                  navigate('/feed')
               }
            })
      }
      this.setState({ loading: false })
   }

   _sendEmailLink = () => {
      try {
         const { forgotEmail } = this.state
         firebase
            .auth()
            .sendPasswordResetEmail(forgotEmail)
            .then(res => console.log(res))
         this._toggleAlert()
      } catch (err) {
         const errorMessage = err.code
            ? err.message
            : 'There was a sending this email.'
         alert(`Error: ${errorMessage}`)
      }
   }

   render() {
      const { email, password, forgotEmail, loading, alertVisible } = this.state

      return (
         <div id='auth-page-container'>
            <div id='auth-content'>
               <HeaderText>Welcome Back!</HeaderText>
               <form id='input-auth-form' onSubmit={this._submit}>
                  <TextField
                     className='text-field-auth'
                     label='Email'
                     value={email}
                     onChange={event => this._changeText(event, 'email')}
                     margin='normal'
                     variant='filled'
                  />
                  <TextField
                     className='text-field-auth'
                     label='Password'
                     value={password}
                     onChange={event => this._changeText(event, 'password')}
                     margin='normal'
                     variant='filled'
                     type='password'
                  />
               </form>
               <div id='login-container'>
                  {loading ? (
                     <BounceLoader
                        sizeUnit={'rem'}
                        size={2.5}
                        color={'#17519e'}
                        loading={loading}
                     />
                  ) : (
                     <div id='login-container'>
                        <Button
                           onClick={this._submit}
                           id='login-button'
                           variant='contained'
                        >
                           Log In
                        </Button>
                        <p id='forgot-password' onClick={this._toggleAlert}>
                           Forgot your password?
                        </p>
                     </div>
                  )}
               </div>
            </div>
            <AlertPopup
               open={alertVisible}
               onCancel={this._toggleAlert}
               onConfirm={this._sendEmailLink}
               title='Forgot your password?'
            >
               Enter the email you used to sign-up for ManageLife.
               <TextField
                  className='text-field-auth'
                  label='Email'
                  value={forgotEmail}
                  onChange={event => this._changeText(event, 'forgotEmail')}
                  margin='normal'
                  variant='filled'
               />
            </AlertPopup>
         </div>
      )
   }
}

const mapStateToProps = state => ({
   user: state.user,
})

const mapDispatchToProps = dispatch => ({
   createNewUser: (info, navigation) =>
      dispatch(createNewUserAPI(info, navigation)),
   loginUser: (info, navigation) => dispatch(loginUserAPI(info, navigation)),
   getAllUserData: loginEmail => dispatch(getAllUserDataAPI(loginEmail)),
})

Auth = connect(
   mapStateToProps,
   mapDispatchToProps,
)(Auth)

export { Auth }
