import axios, { AxiosResponse } from "axios"
import { HOST } from "../../../config"
import { Lot, User } from "../types/types"
import { getSession } from "../utils/authKeyStorageService"

export const addLot = () : Promise<AxiosResponse<Lot>> => {
    debugger;
    const session = getSession();
    return axios.post(`${HOST}/api/lots/add`, 
        {"name":"proof", "startPrice":0, "productsId" : []},
        {headers: {"x-access-token": session?.token || ""}},
    )
}

export const getUserLots = (): Promise<AxiosResponse<ReadonlyArray<Lot>>> => {
    const session = getSession()
    //console.log(session?.token);
    return axios.get(`${HOST}/api/account/lots`, {
        headers: {
            "x-access-token": session?.token || ""
        }
    })
}

export const getAllLots = (): Promise<AxiosResponse<ReadonlyArray<Lot>>> => {
    const session = getSession()
    console.log(session?.token);
    return axios.get(`${HOST}/api/lots/all`, {
        headers: {
            "x-access-token": session?.token || ""
        }
    })
}

export const getSearchLots = (name: string): Promise<AxiosResponse<ReadonlyArray<Lot>>> => {

    const session = getSession()
    console.log(session?.token);

    return axios.get(`${HOST}/api/lots/search`,
        { params: { name: name } }
    );
}
