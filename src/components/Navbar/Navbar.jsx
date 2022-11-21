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
}) => {
  const { firstname, lastname } = user;
  const [isAlreadyClicked, setIsAlreadyClicked] = useState(false);

  const handleClick = () => {
    setIsShopActive(!isShopActive);
  };

  const handleClickLogo = () => {
    if (!isAlreadyClicked) {
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
      setIsAlreadyClicked(true);
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
          </div>
          <ToastContainer />
        </nav>
      ) : null}
    </>
  );
};

export default Navbar;
