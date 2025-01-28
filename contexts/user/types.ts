import { Dispatch } from 'react';
import { PhotosState } from '@/types/photos';

export enum USER_ACTION_TYPES {
  ADD_IMAGE = 'ADD_IMAGE',
  FINISH_ONBOARDING = 'FINISH_ONBOARDING',
  LOAD_DATA = 'LOAD_DATA',
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
  REMOVE_IMAGE = 'REMOVE_IMAGE',
  RESET_STATE = 'RESET_STATE',
  SET_AGE = 'SET_AGE',
  SET_CALORIES = 'SET_CALORIES',
  SET_GENRE = 'SET_GENRE',
  SET_HEIGHT = 'SET_HEIGHT',
  SET_IMC_DATA = 'SET_IMC_DATA',
  SET_LITERS = 'SET_LITERS',
  SET_USERNAME = 'SET_USERNAME',
  SET_WALKING = 'SET_WALKING',
  SET_WEIGHT = 'SET_WEIGHT',
}

export type USER_TYPE_ACTIONS =
  | { type: USER_ACTION_TYPES.ADD_IMAGE; payload: PhotosState }
  | { type: USER_ACTION_TYPES.FINISH_ONBOARDING }
  | { type: USER_ACTION_TYPES.LOAD_DATA; payload: USER_STATE_TYPE }
  | { type: USER_ACTION_TYPES.LOGIN; payload: USER_STATE_TYPE }
  | { type: USER_ACTION_TYPES.LOGOUT }
  | { type: USER_ACTION_TYPES.REMOVE_IMAGE; payload: { images: PhotosState[] } }
  | { type: USER_ACTION_TYPES.RESET_STATE }
  | { type: USER_ACTION_TYPES.SET_AGE; payload: { age: number } }
  | { type: USER_ACTION_TYPES.SET_CALORIES; payload: { week: WEEK_CALORIES_TYPE[] } }
  | { type: USER_ACTION_TYPES.SET_GENRE; payload: { genre: GENRE_TYPES } }
  | { type: USER_ACTION_TYPES.SET_HEIGHT; payload: { height: number } }
  | {
      type: USER_ACTION_TYPES.SET_IMC_DATA;
      payload: { nutrition: Omit<NUTRITION_INTERFACE, 'week'> };
    }
  | { type: USER_ACTION_TYPES.SET_LITERS; payload: { week: WEEK_CALORIES_TYPE[] } }
  | { type: USER_ACTION_TYPES.SET_USERNAME; payload: { username: string } }
  | { type: USER_ACTION_TYPES.SET_WALKING; payload: { week: WEEK_CALORIES_TYPE[] } }
  | { type: USER_ACTION_TYPES.SET_WEIGHT; payload: { weight: number } };

export enum GENRE_TYPES {
  'Masculine' = 'Masculine',
  'Feminine' = 'Feminine',
}

export enum IMC_LEVELS {
  'LOW_WEIGHT' = 'LOW WEIGHT',
  'NORMAL_WEIGHT' = 'NORMAL WEIGHT',
  'OVERWEIGHT' = 'OVERWEIGHT',
  'LOW_OBESITY' = 'LOW OBESITY',
  'MEDIUM_OBESITY' = 'MEDIUM OBESITY',
  'MORBID_OBESITY' = 'MORBID OBESITY',
}

export type WEEK_DAYS = 'L' | 'M' | 'J' | 'V' | 'S' | 'D';

export interface USER_STATE_TYPE {
  hasSession: boolean;
  media: {
    images: PhotosState[];
  };
  nutrition: NUTRITION_INTERFACE;
  onboardingFinished: boolean;
  personal: {
    age: number;
    genre: GENRE_TYPES | null;
    height: number;
    weight: number;
  };
  username: string;
}

export interface WEEK_CALORIES_TYPE {
  calories: number;
  succeeded: boolean;
  exceeded: boolean;
  liters: number;
  walking: boolean;
}

export interface NUTRITION_INTERFACE {
  imc: number;
  imcLevel: IMC_LEVELS;
  litersGoal: number;
  loseWeight: number;
  maintainWeight: number;
  walkingGoal: number;
  week: WEEK_CALORIES_TYPE[];
}

export type USER_CONTEXT_INTERFACE = [USER_STATE_TYPE, dispatch: Dispatch<USER_TYPE_ACTIONS>];
