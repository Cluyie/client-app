import MachineStore from "./MachineStore";
import {createContext, useContext} from "react";
import CommonStore from "./commonStore";

interface Store {
    machineStore: MachineStore;
    commonStore: CommonStore;
}

export const store: Store = {
    machineStore: new MachineStore(),
    commonStore: new CommonStore(),
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}