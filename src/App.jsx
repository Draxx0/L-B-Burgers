import { BrowserRouter } from "react-router-dom";
import RoutesComponent from "./routes/RoutesComponent";
import "./App.scss";
import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Shop from "./components/Shop/Shop";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer/Footer";
import { gsap } from "gsap";
import { toast, ToastContainer } from "react-toastify";

function App() {
  const [user, setUser] = useState([]);
  const [isShopActive, setIsShopActive] = useState(false);
  const [burgers, setBurgers] = useState([]);
  const [menus, setMenus] = useState([]);
  const [basket, setBasket] = useState([]);
  const [basketTotalPrice, setBasketTotalPrice] = useState(0);
  const [isAuth, setIsAuth] = useState(false);
  const [isLogoAlreadyClicked, setIsLogoAlreadyClicked] = useState(false);
  const [couponCode, setCouponCode] = useState([
    {
      code: "L&B-536489",
      isAlreadyUsed: false,
    },
  ]);
  const [appReveal, setAppReveal] = useState(false);
  const [orderRecap, setOrderRecap] = useState([]);

  const appRef = useRef(null);

  const fetchBurgers = () => {
    fetch("./data/burgers.json")
      .then((res) => res.json())
      .then((data) => setBurgers(data));
  };

  const fetchMenus = () => {
    fetch("./data/menus.json")
      .then((res) => res.json())
      .then((data) => setMenus(data));
  };

  useEffect(() => {
    fetchBurgers();
    fetchMenus();
    setAppReveal(true);
    toast.info(
      "L'app est toujours en constructions, merci de votre compréhension !"
    );
    appReveal && gsap.from(appRef.current, { duration: 1, opacity: 0 });
  }, [appReveal]);

  return (
    <div className="App" ref={appRef}>
      <BrowserRouter>
        <Navbar
          user={user}
          isShopActive={isShopActive}
          setIsShopActive={setIsShopActive}
          isAuth={isAuth}
          setCouponCode={setCouponCode}
          couponCode={couponCode}
          isLogoAlreadyClicked={isLogoAlreadyClicked}
          setIsLogoAlreadyClicked={setIsLogoAlreadyClicked}
        />
        <Shop
          isShopActive={isShopActive}
          setIsShopActive={setIsShopActive}
          basket={basket}
          setBasket={setBasket}
          basketTotalPrice={basketTotalPrice}
          setBasketTotalPrice={setBasketTotalPrice}
        />
        <RoutesComponent
          user={user}
          setUser={setUser}
          isShopActive={isShopActive}
          setIsShopActive={setIsShopActive}
          burgers={burgers}
          menus={menus}
          basket={basket}
          setBasket={setBasket}
          basketTotalPrice={basketTotalPrice}
          setBasketTotalPrice={setBasketTotalPrice}
          setIsAuth={setIsAuth}
          couponCode={couponCode}
          orderRecap={orderRecap}
          setOrderRecap={setOrderRecap}
        />
        <Footer
          isAuth={isAuth}
          setIsAuth={setIsAuth}
          couponCode={couponCode}
          setIsLogoAlreadyClicked={setIsLogoAlreadyClicked}
          setBasket={setBasket}
          setIsShopActive={setIsShopActive}
          setBasketTotalPrice={setBasketTotalPrice}
        />
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
