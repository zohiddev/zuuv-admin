import { Rule } from "antd/es/form";
import { monthsListUz } from "./data";
import { ISolvedAds } from "@pages/dashboard/type";

//  localStorage
export const getStorage = (key: string): string | null => {
    return localStorage.getItem(key);
};

export const setStorage = (key: string, value: string): void => {
    localStorage.setItem(key, value);
};

export const clearLocalStorage = (): void => {
    localStorage.clear();
};

export const formLabel = (
    title: string,
    name: string,
    extraRules?: Rule[],
    notRequired?: boolean
) => {
    const required = {
        required: true,
        message: `Please input your ${title}!`,
    };
    const rules = !notRequired
        ? extraRules
            ? [required, ...extraRules]
            : [required]
        : undefined;
    return {
        label: title,
        name,
        rules,
    };
};

export const postDataClr = (obj: any, n: string[] = []) => {
    let newObj = structuredClone(obj);
    for (let el in newObj) {
        if (n.includes(el)) {
            delete newObj[el];
        }
    }
    return newObj;
};

export const convertQueryParamsTO = (str: string) => {
    let queryParams: any = {};
    str = str.substring(1);
    const queryParamsArray = str.split("&");
    queryParamsArray.forEach((queryParam) => {
        const queryParamArray = queryParam.split("=");
        queryParams[queryParamArray[0]] = queryParamArray[1];
    });
    return queryParams;
};

export const isDate = (date: number) => {
    let d = new Date(Number(date));
    const day = d.getDate();
    const month = d.getMonth();
    return `${day} - ${monthsListUz[month]}`;
};

export const time = (date: number) => {
    const clock = new Date(Number(date));
    return clock.toTimeString().slice(0, 5);
};

export const createPieData = (data: ISolvedAds) => {
    const dataType = [
        {
            type: "Ilova orqali hal qildim",
            key: "zuv",
        },
        {
            type: "Bosh joydan hal qildim",
            key: "other",
        },
        {
            type: "Hal qila olmadim",
            key: "unresolved",
        },
    ];

    return dataType.map((item) => ({
        ...item,
        value: Number(data[item.key as keyof typeof data]),
    }));
};
