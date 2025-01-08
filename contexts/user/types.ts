import { Dispatch } from 'react';

export enum USER_ACTION_TYPES {
  FINISH_ONBOARDING = 'FINISH_ONBOARDING',
  LOAD_DATA = 'LOAD_DATA',
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
  SET_AGE = 'SET_AGE',
  SET_GENRE = 'SET_GENRE',
  SET_HEIGHT = 'SET_HEIGHT',
  SET_USERNAME = 'SET_USERNAME',
  SET_WEIGHT = 'SET_WEIGHT',
}

export type USER_TYPE_ACTIONS =
  | { type: USER_ACTION_TYPES.FINISH_ONBOARDING }
  | { type: USER_ACTION_TYPES.LOAD_DATA; payload: USER_STATE_TYPE }
  | { type: USER_ACTION_TYPES.LOGIN; payload: USER_STATE_TYPE }
  | { type: USER_ACTION_TYPES.LOGOUT }
  | { type: USER_ACTION_TYPES.SET_AGE; payload: { age: number } }
  | { type: USER_ACTION_TYPES.SET_GENRE; payload: { genre: GENRE_TYPES } }
  | { type: USER_ACTION_TYPES.SET_HEIGHT; payload: { height: number } }
  | { type: USER_ACTION_TYPES.SET_USERNAME; payload: { username: string } }
  | { type: USER_ACTION_TYPES.SET_WEIGHT; payload: { weight: number } };

export enum GENRE_TYPES {
  'Masculine' = 'Masculine',
  'Feminine' = 'Feminine',
}

export interface USER_STATE_TYPE {
  username: string;
  onboardingFinished: boolean;
  hasSession: boolean;
  data: {
    genre: GENRE_TYPES | null;
    height: number;
    weight: number;
    age: number;
  };
}

export type USER_CONTEXT_INTERFACE = [
  {
    username: string;
    onboardingFinished: boolean;
    hasSession: boolean;
    data: {
      genre: GENRE_TYPES | null;
      height: number;
      weight: number;
      age: number;
    };
  },
  dispatch: Dispatch<USER_TYPE_ACTIONS>,
];
