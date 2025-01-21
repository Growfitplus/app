import React, { JSXElementConstructor, ReactNode, useReducer } from 'react';

import UserContext from '@/contexts/user/context';
import UserReducer from '@/contexts/user/reducer';
import { USER_STATE_TYPE } from './types';
import { Days } from '@/constants/Goals';

const INITIAL_USER_STATE: USER_STATE_TYPE = {
  hasSession: false,
  media: {
    images: [],
  },
  nutrition: {
    liters: 0,
    week: Days.map(() => ({
      calories: 0,
      exceeded: false,
      succeeded: false,
    })),
  },
  onboardingFinished: false,
  personal: {
    age: 0,
    genre: null,
    height: 0,
    weight: 0,
  },
  username: '',
};

const UserProvider: JSXElementConstructor<{ children?: ReactNode }> = ({ children }) => {
  const [userData, dispatch] = useReducer(UserReducer, INITIAL_USER_STATE);

  return (
    <UserContext.Provider value={[{ ...userData }, dispatch]}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
