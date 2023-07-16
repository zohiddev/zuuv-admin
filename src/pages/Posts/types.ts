import { IAd } from "@pages/Users/type";

export interface IFilterModal {
    open: boolean;
    handleClose: () => void;
}

export interface IPosts {
    posts: IAd[];
    loading: boolean;
}

export type LocationT = {
    location: string;
    location_oz: string;
    location_ru: string;
    region_id: number;
    district_id: number;
};

export interface IRegionSelect {
    locations: LocationT[];
    placeholder: string;
    name: string;
}
