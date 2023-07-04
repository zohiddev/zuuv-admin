import { IAd } from "@pages/Users/type";

export interface IFilterModal {
    open: boolean;
    handleClose: () => void;
}

export interface IPosts {
    posts: IAd[];
    loading: boolean;
}
