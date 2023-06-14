import { ReactNode } from "react";

interface PageHeaderI {
    className?: string;
    title: string | ReactNode;
    extra: ReactNode;
}

export type { PageHeaderI };
