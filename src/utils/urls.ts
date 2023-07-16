// Base url
export const baseURL = import.meta.env.VITE__API_BASE_URL;

// Media Api
export const mediaApiBaseUrl = import.meta.env.VITE__API_MEDIA_URL;
export const mediaPostUrl = "/api/v1/aws";
export const mediaDeleteUrl = "api/v1/aws/delete";

// Login
export const loginUrl = "/admin/login";
export const refreshTokenUrl = `/admin/refresh`;

// Users

export const usersListUrl = "/user";
export const userAdsList = (id: number) => `/user/${id}/ads`;

// Posts
export const postListUrl = "/posts/search";
export const courierListUrl = "/posts/search?type=courier";
export const parcelListUrl = "/posts/search?type=parcel";

// Statistics

export const statisticsAds = "/statistics/ads";
export const statisticsUsers = "/statistics/users";
export const statisticsSolvedAds = "/statistics/solved-ads";

// Locations

export const locationsListUrl = "/location";
