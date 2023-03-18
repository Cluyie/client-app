import MachineStore from "./MachineStore";
import {createContext, useContext} from "react";
import CommonStore from "./commonStore";
import RentalStore from "./rentalStore";

interface Store {
    machineStore: MachineStore;
    commonStore: CommonStore;
    rentalStore: RentalStore;
}

export const store: Store = {
    machineStore: new MachineStore(),
    commonStore: new CommonStore(),
    rentalStore: new RentalStore(),
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}