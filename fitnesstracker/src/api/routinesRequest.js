import { BASE_URL } from "./index";

export const fetchRoutines = async () => {

    const response = await fetch(`${BASE_URL}/routines`)
    const data = await response.json();
    
    return data;
};