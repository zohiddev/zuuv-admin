type TKey = "refresh_token" | "access_token" | "id";

import { ReactNode } from "react";

interface IRoutes {
    id: number | string;
    path: string;
    component: ReactNode;
}

interface IMenus {
    id: number | string;
    title: string;
    path: string;
    location: string;
    icon: ReactNode;
}

interface IProfileMenu {
    key: string;
    label: ReactNode;
}

export type RequestT<T> = {
    data: T;
    error: string;
    success: boolean;
};

export type { TKey, IRoutes, IMenus, IProfileMenu };
