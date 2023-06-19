import { PageHeader } from "@components/index";
import { useGetList } from "@hooks/request";
import { userAdsList, usersListUrl } from "@utils/urls";
import { Avatar, Button, Drawer, Space, Table, Typography } from "antd";
import { IAd, IUser, IUserAd } from "./type";
import { ColumnsType } from "antd/es/table";
import { RequestT } from "@utils/types";
import { useState } from "react";

export const UsersPage = () => {
    const [userId, setUserId] = useState<number | null>(null);
    const [modalView, setModalView] = useState<boolean>(false);
    const { data, isLoading, refetch } = useGetList<RequestT<IUser[]>>(
        "users",
        usersListUrl
    );

    const {
        data: userAds,
        isLoading: userAdsLoading,
        refetch: userAdsRefetch,
    } = useGetList<RequestT<IUserAd>>(
        ["user-ads", String(userId)],
        userAdsList(userId as number)
    );

    const users = data?.data;

    const getUserAds = (userId: number) => {
        setUserId(userId);
        setModalView(true);
    };

    const columns: ColumnsType<IUser> = [
        {
            title: "Name",
            dataIndex: "name",
            render: (_, record) => {
                return (
                    <Space>
                        <Avatar src={record.avatar} />
                        <Typography>{record.name}</Typography>
                    </Space>
                );
            },
        },
        {
            title: "Phone",
            dataIndex: "phone",
        },
        {
            title: "Posts count",
            dataIndex: "posts_count",
        },
        {
            title: "Status",
            dataIndex: "status",
        },
        {
            title: "Action",
            render: (item: IUser) => {
                return <Button onClick={() => getUserAds(item.id)}>Ads</Button>;
            },
        },
    ];

    const userAdColumns: ColumnsType<IAd> = [
        {
            title: "ID",
            dataIndex: "id",
        },
        {
            title: "Phone number",
            dataIndex: "phone_number",
        },
        {
            title: "Price",
            dataIndex: "price",
        },
    ];

    const modalClose = () => {
        setUserId(null);
        setModalView(false);
    };

    return (
        <div>
            <PageHeader
                title='Users page'
                extra={<Button onClick={() => refetch()}>Refresh</Button>}
            />

            <Table loading={isLoading} columns={columns} dataSource={users} />

            <Drawer open={modalView} onClose={modalClose} width={900}>
                <Table
                    loading={userAdsLoading}
                    columns={userAdColumns}
                    dataSource={userAds?.data?.ads}
                />
            </Drawer>
        </div>
    );
};
