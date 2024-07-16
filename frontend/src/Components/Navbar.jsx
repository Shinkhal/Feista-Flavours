import { useState, useEffect } from "react";
import { data } from "../restApi.json";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {
  const [show, setShow] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    window.location.reload();
  };

  return (
    <>
      <nav>
        <div className="logo">
          <NavLink to={"/"}>
              <img src="/full_logo-removebg-preview.jpg" alt="" />
          </NavLink>
        </div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            <NavLink to="/">HOME</NavLink>
            {data[0].navbarLinks.map((element) => (
              <Link
                to={element.link}
                spy={true}
                smooth={true}
                duration={500}
                key={element.id}
              >
                {element.title}
              </Link>
            ))}
            <NavLink to="/reservation">RESERVATION</NavLink>
            {isLoggedIn ? (
              <button className="menuBtn" onClick={handleLogout}>
                Logout
              </button>
            ) : (
              <NavLink to="/login">
                <button className="menuBtn">Login</button>
              </NavLink>
            )}
          </div>
        </div>
        <div className="hamburger" onClick={() => setShow(!show)}>
          <GiHamburgerMenu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
