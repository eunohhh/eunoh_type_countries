import { GetCountries } from "@/types/functions.types";
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { Country } from "./../types/country.types";

export interface CustomErrorResponse {
    message: string;
}

export class API {
    private axios: AxiosInstance;

    constructor() {
        // 제네릭 자리에 넣는 타입은 post 요청 등의 경우 Data 의 타입이 되는 거라서 지금은 any가 떠도 그냥 놔둠
        // 하단 참고
        // export interface AxiosRequestConfig<D = any> {
        //  data?: D;
        const config: AxiosRequestConfig = {
            baseURL: import.meta.env.VITE_COUNTRIES_URL,
        };
        this.axios = axios.create(config);
    }

    public getCountries: GetCountries = async () => {
        try {
            const response: AxiosResponse<Country[], string> = await this.axios.get<
                Country[],
                AxiosResponse<Country[], string>,
                string
            >("/all");

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
