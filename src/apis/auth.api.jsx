import { instance } from "../utils/instance"

export const login = async (data) => {
    try {
        const response = await instance({ url: "/manager/login", method: "POST", data: data })
        return response.data
    } catch (error) {
        return error.response.data
    }
}

export const topMenuList = async (admin_id) => {
    try {
        const response = await instance({
            url: `/top-menu-list?admin_id=${admin_id}`,
            method: "GET",
        })
        return response.data
    } catch (error) {
        return error.response.data
    }
}