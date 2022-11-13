import { Route, Routes } from "react-router-dom";
import Auth from "../views/Auth/Auth";
import Contact from "../views/Contact/Contact";
import Home from "../views/Home/Home";
import Menus from "../views/Menus/Menus";

const RoutesComponent = ({user, setIsAuth, burgers, menus, setUser, isShopActive, setIsShopActive, basket, setBasket, basketTotalPrice, setBasketTotalPrice}) => {
  return (
    <Routes>
      <Route path="/" element={<Auth setUser={setUser} setIsAuth={setIsAuth}/>} />
      <Route path="/home" element={<Home isShopActive={isShopActive} setIsShopActive={setIsShopActive} burgers={burgers}/>} />
      <Route path="/menus" element={<Menus menus={menus} basket={basket} setBasket={setBasket} basketTotalPrice={basketTotalPrice} setBasketTotalPrice={setBasketTotalPrice}/>} />
      <Route path="/contact" element={<Contact user={user}/>} />
    </Routes>
  );
};

export default RoutesComponent;
