interface ILoginRequest {
    username: string;
    password: string;
}

interface ITokens {
    access_token: string;
    refresh_token: string;
}

interface IData extends ITokens {
    id: number;
    username: string;
    status: string;
    role: string;
}

interface LoginResultI {
    success: boolean;
    code: number;
    data: IData;
    timestamp: string;
    error: Error | null;
}

export type { ILoginRequest, LoginResultI };
