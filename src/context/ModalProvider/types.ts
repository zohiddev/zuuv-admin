import { IAd } from "@pages/Users/type";
import { ReactElement } from "react";

export type Modals = {
    adModal: {
        visible: boolean;
        ad: IAd | null;
    };
};

export interface ModalContextI {
    modal: Modals;
    setModal?: (a: Modals) => void;
}

interface WithChildrenPropsI {
    children: ReactElement;
}

export type ModalNamesT = "adModal";

export interface ModalProviderPropsI extends WithChildrenPropsI {}
