import { resetWeek } from '@/utils/resetWeek';

import { USER_ACTION_TYPES, USER_STATE_TYPE, USER_TYPE_ACTIONS } from './types';

const UserReducer = (state: USER_STATE_TYPE, action: USER_TYPE_ACTIONS): USER_STATE_TYPE => {
  switch (action.type) {
    case USER_ACTION_TYPES.LOAD_DATA:
      return {
        ...action.payload,
      };

    case USER_ACTION_TYPES.LOGIN:
      return {
        ...action.payload,
        hasSession: true,
      };

    case USER_ACTION_TYPES.SET_USERNAME:
      return {
        ...state,
        hasSession: true,
        username: action.payload.username,
      };

    case USER_ACTION_TYPES.SET_GENRE:
      return {
        ...state,
        personal: {
          ...state.personal,
          genre: action.payload.genre,
        },
      };

    case USER_ACTION_TYPES.SET_HEIGHT:
      return {
        ...state,
        personal: {
          ...state.personal,
          height: action.payload.height,
        },
      };

    case USER_ACTION_TYPES.SET_WEIGHT:
      return {
        ...state,
        personal: {
          ...state.personal,
          weight: action.payload.weight,
        },
      };

    case USER_ACTION_TYPES.SET_AGE:
      return {
        ...state,
        personal: {
          ...state.personal,
          age: action.payload.age,
        },
      };

    case USER_ACTION_TYPES.FINISH_ONBOARDING:
      return {
        ...state,
        onboardingFinished: true,
      };

    case USER_ACTION_TYPES.LOGOUT:
      return {
        ...state,
        hasSession: false,
      };

    case USER_ACTION_TYPES.SET_IMAGES:
      return {
        ...state,
        media: {
          images: [
            ...state.media.images,
            {
              ...action.payload,
            },
          ],
        },
      };

    case USER_ACTION_TYPES.RESET_STATE:
      return {
        hasSession: false,
        media: {
          images: [],
        },
        nutrition: {
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

    case USER_ACTION_TYPES.SET_CALORIES:
      return {
        ...state,
        nutrition: {
          week: [...action.payload.week],
        },
      };

    case USER_ACTION_TYPES.SET_LITERS:
      return {
        ...state,
        nutrition: {
          week: [...state.nutrition.week],
        },
      };

    default:
      return state;
  }
};

export default UserReducer;
