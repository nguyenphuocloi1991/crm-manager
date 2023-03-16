import Cookies from "universal-cookie"
import { instance } from "./instance";
import { useState } from "react";

export const formatNumber = (number) => {
    var formatter = new Intl.NumberFormat('en-US', {
        // These options are needed to round to whole numbers if that's what you want.
        minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    });

    return formatter.format(number);
}

export const splitStr = (str, index) => {
    const result = str?.slice(0, index);
    return result;
}

export const isLoggedIn = () => {
    const returnUrl = window.location.pathname
    const cookies = new Cookies()
    const accessToken = cookies.get("amante-acs-tk")
    return accessToken
}