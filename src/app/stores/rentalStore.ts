import { makeAutoObservable, runInAction } from "mobx";
import agent from "../../services/apicalls";
import { MachineObj } from "../models/imageType";
import { v4 as uuidv4 } from 'uuid';


export default class RentalStore {
    rentals: MachineObj[] = [];
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

   

    loadRentals = async () => {
      this.setLoadingInitial(true);
        try {
            const rentals = await agent.rentals.list();
            runInAction(() => {
                rentals.sort((a,b) => a.imageTitle.localeCompare(b.imageTitle));
                this.rentals = rentals;
                //this.rentals.sort(this.compare);
                this.setLoadingInitial(false);;
            });
           
        } catch (error) {
            console.log(error);
            this.setLoadingInitial(false);
        }
    }

    createRental = async (rental: MachineObj) => {
        this.setLoading(true)
        try {
            await agent.rentals.create(rental);
        runInAction(() => {
            this.rentals.push(rental);
            this.rentals.sort((a,b) => a.imageTitle.localeCompare(b.imageTitle));
            this.setLoading(false);
            this.toggleCreateRentalDialogVisible();
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

    updateRentals = async (rental: MachineObj) => {
        this.setLoading(true)
        try {
            await agent.rentals.update(rental);
        runInAction(() => {
            var index = this.rentals.findIndex(x=> x.id == rental.id);
            if (index) {
                this.rentals.splice(index, 1, rental);
                this.rentals.sort((a,b) => a.imageTitle.localeCompare(b.imageTitle));
            }           
            this.setLoading(false);
            this.toggleCreateRentalDialogVisible();
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

    deleteRental = async (id: string) => {
        this.setLoading(true)
        try {
            await agent.rentals.delete(id);
        runInAction(() => {
            this.rentals = [...this.rentals.filter(a => a.id !== id)]
            this.setLoading(false);

        })
        } catch (error) {
            console.log(error);
            this.setLoading(false);
        }
    }

    editMachine = (machine: MachineObj) => {
        this.createEditMachine = machine;
        this.toggleCreateRentalDialogVisible();
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
        this.deleteRental(this.idToDelete);
        this.idToDelete = "";
        this.confirmDialogVisible = false;
   }

    setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;
    }

    setLoading = (state: boolean) => {
        this.loading = state;
    }

    toggleCreateRentalDialogVisible = () => {
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