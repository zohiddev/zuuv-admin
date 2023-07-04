import React, { FC } from "react";
import { DatePicker, Drawer, Space } from "antd";
import { IFilterModal } from "../types";
import locale from "antd/es/date-picker/locale/ru_RU";
import { convertQueryParamsTO, postDataClr } from "@utils/helpers";
import { useLocation, useSearchParams } from "react-router-dom";

const { RangePicker } = DatePicker;

export const FilterModal: FC<IFilterModal> = ({ open, handleClose }) => {
    const { search } = useLocation();
    const [params, setParams] = useSearchParams();

    const handleDateRangeChange = (e: any) => {
        const leaves_at_start = e && e[0].$d.getTime();
        const leaves_at_end = e && e[1].$d.getTime();
        const normalizeData = {
            ...convertQueryParamsTO(search),
            leaves_at_start,
            leaves_at_end,
        };
        e === null
            ? setParams(
                  postDataClr(convertQueryParamsTO(search), [
                      "leaves_at_start",
                      "leaves_at_end",
                  ])
              )
            : setParams(normalizeData);
    };

    return (
        <Drawer open={open} onClose={handleClose} title='Filter'>
            <Space>
                <RangePicker locale={locale} onChange={handleDateRangeChange} />
            </Space>
        </Drawer>
    );
};
