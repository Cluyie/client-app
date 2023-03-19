import { makeAutoObservable, reaction } from "mobx";
import { MachineObj } from "../models/imageType";
import { ServerError } from "../models/serverError";
import { v4 as uuidv4 } from 'uuid';

export default class CommonStore {
    error: ServerError | null = null;
    token: string | null = localStorage.getItem('jwt');
    

    constructor() {
        makeAutoObservable(this);

        reaction(() => this.token, token => {
            if(token) {
                localStorage.setItem('jwt', token);
            }
            else  {
                localStorage.removeItem('jwt');
            }
        } )
    }
    setServerError(error: ServerError) {
        this.error = error;
    }

    setToken = (token: string | null) => {
        if(token) localStorage.setItem('jwt', token);
        this.token = token;
    } 

   
}