import axios, { AxiosError } from "axios";
import { Country } from "./../types/country.types";

export interface CustomErrorResponse {
    message: string;
}

export class API {
    private axios;

    constructor() {
        this.axios = axios.create({
            baseURL: import.meta.env.VITE_COUNTRIES_URL,
        });
    }

    public async getCountries(): Promise<Country[]> {
        try {
            const response = await this.axios.get<Country[]>("/all");

            console.log(response.data);
            return response.data;
        } catch (error: unknown) {
            const axiosError = error as AxiosError<CustomErrorResponse>;
            throw new Error(axiosError.response?.data.message);
        }
    }
}

const api = new API();

export default api;
