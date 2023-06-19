import { PageHeader } from "@components/index";
import { IUser } from "@context/AuthProvider/types";
import { useGetList } from "@hooks/request";
import { RequestT } from "@utils/types";
import { statistics } from "@utils/urls";
import { Button } from "antd";
import React from "react";

export const DashboardPage = () => {
    const { data, isLoading, refetch } = useGetList<RequestT<IUser[]>>(
        "users",
        statistics
    );

    console.log(data);

    return (
        <div>
            <PageHeader
                title='Dashboard page'
                extra={<Button onClick={() => refetch()}>Refresh</Button>}
            />
        </div>
    );
};
