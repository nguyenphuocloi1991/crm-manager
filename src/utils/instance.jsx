import axios from "axios"
import { baseURL } from "../utils/constants"

export const instance = axios.create({
    baseURL: baseURL
})