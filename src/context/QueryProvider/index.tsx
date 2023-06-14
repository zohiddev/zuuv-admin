import { FC } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { IQueryContextProps } from "./types";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false, // Disable resending of requests
            refetchOnWindowFocus: false,
        },
    },
});

const QueryContextProvider: FC<IQueryContextProps> = ({ children }) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};

export default QueryContextProvider;
