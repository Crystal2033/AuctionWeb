import axios, { AxiosResponse } from "axios"
import { HOST } from "../../../config"
import { Lot, User } from "../types/types"
import { getSession } from "../utils/authKeyStorageService"

export const addLot = (name: string, price: number): Promise<AxiosResponse<Lot>> => {
    const session = getSession();
    return axios.post(`${HOST}/api/lots/add`,
        { "name": name, "startPrice": price, "productsId": [] },
        { headers: { "x-access-token": session?.token || "" } },
    )
}

export const getUserLots = (): Promise<AxiosResponse<ReadonlyArray<Lot>>> => {
    const session = getSession()
    return axios.get(`${HOST}/api/account/lots`, {
        headers: {
            "x-access-token": session?.token || ""
        }
    })
}

export const getAllLots = (): Promise<AxiosResponse<ReadonlyArray<Lot>>> => {
    return axios.get(`${HOST}/api/lots/all`, {
    })
}

export const getSearchLots = (name: string): Promise<AxiosResponse<ReadonlyArray<Lot>>> => {

    return axios.get(`${HOST}/api/lots/search`,
        { params: { name: name } }
    );
}
