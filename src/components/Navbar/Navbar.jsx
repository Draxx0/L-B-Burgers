import "./Navbar.scss";
import logo from "../../assets/img/logo.png";
import shop from "../../assets/img/bag.png";
import closeShop from "../../assets/img/close.png";
import { Link } from "react-router-dom";

const Navbar = ({ user, isShopActive, setIsShopActive }) => {
  const { firstname, lastname } = user;

  const handleClick = () => {
    setIsShopActive(!isShopActive);
  };
  return (
    <>
      {firstname && lastname ? (
        <nav className="nav">
          <div className="nav-wrapper">
            <img src={logo} alt="" />
            <h5 className="welcome-user">
              🖐{" "}
              <span className="colored">
                {firstname} {lastname}
              </span>
            </h5>
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="/home">Accueil</Link>
              </li>

              <li className="nav-item">
                <Link to="/menus">Menus</Link>
              </li>

              <li className="nav-item">
                <Link to="/services">Service</Link>
              </li>

              <li className="nav-item">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>

            <div className="nav-btn">
              <img
                src={isShopActive ? closeShop : shop}
                alt=""
                onClick={() => handleClick()}
              />
            </div>
          </div>
        </nav>
      ) : (
        <nav className="nav">
          <div className="nav-wrapper">
            <img src={logo} alt="" />
            <h5 className="welcome-user">
              Bonjour{" "}
              <span className="colored">
                {firstname} {lastname}
              </span>
            </h5>
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="/home">Accueil</Link>
              </li>

              <li className="nav-item">
                <Link to="/menus">Menus</Link>
              </li>

              <li className="nav-item">
                <Link to="/services">Service</Link>
              </li>

              <li className="nav-item">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>

            <div className="nav-btn">
              <img
                src={isShopActive ? closeShop : shop}
                alt=""
                onClick={() => handleClick()}
              />
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
