import { ReactNode } from "react";

interface IAuthContextData {
    logout: () => void;
    isAuthenticated: boolean;
    user: IUser | null;
    setTokenAuth: (value: React.SetStateAction<string | null>) => void;
    login: (a: string, r: string, n: string) => void;
}

interface IAuthProviderProps {
    children: ReactNode;
}

interface IUser {
    name: string;
}

export type { IAuthContextData, IAuthProviderProps, IUser };
