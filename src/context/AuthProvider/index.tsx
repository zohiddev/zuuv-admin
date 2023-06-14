import {
    FC,
    useState,
    useMemo,
    useContext,
    useCallback,
    createContext,
} from "react";
import { clearLocalStorage, getStorage, setStorage } from "@utils/helpers";
import { IAuthContextData, IAuthProviderProps, IUser } from "./types";

const AuthContext = createContext({} as IAuthContextData);

export const AuthProvider: FC<IAuthProviderProps> = ({ children }) => {
    const token = getStorage("access_token");
    const localeUser = JSON.parse(getStorage("user") as string);
    const [accessToken, setAccessToken] = useState<string | null>(token);
    const [user, setUser] = useState<IUser | null>(localeUser);

    const handleLogout = () => {
        clearLocalStorage();
        setAccessToken(null);
        setUser(null);
    };

    const handleLogin = (
        access_token: string,
        refresh_token: string,
        name: string
    ) => {
        setAccessToken(access_token);
        setUser({ ...user, name });
        setStorage("access_token", access_token);
        setStorage("refresh_token", refresh_token);
        setStorage("user", JSON.stringify({ ...user, name }));
    };

    const isAuthenticated = useMemo(() => !!accessToken, [accessToken]);

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                user,
                logout: handleLogout,
                setTokenAuth: setAccessToken,
                login: handleLogin,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => useContext(AuthContext);
