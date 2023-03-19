import MachineStore from "./MachineStore";
import {createContext, useContext} from "react";
import CommonStore from "./commonStore";
import RentalStore from "./rentalStore";
import UserStore from "./userStore";

interface Store {
    machineStore: MachineStore;
    commonStore: CommonStore;
    rentalStore: RentalStore;
    userStore: UserStore;
}

export const store: Store = {
    machineStore: new MachineStore(),
    commonStore: new CommonStore(),
    rentalStore: new RentalStore(),
    userStore: new UserStore(),
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}