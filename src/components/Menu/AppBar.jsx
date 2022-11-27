import './AppBar.css'


export default function AppBar() {
    return (
        <header className="header">
            <button type='button'>Registration</button>
            <button type='button'>LogIn</button>
            <h2>welcommen, 'username'</h2>
            <button type='button'>LogOut</button>
            {/* <AuthNav />
            <UserMenu/> */}
        </header>
    )
}