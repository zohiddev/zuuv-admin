import { FC, useMemo } from "react";
import { Select } from "antd";
import { IRegionSelect, LocationT } from "../types";
import { useSearchParams } from "react-router-dom";

export const RegionSelect: FC<IRegionSelect> = ({
    locations,
    placeholder,
    name,
}) => {
    const [params, setParams] = useSearchParams();

    const getOptions = (locations: LocationT[]) => {
        return locations?.map((item) => ({
            label: item.location,
            value: item.region_id,
            key: item.location,
        }));
    };

    const onChange = (e: number) => {
        if (!!e) {
            params.set(name, String(e));
        } else {
            params.delete(name);
        }
        setParams(params);
    };

    const defaultValue: number | null = useMemo(() => {
        if (!!params.get(name)) {
            return Number(params.get(name));
        }
        return null;
    }, [params.get(name)]);

    return (
        <Select
            options={getOptions(locations)}
            filterOption={(input, option) =>
                (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
            }
            showSearch
            allowClear={true}
            defaultValue={defaultValue}
            onChange={onChange}
            placeholder={placeholder}
        ></Select>
    );
};
