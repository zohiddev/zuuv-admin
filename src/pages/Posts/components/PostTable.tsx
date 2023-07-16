import React, { FC } from "react";
import { Avatar, Button, Image, Space, Table, Typography } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import { ColumnsType } from "antd/es/table";
import { IAd } from "@pages/Users/type";
import {
    luggageTypeImage,
    transportTypeImage,
    transportTypeName,
} from "@utils/data";
import { time, isDate } from "@utils/helpers";
import { IPosts } from "../types";
import useModal from "@hooks/useModal";

export const PostTable: FC<IPosts> = ({ posts, loading }) => {
    const { handleModalOpen } = useModal("adModal");
    const adColumns: ColumnsType<IAd> = [
        {
            title: "User",
            dataIndex: "user",
            render: (el) => {
                return (
                    <Space>
                        <Avatar src={el?.avatar} />
                        <Typography>{el?.name}</Typography>
                    </Space>
                );
            },
        },
        {
            title: "Luggage type",
            dataIndex: "luggage_type",
            render: (el) => {
                return (
                    <Space direction='vertical' align='center'>
                        <Typography>
                            {el === "people" ? "Yo'lovchi" : "Yuk"}
                        </Typography>
                        <Image
                            preview={false}
                            width='24px'
                            src={
                                luggageTypeImage[
                                    el as keyof typeof luggageTypeImage
                                ]
                            }
                        />
                    </Space>
                );
            },
        },
        {
            title: "Transport type",
            dataIndex: "transport_type",
            render: (el, item) => {
                return (
                    <Space direction='vertical' align='center'>
                        <Typography>
                            {el === "car"
                                ? item.transport_name
                                : transportTypeName[
                                      el as keyof typeof transportTypeName
                                  ]}
                        </Typography>
                        <Image
                            width='24px'
                            preview={false}
                            src={
                                transportTypeImage[
                                    el as keyof typeof transportTypeImage
                                ]
                            }
                        />
                    </Space>
                );
            },
        },
        {
            title: "Leaves at",
            dataIndex: "leaves_at",
            render: (el) => (
                <Space direction='vertical' align='center'>
                    <Typography>{isDate(el)}</Typography>
                    <Typography>{time(el)}</Typography>
                </Space>
            ),
        },
        {
            title: "From region",
            dataIndex: "from_region",
            render: (el) => {
                return <Typography>{el?.name_uz}</Typography>;
            },
        },
        {
            title: "To region",
            dataIndex: "to_region",
            render: (el) => {
                return <Typography>{el?.name_uz}</Typography>;
            },
        },
        {
            title: "Price",
            dataIndex: "price",
            render: (el) => {
                return (
                    <Typography>{Number(el)?.toLocaleString()} sum</Typography>
                );
            },
        },
        {
            title: "Action",
            render: (_, record) => {
                return (
                    <Button
                        onClick={() => handleModalOpen({ ad: { ...record } })}
                    >
                        <EyeOutlined />
                    </Button>
                );
            },
        },
    ];
    return (
        <Table
            loading={loading}
            columns={adColumns}
            dataSource={posts}
            // pagination={{
            //     defaultCurrent: 1,
            //     current: response?.data?.page,
            //     total: response?.data?.total,
            //     pageSizeOptions: [10, 20, 30],
            //     showSizeChanger: true,
            //     responsive: true,
            //     showTotal: (total) => `Total ${total} items`,
            //     onChange: (to) => pageTo(to),
            //     onShowSizeChange: (_, size) => showSizeChange(size),
            // }}
        />
    );
};
