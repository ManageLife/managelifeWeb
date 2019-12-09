// Returns 'SignUp/SignIn' or 'Logout' depending on `props.firebase.auth.uid`
import React from 'react'
import { Link } from '@reach/router'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUserAPI } from 'redux/API/user'
import { /*IoIosContact,*/ IoIosLogOut } from 'react-icons/io'
import { COLORS } from 'config/styles/colors'

function AuthNav() {
   // use UserID for auth
   const isAuthorized = useSelector(state => state.firebase.auth.uid)
   return (
      <span style={styles.span}>
         {!isAuthorized && <UnauthorizedNav />}
         {isAuthorized && <AuthorizedNav />}
      </span>
   )
}

function UnauthorizedNav({ toggle }) {
   return (
      <>
         <Link to='auth' style={styles.signInUpText}>
            Sign In
            <br />
            Sign Up
         </Link>
      </>
   )
}

function AuthorizedNav({ toggle }) {
   const dispatch = useDispatch()
   return (
      <>
         {/* Disabled until Settings page is implemented */}
         {/* <Link to='settings'>
            <IoIosContact style={styles.profileIcon} />
            </Link>*/}
         <button
            onClick={() => dispatch(logoutUserAPI())}
            style={styles.signOutButton}
         >
            <IoIosLogOut style={styles.signOutIcon} />
         </button>
      </>
   )
}

const styles = {
   span: {
      // Override parent
      textAlign: 'right',
   },
   signInUpText: {
      fontSize: '1.5vh',
   },
   profileIcon: {
      color: COLORS.SECONDARY,
      fontSize: '4vh',
   },
   signOutIcon: {
      color: COLORS.SECONDARY,
      fontSize: '4vh',
   },
   signOutButton: {
      backgroundColor: COLORS.WHITE,
      border: 'none',
      cursor: 'pointer',
   },
}
export { AuthNav }
