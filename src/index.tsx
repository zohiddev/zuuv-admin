import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import QueryContextProvider from "@context/QueryProvider";
import "@assets/scss/main.scss";
import { AuthProvider } from "@context/AuthProvider";
import ModalProvider from "@context/ModalProvider";

ReactDOM.createRoot(document.querySelector(".wrapper") as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <QueryContextProvider>
                <ModalProvider>
                    <AuthProvider>
                        <App />
                    </AuthProvider>
                </ModalProvider>
            </QueryContextProvider>
        </BrowserRouter>
    </React.StrictMode>
);
