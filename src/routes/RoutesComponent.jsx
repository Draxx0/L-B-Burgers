import { Route, Routes } from "react-router-dom";
import Account from "../views/Account/Account";
import Auth from "../views/Auth/Auth";
import Contact from "../views/Contact/Contact";
import Home from "../views/Home/Home";
import Menus from "../views/Menus/Menus";
import Order from "../views/Order/Order";

const RoutesComponent = ({user, setIsAuth, burgers, menus, setUser, isShopActive, setIsShopActive, basket, setBasket, basketTotalPrice, setBasketTotalPrice}) => {
  return (
    <Routes>
      <Route path="/" element={<Auth setUser={setUser} setIsAuth={setIsAuth}/>} />
      <Route path="/home" element={<Home isShopActive={isShopActive} setIsShopActive={setIsShopActive} burgers={burgers} user={user}/>} />
      <Route path="/menus" element={<Menus menus={menus} basket={basket} setBasket={setBasket} basketTotalPrice={basketTotalPrice} setBasketTotalPrice={setBasketTotalPrice}/>} />
      <Route path="/contact" element={<Contact user={user} />} />
      <Route path="/account" element={<Account user={user} setUser={setUser} />} />
      <Route path="/order" element={<Order basketTotalPrice={basketTotalPrice} setBasketTotalPrice={setBasketTotalPrice} basket={basket}/>} />
    </Routes>
  );
};

export default RoutesComponent;
