import axios, { AxiosResponse } from "axios"
import { HOST } from "../../../config"
import { Lot, User } from "../types/types"
import { getSession } from "../utils/authKeyStorageService"

export const getUserLots = (): Promise<AxiosResponse<ReadonlyArray<Lot>>> => {
    const session = getSession()
    console.log(session?.token);
    return axios.get(`${HOST}/api/account/lots`, {
        headers: {
            "x-access-token": session?.token || ""
        }
    })
}

export const getAllLots = () : Promise<AxiosResponse<ReadonlyArray<Lot>>> => {
    const session = getSession()
    console.log(session?.token);
    return axios.get(`${HOST}/api/lots/all`, {
        headers: {
            "x-access-token": session?.token || ""
        }
    })
}