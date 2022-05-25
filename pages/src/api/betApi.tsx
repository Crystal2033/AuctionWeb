import axios, { AxiosResponse } from "axios"
import { HOST } from "../../../config"
import { Bet } from "../types/types"
import { getSession } from "../utils/authKeyStorageService"

export const getUserBets = (): Promise<AxiosResponse<ReadonlyArray<Bet>>> => {
    const session = getSession()
    console.log(session?.token);
    return axios.get(`${HOST}/api/account/bets`, {
        headers: {
            "x-access-token": session?.token || ""
        }
    });
}

export const addBet = (money: number, lotId:string) : Promise<AxiosResponse<Bet>> => {
    debugger;
    const session = getSession()
    console.log(session?.token);
    return axios.post(`${HOST}/api/bets`,
        { "betSize": money, "lotId": lotId, "id" : ""},
        {headers: {"x-access-token": session?.token || ""}
    });
}