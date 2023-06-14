import axios from "axios";
import { getStorage } from "@utils/helpers";
import { responseInterceptor } from "./ResponseInterceptor";
import { errorInterceptor } from "./ErrorInterceptor";
import { mediaApiBaseUrl, baseURL } from "@utils/urls";

export const Api = axios.create({
    baseURL,
});

Api.interceptors.request.use((config) => {
    const token = getStorage("access_token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

Api.interceptors.response.use(
    (response) => responseInterceptor(response),
    (error) => errorInterceptor(error)
);

export const MediaApi = axios.create({
    baseURL: mediaApiBaseUrl,
});
