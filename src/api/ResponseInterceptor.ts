import axios, { AxiosResponse } from "axios";
import { RefreshPostResponse } from "./types";
import { Api } from ".";
import { getStorage, setStorage } from "@utils/helpers";
import { refreshTokenUrl } from "@utils/urls";

export const responseInterceptor = async (response: AxiosResponse) => {
    const refresh_token = getStorage("refresh_token");
    if (response?.data?.error?.message == "INVALID_JWT") {
        return (window.location.href = "/logout");
    }
    if (
        response?.data?.error?.message === "JWT_EXPIRED" &&
        refresh_token !== null
    ) {
        try {
            const getRefresh = await axios.post<RefreshPostResponse>(
                refreshTokenUrl,
                {
                    refreshToken: refresh_token,
                }
            );
            if (!getRefresh.data.data.success) {
                return (window.location.href = "/logout");
            }
            const { accessToken } = getRefresh.data.data;
            setStorage("access_token", accessToken);
        } catch (error) {
            window.location.href = "/logout";
            return Promise.reject(error);
        }
    }
    return response.data;
};
