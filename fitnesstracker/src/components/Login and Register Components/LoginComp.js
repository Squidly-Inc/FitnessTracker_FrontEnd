import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { loginRequest } from '../../api/loginRequest'

function LoginComp() {

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        loginRequest(username, password)
        .then(function(response){
            if(response){
                navigate('/activities');
            }
            else {
                window.alert(`Error! Username or Password is incorrect! :(`)
            }
        });
    };
    
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
                placeholder="Enter Password"
                onChange={(event) => setPassword(event.target.value)}>
            </input>

            <button type="submit">Login</button>
        </form>
    );
}

export default LoginComp;
