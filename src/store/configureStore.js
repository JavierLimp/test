import { applyMiddleware, compose, createStore } from 'redux'

import thunk from 'redux-thunk'

import { composeWithDevTools } from 'redux-devtools-extension'

import monitorReducerEnhancer from './enhancers/monitorReducer'

import ReducerGenenral from './reducers'

const logger = store => next => async action => next( action )

export default function configureStore( preloadedState ) {
  
  const middlewares = [ logger, thunk ]
  
  const middlewareEnhancer = applyMiddleware( ...middlewares )

  const enhancers = [middlewareEnhancer, monitorReducerEnhancer]
  
  const composedEnhancers = composeWithDevTools( compose(...enhancers) )

  const store = createStore(ReducerGenenral, preloadedState, composedEnhancers)

  if ( module.hot ) {
    module.hot.accept('./reducers', () => store.replaceReducer(ReducerGenenral))
  }

  return store
}
