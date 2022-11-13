import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.png";
import Linkedin from "../../assets/img/linkedin.png";
import Github from "../../assets/img/github.png";
import "./Footer.scss";

const Footer = ({ isAuth, setIsAuth }) => {
  return (
    <>
      {isAuth ? (
        <footer>
          <div className="footer-wrapper">
            <img src={Logo} alt="" className="footer-logo" />

            <ul className="footer-list">
              <li className="footer-list-item">
                <Link to="/home">Accueil</Link>
              </li>
              <li className="footer-list-item">
                <Link to="/menus">Menus</Link>
              </li>
              <li className="footer-list-item">
                <Link to="/services">Services</Link>
              </li>
              <li className="footer-list-item">
                <Link to="/contact">Contact</Link>
              </li>
              <li className="footer-list-item">
                <Link to="/" onClick={() => setIsAuth(false)}>
                  Déconnexion
                </Link>
              </li>
            </ul>

            <div className="footer-bar-list">
              <span className="footer-bar"></span>
              <span className="footer-bar"></span>
              <span className="footer-bar"></span>
              <span className="footer-bar"></span>
            </div>

            <div className="row">
              <a
                href="https://github.com/Draxx0"
                rel="noreferrer"
                target="_blank"
              >
                {" "}
                <img src={Github} alt="" className="footer-social-media" />
              </a>
              <a
                href="https://www.linkedin.com/in/william-fort/"
                rel="noreferrer"
                target="_blank"
              >
                {" "}
                <img src={Linkedin} alt="" className="footer-social-media" />
              </a>
            </div>
          </div>
        </footer>
      ) : null}
    </>
  );
};

export default Footer;
