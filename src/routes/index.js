import React from 'react'
import { Router, Location } from '@reach/router'
import { ErrorBoundary } from 'components/utility'
// Redux
import { useDispatch, useSelector } from 'react-redux'
import { getAllUserDataAPI } from 'redux/API/user'
import { updateAppLocation } from '../redux/appData/actions'
// Semantic
import { Main, Header as SemanticHeader, Footer } from '../components/core'
// Image (Logo)
import { ImageWrapper } from 'components/utility'
import { pngs } from 'assets/images/png'
// Nav
import { PublicNav, AuthNav, PrivateNav } from './navs'
// Routes
import { Home, About, Partnerships, Auth } from 'pages/public'
import { Header } from 'components/custom'
import { Inventory, Properties, Requests } from 'pages/private'
import { ActionForm } from './ActionForm'
import { Error } from './Error'
// Constants
import { businessName } from 'config/business'

function App() {
   // Send App's location to Redux
   // Need this because nav is not with router
   const dispatch = useDispatch()
   const handleLocationUpdate = location => {
      let locationData = location ? location : { pathname: '/' }
      dispatch(updateAppLocation(locationData))
   }
   React.useEffect(() => handleLocationUpdate())
   // Auth Check
   React.useEffect(() => async () => dispatch(getAllUserDataAPI()), [dispatch])
   const userID = useSelector(state => {
      if (state.firebase && state.firebase.auth) {
         return state.firebase.auth.uid
      }
      return false
   })
   return (
      <>
         <ErrorBoundary>
            <Header />
            <Main>
               <Router>
                  {/* PUBLIC ROUTES */}
                  <Home path='/' />
                  <About path='about' />
                  <Partnerships path='partnerships' />
                  <Auth path='auth' />
                  {/* PRIVATE ROUTES */}
                  {userID && <Properties path='properties' />}
                  {userID && <Inventory path='inventory' />}
                  {userID && <Requests path='feed' />}
                  {userID && <ActionForm path='action/*' />}
                  {/* ERROR */}
                  <Error default />
               </Router>
            </Main>
            <Location>
               {({ location }) => handleLocationUpdate(location)}
            </Location>
         </ErrorBoundary>
      </>
   )
}

const styles = {
   logoSpan: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      alignItems: 'center',
      justifyItems: 'center',
   },
   navsSpan: {
      display: 'grid',
      gridTemplateColumns: '3fr 100px',
      alignItems: 'center',
      justifyItems: 'center',
   },
   manageLifeLogo: {
      height: '3vw',
      marginTop: '1vw',
      paddingRight: '2vw',
   },
   menuIconSpan: {
      display: 'grid',
      alignItems: 'center',
   },
   menuIcon: {
      justifySelf: 'start',
   },
}
export { App }
export { ActionForm } from './ActionForm'
