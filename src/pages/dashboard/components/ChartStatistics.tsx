import React from "react";
import { Area, AreaConfig } from "@ant-design/plots";

export const ChartStatistics = () => {
    const areaConfig = {
        data: [
            {
                country: "Kuryerlar",
                date: 1965,
                value: 1390.5,
            },
            {
                country: "Kuryerlar",
                date: 1966,
                value: 1469.5,
            },
            {
                country: "Kuryerlar",
                date: 1967,
                value: 1521.7,
            },
            {
                country: "Kuryerlar",
                date: 1968,
                value: 1615.9,
            },
            {
                country: "Kuryerlar",
                date: 1969,
                value: 1703.7,
            },
            {
                country: "Kuryerlar",
                date: 1970,
                value: 1767.8,
            },
            {
                country: "Kuryerlar",
                date: 1971,
                value: 1806.2,
            },
            {
                country: "Kuryerlar",
                date: 1972,
                value: 1903.5,
            },
            {
                country: "Yo'lovchilar",
                date: 1979,
                value: 1749.6,
            },
            {
                country: "Yo'lovchilar",
                date: 1980,
                value: 1706.4,
            },
            {
                country: "Yo'lovchilar",
                date: 1981,
                value: 1661.4,
            },
            {
                country: "Yo'lovchilar",
                date: 1982,
                value: 1630.2,
            },
            {
                country: "Yo'lovchilar",
                date: 1983,
                value: 1645.2,
            },
            {
                country: "Yo'lovchilar",
                date: 1984,
                value: 1686.9,
            },
            {
                country: "Yo'lovchilar",
                date: 1985,
                value: 1779.4,
            },
            {
                country: "Yo'lovchilar",
                date: 1986,
                value: 1811.3,
            },
            {
                country: "Yo'lovchilar",
                date: 1987,
                value: 1849.7,
            },
            {
                country: "Yo'lovchilar",
                date: 1988,
                value: 1870,
            },
        ],
        xField: "date",
        yField: "value",
        seriesField: "country",
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
