import { AxiosError, AxiosResponse } from "axios";
import { useQuery, useMutation } from "react-query";
import { handleEncrypted } from "@utils/mediaApiHelpers";
import { Api, MediaApi } from "@api/index";

// const useGetList = <T>(
//     key: string,
//     url: string,
//     pagination?: any,
//     filters?: any,
//     sorter?: any
// ) => {
//     const service = async () => {
//         const data: T = await Api.get(`${url}`);

//         return data;
//     };
//     return useQuery(key, () => service());
// };

// const useGetOne = <T>(key: string, url: string, params?: any) => {
//     const axios = useAxios();

//     const service = async () => {
//         const data: T = await axios.get(`${url}`, params);

//         return data;
//     };
//     return useQuery(key, () => service());
// };

interface IEditData<T> {
    url: string;
    item: T;
}

const useGetList = <T>(key: string, url: string) => {
    const service = async () => {
        const data: T = await Api.get(`${url}`);

        return data;
    };
    return useQuery(key, () => service());
};

const useCreate = <T, U, V = Error>(url: string) => {
    return useMutation<U, AxiosError<V>, T>(async (body) => {
        const data: U = await Api.post(url, body);
        return data;
    });
};

const useUpdate = <T, U>() => {
    return useMutation(async ({ url, item }: IEditData<T>) => {
        const data: U = await Api.patch(`${url}`, item);
        return data;
    });
};

const useDeleteApi = <T>(url: string) => {
    return useMutation(async (id: number) => {
        const data: T = await Api.delete(`${url}/${id}`);
        return data;
    });
};

// MediaApi
const useCreateMedia = <T, U, V = Error>(url: string) => {
    return useMutation<U, AxiosError<V>, T>(async (body) => {
        const data: AxiosResponse<U> = await MediaApi.post(`${url}`, body, {
            headers: {
                "x-auth-key": handleEncrypted(),
            },
        });
        return data.data;
    });
};

const useDeleteMedia = <T>(url: string) => {
    return useMutation(async (item: { key: string }) => {
        const data: AxiosResponse<T> = await MediaApi.post(url, item, {
            headers: {
                "x-auth-key": handleEncrypted(),
            },
        });
        return data.data;
    });
};

export {
    useGetList,
    useCreate,
    useUpdate,
    useDeleteApi,
    useCreateMedia,
    useDeleteMedia,
};
