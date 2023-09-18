import './navbar.css'

const Navbar = () => {
    return (
        <nav className='navbar navbar-dark bg-dark navbar-expand-lg fixed-top px-2'>
            <a href="#" className="navbar-brand">
                Blog Site
            </a>
            <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav ms-auto">
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