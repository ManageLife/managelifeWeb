import React from 'react'
import { useImmer } from 'use-immer'
import { useDispatch, useSelector } from 'react-redux'
import TextField from '@material-ui/core/TextField'
import { loginUserAPI } from 'redux/API/user'

function SignIn() {
   // Local State
   const [userData, setUserData] = useImmer({ email: '', password: '' })
   const handleInputChange = ({ target }) =>
      setUserData(draft => {
         draft[target.name] = target.value
      })
   // Redux
   const isLoading = useSelector(state => state.appData.isLoading.login)
   const dispatch = useDispatch()
   const handleSubmit = e => {
      e.preventDefault()
      dispatch(loginUserAPI(userData))
   }
   return (
      <div>
         <form onSubmit={e => handleSubmit(e)}>
            <TextField
               label='Email'
               value={userData.email}
               onChange={e => handleInputChange(e)}
               margin='normal'
               variant='filled'
            />
            <br />
            <TextField
               label='Email'
               value={userData.password}
               onChange={e => handleInputChange(e)}
               margin='normal'
               variant='filled'
            />

            <br />
            {!isLoading && <button>Submit</button>}
            {isLoading && <h4>Loading...</h4>}
         </form>
      </div>
   )
}

export { SignIn }
