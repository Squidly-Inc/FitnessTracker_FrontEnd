import React, {useState} from 'react';
import { loginRequest } from '../api/loginRequest'

function LoginComp() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        loginRequest(username, password)
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                className="username"
                value={username}
                placeholder="Enter Username"
                onChange={(event) => setUsername(event.target.value)}>
            </input>

            <input 
                type="text"
                className="password"
                value={password}
                placeholder="Enter Username"
                onChange={(event) => setPassword(event.target.value)}>
            </input>

            <button type="submit">Login</button>
        </form>
    );
}

export default LoginComp;
