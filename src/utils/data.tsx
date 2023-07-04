import type { MenuProps } from "antd";
import { IMenus } from "./types";
import { DashboardIcon, PersonIcon, TruckIcon, UserIcon } from "@assets/icons";
import { Link } from "react-router-dom";

export const menubar: IMenus[] = [
    {
        id: 1,
        title: "Dashboard",
        path: "/",
        location: "/",
        icon: <DashboardIcon />,
    },
    {
        id: 2,
        title: "Foydalanuvchilar",
        path: "/users",
        location: "users",
        icon: <UserIcon />,
    },
    {
        id: 3,
        title: "Kuryer e'loni",
        path: "/posts?limit=12&type=courier",
        location: "courier",
        icon: <TruckIcon />,
    },
    {
        id: 4,
        title: "Yo'lovchi e'loni",
        path: "/posts?limit=12&type=parcel",
        location: "parcel",
        icon: <PersonIcon />,
    },
];

export const profileMenu: MenuProps["items"] = [
    {
        key: "1",
        label: <Link to='/logout'>Logout</Link>,
    },
];

export const monthsListUz = [
    "Yanvar",
    "Fevral",
    "Mart",
    "Aprel",
    "May",
    "Iyun",
    "Iyul",
    "Avgust",
    "Sentabr",
    "Oktabr",
    "Noyabr",
    "Dekabr",
];

export const transportTypeImage = {
    car: "/images/car.png",
    train: "/images/train.png",
    plain: "/images/plain.png",
};

export const transportTypeName = {
    car: "",
    train: "Poyezd",
    plain: "Samalyot",
};

export const luggageTypeImage = {
    people: "/images/people_image.png",
    parcel: "/images/luggage_image.png",
};
