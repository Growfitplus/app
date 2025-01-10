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
        data: {
          ...state.data,
          genre: action.payload.genre,
        },
      };

    case USER_ACTION_TYPES.SET_HEIGHT:
      return {
        ...state,
        data: {
          ...state.data,
          height: action.payload.height,
        },
      };

    case USER_ACTION_TYPES.SET_WEIGHT:
      return {
        ...state,
        data: {
          ...state.data,
          weight: action.payload.weight,
        },
      };

    case USER_ACTION_TYPES.SET_AGE:
      return {
        ...state,
        data: {
          ...state.data,
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
        data: {
          ...state.data,
          images: [
            ...state.data.images,
            {
              ...action.payload,
            },
          ],
        },
      };

    case USER_ACTION_TYPES.RESET_STATE:
      return {
        data: {
          age: 0,
          calories: 0,
          genre: null,
          height: 0,
          images: [],
          liters: 0,
          weight: 0,
        },
        hasSession: false,
        onboardingFinished: false,
        username: '',
      };

    case USER_ACTION_TYPES.SET_CALORIES:
      return {
        ...state,
        data: {
          ...state.data,
          calories: action.payload.calories,
        },
      };

    case USER_ACTION_TYPES.SET_LITERS:
      return {
        ...state,
        data: {
          ...state.data,
          liters: action.payload.liters,
        },
      };

    default:
      return state;
  }
};

export default UserReducer;
