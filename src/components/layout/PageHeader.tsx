import { FC } from "react";
import { Typography } from "antd";
import { PageHeaderI } from "./types";

export const PageHeader: FC<PageHeaderI> = ({ className, title, extra }) => {
    return (
        <div className={`page-header ${className}`}>
            {typeof title === "string" ? (
                <Typography>{title}</Typography>
            ) : (
                <>{title}</>
            )}

            {extra}
        </div>
    );
};
