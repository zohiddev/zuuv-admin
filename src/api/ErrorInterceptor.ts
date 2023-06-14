import { message } from "antd";
import axios, { AxiosError } from "axios";
import { MyError, RefreshPostResponse } from "./types";
import { getStorage, setStorage } from "@utils/helpers";
import { refreshTokenUrl } from "@utils/urls";

export const errorInterceptor = async (error: AxiosError<MyError>) => {
    if (error.message === "Network Error") {
        message.error("Network error");
        return Promise.reject(new Error("Network Error"));
    }

    const refresh_token = getStorage("refresh_token");

    if (
        error.response?.status === 400 &&
        error.response?.data?.message === "JWT_EXPIRED" &&
        refresh_token !== null
    ) {
        try {
            const getRefresh = await axios.post<RefreshPostResponse>(
                refreshTokenUrl,
                {
                    refresh_token,
                }
            );
            const { accessToken } = getRefresh.data.data;
            setStorage("access_token", accessToken);
        } catch (error) {
            window.location.href = "/logout";

            return Promise.reject(error);
        }
    }

    return Promise.reject(error);
};
