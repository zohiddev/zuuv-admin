export interface MyError {
    status: number;
    message: string;
}

export interface RefreshPostResponse {
    data: {
        accessToken: string;
        error: string | null;
        success: boolean;
        timestamp: string;
    };
}
