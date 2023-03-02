import './navbar.css';
function Navbar() {
    return (
        <header className="navbar_container">
            <nav>
                <a href="/#" className="nav_link">Home</a>
                <a href="/#" className="nav_link">About</a>
            </nav>
            <div className="nav_name">EXPRIMER</div>
            <nav>
                <a href="/#" className="nav_link">Sharing</a>
                <a href="/#" className="nav_link">Service</a>
            </nav>
        </header>
    );
}

export default Navbar