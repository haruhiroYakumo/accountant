import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';
import rootSaga from './saga';

export type ReduxActionType = string;

export type ReduxActionPayloadType = {
  type: string,
  data?: any
}

const sagaMiddleware = createSagaMiddleware();

const createStoreWithMiddleware = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(sagaMiddleware)
));

sagaMiddleware.run(rootSaga);

export default createStoreWithMiddleware;
