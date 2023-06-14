import { Rule } from "antd/es/form";

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
