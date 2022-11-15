import "./Order.scss";

const Order = ({ basket, basketTotalPrice }) => {
  return (
    <div className="order">
      <h2 className="page-title">Votre commande</h2>

      <div className="order-item-container">
        {basket.map((item, index) => (
          <div className="order-item" key={item.id}>
            <div className="order-image-wrapper">
              <img src={item.image} alt="" className="order-image" />
            </div>
            <div className="order-item-text column">
              <span className="order-item-name">{item.name}</span>
              <span className="order-item-price">Prix : {item.price} €</span>
              <span className="order-item-quantity">
                Quantité(s) : {item.quantity}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="order-total-price">
        <span className="order-total-price-title">
          Total à payer {basketTotalPrice} €
        </span>
        <form action="" className="form-coupon">
          <div className="form-group">
            <label htmlFor="">Vous posséder un code promo ?</label>
            <input
              type="text"
              placeholder="Code promo"
              className="input-coupon"
            />
          </div>
          <input type="submit" className="submit-coupon yellow-button" />
        </form>
      </div>

      <div className="order-button-container">
        <button className="order-button yellow-button">
          Procéder au paiment
        </button>
      </div>
    </div>
  );
};

export default Order;
