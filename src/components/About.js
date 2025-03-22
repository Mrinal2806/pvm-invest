import User from "./Users";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <h2>This is namaster react about page</h2>
            {/* <User name={"mrinal functional component"}/> */}
            <UserClass name={"mrinal class component"}/>
        </div>
    )
}

export default About;