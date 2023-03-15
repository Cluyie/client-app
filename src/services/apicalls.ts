import axios, { AxiosResponse } from "axios";
import { MachineObj } from "../app/models/imageType";

axios.defaults.baseURL = 'http://localhost:5000/api';
const responseBody = <T> (response: AxiosResponse<T>) => response.data;

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
const agent = {
    machines
}
export default agent;

export const GetAll  = async () => {
    const list: MachineObj[] = await (await axios.get('http://localhost:5000/api/machines')).data;
    return list;
}

export const GetSingleMachine  = async (id: string) => {
    const single: MachineObj = await (await axios.get('http://localhost:5000/api/machines/' + id)).data;
    return single;
}