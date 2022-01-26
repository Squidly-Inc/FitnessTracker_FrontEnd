import { BASE_URL } from "./index";

export const fetchActivities = async () => {

    const response = await fetch(`${BASE_URL}/activities`)
    const data = await response.json();
    
    return data;
};