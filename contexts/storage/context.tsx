import { createContext, useContext } from "react";
import { STORAGE_CONTEXT_INTERFACE } from "./types";

const StorageContext = createContext({} as STORAGE_CONTEXT_INTERFACE)

export const useStorageContext = () => useContext(StorageContext)

export default StorageContext
