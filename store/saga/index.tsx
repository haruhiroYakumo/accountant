import { takeLatest } from 'redux-saga/effects';

import * as ActionTypes from '../constants';
import { emailRegister } from './auth';

export default function* rootSaga() {
  // AUTH
  yield takeLatest(ActionTypes.REGISTER_WITH_EMAIL, emailRegister);
}
