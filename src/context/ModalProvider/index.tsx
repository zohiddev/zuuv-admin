import React, { createContext, useState, FC } from "react";
import { ModalContextI, ModalProviderPropsI, Modals } from "./types";
import { modals } from "./data";

const ModalContextInitials = {
    modal: modals,
};

export const ModalContext = createContext<ModalContextI>(ModalContextInitials);

const ModalProvider: FC<ModalProviderPropsI> = ({ children }) => {
    const [modal, setModal] = useState<Modals>(modals);

    return (
        <ModalContext.Provider value={{ modal, setModal }}>
            {children}
        </ModalContext.Provider>
    );
};

export default ModalProvider;
