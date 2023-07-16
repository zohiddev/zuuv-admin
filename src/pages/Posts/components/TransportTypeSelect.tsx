import React, { useMemo } from "react";
import { Radio, RadioChangeEvent } from "antd";
import { useSearchParams } from "react-router-dom";

export const TransportTypeSelect = () => {
    const [params, setParams] = useSearchParams();
    const transportTypes = ["car", "bus", "minibus", "train", "plain"];

    const onChange = (e: RadioChangeEvent) => {
        if (transportTypes.includes(e.target.value)) {
            params.set("transport_type", e.target.value);
        } else {
            params.delete("transport_type");
        }
        setParams(params);
    };

    const defaultValue: string | null = useMemo(() => {
        if (!!params.get("transport_type")) {
            return params.get("transport_type");
        } else {
            return "all";
        }
    }, [params.get("transport_type")]);

    return (
        <Radio.Group
            defaultValue={defaultValue}
            buttonStyle='solid'
            onChange={onChange}
        >
            <Radio.Button value='all'>Barcha turdagi</Radio.Button>
            <Radio.Button value='car'>Mashina</Radio.Button>
            <Radio.Button value='train'>Poyezd</Radio.Button>
            <Radio.Button value='plain'>Samalyot</Radio.Button>
        </Radio.Group>
    );
};
