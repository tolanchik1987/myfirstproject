import "./Navbar.modul.css";

const Navbar = () => {
    return (
        <nav className="nav">
            <div>
               <a href="#">Profile</a>
            </div>
            <div>
               <a href="#">Massages</a>
            </div>
            <div>
               <a href="#">News</a>
            </div>
            <div>
               <a href="#">Music</a>
            </div>
            <div>
               <a href="#">Settings</a>
            </div>
         </nav>
    );
};

export default Navbar;