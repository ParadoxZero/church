export interface VicarDetails {
    name: string;
    profile: string;
    image: string;
    from_year: string;
    to_year: string;
}

export interface ManagementDetails {
    chairman: string;
    vice_chairman: string;
    secretary: string;
    treasurer_church: string;
    treasurer_society: string;
    year?: string;
}

export interface ContactDetails {
    address: string[];
    chairman: string;
    phone: string;
    email: string;
}

export interface WebInfo {
    vicars: VicarDetails[];
    latest_news: string[];
    home_title: string;
    home_description: string[];
    home_story_title: string;
    home_story: string[];
    current_management: ManagementDetails;
    management_history: ManagementDetails[];
    gallery: string[];
    news_letter: string;
    ministries: string[];
    service_info: string;
    contact: ContactDetails;
}

export async function getWebInfo(): Promise<WebInfo> {
    const response = await fetch('https://stgordstorage.blob.core.windows.net/static-files/web_info.json');
    return response.json();
}
