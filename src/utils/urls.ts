// Base url
export const baseURL = import.meta.env.VITE__API_BASE_URL;

// Media Api
export const mediaApiBaseUrl = import.meta.env.VITE__API_MEDIA_URL;
export const mediaPostUrl = "/api/v1/aws";
export const mediaDeleteUrl = "api/v1/aws/delete";

// Login
export const loginUrl = "/admin/login";
export const refreshTokenUrl = `${baseURL}/admin/refresh`;

// Users

export const usersListUrl = "/user";
export const userAdsList = (id: number) => `/user/${id}/ads`;

// Courier

export const courierListUrl = "/courier";

// Parcels

export const parcelsList = "/parcel";
