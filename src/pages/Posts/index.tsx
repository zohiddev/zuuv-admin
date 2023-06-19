import { PageHeader } from "@components/index";
import { useGetList } from "@hooks/request";
import { IAd } from "@pages/Users/type";
import { RequestT } from "@utils/types";
import { postListUrl } from "@utils/urls";
import { Button, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

export const PostsPage = () => {
    const [params, setParams] = useSearchParams();
    const { search } = useLocation();
    const isParcel = params.get("type") === "parcel";
    const { data, isLoading, refetch } = useGetList<RequestT<IAd[]>>(
        ["posts", search],
        postListUrl + search
    );

    const adColumns: ColumnsType<IAd> = [
        {
            title: "Phone number",
            dataIndex: "phone_number",
        },
        {
            title: "Luggage type",
            dataIndex: "luggage_type",
        },
        {
            title: "Price",
            dataIndex: "price",
        },
        {
            title: "Resolved by",
            dataIndex: "resolved_by",
        },
    ];

    useEffect(() => {}, [params]);

    return (
        <div>
            <PageHeader
                title={`${isParcel ? "Parcels" : "Couriers"} page`}
                extra={<Button onClick={() => refetch()}>Refresh</Button>}
            />

            <Table
                loading={isLoading}
                columns={adColumns}
                dataSource={data?.data}
                pagination={false}
            />
        </div>
    );
};
