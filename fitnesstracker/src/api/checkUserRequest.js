import { BASE_URL } from "./index";

export const checkUser = async () => {

    let token = localStorage.getItem("token");
    console.log(token)

    if (token){
        const request = await fetch(`${BASE_URL}/users/me`, {
            method: "GET",
            headers: {
                "Content-Type" : "application/json",
                "Authorization" : `Bearer ${token}`
            }
        });

        const response = await request.json();
        
        console.log('REQUEST: ', request);
        console.log('RESPONSE: ', response)
        return response;
    }
    else {return false};
};