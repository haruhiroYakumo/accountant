import * as ActionTypes from '../constants';
import { ReduxActionPayloadType } from '../store';

export type IFirebaseUser = {
  displayName: null | string,
  email: null | string,
  uid: null | string,
  isAnonymous: boolean,
  emailVerified: boolean,
  phoneNumber: null | string,
  photoURL: null | string
}

interface IDefaultState {
  userToken: null | string,
  user: IFirebaseUser
}

const defaultState: IDefaultState = {
  userToken: null,
  user: {
    displayName: null,
    email: null,
    uid: '',
    isAnonymous: false,
    emailVerified: false,
    phoneNumber: null,
    photoURL: ''
  }
};

export default function (state = defaultState, { type, data }: ReduxActionPayloadType) {
  switch (type) {
    case ActionTypes.SAVE_USER_AUTHENTICATION_DATA:
      return {
        ...state,
        user: data._user
      };
    default:
      return state;
  }
}
