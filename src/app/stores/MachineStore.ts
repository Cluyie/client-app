
import { makeAutoObservable, runInAction } from "mobx";
import agent from "../../services/apicalls";
import { MachineObj } from "../models/imageType";
import { v4 as uuidv4 } from 'uuid';

export default class MachineStore {

    machines: MachineObj[] = [];
    loadingInitial: boolean = false;
    loading: boolean = false;
    createDialogVisible: boolean = false;
    createEditMachine: MachineObj = {
        id: "",
        imageData: "",
        imageTitle: "",
    }
    confirmDialogVisible: boolean = false;
    idToDelete: string = "";

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
            this.toggleCreateDialogVisible();
            this.setLoading(false);
            const emptyMachine: MachineObj = {
                id: "",
                imageData: "",
                imageTitle: "",
            }
            this.createEditMachine = emptyMachine;

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
            var index = this.machines.findIndex(x=> x.id == machine.id);
            if (index) {
                this.machines.splice(index, 1, machine);
            }
            this.setLoading(false);
            this.toggleCreateDialogVisible();
            const emptyMachine: MachineObj = {
                id: "",
                imageData: "",
                imageTitle: "",
            }
            this.createEditMachine = emptyMachine;

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

    editMachine = (machine: MachineObj) => {
        this.createEditMachine = machine;
        this.toggleCreateDialogVisible();
    }

    resetObject = () => {
        const emptyMachine: MachineObj = {
            id: "",
            imageData: "",
            imageTitle: "",
        }
        this.createEditMachine = emptyMachine;
    }

   confirm = () => {
        this.deleteMachine(this.idToDelete);
        this.idToDelete = "";
        this.confirmDialogVisible = false;
   }

    setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;
    }

    setLoading = (state: boolean) => {
        this.loading = state;
    }

    toggleCreateDialogVisible = () => {
        var visible = !this.createDialogVisible;
        this.createDialogVisible = visible;
    }
    setConfirmDialogVisible = (id: string) => {
        this.idToDelete = id;
        this.confirmDialogVisible = true;
    }
    setConfirmDialogInvisible = () => {
        this.confirmDialogVisible = false;
    }

    setImageText = (value: string) => {
        this.createEditMachine.imageTitle = value;
    }

    setId = () => {
        var id = uuidv4();
        this.createEditMachine.id = id;
    }


}