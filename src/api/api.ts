import { GetCountries } from "@/types/functions.types";
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";
import { Country } from "./../types/country.types";

export interface CustomErrorResponse {
    message: string;
}

export class API {
    private axios: AxiosInstance;

    constructor() {
        const config: AxiosRequestConfig<string> = {
            baseURL: import.meta.env.VITE_COUNTRIES_URL,
        };
        this.axios = axios.create(config);
    }

    public getCountries: GetCountries = async () => {
        try {
            const response = await this.axios.get<Country[]>("/all");

            if (!response.data) {
                throw new Error("데이터 가져오기 실패");
            }

            return response.data;
        } catch (error: unknown) {
            const axiosError = error as AxiosError<CustomErrorResponse>;
            throw new Error(axiosError.response?.data.message);
        }
    };
}

const api = new API();

export default api;
