import { USER_ACTION_TYPES, USER_STATE_TYPE, USER_TYPE_ACTIONS } from "./types"

const UserReducer = (state: USER_STATE_TYPE, action: USER_TYPE_ACTIONS): USER_STATE_TYPE => {
  switch (action.type) {
    case USER_ACTION_TYPES.LOAD_DATA:
      return {
        ...action.payload,
      }

    case USER_ACTION_TYPES.LOGIN:
      return {
        ...action.payload,
        hasSession: true
      }

    case USER_ACTION_TYPES.SET_USERNAME:
      return {
        ...state,
        username: action.payload.username,
        hasSession: true
      }

    case USER_ACTION_TYPES.SET_GENRE:
      return {
        ...state,
        data: {
          ...state.data,
          genre: action.payload.genre
        }
      }

    case USER_ACTION_TYPES.SET_HEIGHT:
      return {
        ...state,
        data: {
          ...state.data,
          height: action.payload.height
        }
      }

    case USER_ACTION_TYPES.SET_WEIGHT:
      return {
        ...state,
        data: {
          ...state.data,
          weight: action.payload.weight
        }
      }

    case USER_ACTION_TYPES.SET_AGE:
      return {
        ...state,
        data: {
          ...state.data,
          age: action.payload.age
        }
      }

    case USER_ACTION_TYPES.FINISH_ONBOARDING:
      return {
        ...state,
        onboardingFinished: true
      }

    case USER_ACTION_TYPES.LOGOUT:
      return {
        ...state,
        hasSession: false
      }

    default:
      return state
  }

}

export default UserReducer
