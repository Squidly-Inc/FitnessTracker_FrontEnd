import { BASE_URL } from "./index";

export const registerRequest = async (username, password) => {
    // event.preventDefault();

    // Send POST register request
    const request = await fetch(`${BASE_URL}/users/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    });

    // Await reponse
    const response = await request.json();

    // Set Token
    if (response.error) {
        return false;
      } 
      else if (response) { 
        localStorage.setItem("token", response.token);
        return true;
    };
}