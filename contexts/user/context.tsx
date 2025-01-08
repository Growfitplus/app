import { createContext, useContext } from 'react';
import { USER_CONTEXT_INTERFACE } from './types';

const UserContext = createContext({} as USER_CONTEXT_INTERFACE);

export const useUserContext = () => useContext(UserContext)

export default UserContext;
