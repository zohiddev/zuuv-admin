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
    icon: ReactNode;
}

interface IProfileMenu {
    key: string;
    label: ReactNode;
}

export type { TKey, IRoutes, IMenus, IProfileMenu };
