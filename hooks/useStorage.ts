import { deletingStorage, finishStorage, settingStorage } from '@/contexts/storage/actions';
import { useStorageContext } from '@/contexts/storage/context';
import * as SecureStore from 'expo-secure-store';
import { USER_STATE_TYPE } from '@/contexts/user/types';

const useStorage = () => {
  const [, storageDispatch] = useStorageContext();

  const updateStorage = async (data: USER_STATE_TYPE) => {
    try {
      storageDispatch(settingStorage());

      await SecureStore.setItemAsync('session', JSON.stringify(data));
    } catch (e) {
      console.error('Secure Store is unavailable:', e);
    } finally {
      storageDispatch(finishStorage());
    }
  };

  const deleteStorage = async () => {
    try {
      storageDispatch(deletingStorage());

      await SecureStore.deleteItemAsync('session');
    } catch (e) {
      console.error('Secure Store is unavailable:', e);
    } finally {
      storageDispatch(finishStorage());
    }
  };

  return {
    deleteStorage,
    updateStorage,
  };
};

export default useStorage;
