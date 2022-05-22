import axios, { AxiosResponse } from "axios"
import { HOST } from "../../../config"
import { Product } from "../types/types"
import { getSession } from "../utils/authKeyStorageService"

export const getUserProducts = (): Promise<AxiosResponse<ReadonlyArray<Product>>> => {
    const session = getSession()
    console.log(session?.token);
    return axios.get(`${HOST}/api/account/products`, {
        headers: {
            "x-access-token": session?.token || ""
        }
    });
}


export const addProduct = (name: string): Promise<AxiosResponse<{id: string, name: string}>> => {
    debugger;

    const session = getSession()
    console.log(session?.token);

    return axios.post(`${HOST}/api/products`, 
        {"name":name}, 
        {headers: {"x-access-token": session?.token || ""},}
    );
}
