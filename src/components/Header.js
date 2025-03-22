import { useState, useContext } from 'react'
import Logo from '../../assets/Logo.webp'
import { Link } from 'react-router-dom'
import UserContext from '../utils/userContext'


const Header = () => {
    let [btnName, setBtnName] = useState("Login")

    const data = useContext(UserContext);
    console.log('usercontext', data)
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src={Logo}></img>
            </div>
            <div className='nav-items'>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About Us</Link></li>
                    <li><Link to='/contact'>Contact Us</Link></li>
                    <li>Cart</li>
                    <button className='login' onClick={() => {
                      btnName == "Login" ? setBtnName("Logout") : setBtnName("Login")
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}


export default Header;