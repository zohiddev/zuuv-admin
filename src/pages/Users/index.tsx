import { PageHeader } from "@components/index";
import { useGetList } from "@hooks/request";
import { userAdsList, usersListUrl } from "@utils/urls";
import { Avatar, Button, Drawer, Space, Table, Typography } from "antd";
import { IAd, IUser, IUserAd } from "./type";
import { ColumnsType } from "antd/es/table";
import { RequestT } from "@utils/types";
import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { PostTable } from "@pages/Posts/components/PostTable";

export const UsersPage = () => {
    const [userId, setUserId] = useState<number | null>(null);
    const [params, setParams] = useSearchParams();
    const { search } = useLocation();
    const [modalView, setModalView] = useState<boolean>(false);
    const { data, isLoading, refetch } = useGetList<RequestT<IUser[]>>(
        ["users", search],
        usersListUrl + search
    );

    const { data: userAds, isLoading: userAdsLoading } = useGetList<
        RequestT<IUserAd>
    >(["user-ads", String(userId)], userAdsList(userId as number));

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

    const modalClose = () => {
        setUserId(null);
        setModalView(false);
    };

    useEffect(() => {
        setParams({ count: false } as any);
    }, []);

    return (
        <div>
            <PageHeader
                title='Users page'
                extra={<Button onClick={() => refetch()}>Refresh</Button>}
            />

            <Table loading={isLoading} columns={columns} dataSource={users} />

            <Drawer open={modalView} onClose={modalClose} width={"80vw"}>
                <PostTable
                    posts={userAds?.data?.ads as IAd[]}
                    loading={userAdsLoading}
                />
            </Drawer>
        </div>
    );
};
