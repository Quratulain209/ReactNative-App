import { useState, createContext, useContext } from "react";
const UserContext = createContext();

export function UserProvider(props) {
    const [user, setUser] = useState("User Info set in context");

    return (
        <UserContext.Provider value={user}>
            {props.children}
        </UserContext.Provider>
    );
}
export default UserContext