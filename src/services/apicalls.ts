import axios, { Axios, AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { MachineObj } from "../app/models/imageType";
import { router } from "../app/router/routes";
import { store } from "../app/stores/store";

axios.defaults.baseURL = 'http://localhost:5000/api';
const responseBody = <T> (response: AxiosResponse<T>) => response.data;

axios.interceptors.response.use(async response => {
    return response;
}, (error: AxiosError) => {
    const {data, status, config} = error.response as AxiosResponse;
    switch (status) {
        case 400:
            if(config.method === 'get' && data.errors.hasOwnProperty('id')) {
                router.navigate('/not-found');
            }
           if(data.errors){
            const modalStateErrors = [];
            for(const key in data.errors) {
                if(data.errors[key]) {
                    modalStateErrors.push(data.errors[key])
                }
            }
            throw modalStateErrors.flat();
           } else {
            toast.error(data);
           }
            break;
         case 401:
            toast.error('Unauthorised')
            break;
         case 403:
            toast.error('Forbidden')
            break;
         case 404:
           router.navigate('/not-found');
            break;
        case 500:
            store.commonStore.setServerError(data);
            router.navigate('/server-error')
            toast.error('server error')
            break;
    
        default:
            break;
    }
    return Promise.reject(error);
})

const request = {
    get: <T> (url: string) => axios.get<T>(url).then(responseBody),
    post: <T> (url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
    put: <T> (url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
    delete: <T>(url: string) => axios.delete<T>(url).then(responseBody),
}

const machines = {
    list: () => request.get<MachineObj[]>('/machines'),
    details: (id: string) => request.get<MachineObj>(`/machines/${id}`),
    create: (machine: MachineObj) => request.post<void>('machines', machine),
    update: (machine: MachineObj) => request.put<void>('machines', machine),
    delete: (id: string) => request.delete<void>(`/machines/${id}`)
}

const rentals = {
    list: () => request.get<MachineObj[]>('/rentals'),
    details: (id: string) => request.get<MachineObj>(`/rentals/${id}`),
    create: (rental: MachineObj) => request.post<void>('rentals', rental),
    update: (rental: MachineObj) => request.put<void>('rentals', rental),
    delete: (id: string) => request.delete<void>(`/rentals/${id}`)
}
const agent = {
    machines,
    rentals
}
export default agent;

/* export const GetAll  = async () => {
    const list: MachineObj[] = await (await axios.get('http://localhost:5000/api/machines')).data;
    return list;
}

export const GetSingleMachine  = async (id: string) => {
    const single: MachineObj = await (await axios.get('http://localhost:5000/api/machines/' + id)).data;
    return single;
} */