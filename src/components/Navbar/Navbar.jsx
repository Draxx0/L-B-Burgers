import "./Navbar.scss";
import logo from "../../assets/img/logo.png";
import shop from "../../assets/img/bag.png";
import closeShop from "../../assets/img/close.png";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { useState } from "react";

const Navbar = ({
  user,
  isAuth,
  isShopActive,
  setIsShopActive,
  setCouponCode,
  couponCode,
  isLogoAlreadyClicked,
  setIsLogoAlreadyClicked,
}) => {
  const { firstname, lastname } = user;
  const [isMenuActive, setIsMenuActive] = useState(false);

  if (isMenuActive) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }

  const handleClick = () => {
    setIsShopActive(!isShopActive);
  };

  const handleClickLogo = () => {
    if (!isLogoAlreadyClicked) {
      setCouponCode([
        ...couponCode,
        {
          code: "L&B-EASTEREGG",
          isAlreadyUsed: false,
        },
      ]);
      toast.success("Tiens ?! Un code promo était caché dans le logo ! 🤫", {
        position: "bottom-right",
      });
      setIsLogoAlreadyClicked(true);
    }
  };
  return (
    <>
      {isAuth ? (
        <nav className="nav">
          <div className="nav-wrapper">
            <img src={logo} alt="" onClick={() => handleClickLogo()} />
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
                <Link to="/contact">Contact</Link>
              </li>

              <li className="nav-item">
                <Link to="/account">Compte</Link>
              </li>
            </ul>

            <div className="nav-btn">
              <img
                src={isShopActive ? closeShop : shop}
                alt=""
                onClick={() => handleClick()}
              />
            </div>
            <div
              className="burger-menu"
              onClick={() => setIsMenuActive(!isMenuActive)}
            >
              <span
                className={
                  isMenuActive
                    ? "burger-bar-active-top burger-bar"
                    : "burger-bar"
                }
              ></span>
              <span
                className={
                  isMenuActive
                    ? "burger-bar-active-mid burger-bar"
                    : "burger-bar"
                }
              ></span>
              <span
                className={
                  isMenuActive
                    ? "burger-bar-active-bottom burger-bar"
                    : "burger-bar"
                }
              ></span>
            </div>
            <div
              className={isMenuActive ? "mobile-nav active-nav" : "mobile-nav"}
            >
              <div className="overlay"></div>
              <ul className="mobile-nav-list">
                <li className="mobile-nav-item">
                  <Link className="mobile-nav-link" to="/home" onClick={() => setIsMenuActive(!isMenuActive)}>
                    Accueil
                  </Link>
                </li>

                <li className="mobile-nav-item">
                  <Link className="mobile-nav-link" to="/shopping-cart" onClick={() => setIsMenuActive(!isMenuActive)}>
                    Mon panier
                  </Link>
                </li>

                <li className="mobile-nav-item">
                  <Link className="mobile-nav-link" to="/menus" onClick={() => setIsMenuActive(!isMenuActive)}>
                    Menus
                  </Link>
                </li>
                <li className="mobile-nav-item">
                  <Link className="mobile-nav-link" to="/contact" onClick={() => setIsMenuActive(!isMenuActive)}>
                    Contact
                  </Link>
                </li>
                <li className="mobile-nav-item">
                  <Link className="mobile-nav-link" to="/account" onClick={() => setIsMenuActive(!isMenuActive)}>
                    Compte
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <ToastContainer />
        </nav>
      ) : null}
    </>
  );
};

export default Navbar;
