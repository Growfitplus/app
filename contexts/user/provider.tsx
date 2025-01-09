import React, { JSXElementConstructor, ReactNode, useReducer } from 'react';

import UserContext from '@/contexts/user/context';
import UserReducer from '@/contexts/user/reducer';
import { USER_STATE_TYPE } from './types';

const INITIAL_USER_STATE: USER_STATE_TYPE = {
  data: {
    age: 0,
    genre: null,
    height: 0,
    images: [],
    weight: 0,
  },
  hasSession: false,
  onboardingFinished: false,
  username: '',
};

const UserProvider: JSXElementConstructor<{ children?: ReactNode }> = ({ children }) => {
  const [userData, dispatch] = useReducer(UserReducer, INITIAL_USER_STATE);

  return (
    <UserContext.Provider value={[{ ...userData }, dispatch]}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
