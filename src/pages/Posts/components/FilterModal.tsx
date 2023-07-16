import { FC } from "react";
import { Button, Drawer, Space, Typography } from "antd";
import { IFilterModal, LocationT } from "../types";
import { useGetList } from "@hooks/request";
import { locationsListUrl } from "@utils/urls";
import { RegionSelect } from "./RegionSelect";
import { DateSelect } from "./DateSelect";
import { TransportTypeSelect } from "./TransportTypeSelect";
import { useSearchParams } from "react-router-dom";

export const FilterModal: FC<IFilterModal> = ({ open, handleClose }) => {
    const [params, setParams] = useSearchParams();
    const filterTypes = [
        "transport_type",
        "from_region",
        "to_region",
        "leaves_at_start",
        "leaves_at_end",
    ];
    const { data: locations = [], isLoading } = useGetList<LocationT[]>(
        ["location"],
        locationsListUrl + `?query=%20`
    );

    const clearFilter = () => {
        for (let type of filterTypes) {
            if (!!params.get(type)) {
                params.delete(type);
            }
        }
        setParams(params);
    };

    if (!open) {
        return null;
    }

    return (
        <Drawer
            open={open}
            onClose={handleClose}
            title='Filter'
            extra={<Button onClick={clearFilter}>Clear</Button>}
        >
            <Space direction='vertical'>
                <DateSelect />

                <Space direction='vertical' className='filter-select'>
                    <Typography>Yo’nalishni tanlang</Typography>
                    <Space direction='vertical'>
                        <RegionSelect
                            locations={locations}
                            placeholder='Qayerdan'
                            name='from_region'
                        />
                        <RegionSelect
                            locations={locations}
                            placeholder='Qayerga'
                            name='to_region'
                        />
                    </Space>
                </Space>
                <Space direction='vertical' className='filter-select'>
                    <Typography>Transport turlari</Typography>
                    <TransportTypeSelect />
                </Space>
            </Space>
        </Drawer>
    );
};
