import { makeAutoObservable, runInAction } from "mobx";
import agent from "../../services/apicalls";
import { User, UserForm } from "../models/user";
import { store } from "./store";

export default class UserStore {
    user: User | null = null;
    email: string = "";
    password: string = "";
    LoginDialogVisible: boolean = false;

    constructor() {
        makeAutoObservable(this)
    }

    get isLoggedIn() {
        return !!this.user;
    }

    login = async (creds: UserForm) => {
        try {
            const user = await agent.Account.login(creds);
            store.commonStore.setToken(user.token);
            runInAction(() => 
            this.user = user,
            );
            this.email = "";
            this.password = "";
            this.setLoginDialogInvisible();
        } catch (error) {
            throw error;
        }
    }

    setLoginDialogInvisible = () => {
        this.LoginDialogVisible = false;
    }

    setLoginDialogVisible = () => {
        this.LoginDialogVisible = true;
    }

    logout = () => {
        store.commonStore.setToken(null);
        this.user = null;
        this.email = "";
        this.password = "";
    }

    getUser = async () => {
        try {
            const user = await agent.Account.current();
            runInAction(() => this.user = user);
        } catch (error) {
            
        }
    }




    
}