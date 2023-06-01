import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar " >
      {/* <div className="container">
        <nav className="navbar__nav"> */}
          
          
          <ul className="nav__links">
            <li className="links__link">
              <Link to="/">LandingPage</Link>
            </li>
<li className="links__link">
              <Link to="/profile">ProfilePage</Link>
            </li>
            <li className="links__link">
              <Link to="/error">ErrorPage</Link>
            </li>
          </ul>
        {/* </nav> */}
      </div>
    // </div>
  );
};

export default Navbar;