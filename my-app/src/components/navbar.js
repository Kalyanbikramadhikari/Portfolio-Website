import "../style.css"
function Navbar() {
    return ( 
        <nav className="navbar">
            <div className="logo">
                Kaly<span>an.</span>
            </div>
            <div className="nav-items">
                <ul>
                    {/* id is linked with respective navbar contents */}
                    <li><a href="#">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#service">Services</a></li>
                    {/* <li><a href="#">Portfolio</a></li> */}
                    <li> <a href="#contact">Contact</a> </li>
                    
                </ul>
            </div>
        </nav>
     );
}

export default Navbar;