import { Route, Routes } from "react-router-dom";
import Auth from "../views/Auth/Auth";
import Home from "../views/Home/Home";

const RoutesComponent = ({user, menus, setUser, isShopActive, setIsShopActive}) => {
  return (
    <Routes>
      <Route path="/" element={<Auth setUser={setUser}/>} />
      <Route path="/home" element={<Home isShopActive={isShopActive} setIsShopActive={setIsShopActive} menus={menus}/>} />
    </Routes>
  );
};

export default RoutesComponent;
