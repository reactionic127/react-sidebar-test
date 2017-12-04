import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import reducer from '../reducers';

const logger = createLogger();

// Redux and sagas setup and store configuration
export default function configureStore(initialState) {
  const middlewares = [logger];
  const enhancer = applyMiddleware(...middlewares);
  const store = createStore(reducer, initialState, enhancer);
  if (module.hot) {
    module.hot.accept(() => {
      store.replaceReducer(require('../reducers').default);
    });
  }
  return store;
}
