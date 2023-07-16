import { useContext } from "react";
import { Drawer, Descriptions, Image } from "antd";
import { ModalContext } from "@context/ModalProvider";
import useModal from "@hooks/useModal";
import { transportTypeName } from "@utils/data";
import dayjs from "dayjs";

export const AdModal = () => {
    const {
        modal: { adModal },
    } = useContext(ModalContext);
    const { handleModalClose } = useModal("adModal");
    const { ad } = adModal;

    if (!adModal.ad) {
        return null;
    }

    return (
        <Drawer
            open={adModal.visible}
            onClose={() => handleModalClose({ ad: null })}
            width='80vw'
            title='Post'
        >
            <Descriptions title='Post Info'>
                <Descriptions.Item label='Yaratilgan sanasi'>
                    {dayjs(Number(ad?.created_at)).format("DD/MM/YYYY")}
                </Descriptions.Item>
                <Descriptions.Item label='Yangilangan sanasi'>
                    {dayjs(Number(ad?.updated_at)).format("DD/MM/YYYY")}
                </Descriptions.Item>
                <Descriptions.Item label="Jo'nash vaqti">
                    {dayjs(Number(ad?.leaves_at)).format("DD/MM/YYYY")}
                </Descriptions.Item>
                <Descriptions.Item label='Yetib kelish vaqti'>
                    {dayjs(Number(ad?.arrives_at)).format("DD/MM/YYYY")}
                </Descriptions.Item>
                <Descriptions.Item label='Transport turi'>
                    {ad?.transport_type === "car"
                        ? ad.transport_name
                        : transportTypeName[
                              ad?.transport_type as keyof typeof transportTypeName
                          ]}
                </Descriptions.Item>
                <Descriptions.Item label='Yuk turi'>
                    {ad?.luggage_type === "people" ? "Yo'lovchi" : "Yuk"}
                </Descriptions.Item>
                <Descriptions.Item label='Yuk hajmi'>
                    {!!ad?.luggage_size ? ad?.luggage_size : "Kiritilmagan"}
                </Descriptions.Item>
                <Descriptions.Item label='Yuk rasmi'>
                    {!!ad?.luggage_image ? (
                        <Image src={ad?.luggage_size} width={200} />
                    ) : (
                        "Kiritilmagan"
                    )}
                </Descriptions.Item>
                <Descriptions.Item label='Mashina raqami'>
                    {!!ad?.car_number ? ad?.car_number : "Kiritilmagan"}
                </Descriptions.Item>
                <Descriptions.Item label="Yo'lovchilar soni">
                    {!!ad?.people_count ? ad?.people_count : "Kiritilmagan"}
                </Descriptions.Item>
                <Descriptions.Item label='Kommentariya'>
                    {!!ad?.comment ? ad?.comment : "Kiritilmagan"}
                </Descriptions.Item>
                <Descriptions.Item label='Kommentariya'>
                    {!!ad?.price
                        ? Number(ad?.price).toLocaleString()
                        : "Kiritilmagan"}
                </Descriptions.Item>
                <Descriptions.Item label='Kelishiladimi'>
                    {!!ad?.is_negotiable ? "Kelishiladi" : "Kelishilmaydi"}
                </Descriptions.Item>
                <Descriptions.Item label='Status'>
                    {!!ad?.status ? ad?.status : "Kiritilmagan"}
                </Descriptions.Item>
                <Descriptions.Item label='Hal qilindi'>
                    {!!ad?.resolved_by ? ad?.resolved_by : "Kiritilmagan"}
                </Descriptions.Item>
                <Descriptions.Item label="Qo'ng'iroqlar soni">
                    {ad?.call_count}
                </Descriptions.Item>
                <Descriptions.Item label="Jo'nash viloyati">
                    {ad?.from_region.name_uz}
                </Descriptions.Item>
                <Descriptions.Item label="Jo'nash shahri">
                    {ad?.from_city.name_uz}
                </Descriptions.Item>
                <Descriptions.Item label='Kelish viloyati'>
                    {ad?.to_region.name_uz}
                </Descriptions.Item>
                <Descriptions.Item label='Kelish shahri'>
                    {ad?.to_city.name_uz}
                </Descriptions.Item>
            </Descriptions>
        </Drawer>
    );
};
