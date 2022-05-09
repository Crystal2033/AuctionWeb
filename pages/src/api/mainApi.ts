import axios, { AxiosResponse } from "axios"
import { HOST } from "../../../config"

export const getUserById = (id: string): Promise<AxiosResponse<{ id: string, money: number, nickname: string, secretToken: string }>> => {
    return axios.get(`${HOST}/api/account/get/${id}`, {
        headers: {
            "x-access-token": "some token"
        }
    })
}