import { applyMiddleware, compose, createStore } from 'redux'

import persistState from 'redux-localstorage'

import thunk from 'redux-thunk'

import { composeWithDevTools } from 'redux-devtools-extension'

import reductor from './reducers'

const LOGGER = store => next => action => next( action )

export default function configureStore( preloadedState ) {

  const middlewares = [ thunk, LOGGER ]

  const middlewareEnhancer = applyMiddleware( ...middlewares )

  const enhancer = persistState()

  const enhancers = [ middlewareEnhancer, enhancer ]

  const composedEnhancers = composeWithDevTools( compose( ...enhancers ) )

  const store = createStore( reductor, preloadedState, composedEnhancers )

  if ( module.hot ) {
    module.hot.accept('./reducers', () => store.replaceReducer( reductor ) )
  }

  return store
}

