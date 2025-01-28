import React, { JSXElementConstructor, ReactNode, useReducer } from 'react';

import UserContext from '@/contexts/user/context';
import UserReducer from '@/contexts/user/reducer';

import { resetWeek } from '@/utils/resetWeek';

import { IMC_LEVELS, USER_STATE_TYPE } from './types';

const INITIAL_USER_STATE: USER_STATE_TYPE = {
  hasSession: false,
  media: {
    images: [],
  },
  nutrition: {
    imc: 0,
    imcLevel: IMC_LEVELS.NORMAL_WEIGHT,
    litersGoal: 0,
    loseWeight: 0,
    maintainWeight: 0,
    walkingGoal: 0,
    week: resetWeek(),
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
