import { PhotosState } from '@/types/photos';
import {
  GENRE_TYPES,
  NUTRITION_INTERFACE,
  USER_ACTION_TYPES,
  USER_STATE_TYPE,
  USER_TYPE_ACTIONS,
  WEEK_CALORIES_TYPE,
} from './types';

export const setUsername = (username: string): USER_TYPE_ACTIONS => ({
  payload: { username },
  type: USER_ACTION_TYPES.SET_USERNAME,
});

export const finishOnboarding = (): USER_TYPE_ACTIONS => ({
  type: USER_ACTION_TYPES.FINISH_ONBOARDING,
});

export const loadData = (data: USER_STATE_TYPE): USER_TYPE_ACTIONS => ({
  payload: { ...data },
  type: USER_ACTION_TYPES.LOAD_DATA,
});

export const logIn = (data: USER_STATE_TYPE): USER_TYPE_ACTIONS => ({
  payload: { ...data },
  type: USER_ACTION_TYPES.LOGIN,
});

export const setGenre = (genre: GENRE_TYPES): USER_TYPE_ACTIONS => ({
  payload: { genre },
  type: USER_ACTION_TYPES.SET_GENRE,
});

export const setHeight = (height: number): USER_TYPE_ACTIONS => ({
  payload: { height },
  type: USER_ACTION_TYPES.SET_HEIGHT,
});

export const setWeight = (weight: number): USER_TYPE_ACTIONS => ({
  payload: { weight },
  type: USER_ACTION_TYPES.SET_WEIGHT,
});

export const setAge = (age: number): USER_TYPE_ACTIONS => ({
  payload: { age },
  type: USER_ACTION_TYPES.SET_AGE,
});

export const logOut = (): USER_TYPE_ACTIONS => ({
  type: USER_ACTION_TYPES.LOGOUT,
});

export const addImage = (newImage: PhotosState): USER_TYPE_ACTIONS => ({
  payload: newImage,
  type: USER_ACTION_TYPES.ADD_IMAGE,
});

export const removeImage = (images: PhotosState[]): USER_TYPE_ACTIONS => ({
  payload: { images },
  type: USER_ACTION_TYPES.REMOVE_IMAGE,
});

export const resetState = (): USER_TYPE_ACTIONS => ({
  type: USER_ACTION_TYPES.RESET_STATE,
});

export const setCalories = (week: WEEK_CALORIES_TYPE[]): USER_TYPE_ACTIONS => ({
  payload: { week },
  type: USER_ACTION_TYPES.SET_CALORIES,
});

export const setLiters = (week: WEEK_CALORIES_TYPE[]): USER_TYPE_ACTIONS => ({
  payload: { week },
  type: USER_ACTION_TYPES.SET_LITERS,
});

export const setWalking = (week: WEEK_CALORIES_TYPE[]): USER_TYPE_ACTIONS => ({
  payload: { week },
  type: USER_ACTION_TYPES.SET_WALKING,
});

export const setIMCData = (nutrition: Omit<NUTRITION_INTERFACE, 'week'>): USER_TYPE_ACTIONS => ({
  payload: { nutrition },
  type: USER_ACTION_TYPES.SET_IMC_DATA,
});
