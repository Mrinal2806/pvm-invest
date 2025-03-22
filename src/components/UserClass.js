import React from 'react';
import UserContext from '../utils/userContext';

class UserClass extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            count2: 555,
            userInfo: {
                name: "Dummy",
                location: "default",
                avatar_url: "dummyphoto.jpg"
                
            }
        }

    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/mrinal2806")
        const json = await data.json();

        console.log(json)
        this.setState({userInfo: json})
    }

    componentDidUpdate() {
        console.log('kjdkjff')
    }

    componentWillUnmount(){

    }
    

    render() {
        const {name, location, avatar_url} = this.state.userInfo
        return (
            <div className="user-card">
                <p>
                {this.state.count}
                <button onClick={() => {this.setState({count: this.state.count + 1})}}>Button</button>
                </p> 
                <img src={avatar_url} alt="" />
                <h2>Name: {name}</h2>
                <h2>Location: {location}</h2>
                <h4>sdlkmfdslnf</h4>
                <h4><UserContext.Consumer>
                    {(data) => {console.log('user context in class',data)}}</UserContext.Consumer></h4>
            </div>
        )
    }
}

export default UserClass;