import { useState } from "react";

const User = (props) => {

    const [count] = useState();

    return <div className="user-card">
        <h2>Name: {props.name}</h2>
        <h2>Location: Dehradun</h2>
        <h4>sdlkmfdslnf</h4>
    </div>
}

export default User;