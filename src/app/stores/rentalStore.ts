import { makeAutoObservable, runInAction } from "mobx";
import agent from "../../services/apicalls";
import { MachineObj } from "../models/imageType";


export default class RentalStore {
    rentals: MachineObj[] = [];
    loadingInitial: boolean = false;
    loading: boolean = false;

    constructor() {
        makeAutoObservable(this);
    }

    loadRentals = async () => {
      this.setLoadingInitial(true);
        try {
            const rentals = await agent.rentals.list();
            this.rentals = rentals;
            this.setLoadingInitial(false);
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
            this.setLoading(false);

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
            this.rentals = [...this.rentals.filter(a => a.id !== rental.id), rental]
            this.setLoading(false);

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

   

    setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;
    }

    setLoading = (state: boolean) => {
        this.loading = state;
    }
}