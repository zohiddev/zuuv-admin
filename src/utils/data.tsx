import type { MenuProps } from "antd";
import { IMenus, IProfileMenu } from "./types";
import {
    DashboardIcon,
    PersonIcon,
    SupportIcon,
    TruckIcon,
    UserIcon,
} from "@assets/icons";
import { Link } from "react-router-dom";

export const menubar: IMenus[] = [
    {
        id: 1,
        title: "Dashboard",
        path: "/",
        icon: <DashboardIcon />,
    },
    {
        id: 2,
        title: "Foydalanuvchilar",
        path: "/users",
        icon: <UserIcon />,
    },
    {
        id: 3,
        title: "Kuryer e'loni",
        path: "/posts?limit=12&type=courier",
        icon: <TruckIcon />,
    },
    {
        id: 4,
        title: "Yo'lovchi e'loni",
        path: "/posts?limit=12&type=parcel",
        icon: <PersonIcon />,
    },
    // {
    //     id: 5,
    //     title: "Qo'llab quvvatlash",
    //     path: "/",
    //     icon: <SupportIcon />,
    // },
];

export const profileMenu: MenuProps["items"] = [
    {
        key: "1",
        label: <Link to='/logout'>Logout</Link>,
    },
];
