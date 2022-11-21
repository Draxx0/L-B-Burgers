import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.png";
import Linkedin from "../../assets/img/linkedin.png";
import Github from "../../assets/img/github.png";
import "./Footer.scss";

const Footer = ({
  isAuth,
  setIsAuth,
  couponCode,
  setIsLogoAlreadyClicked,
  setBasket,
  setIsShopActive,
  setBasketTotalPrice,
}) => {
  const handleDisconnect = () => {
    setIsAuth(false);
    couponCode.forEach((code) => {
      code.isAlreadyUsed = false;
    });
    couponCode.splice(1, 1);
    setIsLogoAlreadyClicked(false);
    setBasket([]);
    setIsShopActive(false);
    setBasketTotalPrice(0);
  };
  return (
    <>
      {isAuth ? (
        <footer>
          <div className="footer-wrapper">
            <img src={Logo} alt="" className="footer-logo" />

            <ul className="footer-list">
              <li className="footer-list-item">
                <Link to="/home" onClick={() => window.scrollTo(0, 0)}>
                  Accueil
                </Link>
              </li>
              <li className="footer-list-item">
                <Link to="/menus" onClick={() => window.scrollTo(0, 0)}>
                  Menus
                </Link>
              </li>
              <li className="footer-list-item">
                <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                  Contact
                </Link>
              </li>
              <li className="footer-list-item">
                <Link to="/order" onClick={() => window.scrollTo(0, 0)}>
                  Commande
                </Link>
              </li>
              <li className="footer-list-item">
                <Link to="/" onClick={() => handleDisconnect()}>
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
