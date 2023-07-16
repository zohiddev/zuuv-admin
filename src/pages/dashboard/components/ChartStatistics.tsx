import React, { FC } from "react";
import { Area, AreaConfig } from "@ant-design/plots";
import { IChartStatistics } from "../type";

export const ChartStatistics: FC<IChartStatistics> = ({ statistics }) => {
    const generateData = (data: any) => {
        return Object.keys(data).map((item) => ({
            month: item,
            value: data[item],
        }));
    };

    const areaConfig = {
        data: generateData(statistics),
        xField: "value",
        // yField: "value",
        seriesField: "month",
        legend: {
            position: "top-right",
        },
    };
    return (
        <div>
            <Area {...(areaConfig as AreaConfig)} />
        </div>
    );
};
