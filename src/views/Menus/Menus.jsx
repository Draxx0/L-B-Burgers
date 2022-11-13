import "./Menus.scss";
import Price from "../../assets/img/price-icon.png";
import Meat from "../../assets/img/meat-icon.png";
import Beverage from "../../assets/img/soda-icon.png";
import Fries from "../../assets/img/fries-icon.png";
import { ToastContainer, toast } from "react-toastify";

const Menus = ({
  menus,
  basket,
  setBasket,
  basketTotalPrice,
  setBasketTotalPrice,
}) => {
  const handleClick = (index) => {
    const newBasket = [...basket];
    newBasket.push(menus[index]);
    setBasket(newBasket);
    setBasketTotalPrice(basketTotalPrice + menus[index].price);
    toast.success(`Le ${menus[index].name} a été ajouté au panier`, {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  return (
    <section id="menus">
      <h1 className="page-title">L&B - Menus</h1>

      <div className="filter row">
        <select name="select" id="" className="select-filter">
          <option value="filtrer">Filtrer</option>
          <option value="Boeuf">Boeuf</option>
          <option value="Poulet">Poulet</option>
          <option value="Poisson">Poisson</option>
          <option value="Vegan">Vegan</option>
        </select>

        <span className="reset-filter">Réinitialiser</span>
      </div>

      <div className="menus-items-container">
        {menus.map((menu, index) => (
          <div className="menu-item" key={menu.id}>
            <div className="menu-item-img-wrapper">
              <img src={menu.image} alt="" className="menu-item-img" />
            </div>
            <div className="menu-item-text column">
              <span className="menu-item-name">{menu.name}</span>
              {menu.content.map((item) => (
                <ul className="menu-content" key={item.contentId}>
                  <li className="menu-content-item">
                    <img src={Meat} alt="" className="menu-content-item-img" />
                    {item.burger}
                  </li>
                  <li className="menu-content-item">
                    <img
                      src={Beverage}
                      alt=""
                      className="menu-content-item-img"
                    />
                    {item.beverage}
                  </li>
                  <li className="menu-content-item">
                    <img src={Fries} alt="" className="menu-content-item-img" />
                    {item.fries}
                  </li>
                </ul>
              ))}

              <div className="menu-item-footer">
                <div className="menu-item-price row">
                  <>
                    <img src={Price} alt="" className="price-img" />
                    <span>{menu.price} €</span>
                  </>
                </div>

                <button
                  className="yellow-button"
                  onClick={() => handleClick(index)}
                >
                  Commander
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
    </section>
  );
};

export default Menus;
