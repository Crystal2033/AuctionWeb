import axios, { AxiosResponse } from "axios"
import { HOST } from "../../../config"


export const signup = (email: string, password: string): Promise<AxiosResponse<{ id: string, money: number, nickname: string, secretToken: string }>> => {
    return axios.post(`${HOST}/api/registration/signup`, { email, password, nickname: "Pahan" })
}

export const login = (email: string, password: string): Promise<AxiosResponse<{ id: string, money: number, nickname: string, secretToken: string }>> => {
    return axios.post(`${HOST}/api/registration/login`, { email, password, nickname: "Pahan" })
}