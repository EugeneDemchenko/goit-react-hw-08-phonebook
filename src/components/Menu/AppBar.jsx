import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getUserName } from '../../redux/auth/authSelectors'

import './AppBar.css'


export default function AppBar() {
    const name = useSelector(getUserName)
    return (
        <header className="header">
            {/* <button type='button'>Registration</button> */}
            {/* <button type='button'>LogIn</button> */}
            <NavLink to='/register' className="linkBtn">Registration</NavLink>
            <NavLink to='/login' className="linkBtn">LogIn</NavLink>
            <h2>Willkommen, {name}</h2>
            <button type='button'>LogOut</button>

            {/* <AuthNav />
            <UserMenu/> */}
        </header>
    )
}