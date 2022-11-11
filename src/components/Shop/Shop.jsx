import "./Shop.scss";

const Shop = ({ isShopActive }) => {
  console.log("from Shop", isShopActive);

  return (
    <div className={isShopActive ? "active shop" : "not-active shop"}>
      <h2 className="shop-title">Votre panier</h2>

      <div className="shop-item-container">
        <div className="shop-item">
          <div className="shop-image-wrapper">
            <img
              src="https://via.placeholder.com/100"
              alt=""
              className="shop-image"
            />
            <img
              src="https://via.placeholder.com/100"
              alt=""
              className="shop-image"
            />
            <img
              src="https://via.placeholder.com/100"
              alt=""
              className="shop-image"
            />
          </div>
          <div className="shop-item-text column">
            <span className="shop-item-name">Menu Black First</span>
            <span className="shop-item-price">12.99€</span>
            <div className="row shop-button-row">
              <button className="black-button">Supprimer</button>
              <button className="black-button">Ajouter</button>
            </div>
          </div>
        </div>

        <div className="shop-item">
          <div className="shop-image-wrapper">
            <img
              src="https://via.placeholder.com/100"
              alt=""
              className="shop-image"
            />
            <img
              src="https://via.placeholder.com/100"
              alt=""
              className="shop-image"
            />
            <img
              src="https://via.placeholder.com/100"
              alt=""
              className="shop-image"
            />
          </div>
          <div className="shop-item-text column">
            <span className="shop-item-name">Menu Black First</span>
            <span className="shop-item-price">12.99€</span>
            <div className="row shop-button-row">
              <button className="black-button">Supprimer</button>
              <button className="black-button">Ajouter</button>
            </div>
          </div>
        </div>

        <div className="shop-item">
          <div className="shop-image-wrapper">
            <img
              src="https://via.placeholder.com/100"
              alt=""
              className="shop-image"
            />
            <img
              src="https://via.placeholder.com/100"
              alt=""
              className="shop-image"
            />
            <img
              src="https://via.placeholder.com/100"
              alt=""
              className="shop-image"
            />
          </div>
          <div className="shop-item-text column">
            <span className="shop-item-name">Menu Black First</span>
            <span className="shop-item-price">12.99€</span>
            <div className="row shop-button-row">
              <button className="black-button">Supprimer</button>
              <button className="black-button">Ajouter</button>
            </div>
          </div>
        </div>

        <div className="shop-delete-all">
          <button className="black-button">Tout supprimer</button>
        </div>
      </div>

      <div className="shop-total column">
        <span className="shop-total-text">Prix Total</span>
        <span className="shop-total-price">12.99€</span>
      </div>
    </div>
  );
};

export default Shop;
