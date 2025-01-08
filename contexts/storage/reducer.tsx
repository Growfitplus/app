import {
  STORAGE_ACTION_TYPES,
  STORAGE_STATE_TYPE,
  STORAGE_TYPE_ACTIONS,
} from '@/contexts/storage/types';

const StorageReducer = (state: STORAGE_STATE_TYPE, action: STORAGE_TYPE_ACTIONS) => {
  switch (action.type) {
    case STORAGE_ACTION_TYPES.SETTING_STORAGE:
      return {
        ...state,
        stage: STORAGE_ACTION_TYPES.SETTING_STORAGE,
        isLoading: true,
      };

    case STORAGE_ACTION_TYPES.GETTING_STORAGE:
      return {
        ...state,
        isLoading: true,
        stage: STORAGE_ACTION_TYPES.GETTING_STORAGE,
      };

    case STORAGE_ACTION_TYPES.DELETING_STORAGE:
      return {
        ...state,
        isLoading: true,
        stage: STORAGE_ACTION_TYPES.DELETING_STORAGE,
      };

    case STORAGE_ACTION_TYPES.FINISH_STORAGE:
      return {
        ...state,
        isLoading: false,
        stage: null
      };

    default:
      return state;
  }
};

export default StorageReducer;
