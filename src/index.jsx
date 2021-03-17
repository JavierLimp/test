import React from 'react'

import { render } from 'react-dom'

import { Provider } from 'react-redux'

import App from './App'

import configureStore from './store/configureStore'

import { INITIAL_STATE_STORE } from './store/state-store'

const store = configureStore( INITIAL_STATE_STORE )

const renderApp = () =>
  render(
    <Provider store = { store } >
      <App />
    </Provider>,
    document.getElementById('root')
  )

if ( module.hot ) {
  module.hot.accept('./App', renderApp)
}

renderApp()