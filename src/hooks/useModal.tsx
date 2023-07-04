import { ModalContext } from "@context/ModalProvider";
import { ModalNamesT } from "@context/ModalProvider/types";
import { useContext } from "react";

function useModal(name: ModalNamesT) {
    const { modal, setModal } = useContext(ModalContext);

    function handleModalOpen(options?: any) {
        console.log(options);
        setModal?.({
            ...modal,
            [name as keyof string]: {
                ...[name],
                ...options,
                visible: true,
            },
        });
    }

    function handleModalClose(options?: any) {
        setModal?.({
            ...modal,
            [name as keyof string]: {
                ...[name],
                ...options,
                visible: false,
            },
        });
    }

    return { handleModalOpen, handleModalClose };
}

export default useModal;
