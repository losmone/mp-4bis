export interface IpStackResponse {
    ip: string;
    type: string;
    continent_name: string;
    country_name: string;
    region_name: string;
    city: string;
    zip: string;
    latitude: number;
    longitude: number;
    location?: {
        country_flag: string;
    };
    error?: {
        code: number;
        type: string;
        info: string;
    };
}