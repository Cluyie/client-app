import { makeAutoObservable } from "mobx";
import { MachineObj } from "../models/imageType";
import { ServerError } from "../models/serverError";
import { v4 as uuidv4 } from 'uuid';

export default class CommonStore {
    error: ServerError | null = null;
    

    constructor() {
        makeAutoObservable(this);
    }
    setServerError(error: ServerError) {
        this.error = error;
    }

   
}