import React, { JSXElementConstructor, ReactNode, useReducer } from 'react';

import StorageContext from '@/contexts/storage/context';
import StorageReducer from '@/contexts/storage/reducer';
import { STORAGE_STATE_TYPE } from './types';

const INITIAL_STORAGE_STATE: STORAGE_STATE_TYPE = {
  isLoading: true,
  stage: null,
};

const StorageProvider: JSXElementConstructor<{ children?: ReactNode }> = ({ children }) => {
  const [storage, dispatch] = useReducer(StorageReducer, INITIAL_STORAGE_STATE);

  return (
    <StorageContext.Provider value={[{ ...storage }, dispatch]}>{children}</StorageContext.Provider>
  );
};

export default StorageProvider;
