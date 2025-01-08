import React, { useReducer } from 'react';

import StorageContext from '@/contexts/storage/context';
import StorageReducer from '@/contexts/storage/reducer';
import { STORAGE_STATE_TYPE } from './types';

const INITIAL_STORAGE_STATE: STORAGE_STATE_TYPE = {
  isLoading: true,
  stage: null,
};

const StorageProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const [storage, dispatch] = useReducer(StorageReducer, INITIAL_STORAGE_STATE);

  return (
    <StorageContext.Provider value={[{ ...storage }, dispatch]}>{children}</StorageContext.Provider>
  );
};

export default StorageProvider;
