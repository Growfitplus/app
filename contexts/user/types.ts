import { Dispatch } from 'react';
import { PhotosState } from '@/types/photos';

export enum USER_ACTION_TYPES {
  FINISH_ONBOARDING = 'FINISH_ONBOARDING',
  LOAD_DATA = 'LOAD_DATA',
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
  RESET_STATE = 'RESET_STATE',
  SET_AGE = 'SET_AGE',
  SET_CALORIES = 'SET_CALORIES',
  SET_GENRE = 'SET_GENRE',
  SET_HEIGHT = 'SET_HEIGHT',
  SET_IMAGES = 'SET_IMAGES',
  SET_LITERS = 'SET_LITERS',
  SET_USERNAME = 'SET_USERNAME',
  SET_WEIGHT = 'SET_WEIGHT',
}

export type USER_TYPE_ACTIONS =
  | { type: USER_ACTION_TYPES.FINISH_ONBOARDING }
  | { type: USER_ACTION_TYPES.LOAD_DATA; payload: USER_STATE_TYPE }
  | { type: USER_ACTION_TYPES.LOGIN; payload: USER_STATE_TYPE }
  | { type: USER_ACTION_TYPES.LOGOUT }
  | { type: USER_ACTION_TYPES.RESET_STATE }
  | { type: USER_ACTION_TYPES.SET_AGE; payload: { age: number } }
  | { type: USER_ACTION_TYPES.SET_CALORIES; payload: { week: WEEK_CALORIES_TYPE[] } }
  | { type: USER_ACTION_TYPES.SET_GENRE; payload: { genre: GENRE_TYPES } }
  | { type: USER_ACTION_TYPES.SET_HEIGHT; payload: { height: number } }
  | { type: USER_ACTION_TYPES.SET_IMAGES; payload: PhotosState }
  | { type: USER_ACTION_TYPES.SET_LITERS; payload: { liters: number } }
  | { type: USER_ACTION_TYPES.SET_USERNAME; payload: { username: string } }
  | { type: USER_ACTION_TYPES.SET_WEIGHT; payload: { weight: number } };

export enum GENRE_TYPES {
  'Masculine' = 'Masculine',
  'Feminine' = 'Feminine',
}

export type WEEK_DAYS = 'L' | 'M' | 'J' | 'V' | 'S' | 'D';

export interface USER_STATE_TYPE {
  hasSession: boolean;
  media: {
    images: PhotosState[];
  };
  nutrition: {
    liters: number;
    week: WEEK_CALORIES_TYPE[];
  };
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
}

export type USER_CONTEXT_INTERFACE = [USER_STATE_TYPE, dispatch: Dispatch<USER_TYPE_ACTIONS>];
