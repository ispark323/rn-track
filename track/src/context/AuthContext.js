import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

const signup = dispatch => {
  return async ({ email, password }) => {
    // make api request to sign up with that email and password
    // if we sign up, modify our state, and say authenticated
    // if sign up fails, need to reflect an error message to user
    try {
      const response = await trackerApi.post('/signup', { email, password });
      await AsyncStorage.setItem('token', response.data.token);
    } catch (err) {
      dispatch({
        type: 'add_error',
        payload: 'Something went wrong with sign up'
      });
    }
  };
};

const login = dispatch => {
  return ({ email, password }) => {
    // try to login
    // handle success by updating state
    // handle failure by showing error message
  };
};

const logout = dispatch => {
  return ({ email, password }) => {
    // try to login
    // handle success by updating state
    // handle failure by showing error message
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, login, logout },
  { isSignedIn: false, errorMessage: '' }
);
