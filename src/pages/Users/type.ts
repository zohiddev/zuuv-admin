interface IUser {
    id: number;
    avatar: string;
    name: string;
    phone: string;
    posts_count: number;
    status: string;
}

interface IRegion {
    name_uz: string;
}

interface IAd {
    arrives_at: string;
    call_count: number;
    car_number: string;
    comment: string;
    created_at: string;
    id: number;
    is_negotiable: boolean;
    leaves_at: string;
    luggage_image: string;
    luggage_size: string;
    luggage_type: string;
    people_count: number;
    phone_number: string;
    price: string;
    resolved_by: string;
    save_count: number;
    status: string;
    transport_name: string;
    transport_type: string;
    type: string;
    updated_at: string;
    user_type: string;
    view_count: number;
    user: IUser;
    from_country: IRegion;
    from_region: IRegion;
    from_city: IRegion;
    to_country: IRegion;
    to_region: IRegion;
    to_city: IRegion;
}

interface IUserAd extends IUser {
    ads: IAd[];
}

export type { IUser, IUserAd, IAd };
