import './navbar.css'

const Navbar = () => {
    return (
        <nav className='navbar navbar-dark bg-dark'>
            <a href="#" className="navbar-brand">
                Blog Site
            </a>
            <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                Open
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav">
                    <li className="navbar-item">
                        <a href="#" className="nav-link">Home</a>
                    </li>
                    <li className="navbar-item">
                        <a href="#" className="nav-link">Blog</a>
                    </li>
                    <li className="navbar-item">
                        <a href="#" className="nav-link">About me</a>
                    </li>
                    <li className="navbar-item">
                        <a href="#" className="nav-link">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar