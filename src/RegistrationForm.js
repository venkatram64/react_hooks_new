import React, {useState, useEffect} from 'react';

const registrationForm = {
                    username:"",
                    email:"",
                    password:""
                }

export default function RegistrationForm(){

    const[form, setForm] = useState(registrationForm);

    const[user, setUser] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        setUser(form);
        setForm(registrationForm);
    }

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value  //this will override above form values
        })
    }

    return(
        <div 
            style={{
                textAlign:'center'
            }}
        >
            <h2>Registration Form</h2>
            <form onSubmit={handleSubmit}
                style={{
                    display: 'grid',
                    alignItems: 'center',
                    justifyItems: 'center'
                }}
            >
                <input 
                    type='text' placeholder='Enter username' 
                    name="username"
                    onChange={handleChange}
                    value={form.username}
                />
                <input 
                    type='email' placeholder='Enter email' 
                    name="email"
                    onChange={handleChange}
                    value={form.email}
                />
                <input 
                    type='password' placeholder='Enter password'
                    name="password"
                    onChange={handleChange}
                    value={form.password}
                />
                <button>Submit</button>
            </form>
            {user && JSON.stringify(user, null, 2)}
        </div>
    )
}