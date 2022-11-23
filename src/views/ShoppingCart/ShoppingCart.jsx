import { Link } from "react-router-dom";
import "./ShoppingCart.scss";

const ShoppingCart = ({
  basket,
  setBasket,
  basketTotalPrice,
  setBasketTotalPrice,
}) => {
  const handleDelete = (index) => {
    setBasketTotalPrice(basketTotalPrice - basket[index].price);
    console.log(basket[index].quantity);
    basket[index].quantity--;
    if (basket[index].quantity <= 0) {
      basket[index].quantity = 1;
      basket.splice(index, 1);
    }
    setBasket([...basket]);
  };

  const handleAdd = (index) => {
    setBasketTotalPrice(basketTotalPrice + basket[index].price);
    basket[index].quantity++;
    setBasket([...basket]);
  };

  const handleDeleteAll = () => {
    setBasketTotalPrice(0);
    setBasket([]);
  };

  return (
    <div className="shopping-cart">
      <h1 className="page-title">Mon panier</h1>

      {basket.length === 0 ? (
        <>
          <p className="empty-basket">Votre panier est vide !</p>
          <Link to="/menus" className="yellow-button see-more">Parcourir les menus</Link>
        </>
      ) : (
        <div className="shop-item-container">
          {basket.map((item, index) => (
            <div className="shop-item" key={item.id}>
              <div className="shop-image-wrapper">
                <img src={item.image} alt="" className="shop-image" />
              </div>
              <div className="shop-item-text column">
                <span className="shop-item-name">{item.name}</span>
                <span className="shop-item-price">{item.price} €</span>
                <span className="shop-item-price">
                  Quantité(s) {item.quantity}
                </span>
                <div className="row shop-button-row">
                  <button
                    className="black-button"
                    onClick={() => handleDelete(index)}
                  >
                    Supprimer
                  </button>
                  <button
                    className="black-button"
                    onClick={() => handleAdd(index)}
                  >
                    Ajouter
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {basket.length > 0 && (
        <>
          <div className="shop-delete-all">
            <button className="black-button" onClick={() => handleDeleteAll()}>
              Tout supprimer
            </button>
          </div>
          <div className="shop-total column">
            <span className="shop-total-text">Prix Total</span>
            <span className="shop-total-price">{basketTotalPrice} €</span>
          </div>
          <Link to="/order" className="yellow-button order-btn">
            Commander
          </Link>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;
