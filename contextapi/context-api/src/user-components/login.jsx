import { createContext, useState, useContext } from "react";
import Profile from './profile'
import { UserContext } from "./usercontext";

export function Login() {

    //const UserContext = createContext(null);

    const [user, setUser] = useState({ 'userName': '', 'password': '' });
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const getUser = () => {

        setUser(() => { return { userName, password } })


    }

    return (
        <>
            <h3>User Login</h3>
            <label htmlFor="userName">User Name</label> {" "}
            <input
                type="text"
                name="userName"
                placeholder="Username"
                onChange={e => { setUserName(e.target?.value) }} />
            {" "}
            <label htmlFor="Password">User Name</label>{" "}
            <input
                type="password"
                name="userName"
                placeholder="Password"
                onChange={
                    (e) => { setPassword(e.target?.value) }
                } />
            <br></br>
            <br></br>
            <button type="submit" onClick={() => { getUser() }}>Login</button>
            <UserContext.Provider value={user}>
                <Profile></Profile>
            </UserContext.Provider>
        </>
    )
}

export default Login;