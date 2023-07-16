import { PageHeader } from "@components/index";
import { useGetList } from "@hooks/request";
import { IAd } from "@pages/Users/type";
import { RequestT } from "@utils/types";
import { postListUrl } from "@utils/urls";
import { Button } from "antd";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { convertQueryParamsTO } from "@utils/helpers";
import { FilterModal } from "./components/FilterModal";
import { PostTable } from "./components/PostTable";

export const PostsPage = () => {
    const { search } = useLocation();
    const isParcel = convertQueryParamsTO(search)["type"] === "parcel";
    const { data, isLoading } = useGetList<RequestT<IAd[]>>(
        ["posts", search],
        postListUrl + search
    );

    console.log(data);

    const [filterOpen, setFilterOpen] = useState(false);

    const filterOnClose = () => {
        setFilterOpen(false);
    };

    const filterOnOpen = () => {
        setFilterOpen(true);
    };

    return (
        <div>
            <PageHeader
                title={`${isParcel ? "Parcels" : "Couriers"} page`}
                extra={<Button onClick={filterOnOpen}>Filter</Button>}
            />

            <PostTable posts={data?.data as IAd[]} loading={isLoading} />

            <FilterModal open={filterOpen} handleClose={filterOnClose} />
        </div>
    );
};
