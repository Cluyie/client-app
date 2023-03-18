
import { makeAutoObservable, runInAction } from "mobx";
import agent from "../../services/apicalls";
import { MachineObj } from "../models/imageType";

export default class MachineStore {

    machines: MachineObj[] = [];
    loadingInitial: boolean = false;
    loading: boolean = false;

    constructor() {
        makeAutoObservable(this);
    }

    loadMachines = async () => {
      this.setLoadingInitial(true);
        try {
            const machines = await agent.machines.list();
            this.machines = machines;
            this.setLoadingInitial(false);
        } catch (error) {
            console.log(error);
            this.setLoadingInitial(false);
        }
    }

    createMachine = async (machine: MachineObj) => {
        this.setLoading(true)
        try {
            await agent.machines.create(machine);
        runInAction(() => {
            this.machines.push(machine);
            this.setLoading(false);

        })
        } catch (error) {
            console.log(error);
            this.setLoading(false);
        }
    }

    updateMachine = async (machine: MachineObj) => {
        this.setLoading(true)
        try {
            await agent.machines.update(machine);
        runInAction(() => {
            this.machines = [...this.machines.filter(a => a.id !== machine.id), machine]
            this.setLoading(false);

        })
        } catch (error) {
            console.log(error);
            this.setLoading(false);
        }
    }

    deleteMachine = async (id: string) => {
        this.setLoading(true)
        try {
            await agent.machines.delete(id);
        runInAction(() => {
            this.machines = [...this.machines.filter(a => a.id !== id)]
            this.setLoading(false);

        })
        } catch (error) {
            console.log(error);
            this.setLoading(false);
        }
    }

   

    setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;
    }

    setLoading = (state: boolean) => {
        this.loading = state;
    }


}