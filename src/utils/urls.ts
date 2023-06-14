// Base url
export const baseURL = import.meta.env.VITE__API_BASE_URL;

// Media Api
export const mediaApiBaseUrl = import.meta.env.VITE__API_MEDIA_URL;
export const mediaPostUrl = "/api/v1/aws";
export const mediaDeleteUrl = "api/v1/aws/delete";

// Login
export const loginUrl = "/admin/login";
export const refreshTokenUrl = `${baseURL}/admin/refresh`;

// Company
export const companyGetUrl = "/company";
export const companyPatchUrl = (id: number) => `/company/${id}`;

// Company slider
export const companySliderGetUrl = "/company/slider";
export const companySliderDeleteUrl = "company/slider";

// Services
export const servicesGetUrl = "/services";
export const servicesPostUrl = "/services";
export const servicesPatchUrl = (id: number) => `/services/${id}`;
export const servicesDeleteUrl = "/services";

// News
export const newsGetUrl = "/news?limit=10";
export const newsPostUrl = "/news";
export const newsPatchUrl = (id: number) => `/news/${id}`;
export const newsDeleteUrl = "/news";

//  Slider
export const sliderGetUrl = "/slider";
export const sliderPostUrl = "/slider";
export const sliderPatchUrl = (id: number) => `/slider/${id}`;
export const sliderDeleteUrl = "/slider";
