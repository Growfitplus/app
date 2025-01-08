import { GENRE_TYPES, USER_ACTION_TYPES, USER_STATE_TYPE, USER_TYPE_ACTIONS } from './types';

export const setUsername = (username: string): USER_TYPE_ACTIONS => ({
  type: USER_ACTION_TYPES.SET_USERNAME,
  payload: { username },
});

export const finishOnboarding = (): USER_TYPE_ACTIONS => ({
  type: USER_ACTION_TYPES.FINISH_ONBOARDING,
});

export const loadData = (data: USER_STATE_TYPE): USER_TYPE_ACTIONS => ({
  type: USER_ACTION_TYPES.LOAD_DATA,
  payload: { ...data },
});

export const logIn = (data: USER_STATE_TYPE): USER_TYPE_ACTIONS => ({
  type: USER_ACTION_TYPES.LOGIN,
  payload: { ...data },
});

export const setGenre = (genre: GENRE_TYPES): USER_TYPE_ACTIONS => ({
  type: USER_ACTION_TYPES.SET_GENRE,
  payload: { genre },
});

export const setHeight = (height: number): USER_TYPE_ACTIONS => ({
  type: USER_ACTION_TYPES.SET_HEIGHT,
  payload: { height },
});

export const setWeight = (weight: number): USER_TYPE_ACTIONS => ({
  type: USER_ACTION_TYPES.SET_WEIGHT,
  payload: { weight },
});

export const setAge = (age: number): USER_TYPE_ACTIONS => ({
  type: USER_ACTION_TYPES.SET_AGE,
  payload: { age },
});

export const logOut = (): USER_TYPE_ACTIONS => ({
  type: USER_ACTION_TYPES.LOGOUT,
})
