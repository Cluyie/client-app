import MachineStore from "./MachineStore";
import {createContext, useContext} from "react";

interface Store {
    machineStore: MachineStore
}

export const store: Store = {
    machineStore: new MachineStore()
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}