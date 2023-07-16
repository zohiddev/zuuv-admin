import { DatePicker, Space, Typography } from "antd";
import locale from "antd/es/date-picker/locale/ru_RU";
import dayjs, { Dayjs } from "dayjs";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

const { RangePicker } = DatePicker;

export const DateSelect = () => {
    const [params, setParams] = useSearchParams();
    const handleDateRangeChange = (e: any) => {
        if (e === null) {
            params.delete("leaves_at_start");
            params.delete("leaves_at_end");
        } else {
            const leaves_at_start = e && e[0].$d.getTime();
            const leaves_at_end = e && e[1].$d.getTime();
            params.set("leaves_at_start", leaves_at_start);
            params.set("leaves_at_end", leaves_at_end);
        }

        setParams(params);
    };

    const defaultValue: [Dayjs, Dayjs] | null = useMemo(() => {
        if (!!params.get("leaves_at_start") && !!params.get("leaves_at_end")) {
            return [
                dayjs(Number(params.get("leaves_at_start"))),
                dayjs(Number(params.get("leaves_at_end"))),
            ];
        }

        return null;
    }, []);

    return (
        <Space direction='vertical'>
            <Typography>Qaysi vaqti oralig’i</Typography>
            <RangePicker
                defaultValue={defaultValue}
                placeholder={["Sana", "Sana"]}
                locale={locale}
                onChange={handleDateRangeChange}
            />
        </Space>
    );
};
