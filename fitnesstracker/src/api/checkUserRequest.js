import { BASE_URL } from "./index";

export const checkUserExists = async () => {

    let token = localStorage.getItem("token");

    if (token){
        const request = await fetch(`${BASE_URL}/users/me`, {
            method: "GET",
            headers: {
                "Content-Type" : "application/json",
                "Authorization" : `Bearer ${token}`
            }
        });

        const response = await request.json();
        
        if (response.id && response.username){
            return true;
        }
        else {return false;}
        
    }
    else {return false};
};

export const getUserObj = async () => {

    let token = localStorage.getItem("token");

    if (token){
        const request = await fetch(`${BASE_URL}/users/me`, {
            method: "GET",
            headers: {
                "Content-Type" : "application/json",
                "Authorization" : `Bearer ${token}`
            }
        });

        const response = await request.json();
        
        if (response.id && response.username){
            return {response}
        }
        else {return false;}
        
    }
    else {return false};
};