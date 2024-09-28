import { AxiosInstance } from "axios";
import instance from "../axiosInstance";
import { TestType } from "./TestApi.model";

export class TestApi {
    axios : AxiosInstance = instance;
    constructor(axios : AxiosInstance){
        this.axios = axios;
    }

    getServerStatus = async (): Promise<TestType> => {
        const { data } =  await this.axios({
            method: "GET",
            url: '/notice/'
        });
        return data;
    }
}

const testApi = new TestApi(instance);
export default testApi;