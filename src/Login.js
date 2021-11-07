import React, {useState} from 'react';

export default function Login(){

    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");

    const[user, setUser] = useState(null);

    const handleSubmit = (event) =>{
        event.preventDefault();

        const userData = {
            username,
            password
        }
        setUser(userData);
        setUsername("");
        setPassword("");
    }

    return (
        <div
            style={{
                textAlign:'center'
            }}
        >
            <h2>Login Form</h2>
            <form onSubmit={handleSubmit}
                style={{
                    display: 'grid',
                    alignItems: 'center',
                    justifyItems: 'center'
                }}
            >
                <input 
                    type='text' placeholder='Enter username' 
                    value={username}
                    onChange={event => setUsername(event.target.value)}
                />
                <input 
                    type='password' placeholder='Enter password' 
                    value={password}
                    onChange={event=>setPassword(event.target.value)}
                />
                <button>Submit</button>
            </form>
            {user && JSON.stringify(user, null, 2)}
        </div>
    )
}