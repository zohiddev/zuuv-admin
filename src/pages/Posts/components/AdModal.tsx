import { useContext } from "react";
import { Drawer, Descriptions } from "antd";
import { ModalContext } from "@context/ModalProvider";
import useModal from "@hooks/useModal";
import { postDataClr } from "@utils/helpers";
import { IAd } from "@pages/Users/type";

export const AdModal = () => {
    const {
        modal: { adModal },
    } = useContext(ModalContext);
    const { handleModalClose } = useModal("adModal");

    if (!adModal.ad) {
        return null;
    }

    function renderList(data: Partial<IAd>) {
        if (!data) {
            return null;
        }
        return Object.keys(data).map((item, key) => {
            return (
                <Descriptions.Item key={key} label={item}>
                    {data[item as keyof typeof adModal.ad]}
                </Descriptions.Item>
            );
        });
    }

    return (
        <Drawer
            open={adModal.visible}
            onClose={() => handleModalClose({ ad: null })}
            width='80vw'
            title='Post'
        >
            <Descriptions title='Post Info'>
                {renderList(
                    postDataClr(adModal.ad, [
                        "user",
                        "from_country",
                        "from_city",
                        "from_region",
                        "to_country",
                        "to_region",
                        "to_city",
                    ])
                )}
                {renderList(adModal.ad?.user)}
                {renderList(adModal.ad?.from_city)}
                {renderList(adModal.ad?.to_city)}
            </Descriptions>
        </Drawer>
    );
};
