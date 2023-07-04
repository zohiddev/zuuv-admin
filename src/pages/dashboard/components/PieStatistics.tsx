import { Pie, measureTextWidth, PieConfig } from "@ant-design/plots";
import { FC } from "react";
import { DataType, IPieStatistics, ISolvedAds } from "../type";
import { createPieData } from "@utils/helpers";

const PieStatistics: FC<IPieStatistics> = ({ solvedAds }) => {
    const config = {
        appendPadding: 10,
        data: createPieData(solvedAds as ISolvedAds),
        angleField: "value",
        colorField: "type",
        radius: 1,
        innerRadius: 0.64,
        label: {
            type: "inner",
            offset: "-50%",
            style: {
                textAlign: "center",
            },
            autoRotate: false,
            content: "{value}",
        },
        renderer: "svg",
        interactions: [
            {
                type: "element-selected",
            },
            {
                type: "element-active",
            },
            {
                type: "pie-statistic-active",
            },
        ],
        legend: {
            position: "bottom",
        },
    };
    return <Pie {...(config as PieConfig)} />;
};

export default PieStatistics;
