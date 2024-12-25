import { useState } from "react";
import UserContext from "./UserContext";

const UserState = (props) => {
    const [token, setToken] = useState('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc2NmQ2NWVjOGU0YTkzMDViMGY5ZjJhIn0sImlhdCI6MTczNTExNDk5Nn0.xYtAOF2vKTmQuEMwyRY8fAp75Pbst28xIrKaAFoZuOM');
    return (
        <UserContext.Provider value={{ token, setToken }}>
            {props.children};
        </UserContext.Provider>
    )
}

export default UserState;