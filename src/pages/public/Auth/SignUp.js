import React from 'react'
import { useImmer } from 'use-immer'
import { useDispatch } from 'react-redux'
import { createNewUserAPI } from 'redux/API/user'
import { Input } from 'components/forms'
import { COLORS } from 'config/styles/colors'

function SignUp() {
   // Local State
   const [userData, setUserData] = useImmer({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      password: '',
   })
   const handleInputChange = ({ target }) =>
      setUserData(draft => {
         draft[target.name] = target.value
      })
   // Password Confirmation
   const [confirmPassword, setConfirmPassword] = React.useState('')
   const [isValid, setIsValid] = React.useState(true)
   const handleConfirmPassword = ({ target }) =>
      setConfirmPassword(target.value)
   React.useEffect(() => {
      let { password } = userData
      if (password === confirmPassword) {
         setIsValid(true)
      } else {
         setIsValid(false)
      }
   }, [isValid, confirmPassword, userData])
   // Redux
   const dispatch = useDispatch()
   const handleSubmit = e => {
      e.preventDefault()
      dispatch(createNewUserAPI(userData))
   }
   console.log(userData)
   return (
      <div>
         <form onSubmit={e => handleSubmit(e)}>
            <Input
               type='text'
               fieldName='firstName'
               onChange={handleInputChange}
               value={userData.firstName}
            />
            <br />
            <Input
               type='text'
               fieldName='lastName'
               onChange={handleInputChange}
               value={userData.lastName}
            />
            <br />
            <Input
               type='email'
               fieldName='email'
               onChange={handleInputChange}
               value={userData.email}
            />
            <br />
            <Input
               type='tel'
               fieldName='phoneNumber'
               onChange={handleInputChange}
               value={userData.phoneNumber}
            />
            <br />
            <Input
               type='password'
               fieldName='password'
               onChange={handleInputChange}
               value={userData.password}
            />
            <br />
            <Input
               type='password'
               fieldName='confirmPassword'
               onChange={handleConfirmPassword}
               value={confirmPassword}
            />
            <br />
            <button disabled={!isValid}>Submit</button>
            {!isValid && <p style={styles.warningText}>Passwords must match</p>}
         </form>
      </div>
   )
}

const styles = { warningText: { color: COLORS.WARNING_RED } }

export { SignUp }
