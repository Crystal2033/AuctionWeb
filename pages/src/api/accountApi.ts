import axios, { AxiosResponse } from "axios"
import { HOST } from "../../../config"
import { getSession } from "../utils/authKeyStorageService";


export const addMoney = (money: number): Promise<AxiosResponse<void>> => {
    const session = getSession();
    console.log(session?.token);
    return axios.post(`${HOST}/api/account/money`,
        { "money": money },
        { headers: { "x-access-token": session?.token || "" } }

    );
}


