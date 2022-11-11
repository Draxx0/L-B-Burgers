import { BrowserRouter } from "react-router-dom";
import RoutesComponent from "./routes/RoutesComponent";
import "./App.scss";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [user, setUser] = useState([]);
  const [isShopActive, setIsShopActive] = useState(false);
  const [menus, setMenus] = useState([]);
  const fetchMenus = () => {
    fetch("./data/menus.json")
      .then((res) => res.json())
      .then((data) => setMenus(data));
  };
  console.log(menus);

  useEffect(() => {
    fetchMenus();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar
          user={user}
          isShopActive={isShopActive}
          setIsShopActive={setIsShopActive}
        />
        <RoutesComponent
          user={user}
          setUser={setUser}
          isShopActive={isShopActive}
          setIsShopActive={setIsShopActive}
          menus={menus}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
