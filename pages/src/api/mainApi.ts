import axios, { AxiosResponse } from "axios"
import { HOST } from "../../../config"
import { getSession } from "../utils/authKeyStorageService"

export const getUserById = (): Promise<AxiosResponse<{ id: string, money: number, nickname: string, secretToken: string }>> => {
    const session = getSession()
    console.log(session.token);
    return axios.get(`${HOST}/api/account/`, {
        headers: {
            "x-access-token": session.token
        }
    })
}
