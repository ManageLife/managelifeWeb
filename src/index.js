import React from 'react'
import { render } from 'react-dom'
//
import 'index.css'
//
import { App } from './routes'
// Redux
import { Provider } from 'react-redux'
import { store, persistor, rrfProps } from './redux/store'
//    Redux-Persist
import { PersistGate } from 'redux-persist/integration/react'
//    Firebase/Firestore
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'

import serviceWorker from './serviceWorker'

require('dotenv').config()

render(
   <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
         <PersistGate loading={null} persistor={persistor}>
            <App />
         </PersistGate>
      </ReactReduxFirebaseProvider>
   </Provider>,
   document.getElementById('root'),
)

if (module.hot) {
   module.hot.accept()
}
serviceWorker()
