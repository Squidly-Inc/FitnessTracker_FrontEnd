import React, {useState} from 'react';
import { registerRequest } from '../../api/registerRequest';

function RegisterComp() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        registerRequest(username, password)
        .then(function(response){
            if(response){
                setUsername('');
                setPassword('');
            }
            else {
                setUsername('');
                setPassword('');
                window.alert(`Error! Username already exists. Please enter a different username :D`);
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

            <button type="submit">Register </button>
        </form>
    );
};

export default RegisterComp;
