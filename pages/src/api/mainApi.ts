import { rejects } from "assert"
import axios, { AxiosResponse } from "axios"
import { HOST } from "../../../config"
import { User } from "../types/types"
import { getSession } from "../utils/authKeyStorageService"
import { Lot } from "../types/types"

export const getAccount = (): Promise<AxiosResponse<User>> => {
    const session = getSession()
    console.log(`Token = ${session?.token}`);
    return axios.get(`${HOST}/api/account/`, {
        headers: {
            "x-access-token": session?.token || ""
        }
    })
}

export const getLots = ():  Promise<AxiosResponse<Array<Lot>>> => {
    const session = getSession();
    console.log("Si");
    return axios.get(`${HOST}/api/account/products`, {
        headers: {
            "x-access-token": session?.token || ""
        }
    })
}
