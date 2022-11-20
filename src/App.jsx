import { BrowserRouter } from "react-router-dom";
import RoutesComponent from "./routes/RoutesComponent";
import "./App.scss";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Shop from "./components/Shop/Shop";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer/Footer";

function App() {
  const [user, setUser] = useState([]);
  const [isShopActive, setIsShopActive] = useState(false);
  const [burgers, setBurgers] = useState([]);
  const [menus, setMenus] = useState([]);
  const [basket, setBasket] = useState([]);
  const [basketTotalPrice, setBasketTotalPrice] = useState(0);
  const [isAuth, setIsAuth] = useState(false);
  const [couponCode, setCouponCode] = useState([
    {
      code: "L&B-536489",
      isAlreadyUsed: false,
    },
  ]);

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
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar
          user={user}
          isShopActive={isShopActive}
          setIsShopActive={setIsShopActive}
          isAuth={isAuth}
          setCouponCode={setCouponCode}
          couponCode={couponCode}
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
        />
        <Footer isAuth={isAuth} setIsAuth={setIsAuth} />
      </BrowserRouter>
    </div>
  );
}

export default App;
