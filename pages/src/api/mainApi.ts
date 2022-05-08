import axios from "axios"
import { HOST } from "../../../config"

export const getUserById = (id: string) => {
    axios.get(`${HOST}/api/account/get/${id}`)
}