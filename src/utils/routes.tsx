import { Navigate } from "react-router-dom";
import { IRoutes } from "./types";
import { DashboardPage, LogoutPage, PostsPage, UsersPage } from "@pages/index";

export const routes: IRoutes[] = [
    {
        id: 2,
        path: "/login",
        component: <Navigate to='/' replace />,
    },
    {
        id: 3,
        path: "/logout",
        component: <LogoutPage />,
    },
    {
        id: 4,
        path: "/users",
        component: <UsersPage />,
    },
    {
        id: 5,
        path: "/posts",
        component: <PostsPage />,
    },
    {
        id: 6,
        path: "/",
        component: <DashboardPage />,
    },
];
