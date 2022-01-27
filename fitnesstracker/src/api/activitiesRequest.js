import { BASE_URL } from "./index";

export const fetchActivities = async () => {

    const response = await fetch(`${BASE_URL}/activities`)
    const data = await response.json();
    
    return data;
};


export const postActivity = async (name, description) => {

    let token = localStorage.getItem("token");
    
    if (token){

        const request = await fetch(`${BASE_URL}/activities`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
                "Authorization" : `Bearer ${token}`
            },
            body: JSON.stringify({
                name : name,
                description : description
            })
        });

        const response = await request.json();
        console.log(response)
        return response
    }
    else {console.log(false); return false}
};