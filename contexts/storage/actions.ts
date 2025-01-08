import { STORAGE_ACTION_TYPES, STORAGE_TYPE_ACTIONS } from '@/contexts/storage/types';

export const gettingStorage = (): STORAGE_TYPE_ACTIONS => ({
  type: STORAGE_ACTION_TYPES.GETTING_STORAGE,
});

export const settingStorage = (): STORAGE_TYPE_ACTIONS => ({
  type: STORAGE_ACTION_TYPES.SETTING_STORAGE,
});

export const deletingStorage = (): STORAGE_TYPE_ACTIONS => ({
  type: STORAGE_ACTION_TYPES.DELETING_STORAGE,
});

export const finishStorage = (): STORAGE_TYPE_ACTIONS => ({
  type: STORAGE_ACTION_TYPES.FINISH_STORAGE,
});
